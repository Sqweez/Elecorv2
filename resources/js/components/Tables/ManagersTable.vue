<template>
    <v-card>
        <v-card-title>
            Менеджеры
        </v-card-title>

        <v-overlay v-model="overlay">
            <v-progress-circular indeterminate size="48" color="primary" />
        </v-overlay>

        <v-card-text>
            <h4>Всего менеджеров: {{ managers ? managers.length : 0 }}</h4>

            <v-btn color="primary" class="my-3" @click="showModal">
                <v-icon left>mdi-account-plus</v-icon>
                Добавить менеджера
            </v-btn>

            <v-spacer />

            <div
                v-if="!managers"
                class="text-center d-flex align-items-center justify-content-center"
                style="min-height: 651px"
            >
                <v-progress-circular indeterminate size="65" color="primary" />
            </div>

            <v-text-field
                v-if="managers"
                v-model="search"
                outlined
                solo
                clearable
                append-icon="mdi-account-search"
                label="Поиск менеджера"
                single-line
                hide-details
            />

            <v-data-table
                v-if="managers"
                @click:row="rowClick"
                no-results-text="Нет результатов"
                no-data-text="Нет данных"
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
                :items="managers"
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

        <add-manager-modal
            :state="addModal"
            @onSubmit="submitForm"
            @onClose="closeModal"
        />
    </v-card>
</template>

<script>
import showToast from '../../utils/Toast'
import GETTERS from '../../store/getters'
import AddManagerModal from '../Modals/AddManagerModal'

export default {
    components: {
        AddManagerModal
    },
    computed: {
        managers() {
            return this.$store.getters[GETTERS.MANAGERS]
        }
    },
    data: () => ({
        search: '',
        overlay: false,
        addModal: false,
        headers: [
            {
                text: 'ФИО',
                value: 'name'
            },
            {
                text: 'Телефон',
                value: 'phone'
            },
            {
                text: 'Дата рождения',
                value: 'birthday'
            },
            {
                text: 'Дата регистрации',
                value: 'created_at'
            }
        ]
    }),
    methods: {
        async rowClick(e) {
            console.log(e)
            // await this.$router.push({
            //     name: "clients.show",
            //     params: { userId: e.id }
            // });
        },
        updatePage(page) {
            this.$store.commit('setCurrentPage', page)
        },
        submitForm() {
            this.closeModal()

            showToast('Менеджер успешно добавлен!')
        },
        closeModal() {
            this.addModal = false
        },
        showModal() {
            this.addModal = true
        }
    }
}
</script>
