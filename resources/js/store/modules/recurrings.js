import {
    createRecurring,
    deleteRecurring,
    editRecurring,
    getRecurringById,
    getRecurrings
} from "../../api/recurrings";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const recurringsModule = {
    state: {
        recurrings: null,
        recurring: null
    },
    getters: {
        [GETTERS.RECURRINGS](state) {
            return state.recurrings;
        },
        [GETTERS.RECURRING](state) {
            return state.recurring;
        }
    },
    mutations: {
        [MUTATIONS.SET_RECURRINGS](state, payload) {
            state.recurrings = payload;
        },
        [MUTATIONS.SET_RECURRING](state, payload) {
            state.recurring = payload;
        }
    },
    actions: {
        async [ACTIONS.GET_RECURRINGS]({ commit }) {
            const response = await getRecurrings();
            await commit(MUTATIONS.SET_RECURRINGS, response);
        },
        async [ACTIONS.CREATE_RECURRING](_, recurring) {
            await createRecurring(recurring);
        },
        async [ACTIONS.GET_RECURRING]({ commit }, payload) {
            const response = await getRecurringById(payload);
            await commit(MUTATIONS.SET_RECURRING, response);
        },
        async [ACTIONS.EDIT_RECURRING](_, payload) {
            return await editRecurring(payload);
        },
        async [ACTIONS.DELETE_RECURRING](_, payload) {
            await deleteRecurring(payload);
        }
    }
};

export default recurringsModule;