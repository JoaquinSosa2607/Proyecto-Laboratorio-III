import { defineStore } from "pinia";

export const useUserStore = defineStore("signIn", {
  state: () => ({
    id: "",
    username: "",
    alreadyLogged: false,
  }),
  actions: {
    setUserData(username) {
      this.id;
      this.username = username;
    },
    setAlreadyLogged() {
      this.alreadyLogged = true;
    },
  },
});
