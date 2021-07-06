<template>
    <v-dialog max-width="900" v-model="state" persistent>
        <v-card>
            <v-card-title
                class="headline blue darken-1 justify-content-between"
            >
                <span class="white--text">Добавление нового промокода</span>
                <v-btn icon text class="float-right" @click="closeModal">
                    <v-icon color="white">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form class="p-2" v-if="!loading" v-model="valid">
                    <v-select
                        :items="promoCodesPackages"
                        label="Пакет промокодов"
                        v-model="promoCode.package_id"
                        clearable
                    ></v-select>

                    <v-text-field
                        v-if="!several"
                        label="Название промокода"
                        v-model.trim="promoCode.name"
                        :rules="nameRules"
                    />
                    <v-text-field
                        v-if="!several"
                        label="Промокод"
                        v-model.trim="promoCode.promocode"
                        :rules="promoCodeRules"
                    />
                    <v-text-field
                        v-else
                        label="Количество промокодов"
                        v-model.trim="promoCode.count"
                        :rules="countRules"
                        type="num"
                    />

                    <div class="form-row">
                        <v-checkbox
                            v-model="fixedDiscount"
                            label="Фиксированная скидка"
                        />
                        <div>
                            <b
                                >Скидка в
                                {{ fixedDiscount ? "тенге" : "процентах" }}</b
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
                </v-form>
            </v-card-text>

            <v-card-actions class="p-2" v-if="!loading">
                <v-btn text @click="closeModal">Отмена</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="success"
                    :disabled="!valid"
                    @click="createPromoCode"
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
import moment from "moment-timezone";

export default {
    props: {
        state: {
            type: Boolean,
            default: true
        },
        several: {
            type: Boolean
        }
    },
    watch: {
        fixedDiscount(val) {
            this.discount = val ? this.discount * 100 : this.discount / 100;
        }
    },
    components: {
        VTextField,
        SimpleLoader
    },
    data: () => ({
        fromDateMenu: false,
        valid: false,
        promoCode: {
            package_id: null,
            name: "",
            promocode: "",
            limit: 1,
            timeless: true,
            expired_at: null,
            count: null
        },
        fixedDiscount: true,
        discount: 500,
        showLoader: false,
        loading: false,
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
    computed: {
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
    methods: {
        async createPromoCode() {
            this.loading = true;

            const expired_at = moment(this.promoCode.expired_at).unix()
                ? moment(this.promoCode.expired_at)
                      .tz("Asia/Almaty")
                      .format()
                : null;

            await this.$store.dispatch(ACTIONS.CREATE_PROMO_CODE, {
                ...this.promoCode,
                discount: this.discount,
                fixed_discount: this.fixedDiscount,
                expired_at
            });

            this.clearPromoCode();
            this.loading = false;
            this.$emit("onSave");
        },
        clearPromoCode() {
            this.valid = false;
            this.promoCode = {
                package_id: "",
                name: "",
                promocode: "",
                fixed_discount: false,
                discount: 5,
                limit: 1,
                timeless: true,
                expired_at: null
            };
        },
        closeModal() {
            this.clearPromoCode();
            this.$emit("onClose");
        }
    }
};
</script>

<style lang="scss" scoped>
.form-row {
    display: flex;

    * {
        width: 50%;
    }
}
</style>
