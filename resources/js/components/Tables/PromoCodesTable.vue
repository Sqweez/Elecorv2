<template>
    <v-card>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>
            <div class="clients-details">
                <v-btn color="primary" class="button-add" @click="openModal">
                    <v-icon left>mdi-ticket-confirmation</v-icon>
                    Добавить промокод
                </v-btn>
                <v-btn
                    color="primary"
                    class="button-add"
                    @click="openModalWithSeveral"
                >
                    <v-icon left>mdi-ticket-confirmation</v-icon>
                    Сгенерировать
                </v-btn>

                <v-spacer></v-spacer>

                <div
                    v-if="!promoCodes"
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
                    v-if="promoCodes"
                    v-model="search"
                    outlined
                    solo
                    clearable
                    append-icon="mdi-magnify"
                    label="Поиск по промокодам"
                    single-line
                    hide-details
                ></v-text-field>
            </div>
            <v-data-table
                v-if="promoCodes"
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
                :items="promoCodes"
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
        <add-promo-code-modal
            :state="showAddPromoCodeModal"
            :several="several"
            v-on:onSave="savePromoCode"
            v-on:onClose="closeModal"
        />
    </v-card>
</template>

<script>
import showToast from "../../utils/Toast";
import GETTERS from "../../store/getters";
import ACTIONS from "../../store/actions";
import AddPromoCodeModal from "../Modals/AddPromoCodeModal/AddPromoCodeModal";

export default {
    components: {
        AddPromoCodeModal
    },
    props: {
        title: {
            type: String,
            default: "Данные"
        }
    },
    computed: {
        promoCodes() {
            let promoCodes = this.$store.getters[GETTERS.PROMO_CODES];

            if (promoCodes) {
                promoCodes = promoCodes.map(promoCode => ({
                    ...promoCode,
                    ...(!promoCode.package && {
                        package: {
                            name: "-"
                        }
                    })
                }));
            }

            return promoCodes;
        }
    },
    data: () => ({
        showAddPromoCodeModal: false,
        showLoader: false,
        search: "",
        pageNumber: 1,
        several: false,
        headers: [
            {
                text: "Название",
                value: "name"
            },
            {
                text: "Пакет",
                value: "package.name"
            },
            {
                text: "Лимит",
                value: "limit"
            },
            {
                text: "Активированных",
                value: "activated_count"
            },
            {
                text: "Дата создания",
                value: "created_at"
            },
            {
                text: "Дата окончания",
                value: "expired_at"
            }
        ]
    }),
    methods: {
        async rowClick({ id, package_id }) {
            await this.$router.push({
                name: "PromoCodes.showPromoCode",
                params: { packageid: package_id || -1, id }
            });
        },
        updatePage(page) {
            this.$store.commit("setCurrentPage", page);
        },
        closeModal() {
            this.showAddPromoCodeModal = false;
            this.several = false;
        },
        async savePromoCode() {
            this.closeModal();
            this.$store.dispatch(ACTIONS.GET_PROMO_CODES);
            this.$store.dispatch(ACTIONS.GET_PROMO_CODES_PACKAGES);
            showToast("Промокод успешно добавлен!");
        },
        openModal() {
            this.showAddPromoCodeModal = true;
        },
        openModalWithSeveral() {
            this.showAddPromoCodeModal = true;
            this.several = true;
        }
    },
    watch: {
        pageNumber(value) {
            console.log(value);
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
