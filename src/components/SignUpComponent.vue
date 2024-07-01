<template>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="createUser">
          <h4 class="card-title">
            Sign Up
          </h4>
  
          <div class="input"> 
            <input type="text" v-model="username" placeholder="Username" :class="{ 'user-invalid': !isUserValid}" />
          </div>
  
          <button type="button" class="btn btn-danger" @click.prevent="createUser">Sign Up</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: "SignUpComponent",
    setup() {
      const username = ref('');
      const router = useRouter();
  
      const createUser = () => {
        if (!username.value) {
          console.log("User not Valid.");
          return;
        }

        localStorage.setItem('username', username.value);

        router.push("/info");
      };
  
      return {
        username,
        createUser,
        isUserValid: computed(() => username.value !== '')
      };
    }
  };
  </script>
  
  <style>
  .card {
    height: 200px;
    width: 500px;
    background-color: gray;
  }
  
  .card-body {
    justify-content: center;
    align-items: center;
    margin: 20px;
  }
  
  .input {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  </style>
  