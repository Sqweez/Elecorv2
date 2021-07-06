import Vue from "vue";
import Vuex, { Store } from "vuex";
import ACTIONS from "./actions";
import certificateModule from "./modules/certificates";
import clientsModule from "./modules/clients";
import feedbackModule from "./modules/feedback";
import frontEndModule from "./modules/frontend";
import mailingModule from "./modules/mailing";
import managersModule from "./modules/managers";
import managersHistoryModule from "./modules/managersHistory";
import mobileServiceModule from "./modules/mobile_services";
import navbarModule from "./modules/navbar";
import orderModule from "./modules/orders";
import promoCodeModule from "./modules/promoCodes";
import promoCodePackageModule from "./modules/promoCodesPackages";
import recurringModule from "./modules/recurrings";
import referralModule from "./modules/referral";
import serviceModule from "./modules/services";
import sourceModule from "./modules/sources";
import stocksModule from "./modules/stocks";
import userModule from "./modules/user";
Vue.use(Vuex);

const store = new Store({
    state: {},
    mutations: {},
    actions: {
        [ACTIONS.INIT]({ dispatch }) {
            dispatch("getFields");
            dispatch(ACTIONS.GET_CLIENT_TYPES);
            dispatch("getGenders");
            dispatch("getLanguages");
            dispatch("getUsers");
            dispatch(ACTIONS.GET_SERVICES);
            //dispatch(ACTIONS.GET_CLIENTS);
            dispatch("GET_COMPANIES");
        }
    },
    modules: {
        navbarModule,
        clientsModule,
        serviceModule,
        orderModule,
        feedbackModule,
        stocksModule,
        mobileServiceModule,
        userModule,
        mailingModule,
        referralModule,
        frontEndModule,
        promoCodeModule,
        promoCodePackageModule,
        certificateModule,
        sourceModule,
        recurringModule,
        managersModule,
        managersHistoryModule
    }
});

export default store;
