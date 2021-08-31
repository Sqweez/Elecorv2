<template>
    <v-dialog max-width="800" persistent v-model="state">
        <v-card>
            <v-card-title
                    class="d-flex justify-content-between blue darken-1">
                <span class="white--text">Редактирование автоплатежа</span>
                <v-btn icon text class="float-right" @click="$emit('cancel')">
                    <v-icon color="white">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-form class="p-3" v-if="!loading">
                    <v-autocomplete
                        label="Клиент"
                        :items="clients"
                        item-text="name"
                        item-value="id"
                        v-model="clientId"
                    />
                    <v-select
                        v-if="client"
                        label="Услуга"
                        :items="client.connections"
                        :item-text="function(value) {
                          return `${value.service_name} (${value.personal_account})`
                        }"
                        item-value="id"
                        v-model="connectionId"
                    />
                    <v-text-field
                        label="Дата след. платежа"
                        type="date"
                        v-model="recurring.next_payment"
                    />
                    <v-text-field
                        label="Paybox ID"
                        v-model="recurring.paybox_id"/>
                    <v-text-field
                        type="number"
                        label="Сумма оплаты"
                        v-model="recurring.sum"/>
                    <v-checkbox
                        label="Активно"
                        v-model="recurring.is_active"
                    />
                </v-form>
                <div v-else class="py-5">
                    Пожалуйста подождите...
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn text @click="$emit('cancel')">Отмена</v-btn>
                <v-spacer />
                <v-btn text color="success" @click="onSave">Сохранить <v-icon>mdi-check</v-icon></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import GETTERS from "../../../store/getters";
    import ACTIONS from "../../../store/actions";
    import moment from 'moment';
    import showToast from "../../../utils/Toast";
    export default {
        props: {
            state: {
                type: Boolean,
                default: false,
            },
            recurringId: {
                type: Number,
                default: -1,
            }
        },
        data: () => ({
            recurring: {},
            loading: false,
            clientId: null,
            connectionId: null,
        }),
        methods: {
            async onSave() {
                const recurring = {
                    paybox_id: this.recurring.paybox_id,
                    sum: this.recurring.sum,
                    next_payment: this.recurring.next_payment,
                    client_id: this.clientId,
                    connection_id: this.connectionId,
                    is_active: this.recurring.is_active
                };
                await this.$store.dispatch(ACTIONS.EDIT_RECURRING, {recurring, id: this.recurring.id});
                showToast('Успешно отредактировано!');
                this.$emit('cancel')
            }
        },
        computed: {
            clients() {
                return this.$store.getters[GETTERS.CLIENTS];
            },
            client() {
                return this.$store.getters[GETTERS.CLIENT];
            }
        },
        watch: {
            state(val) {
                if (val) {
                    this.recurring = JSON.parse(JSON.stringify(this.$store.getters[GETTERS.RECURRINGS].find(r => r.id === this.recurringId)));
                    this.recurring.next_payment = this.recurring.next_payment.split('.').reverse().join('-');
                    //this.recurring.next_payment = moment(this.recurring.next_payment).format('Y-MM-DD');
                    this.clientId = this.recurring.client_id;
                    this.connectionId = this.recurring.connection_id;
                } else {
                    this.recurring = {};
                }
            },
            async clientId(val) {
                if (val) {
                    this.loading = true;
                    await this.$store.dispatch(ACTIONS.GET_CLIENT, this.clientId);
                    this.loading = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>
