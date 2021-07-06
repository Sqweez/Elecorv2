<template>
    <div>
        <div
            class="text-center d-flex align-items-center justify-content-center"
            style="min-height: 500px"
            v-if="!source"
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
                    Информация об источнике
                </v-card-title>
                <div class="d-flex p-4">
                    <div class="w-100 mr-3">
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
                    </div>
                    <div class="d-flex flex-column">
                        <v-btn
                            color="success"
                            @click="editAction"
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
                            Удалить
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-form>
        <confirmation-modal
            :state="deleteModal"
            v-on:cancel="deleteModal = false"
            v-on:confirm="deleteAction"
            :message="`Вы действительно хотите удалить источник?`"
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

        await this.$store.dispatch(
            ACTIONS.GET_SOURCE,
            this.$route.params.sourceid
        );

        this.loading = false;
    },
    computed: {
        source() {
            return this.$store.getters[GETTERS.SOURCE];
        }
    },
    data: () => ({
        valid: true,
        loading: true,
        deleteModal: false
    }),
    methods: {
        async deleteAction() {
            await this.$store.dispatch(ACTIONS.DELETE_SOURCE, this.source.id);
            await this.$router.push("/certificates");
        },
        async editAction() {
            await this.$store.dispatch(ACTIONS.EDIT_SOURCE, this.source);
            showToast("Источник изменен!");
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
