<template>
    <v-card>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>
            <div class="clients-details">
                <v-btn color="primary" class="button-add" @click="openModal">
                    <v-icon left>mdi-ticket-confirmation</v-icon>
                    Добавить пакет
                </v-btn>

                <v-spacer></v-spacer>

                <div
                    v-if="!promoCodesPackage"
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
                    v-if="promoCodesPackage"
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
                v-if="promoCodesPackage"
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
                :items="promoCodesPackage"
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
        <add-promo-code-package-modal
            :state="showAddPromoCodePackageModal"
            v-on:onSave="savePromoCodePackage"
            v-on:onClose="closeModal"
        />
    </v-card>
</template>

<script>
import showToast from "../../utils/Toast";
import GETTERS from "../../store/getters";
import ACTIONS from "../../store/actions";
import AddPromoCodePackageModal from "../Modals/AddPromoCodePackageModal/AddPromoCodePackageModal";

export default {
    components: {
        AddPromoCodePackageModal
    },
    props: {
        title: {
            type: String,
            default: "Данные"
        }
    },
    computed: {
        promoCodesPackage() {
            return this.$store.getters[GETTERS.PROMO_CODES_PACKAGES];
        }
    },
    data: () => ({
        showAddPromoCodePackageModal: false,
        showLoader: false,
        search: "",
        pageNumber: 1,
        headers: [
            {
                text: "Название",
                value: "name"
            },
            {
                text: "Количество промокодов",
                value: "promo_codes_count"
            }
        ]
    }),
    methods: {
        async rowClick({ id }) {
            await this.$router.push({
                name: "PromoCodes.showPromoCodePackage",
                params: { packageid: id }
            });
        },
        updatePage(page) {
            this.$store.commit("setCurrentPage", page);
        },
        closeModal() {
            this.showAddPromoCodePackageModal = false;
        },
        async savePromoCodePackage() {
            this.closeModal();
            this.$store.dispatch(ACTIONS.GET_PROMO_CODES);
            this.$store.dispatch(ACTIONS.GET_PROMO_CODES_PACKAGES);
            showToast("Пакет промокодов успешно добавлен!");
        },
        openModal() {
            this.showAddPromoCodePackageModal = true;
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
