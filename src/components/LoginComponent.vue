<template>
  <div class="background-container">
    <div class="main-container">
      <form class="form-signin" @submit.prevent="LogInForm">
        <div>
          <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
        </div>
        <div>
          <label for="inputName" class="sr-only mb-2">Your name</label>
          <input
            v-model="username"
            type="text"
            id="inputEmail"
            class="form-control"
            placeholder="Name"
            required
            autofocus
          />
        </div>
        <button class="btn btn-lg btn-secondary btn-block mt-3" type="submit">
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";
import { ref } from "vue";

export default {
  name: "LoginComponent",
  setup() {
    const userStore = useUserStore();
    const username = ref("");
    const router = useRouter();

    const setSignInData = () => {
      if (!username.value) return;
      userStore.setUserData(username.value);
      userStore.setAlreadyLogged();
      router.push("/home");
    };

    const LogInForm = () => {
      setSignInData();
      console.log(username);
    };

    return {
      username,
      LogInForm,
    };
  },
};
</script>

<style>
.background-container {
  background-image: url("../assets/bitcoin-background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  background-color: rgba(92, 79, 79, 0.8);
  border-radius: 10px;
  padding: 40px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.form-signin {
  color: black;
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.icon {
  width: 50px;
}
</style>
