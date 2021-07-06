import VCalendar from "v-calendar";
import VueMask from "v-mask";
import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./filters/filters";
import vuetify from "./plugins/vuetify";
import router from "./routes/router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueMask);
Vue.use(Vuelidate);
Vue.use(VCalendar, {
    componentPrefix: "vc"
});

const app = new Vue({
    el: "#app",
    vuetify,
    router,
    store,
    components: { App }
});
