<template>
    <v-card>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>
            <div class="clients-details">
                <!-- <v-btn color="primary" class="button-add" @click="openModal">
                    <v-icon left>mdi-ticket-confirmation</v-icon>
                    Добавить автоплатеж
                </v-btn> -->

                <v-spacer></v-spacer>

                <div
                    v-if="!recurrings"
                    class="text-center d-flex align-items-center justify-content-center"
                    style="min-height: 651px"
                >
                    <v-progress-circular
                        indeterminate
                        size="65"
                        color="primary"
                    ></v-progress-circular>
                </div>

                <v-text-field
                    v-if="recurrings"
                    v-model="search"
                    outlined
                    solo
                    clearable
                    append-icon="mdi-magnify"
                    label="Поиск по автоплатежам"
                    single-line
                    hide-details
                ></v-text-field>
            </div>
            <v-select
                :items="clientFilters"
                v-model="clientFilter"
                item-text="name"
                item-value="id"
            />
            <v-data-table
                v-if="recurrings"
                @click:row="rowClick"
                no-results-text="Нет результатов"
                no-data-text="Нет данных"
                :page="1"
                @update:page="updatePage"
                :footer-props="{
                    'items-per-page-options': [
                        10,
                        15,
                        { text: 'Все', value: -1 }
                    ],
                    'items-per-page-text': 'Записей на странице'
                }"
                :headers="headers"
                :items="recurrings"
                :search="search"
            >
                <template v-slot:item.client="{ item }">
                    {{ item.client ? item.client.name : item.fullname }}
                    <v-btn icon @click="showClientPage(item)" v-if="item.client">
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-icon v-else color="error">mdi-close</v-icon>
                </template>
                <template v-slot:item.is_active="{ item }">
                    <v-icon :color="item.is_active ? 'success' : 'error'">
                        {{ item.is_active ? 'mdi-check' : 'mdi-close' }}
                    </v-icon>
                </template>
                <template v-slot:item.service="{ item }">
                    <span v-if="item.connection">
                        {{ item.connection.trademark }} ({{ item.connection.personal_account }})
                    </span>
                    <span v-else>
                        {{ item.personal_account }} <v-icon color="error">mdi-close</v-icon>

                    </span>
                </template>
                <template
                    slot="footer.page-text"
                    slot-scope="{ pageStart, pageStop, itemsLength }"
                >
                    {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
                </template>
            </v-data-table>
        </v-card-text>
        <!-- <add-promo-code-modal
            :state="showAddRecurringModal"
            :several="several"
            v-on:onSave="saveRecurring"
            v-on:onClose="closeModal"
        /> -->
    </v-card>
</template>

<script>
import showToast from '../../utils/Toast'
import GETTERS from '../../store/getters'
import ACTIONS from '../../store/actions'
import AddPromoCodeModal from '../Modals/AddPromoCodeModal/AddPromoCodeModal'

export default {
    components: {
        AddPromoCodeModal
    },
    props: {
        title: {
            type: String,
            default: 'Данные'
        }
    },
    computed: {
        recurrings() {
            return this.$store.getters[GETTERS.RECURRINGS].filter(r => {
                if (this.clientFilter === 1) {
                    return r.client;
                }
                if (this.clientFilter === 2) {
                    return r.client === null;
                }

                return true;
            })
        }
    },
    data: () => ({
        showAddRecurringModal: false,
        showLoader: false,
        search: '',
        clientFilter: -1,
        clientFilters: [
            {
                id: -1,
                name: 'Все'
            },
            {
                id: 1,
                name: 'С найденными клиентами'
            },
            {
                id: 2,
                name: 'Не найдены клиенты'
            }
        ],
        headers: [
            {
                text: 'Paybox id',
                value: 'paybox_id'
            },
            {
                text: 'Имя клиента',
                value: 'client'
            },
            {
                text: 'Услуга',
                value: 'service'
            },
            {
                text: 'Сумма',
                value: 'sum'
            },
            {
                text: 'Активно',
                value: 'is_active'
            },
            {
                text: 'Следующий платеж',
                value: 'next_payment'
            },
            {
                text: 'Дата создания',
                value: 'created_at'
            }
        ]
    }),
    methods: {
        async rowClick({ id, package_id }) {
            // await this.$router.push({
            //     name: "PromoCodes.showPromoCode",
            //     params: { packageid: package_id || -1, id: id }
            // });
        },
        updatePage(page) {
            this.$store.commit('setCurrentPage', page)
        },
        async saveRecurring() {
            this.closeModal()
            this.$store.dispatch(ACTIONS.GET_RECURRINGS)
            showToast('Автоплатеж успешно добавлен!')
        },
        openModal() {
            this.showAddRecurringModal = true
        },
        closeModal() {
            this.showAddRecurringModal = false
        },
        showClientPage(item) {
            this.$router.push({name: 'clients.show', params: {userId: item.client_id}});
        }
    }
}
</script>

<style lang="scss" scoped>
.clients-details {
    margin: 4px 16px 8px;
}

.button-add {
    margin: 10px 0;
    width: 240px;
}
</style>
