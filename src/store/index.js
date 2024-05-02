import { createStore } from "vuex";

export default createStore({
    state: {
        username: localStorage.getItem("username") || "",
        transactionTracker: [],
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
            localStorage.setItem("username", username);
        },
        addTransaction(state, transaction) {
            state.transactionTracker.push(transaction);
        }
    },
});
