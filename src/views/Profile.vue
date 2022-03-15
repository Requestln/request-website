<template>
   <div v-if="isLoading">
   </div>
   <div class="f-flex flex-column" v-else>
      <h1>{{ firstname }} {{ lastname }}</h1>
      <h3>Email: {{ email }}</h3>
   </div>
</template>

<script>
   import axios from "axios";

   export default {
      name: "Profile",
      data() {
         return {
            isLoading: true,
            userId: this.$route.params.id,
            firstname: "Houssem",
            lastname: "Nasri",
            email: "housi@gmail.com",
         };
      },
      methods: {
         async fetchUserData() {
            const response = await axios.get(`users/${this.userId}`).catch((e) => {
               return null;
            });

            return response.data;
         },
      },

      async mounted() {
         const userData = await this.fetchUserData();
         if (userData) {
            this.firstname = userData.firstname;
            this.lastname = userData.lastname;
            this.email = userData.email;
         }
         this.isLoading = false;
      },
   };
</script>

<style>
</style>