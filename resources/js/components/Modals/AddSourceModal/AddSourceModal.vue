<template>
    <v-dialog max-width="900" v-model="state" persistent>
        <v-card>
            <v-card-title
                class="headline blue darken-1 justify-content-between"
            >
                <span class="white--text">Добавление источника</span>
                <v-btn icon text class="float-right" @click="closeModal">
                    <v-icon color="white">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-form class="p-2" v-if="!loading" v-model="valid">
                    <v-text-field
                        label="Название"
                        v-model.trim="source.name"
                        :rules="[required]"
                    />
                    <v-textarea
                        label="Описание"
                        v-model.trim="source.text"
                        :rules="[required]"
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
        source: {
            name: "",
            text: ""
        },
        loading: false
    }),
    methods: {
        async submitForm() {
            this.loading = true;

            await this.$store.dispatch(ACTIONS.CREATE_SOURCE, this.source);

            this.clearform();
            this.loading = false;
            this.$emit("onSave");
        },
        clearform() {
            this.valid = false;
            this.source = {};
        },
        closeModal() {
            this.clearform();
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
