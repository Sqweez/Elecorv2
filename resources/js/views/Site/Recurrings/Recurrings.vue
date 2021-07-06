<template>
    <div>
        <v-card-text>
            <div class="p-4">
                <recurrings-table title="Автоплатежи" />
            </div>
        </v-card-text>
    </div>
</template>

<script>
import RecurringsTable from "../../../components/Tables/RecurringsTable";
import ACTIONS from "../../../store/actions";

export default {
    mounted() {
        this.$store.dispatch(ACTIONS.GET_RECURRINGS);
    },
    components: {
        RecurringsTable
    }
};
</script>
