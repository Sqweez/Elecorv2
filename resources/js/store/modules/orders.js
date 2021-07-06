import { changeOrderStatus, getOrders } from "../../api/orders";
import ACTIONS from "../actions";
import GETTERS from "../getters";
import MUTATIONS from "../mutations";

const orderModule = {
    state: {
        orders: null
    },
    getters: {
        [GETTERS.ORDERS](state) {
            return state.orders;
        }
    },
    mutations: {
        [MUTATIONS.SET_ORDERS](state, payload) {
            state.orders = payload;
        },
        [MUTATIONS.SET_ORDER](state, payload) {
            state.orders = state.orders.map(order => {
                if (order.id === payload.id) {
                    order.is_worked = true;
                    order.comment = payload.comment;
                }
                return order;
            });
        }
    },
    actions: {
        async [ACTIONS.GET_ORDERS]({ commit }) {
            const orders = await getOrders();
            await commit(MUTATIONS.SET_ORDERS, orders);
        },
        async [ACTIONS.CHANGE_ORDER_STATUS]({ commit }, payload) {
            await changeOrderStatus(payload);
            await commit(MUTATIONS.SET_ORDER, payload);
        }
    }
};

export default orderModule;
