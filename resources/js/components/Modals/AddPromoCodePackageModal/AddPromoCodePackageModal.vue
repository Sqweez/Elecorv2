<template>
    <v-dialog max-width="900" v-model="state" persistent>
        <v-card>
            <v-card-title
                class="headline blue darken-1 justify-content-between"
            >
                <span class="white--text"
                    >Добавление нового пакета промокода</span
                >
                <v-btn icon text class="float-right" @click="closeModal">
                    <v-icon color="white">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form class="p-2" v-if="!loading" v-model="valid">
                    <v-text-field
                        label="Название пакета"
                        v-model.trim="promoCodePackage.name"
                        :rules="nameRules"
                    />
                </v-form>
            </v-card-text>

            <v-card-actions class="p-2" v-if="!loading">
                <v-btn text @click="closeModal">Отмена</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="success"
                    :disabled="!valid"
                    @click="createPromoCodePackage"
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
        promoCodePackage: {
            name: ""
        },
        showLoader: false,
        loading: false,
        nameRules: [v => !!v || "Требуется ввести название пакета промокодов"]
    }),
    methods: {
        async createPromoCodePackage() {
            this.loading = true;

            await this.$store.dispatch(
                ACTIONS.CREATE_PROMO_CODE_PACKAGE,
                this.promoCodePackage
            );
            this.clearPromoCodePackage();
            this.loading = false;
            this.$emit("onSave");
        },
        clearPromoCodePackage() {
            this.valid = false;
            this.promoCodePackage = {
                name: ""
            };
        },
        closeModal() {
            this.clearPromoCodePackage();
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
