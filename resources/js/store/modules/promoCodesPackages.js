import {
    createPromoCodePackage,
    deletePromoCodePackage,
    editPromoCodePackage,
    getPromoCodePackageById,
    getPromoCodesPackages
} from "../../api/promoCodesPackages";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const promoCodesPackagesModule = {
    state: {
        promoCodesPackages: null,
        promoCodePackage: null
    },
    getters: {
        [GETTERS.PROMO_CODES_PACKAGES](state) {
            return state.promoCodesPackages;
        },
        [GETTERS.PROMO_CODE_PACKAGE](state) {
            return state.promoCodePackage;
        }
    },
    mutations: {
        [MUTATIONS.SET_PROMO_CODES_PACKAGES](state, payload) {
            state.promoCodesPackages = payload;
        },
        [MUTATIONS.SET_PROMO_CODE_PACKAGE](state, payload) {
            state.promoCodePackage = payload;
        },
        [MUTATIONS.EDIT_PROMO_CODE_PACKAGE](state, payload) {
            state.promoCodePackage = payload;
        },
        [MUTATIONS.EDIT_PROMO_CODE_PACKAGE](state, payload) {
            state.promoCodePackage = payload;
        },
        [MUTATIONS.DELETE_PROMO_CODE_PACKAGE](state, payload) {
            if (state.promoCodesPackages) {
                state.promoCodesPackages = state.promoCodesPackages.filter(
                    ({ id }) => id != payload
                );
            }
        }
    },
    actions: {
        async [ACTIONS.GET_PROMO_CODES_PACKAGES]({ commit }) {
            const response = await getPromoCodesPackages();
            await commit(MUTATIONS.SET_PROMO_CODES_PACKAGES, response);
        },
        async [ACTIONS.CREATE_PROMO_CODE_PACKAGE](_, promoCodePackage) {
            await createPromoCodePackage(promoCodePackage);
        },
        async [ACTIONS.GET_PROMO_CODE_PACKAGE]({ commit }, payload) {
            const response = await getPromoCodePackageById(payload);
            await commit(MUTATIONS.SET_PROMO_CODE_PACKAGE, response);
        },
        async [ACTIONS.EDIT_PROMO_CODE_PACKAGE]({ commit }, payload) {
            const response = await editPromoCodePackage(payload);
            await commit(MUTATIONS.EDIT_PROMO_CODE_PACKAGE, response);
            return response;
        },
        async [ACTIONS.DELETE_PROMO_CODE_PACKAGE]({ commit }, payload) {
            await deletePromoCodePackage(payload);
            await commit(MUTATIONS.DELETE_PROMO_CODE_PACKAGE, payload);
        }
    }
};

export default promoCodesPackagesModule;
