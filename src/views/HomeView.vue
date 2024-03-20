<template>
  <div class="home">
    <div
      class="container d-flex justify-content-center align-items-center h-100"
    >
      <div class="card text-center shadow">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#"
                >Sign In</a
              >
            </li>
            <li class="nav-item">
              <router-link to="/about">
              <a class="nav-link active">About</a>
            </router-link>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Hi! You're about to enter <strong>Sossen Crypto Exchange</strong>
          </h5>
          <div class="card-btn">
            <router-link to="/login">
              <button class="btn btn-secondary btn-lg">Sign In</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView"
};
</script>

<style>
.home {
  height: 100vh;
  background-image: url("../assets/bitcoin-background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
}

.card-body {
  height: 200px;
}

.card-title {
  margin-top: 20px;
}

.card-btn {
  margin-top: 50px;
}
</style>
