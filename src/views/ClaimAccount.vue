<template>
   <div class="d-flex flex-column text-dark">
      <h1>Account Claimed Successfully</h1>
      <h6>Token: {{ token }}</h6>
   </div>
</template>

<script>
   export default {
      name: "ClaimAccount",
      data() {
         return {
            token: "",
         };
      },
      mounted() {
         this.token = this.$route.query.token;
      },
   };
</script>

<style>
</style>