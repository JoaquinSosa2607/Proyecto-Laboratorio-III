<template> 
    <div>
        <form @submit.prevent="createUser">
            <h1>Sing Up</h1>
            <div> 
                <input type="text" v-model="username" placeholder="Username" :class="{ 'user-invalid': !isUserValid}" />
            </div>

            <button type="button" @click.prevent="createUser">Sign Up</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUpComponent",
        data() {
            return {
                username: ''
            };
        },
        computed: {
            isUserValid() {
                return this.username !== ''
            }
        }, 
        methods: {
            createUser: function() {
                if(!this.isUserValid) {
                    return console.log("User not Valid.");
                }

                this.$store.commit("setUsername", this.username);

                this.$router.push("/")
            }
        }
    }
</script>