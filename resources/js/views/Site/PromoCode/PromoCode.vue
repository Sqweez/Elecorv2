<template>
    <div>
        <div
            class="text-center d-flex align-items-center justify-content-center"
            style="min-height: 500px"
            v-if="!promoCode"
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
                    Информация о промокоде
                </v-card-title>
                <div class="d-flex p-4">
                    <div class="w-100 mr-3">
                        <v-select
                            v-if="promoCodesPackages"
                            :items="promoCodesPackages"
                            label="Пакет промокодов"
                            v-model="promoCode.package_id"
                            clearable
                        ></v-select>

                        <v-text-field
                            label="Название промокода"
                            v-model.trim="promoCode.name"
                            :rules="nameRules"
                        />
                        <v-text-field
                            label="Промокод"
                            v-model.trim="promoCode.promocode"
                            :rules="promoCodeRules"
                        />

                        <div class="form-row">
                            <v-checkbox
                                v-model="fixedDiscount"
                                label="Фиксированная скидка"
                                @change="changeFixedDiscount"
                            />
                            <div>
                                <b
                                    >Скидка в
                                    {{
                                        fixedDiscount ? "тенге" : "процентах"
                                    }}</b
                                >
                                <v-text-field
                                    :label="
                                        fixedDiscount
                                            ? 'Фиксированная скидка в тенге'
                                            : 'Процент скидки'
                                    "
                                    v-model.trim="discount"
                                    :rules="discountRules"
                                />
                            </div>
                        </div>
                        <v-text-field
                            label="Лимит активаций"
                            v-model.trim="promoCode.limit"
                            :rules="limitRules"
                            type="num"
                        />
                        <div class="form-row">
                            <v-checkbox
                                v-model="promoCode.timeless"
                                label="Бессрочный"
                            />
                            <vc-date-picker
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
                            </vc-date-picker>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <v-btn
                            color="success"
                            @click="editPromoCode"
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
                            Удалить промокод
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-form>
        <confirmation-modal
            :state="deleteModal"
            v-on:cancel="deleteModal = false"
            v-on:confirm="deletePromoCode"
            :message="`Вы действительно хотите удалить промокод?`"
        />
    </div>
</template>

<script>
import ConfirmationModal from "../../../components/Modals/ConfirmationModal/ConfirmationModal";
import ACTIONS from "../../../store/actions";
import GETTERS from "../../../store/getters";
import showToast from "../../../utils/Toast";
import moment from "moment-timezone";

export default {
    components: {
        ConfirmationModal
    },
    async created() {
        this.loading = true;
        await this.$store.dispatch(
            ACTIONS.GET_PROMO_CODE,
            this.$route.params.id
        );
        await this.$store.dispatch(ACTIONS.GET_PROMO_CODES_PACKAGES);
        this.loading = false;
    },
    computed: {
        promoCode() {
            const instance = this.$store.getters[GETTERS.PROMO_CODE];

            if (instance) {
                this.fixedDiscount = instance.fixed_discount;
                this.discount = instance.discount;
                instance.expired_at = moment(
                    instance.expired_at,
                    "DD.MM.YYYY"
                ).toDate();
            }

            return instance;
        },
        updatePage(page) {
            this.$store.commit("setCurrentPage", page);
        },
        promoCodesPackages() {
            let packages = this.$store.getters[GETTERS.PROMO_CODES_PACKAGES];

            if (packages) {
                packages = packages.map(({ name, id }) => ({
                    text: name,
                    value: id
                }));
            }

            return packages;
        }
    },
    data: () => ({
        valid: true,
        loading: true,
        deleteModal: false,
        search: "",
        fixedDiscount: true,
        discount: 500,
        nameRules: [v => !!v || "Требуется ввести название промокода"],
        promoCodeRules: [v => !!v || "Требуется ввести промокод"],
        discountRules: [v => !!v || "Требуется ввести скидку"],
        limitRules: [v => !!v || "Требуется ввести лимит активаций"],
        expiredAtRules: [
            v => !!v || "Требуется ввести дату окончания",
            v =>
                new Date(v) > new Date() ||
                "Дата окончания должна быть позже сегодняшнего дня"
        ],
        countRules: [v => !!v || "Требуется ввести количество промокодов"]
    }),
    methods: {
        async deletePromoCode() {
            await this.$store.dispatch(
                ACTIONS.DELETE_PROMO_CODE,
                this.promoCode.id
            );
            await this.$router.push("/promo-codes");
        },
        async editPromoCode() {
            Object.keys(this.promoCode).forEach(key => {
                if (this.promoCode[key] === undefined) {
                    this.promoCode[key] = null;
                }
            });

            const expired_at = moment(this.promoCode.expired_at).unix()
                ? moment(this.promoCode.expired_at)
                      .tz("Asia/Almaty")
                      .format()
                : null;

            await this.$store.dispatch(ACTIONS.EDIT_PROMO_CODE, {
                ...this.promoCode,
                expired_at
            });

            showToast("Промокод изменен!");
        },
        changeFixedDiscount(val) {
            this.discount = val ? this.discount * 100 : this.discount / 100;
        }
    }
};
</script>

<style scoped>
.promo-code-title {
    font-size: 20px;
}
</style>
