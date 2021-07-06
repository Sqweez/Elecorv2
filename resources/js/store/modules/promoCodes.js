import {
    createPromoCode,
    deletePromoCode,
    editPromoCode,
    getPromoCodeById,
    getPromoCodes
} from "../../api/promoCodes";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const promoCodesModule = {
    state: {
        promoCodes: null,
        promoCode: null
    },
    getters: {
        [GETTERS.PROMO_CODES](state) {
            return state.promoCodes;
        },
        [GETTERS.PROMO_CODE](state) {
            return state.promoCode;
        }
    },
    mutations: {
        [MUTATIONS.SET_PROMO_CODES](state, payload) {
            state.promoCodes = payload;
        },
        [MUTATIONS.SET_PROMO_CODE](state, payload) {
            state.promoCode = payload;
        },
        [MUTATIONS.EDIT_PROMO_CODE](state, payload) {
            state.promoCode = payload;
        },
        [MUTATIONS.EDIT_PROMO_CODE](state, payload) {
            state.promoCode = payload;
        },
        [MUTATIONS.DELETE_PROMO_CODE](state, payload) {
            if (state.promoCodes) {
                state.promoCodes = state.promoCodes.filter(
                    ({ id }) => id != payload
                );
            }
        }
    },
    actions: {
        async [ACTIONS.GET_PROMO_CODES]({ commit }) {
            const promoCodes = await getPromoCodes();
            await commit(MUTATIONS.SET_PROMO_CODES, promoCodes);
        },
        async [ACTIONS.CREATE_PROMO_CODE](_, promoCode) {
            await createPromoCode(promoCode);
        },
        async [ACTIONS.GET_PROMO_CODE]({ commit }, payload) {
            const response = await getPromoCodeById(payload);
            await commit(MUTATIONS.SET_PROMO_CODE, response);
        },
        async [ACTIONS.EDIT_PROMO_CODE]({ commit }, payload) {
            const response = await editPromoCode(payload);
            await commit(MUTATIONS.EDIT_PROMO_CODE, response);
            return response;
        },
        async [ACTIONS.DELETE_PROMO_CODE]({ commit }, payload) {
            await deletePromoCode(payload);
            await commit(MUTATIONS.DELETE_PROMO_CODE, payload);
        }
    }
};

export default promoCodesModule;
