<template>
    <div>
        <v-card-text>
            <div class="d-flex p-2">
                <v-btn
                    style="width: 300px;"
                    depressed
                    :color="currentSegment === 'certificates' ? 'primary' : ''"
                    @click="currentSegment = 'certificates'"
                    >Сертификаты
                </v-btn>
                <v-btn
                    style="width: 300px;"
                    depressed
                    :color="currentSegment === 'sources' ? 'primary' : ''"
                    @click="currentSegment = 'sources'"
                    >Источники
                </v-btn>
            </div>
            <div class="p-4">
                <certificates-table
                    v-if="currentSegment === 'certificates'"
                    title="Сертификаты"
                />
                <sources-table v-else title="Источники" />
            </div>
        </v-card-text>
    </div>
</template>

<script>
import CertificatesTable from "../../../components/Tables/CertificatesTable";
import SourcesTable from "../../../components/Tables/SourcesTable";
import ACTIONS from "../../../store/actions";

export default {
    mounted() {
        this.$store.dispatch(ACTIONS.GET_CERTIFICATES);
        this.$store.dispatch(ACTIONS.GET_SOURCES);
    },
    components: {
        CertificatesTable,
        SourcesTable
    },
    data: () => ({
        currentSegment: "certificates"
    })
};
</script>
