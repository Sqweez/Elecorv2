<template>
    <v-card>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>
            <div class="clients-details">
                <v-btn color="primary" class="button-add" @click="openModal">
                    <v-icon left>mdi-ticket-confirmation</v-icon>
                    Добавить источник
                </v-btn>

                <v-spacer></v-spacer>

                <div
                    v-if="!sources"
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
                    v-if="sources"
                    v-model="search"
                    outlined
                    solo
                    clearable
                    append-icon="mdi-magnify"
                    label="Поиск по источникам"
                    single-line
                    hide-details
                ></v-text-field>
            </div>
            <v-data-table
                v-if="sources"
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
                :items="sources"
                :search="search"
                style="white-space: pre-line"
            >
                <template
                    slot="footer.page-text"
                    slot-scope="{ pageStart, pageStop, itemsLength }"
                >
                    {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
                </template>
            </v-data-table>
        </v-card-text>
        <add-source-modal
            :state="showAddSourceModal"
            v-on:onSave="saveSource"
            v-on:onClose="closeModal"
        />
    </v-card>
</template>

<script>
import showToast from "../../utils/Toast";
import GETTERS from "../../store/getters";
import ACTIONS from "../../store/actions";
import AddSourceModal from "../Modals/AddSourceModal/AddSourceModal";

export default {
    components: {
        AddSourceModal
    },
    props: {
        title: {
            type: String,
            default: "Данные"
        }
    },
    computed: {
        sources() {
            return this.$store.getters[GETTERS.SOURCES];
        }
    },
    data: () => ({
        showAddSourceModal: false,
        showLoader: false,
        search: "",
        headers: [
            {
                text: "Название",
                value: "name"
            },
            {
                text: "Описание",
                value: "text"
            },
            {
                text: "Дата создания",
                value: "created_at"
            }
        ]
    }),
    methods: {
        async rowClick({ id }) {
            await this.$router.push({
                name: "Certificates.showSource",
                params: { sourceid: id }
            });
        },
        updatePage(page) {
            this.$store.commit("setCurrentPage", page);
        },
        async saveSource() {
            this.closeModal();
            this.$store.dispatch(ACTIONS.GET_SOURCES);
            showToast("Источник успешно добавлен!");
        },
        openModal() {
            this.showAddSourceModal = true;
        },
        closeModal() {
            this.showAddSourceModal = false;
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
