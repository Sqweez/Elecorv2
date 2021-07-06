import {
    createManagerHistory,
    deleteManagerHistory,
    editManagerHistory,
    getManagerHistoryById,
    getManagersHistory
} from "../../api/managersHistory";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const managersHistoryModule = {
    state: {
        managersHistory: null,
        managerHistory: null
    },
    getters: {
        [GETTERS.MANAGERS_HISTORY](state) {
            return state.managersHistory;
        },
        [GETTERS.MANAGER_HISTORY](state) {
            return state.managerHistory;
        }
    },
    mutations: {
        [MUTATIONS.SET_MANAGERS_HISTORY](state, payload) {
            state.managersHistory = payload;
        },
        [MUTATIONS.SET_MANAGER_HISTORY](state, payload) {
            state.managerHistory = payload;
        }
    },
    actions: {
        async [ACTIONS.GET_MANAGERS_HISTORY]({ commit }) {
            const promoCodes = await getManagersHistory();
            await commit(MUTATIONS.SET_MANAGERS_HISTORY, promoCodes);
        },
        async [ACTIONS.CREATE_MANAGER_HISTORY](_, promoCode) {
            await createManagerHistory(promoCode);
        },
        async [ACTIONS.GET_MANAGER_HISTORY]({ commit }, payload) {
            const response = await getManagerHistoryById(payload);
            await commit(MUTATIONS.SET_MANAGER_HISTORY, response);
        },
        async [ACTIONS.EDIT_MANAGER_HISTORY](_, payload) {
            const response = await editManagerHistory(payload);
            return response;
        },
        async [ACTIONS.DELETE_MANAGER_HISTORY](_, payload) {
            await deleteManagerHistory(payload);
        }
    }
};

export default managersHistoryModule;
