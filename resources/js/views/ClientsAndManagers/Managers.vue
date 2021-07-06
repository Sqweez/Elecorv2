<template>
    <managers-table />
</template>

<script>
import ManagersTable from '../../components/Tables/ManagersTable'
import ACTIONS from '../../store/actions'

export default {
    mounted() {
        this.$store.dispatch(ACTIONS.GET_MANAGERS)
    },
    components: {
        ManagersTable
    }
}
</script>
