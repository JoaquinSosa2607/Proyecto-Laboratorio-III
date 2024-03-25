<template>
  <div class="home">
    <div class="main-container">
      <div class="card-header">
        <h5 class="card-title">
          Hi! You're about to enter <strong>Sossen Crypto Exchange</strong>
        </h5>
      </div>
      <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <div class="card-btn">
          <router-link to="/login">
            <button class="btn btn-secondary btn-lg">Get Started</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartView",
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

.main-container {
  height: 300px;
  width: auto;
  display: flexbox;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
}

.card-body {
  flex: 1;
}

.card-btn {
  margin-top: 50px;
}
</style>
