<template>
    <v-card>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>
            <div class="clients-details">
                <v-btn color="primary" class="button-add" @click="openModal">
                    <v-icon left>mdi-ticket-confirmation</v-icon>
                    Добавить сертификат
                </v-btn>

                <v-spacer></v-spacer>

                <div
                    v-if="!certificates"
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
                    v-if="certificates"
                    v-model="search"
                    outlined
                    solo
                    clearable
                    append-icon="mdi-magnify"
                    label="Поиск по сертификатам"
                    single-line
                    hide-details
                ></v-text-field>
            </div>
            <v-data-table
                v-if="certificates"
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
                :items="certificates"
                :search="search"
            >
                <template
                    slot="footer.page-text"
                    slot-scope="{ pageStart, pageStop, itemsLength }"
                >
                    {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
                </template>
            </v-data-table>
        </v-card-text>
        <add-certificate-modal
            :state="showAddCertificateModal"
            v-on:onSave="saveCertificate"
            v-on:onClose="closeModal"
        />
    </v-card>
</template>

<script>
import showToast from "../../utils/Toast";
import GETTERS from "../../store/getters";
import ACTIONS from "../../store/actions";
import AddCertificateModal from "../Modals/AddCertificateModal/AddCertificateModal";

export default {
    components: {
        AddCertificateModal
    },
    props: {
        title: {
            type: String,
            default: "Данные"
        }
    },
    computed: {
        certificates() {
            let certificates = this.$store.getters[GETTERS.CERTIFICATES];

            if (certificates) {
                certificates = certificates.map(certificate => ({
                    ...certificate,
                    ...(!certificate.source && {
                        source: {
                            name: "-"
                        }
                    })
                }));
            }

            return certificates;
        }
    },
    data: () => ({
        showAddCertificateModal: false,
        showLoader: false,
        search: "",
        headers: [
            {
                text: "Название",
                value: "name"
            },
            {
                text: "Источник",
                value: "source.name"
            },
            {
                text: "Дата создания",
                value: "created_at"
            }
        ]
    }),
    methods: {
        async rowClick({ id, source_id }) {
            await this.$router.push({
                name: "Certificates.showCertificate",
                params: { sourceid: source_id || -1, id }
            });
        },
        updatePage(page) {
            this.$store.commit("setCurrentPage", page);
        },
        async saveCertificate() {
            this.closeModal();
            this.$store.dispatch(ACTIONS.GET_CERTIFICATES);
            this.$store.dispatch(ACTIONS.GET_SOURCES);
            showToast("Сертификат успешно добавлен!");
        },
        openModal() {
            this.showAddCertificateModal = true;
        },
        closeModal() {
            this.showAddCertificateModal = false;
        }
    }
};
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
