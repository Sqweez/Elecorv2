import {
    createManager,
    deleteManager,
    editManager,
    getManagerById,
    getManagers
} from "../../api/managers";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const managersModule = {
    state: {
        managers: null,
        manager: null
    },
    getters: {
        [GETTERS.MANAGERS](state) {
            return state.managers;
        },
        [GETTERS.MANAGER](state) {
            return state.manager;
        }
    },
    mutations: {
        [MUTATIONS.SET_MANAGERS](state, payload) {
            state.managers = payload;
        },
        [MUTATIONS.SET_MANAGER](state, payload) {
            state.manager = payload;
        }
    },
    actions: {
        async [ACTIONS.GET_MANAGERS]({ commit }) {
            const promoCodes = await getManagers();
            await commit(MUTATIONS.SET_MANAGERS, promoCodes);
        },
        async [ACTIONS.CREATE_MANAGER](_, promoCode) {
            await createManager(promoCode);
        },
        async [ACTIONS.GET_MANAGER]({ commit }, payload) {
            const response = await getManagerById(payload);
            await commit(MUTATIONS.SET_MANAGER, response);
        },
        async [ACTIONS.EDIT_MANAGER](_, payload) {
            const response = await editManager(payload);
            return response;
        },
        async [ACTIONS.DELETE_MANAGER](_, payload) {
            await deleteManager(payload);
        }
    }
};

export default managersModule;
