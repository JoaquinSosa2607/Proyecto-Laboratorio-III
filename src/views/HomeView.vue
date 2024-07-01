<template>
    <div class="background-container">
        <SignUpComponent />
    </div>
</template>

<script>
import SignUpComponent from "@/components/SignUpComponent.vue";

export default {
    name: "HomeView",
    components: {
        SignUpComponent,
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
</style>
