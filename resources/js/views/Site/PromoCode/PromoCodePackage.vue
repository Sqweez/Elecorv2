<template>
    <div>
        <div
            class="text-center d-flex align-items-center justify-content-center"
            style="min-height: 500px"
            v-if="!promoCodePackage"
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
                    Информация о пакете промокодов
                </v-card-title>
                <div
                    class="d-flex align-items-center justify-content-between p-4"
                >
                    <div class="d-flex align-items-center">
                        <p class="promo-code-title">
                            <b>Название:</b>
                            <span v-if="!editMode">
                                {{ promoCodePackage.name }}
                            </span>
                        </p>
                        <v-text-field
                            v-if="editMode"
                            class="ml-3"
                            :rules="nameRules"
                            v-model.trim="promoCodePackage.name"
                        ></v-text-field>
                    </div>
                    <div class="d-flex flex-column">
                        <v-btn
                            :color="editMode ? 'success' : 'primary'"
                            @click="editPackage"
                            :disabled="!valid"
                        >
                            <span v-if="!editMode">Редактировать</span>
                            <span v-else>Сохранить</span>
                            <v-icon v-if="editMode">mdi-check</v-icon>
                        </v-btn>
                        <v-btn
                            v-if="editMode"
                            @click="deleteModal = true"
                            color="error"
                            class="mt-3"
                        >
                            <span>
                                Удалить пакет
                                <v-icon>mdi-delete</v-icon>
                            </span>
                        </v-btn>
                    </div>
                </div>

                <v-data-table
                    @click:row="promoCodeClick"
                    no-results-text="Нет результатов"
                    no-data-text="Нет данных"
                    :page="1"
                    :footer-props="{
                        'items-per-page-options': [
                            10,
                            15,
                            { text: 'Все', value: -1 }
                        ],
                        'items-per-page-text': 'Записей на странице'
                    }"
                    :headers="headers"
                    :items="promoCodePackage.promo_codes"
                    :search="search"
                >
                    <template
                        slot="footer.page-text"
                        slot-scope="{ pageStart, pageStop, itemsLength }"
                    >
                        {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
                    </template>
                </v-data-table>
            </v-card>
        </v-form>
        <confirmation-modal
            :state="deleteModal"
            v-on:cancel="deleteModal = false"
            v-on:confirm="deletePackage"
            :message="`Вы действительно хотите удалить пакет промокодов?`"
        />
    </div>
</template>

<script>
import ConfirmationModal from "../../../components/Modals/ConfirmationModal/ConfirmationModal";
import ACTIONS from "../../../store/actions";
import GETTERS from "../../../store/getters";
import showToast from "../../../utils/Toast";

export default {
    components: {
        ConfirmationModal
    },
    async created() {
        this.loading = true;
        const id = this.$route.params.packageid;
        await this.$store.dispatch(ACTIONS.GET_PROMO_CODE_PACKAGE, id);
        this.loading = false;
    },
    computed: {
        promoCodePackage() {
            return this.$store.getters[GETTERS.PROMO_CODE_PACKAGE];
        },
        updatePage(page) {
            this.$store.commit("setCurrentPage", page);
        }
    },
    data: () => ({
        valid: true,
        loading: true,
        editMode: false,
        deleteModal: false,
        search: "",
        headers: [
            {
                text: "Название",
                value: "name"
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
        ],
        nameRules: [v => !!v || "Требуется ввести название пакета"]
    }),
    methods: {
        async promoCodeClick({ id }) {
            await this.$router.push({
                name: "PromoCodes.showPromoCode",
                params: { packageid: this.$route.params.packageid, id }
            });
        },
        editPackage() {
            this.editMode ? this.savePackage() : this.toggleEdit();
        },
        toggleEdit() {
            this.editMode = !this.editMode;
        },
        async savePackage() {
            await this.$store.dispatch(
                ACTIONS.EDIT_PROMO_CODE_PACKAGE,
                this.promoCodePackage
            );
            showToast("Пакет изменен!");
            this.toggleEdit();
        },
        async deletePackage() {
            await this.$store.dispatch(
                ACTIONS.DELETE_PROMO_CODE_PACKAGE,
                this.promoCodePackage.id
            );
            await this.$router.push("/promo-codes");
        }
    }
};
</script>

<style scoped>
.promo-code-title {
    font-size: 20px;
}
</style>
