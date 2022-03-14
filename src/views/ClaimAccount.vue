<template>
   <div class="d-flex flex-column text-dark">
      <h1 v-if="isAccountClaimed">Account Claimed Successfully</h1>
      <h1 v-else> Error!</h1>
      <h6>Token: {{ token }}</h6>
   </div>
</template>

<script>
   import { store } from "../store/Store.js";

   export default {
      name: "ClaimAccount",
      data() {
         return {
            token: "",
            isAccountClaimed: false,
         };
      },
      async mounted() {
         this.token = this.$route.query.token;
         this.isAccountClaimed = await store.doClaimAccount(this.token)
      },
   };
</script>

<style>
</style>