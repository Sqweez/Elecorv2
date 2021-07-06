import {
    createCertificate,
    deleteCertificate,
    editCertificate,
    getCertificateById,
    getCertificates
} from "../../api/certificates";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const certificatesModule = {
    state: {
        certificates: null,
        certificate: null
    },
    getters: {
        [GETTERS.CERTIFICATES](state) {
            return state.certificates;
        },
        [GETTERS.CERTIFICATE](state) {
            return state.certificate;
        }
    },
    mutations: {
        [MUTATIONS.SET_CERTIFICATES](state, payload) {
            state.certificates = payload;
        },
        [MUTATIONS.SET_CERTIFICATE](state, payload) {
            state.certificate = payload;
        }
    },
    actions: {
        async [ACTIONS.GET_CERTIFICATES]({ commit }) {
            const response = await getCertificates();
            await commit(MUTATIONS.SET_CERTIFICATES, response);
        },
        async [ACTIONS.CREATE_CERTIFICATE](_, certificate) {
            await createCertificate(certificate);
        },
        async [ACTIONS.GET_CERTIFICATE]({ commit }, payload) {
            const response = await getCertificateById(payload);
            await commit(MUTATIONS.SET_CERTIFICATE, response);
        },
        async [ACTIONS.EDIT_CERTIFICATE](_, payload) {
            return await editCertificate(payload);
        },
        async [ACTIONS.DELETE_CERTIFICATE](_, payload) {
            await deleteCertificate(payload);
        }
    }
};

export default certificatesModule;
