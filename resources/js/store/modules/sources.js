import {
    createSource,
    deleteSource,
    editSource,
    getSourceById,
    getSources
} from "../../api/sources";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const sourcesModule = {
    state: {
        sources: null,
        source: null
    },
    getters: {
        [GETTERS.SOURCES](state) {
            return state.sources;
        },
        [GETTERS.SOURCE](state) {
            return state.source;
        }
    },
    mutations: {
        [MUTATIONS.SET_SOURCES](state, payload) {
            state.sources = payload;
        },
        [MUTATIONS.SET_SOURCE](state, payload) {
            state.source = payload;
        }
    },
    actions: {
        async [ACTIONS.GET_SOURCES]({ commit }) {
            const response = await getSources();
            await commit(MUTATIONS.SET_SOURCES, response);
        },
        async [ACTIONS.CREATE_SOURCE](_, source) {
            await createSource(source);
        },
        async [ACTIONS.GET_SOURCE]({ commit }, payload) {
            const response = await getSourceById(payload);
            await commit(MUTATIONS.SET_SOURCE, response);
        },
        async [ACTIONS.EDIT_SOURCE](_, payload) {
            return await editSource(payload);
        },
        async [ACTIONS.DELETE_SOURCE](_, payload) {
            await deleteSource(payload);
        }
    }
};

export default sourcesModule;
