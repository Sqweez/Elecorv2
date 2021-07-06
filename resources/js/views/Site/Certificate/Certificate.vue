<template>
    <div>
        <div
            class="text-center d-flex align-items-center justify-content-center"
            style="min-height: 500px"
            v-if="!certificate"
        >
            <v-progress-circular
                indeterminate
                size="65"
                color="primary"
            ></v-progress-circular>
        </div>
        <v-form v-else v-model="valid">
            <v-card>
                <v-card-title>
                    Информация о сертификате
                </v-card-title>
                <div class="d-flex p-4">
                    <div class="w-100 mr-3">
                        <v-select
                            v-if="sources"
                            :items="sources"
                            label="Источник"
                            v-model="certificate.source_id"
                            no-data-text="Источники не найдены"
                            clearable
                        ></v-select>
                        <v-text-field
                            label="Название"
                            v-model.trim="certificate.name"
                            :rules="[required]"
                        />

                        <div class="d-flex py-4">
                            <v-text-field
                                label="Промокод"
                                v-model.trim="certificate.promocode"
                                :rules="[required]"
                                class="w-50"
                            />
                            <v-checkbox
                                label="Активирован"
                                v-model="certificate.active"
                                class="w-50 ml-2"
                            />
                        </div>

                        <v-tabs>
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab href="#add-certificate-data"
                                >Данные сертификата</v-tab
                            >
                            <v-tab href="#add-contact-data"
                                >Контактные данные</v-tab
                            >

                            <v-tab-item value="add-contact-data">
                                <v-card flat tile>
                                    <v-card-text>
                                        <v-text-field
                                            label="Фамилия"
                                            v-model="
                                                certificate.contact_lastname
                                            "
                                            :rules="[required]"/>
                                        <v-text-field
                                            label="Имя"
                                            v-model="
                                                certificate.contact_firstname
                                            "
                                            :rules="[required]"/>
                                        <v-text-field
                                            label="Отчество"
                                            v-model="
                                                certificate.contact_patronymic
                                            "
                                            :rules="[required]"/>
                                        <v-text-field
                                            label="Телефон"
                                            v-model="certificate.contact_phone"
                                            v-mask="'+7 ### ### ## ##'"
                                            placeholder="+7 ___ ___ __ __"
                                            :rules="[required]"
                                    /></v-card-text>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item value="add-certificate-data">
                                <v-card flat tile>
                                    <v-card-text>
                                        <v-text-field
                                            label="Фамилия"
                                            v-model="
                                                certificate.certificate_lastname
                                            "
                                            :rules="[required]"
                                        />
                                        <v-text-field
                                            label="Имя"
                                            v-model="
                                                certificate.certificate_firstname
                                            "
                                            :rules="[required]"
                                        />
                                        <v-text-field
                                            label="Отчество"
                                            v-model="
                                                certificate.certificate_patronymic
                                            "
                                            :rules="[required]"
                                        />
                                        <v-text-field
                                            label="Телефон"
                                            v-model="
                                                certificate.certificate_phone
                                            "
                                            v-mask="'+7 ### ### ## ##'"
                                            placeholder="+7 ___ ___ __ __"
                                            :rules="[required]"
                                        />
                                        <v-text-field
                                            label="Количество месяцев"
                                            v-model="
                                                certificate.certificate_months
                                            "
                                            type="num"
                                            :rules="[required, onlyNumber]"
                                        />
                                        <v-text-field
                                            label="На сумму"
                                            v-model="
                                                certificate.certificate_sum
                                            "
                                            type="num"
                                            :rules="[required, onlyNumber]"
                                        />
                                    </v-card-text>
                                </v-card>
                            </v-tab-item>
                        </v-tabs>
                    </div>
                    <div class="d-flex flex-column">
                        <v-btn
                            color="success"
                            @click="editAction"
                            :disabled="!valid"
                        >
                            Сохранить
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                        <v-btn
                            @click="deleteModal = true"
                            color="error"
                            class="mt-3"
                        >
                            Удалить
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-form>
        <confirmation-modal
            :state="deleteModal"
            v-on:cancel="deleteModal = false"
            v-on:confirm="deleteAction"
            :message="`Вы действительно хотите удалить сертификат?`"
        />
    </div>
</template>

<script>
import ConfirmationModal from '../../../components/Modals/ConfirmationModal/ConfirmationModal'
import ACTIONS from '../../../store/actions'
import GETTERS from '../../../store/getters'
import showToast from '../../../utils/Toast'

export default {
    components: {
        ConfirmationModal
    },
    async created() {
        this.loading = true

        await this.$store.dispatch(
            ACTIONS.GET_CERTIFICATE,
            this.$route.params.id
        )
        await this.$store.dispatch(ACTIONS.GET_SOURCES)

        this.loading = false
    },
    computed: {
        certificate() {
            return this.$store.getters[GETTERS.CERTIFICATE]
        },
        sources() {
            let sources = this.$store.getters[GETTERS.SOURCES]

            if (sources) {
                sources = sources.map(({ name, id }) => ({
                    text: name,
                    value: id
                }))
            }

            return sources
        }
    },
    data: () => ({
        valid: true,
        loading: true,
        deleteModal: false
    }),
    methods: {
        async deleteAction() {
            await this.$store.dispatch(
                ACTIONS.DELETE_CERTIFICATE,
                this.certificate.id
            )
            await this.$router.push('/certificates')
        },
        async editAction() {
            Object.keys(this.certificate).forEach(key => {
                if (this.certificate[key] === undefined) {
                    this.certificate[key] = null
                }
            })

            await this.$store.dispatch(
                ACTIONS.EDIT_CERTIFICATE,
                this.certificate
            )

            showToast('Сертификат изменен!')
        },
        required(value) {
            return !!value || 'Не заполнено'
        },
        onlyNumber(value) {
            return !Number.isNaN(+value) || 'Поле должно содержать только цифры'
        }
    }
}
</script>
