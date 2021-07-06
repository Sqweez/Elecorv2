<template>
    <v-dialog max-width="900" v-model="state" persistent>
        <v-card>
            <v-card-title
                class="headline blue darken-1 justify-content-between"
            >
                <span class="white--text">Добавление сертификата</span>
                <v-btn icon text class="float-right" @click="closeModal">
                    <v-icon color="white">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form class="p-2" v-if="!loading" v-model="valid">
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
                                        v-model="certificate.contact_lastname"
                                        :rules="[required]"/>
                                    <v-text-field
                                        label="Имя"
                                        v-model="certificate.contact_firstname"
                                        :rules="[required]"/>
                                    <v-text-field
                                        label="Отчество"
                                        v-model="certificate.contact_patronymic"
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
                                        v-model="certificate.certificate_phone"
                                        v-mask="'+7 ### ### ## ##'"
                                        placeholder="+7 ___ ___ __ __"
                                        :rules="[required]"
                                    />
                                    <v-text-field
                                        label="Количество месяцев"
                                        v-model="certificate.certificate_months"
                                        type="num"
                                        :rules="[required, onlyNumber]"
                                    />
                                    <v-text-field
                                        label="На сумму"
                                        v-model="certificate.certificate_sum"
                                        type="num"
                                        :rules="[required, onlyNumber]"
                                    />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-form>
            </v-card-text>

            <v-card-actions class="p-2" v-if="!loading">
                <v-btn text @click="closeModal">Отмена</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="success"
                    :disabled="!valid"
                    @click="submitForm"
                >
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
            ></v-progress-linear>
        </v-card>
    </v-dialog>
</template>

<script>
import { VTextField } from "vuetify/lib";
import SimpleLoader from "../../Loaders/SimpleLoader/SimpleLoader";
import ACTIONS from "../../../store/actions";
import GETTERS from "../../../store/getters";

export default {
    props: {
        state: {
            type: Boolean,
            default: true
        }
    },
    components: {
        VTextField,
        SimpleLoader
    },
    data: () => ({
        valid: false,
        certificate: {
            source_id: null,
            name: "",
            promocode: "",
            active: false,
            certificate_lastname: "",
            certificate_firstname: "",
            certificate_patronymic: "",
            certificate_phone: "",
            certificate_months: 1,
            certificate_sum: "",
            contact_lastname: "",
            contact_firstname: "",
            contact_patronymic: "",
            contact_phone: ""
        },
        loading: false
    }),
    computed: {
        sources() {
            let sources = this.$store.getters[GETTERS.SOURCES];
            if (sources) {
                sources = sources.map(({ name, id }) => ({
                    text: name,
                    value: id
                }));
            }
            return sources;
        }
    },
    methods: {
        async submitForm() {
            this.loading = true;

            await this.$store.dispatch(
                ACTIONS.CREATE_CERTIFICATE,
                this.certificate
            );

            this.clearForm();
            this.loading = false;
            this.$emit("onSave");
        },
        clearForm() {
            this.valid = false;
            this.certificate = {};
        },
        closeModal() {
            this.clearForm();
            this.$emit("onClose");
        },
        required(value) {
            return !!value || "Не заполнено";
        },
        onlyNumber(value) {
            return (
                !Number.isNaN(+value) || "Поле должно содержать только цифры"
            );
        }
    }
};
</script>
