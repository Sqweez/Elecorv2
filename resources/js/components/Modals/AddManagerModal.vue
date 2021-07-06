<template>
    <v-dialog max-width="900" v-model="state" persistent>
        <v-card>
            <v-card-title
                class="headline blue darken-1 justify-content-between"
            >
                <span class="text-white">
                    Регистрация менеджера
                </span>
                <v-btn icon text class="float-right" @click="closeModal">
                    <v-icon color="white">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form class="p-2" v-if="!loading" v-model="valid">
                    <!-- <vc-date-picker
                        v-if="!promoCode.timeless"
                        v-model="promoCode.expired_at"
                        mode="date"
                        is24hr
                    >
                        <template v-slot="{ inputValue, inputEvents }">
                            <v-text-field
                                label="Дата окончания"
                                :value="inputValue"
                                v-on="inputEvents"
                            />
                        </template>
                    </vc-date-picker> -->
                </v-form>
            </v-card-text>

            <v-card-actions class="p-2" v-if="!loading">
                <v-btn text @click="closeModal">Отмена</v-btn>

                <v-spacer />

                <v-btn text color="success" :disabled="!valid" @click="create">
                    <b>Создать</b>
                    <v-icon>mdi-check</v-icon>
                </v-btn>
            </v-card-actions>

            <v-progress-linear
                indeterminate
                :active="loading"
                color="green"
                absolute
                bottom
            />
        </v-card>
    </v-dialog>
</template>

<script>
import { VTextField } from 'vuetify/lib'
import ACTIONS from '../../store/actions'
import GETTERS from '../../store/getters'

export default {
    props: {
        state: {
            type: Boolean,
            default: true
        }
    },
    components: {
        VTextField
    },
    data: () => ({
        valid: false,
        promoCode: {},
        loading: false
    }),
    methods: {
        async create() {
            this.loading = true

            // await this.$store.dispatch(
            //     ACTIONS.CREATE_PROMO_CODE,
            //     this.promoCode
            // )

            this.clearForm()
            this.loading = false
            this.$emit('onSubmit')
        },
        clearForm() {
            this.valid = false
            this.promoCode = {}
        },
        closeModal() {
            this.clearForm()
            this.$emit('onClose')
        }
    }
}
</script>

<style scoped>
.text-white {
    color: #fff;
}
</style>
