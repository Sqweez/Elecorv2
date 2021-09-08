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
        recurrings: [],
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
        },
        [MUTATIONS.EDIT_RECURRING](state, payload) {
            state.recurrings = state.recurrings.map(r => {
                if (r.id === payload.id) {
                    r = payload;
                }
                return r;
            })
        },
        [MUTATIONS.DELETE_RECURRING](state, payload) {
            state.recurrings = state.recurrings.filter(r => r.id !== payload);
        }
    },
    actions: {
        async [ACTIONS.GET_RECURRINGS]({ commit }) {
            const response = await getRecurrings();
            await commit(MUTATIONS.SET_RECURRINGS, response);
        },
        async [ACTIONS.CREATE_RECURRING]({ }, recurring) {
            await createRecurring(recurring);
        },
        async [ACTIONS.GET_RECURRING]({ commit }, payload) {
            const response = await getRecurringById(payload);
            await commit(MUTATIONS.SET_RECURRING, response);
        },
        async [ACTIONS.EDIT_RECURRING]({ commit }, payload) {
            try {
                const data = await editRecurring(payload);
                commit(MUTATIONS.EDIT_RECURRING, data);
            } catch (e) {
                throw e;
            }
        },
        async [ACTIONS.DELETE_RECURRING]({ commit }, payload) {
            await deleteRecurring(payload);
            commit(MUTATIONS.DELETE_RECURRING, payload)
        }
    }
};

export default recurringsModule;
