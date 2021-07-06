<template>
    <div>
        <v-card-text>
            <div class="d-flex p-2">
                <v-btn
                    style="width: 300px;"
                    depressed
                    :color="currentSegment === 'promocodes' ? 'primary' : ''"
                    @click="currentSegment = 'promocodes'"
                    >Промокоды
                </v-btn>
                <v-btn
                    style="width: 300px;"
                    depressed
                    :color="currentSegment === 'packages' ? 'primary' : ''"
                    @click="currentSegment = 'packages'"
                    >Пакеты промокодов
                </v-btn>
            </div>
            <div class="p-4">
                <promo-codes-table
                    v-if="currentSegment === 'promocodes'"
                    title="Промокоды"
                />
                <promo-codes-packages-table v-else title="Пакеты промокодов" />
            </div>
        </v-card-text>
    </div>
</template>

<script>
import PromoCodesTable from "../../../components/Tables/PromoCodesTable";
import PromoCodesPackagesTable from "../../../components/Tables/PromoCodesPackagesTable";
import ACTIONS from "../../../store/actions";

export default {
    mounted() {
        this.$store.dispatch(ACTIONS.GET_PROMO_CODES);
        this.$store.dispatch(ACTIONS.GET_PROMO_CODES_PACKAGES);
    },
    components: {
        PromoCodesTable,
        PromoCodesPackagesTable
    },
    data: () => ({
        currentSegment: "promocodes"
    })
};
</script>
