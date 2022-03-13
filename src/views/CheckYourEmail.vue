<template>
   <div class="card">
      <div class="card-header pt-5 pb-5 text-center bg-warning">
          <i class="fa fa-envelope" style="font-size:48px;"></i>
      </div>
      <div class="card-body p-4">
         <h5 class="card-title mb-3">Check Your Email</h5>
         <p class="card-text mb-3">
           We've just sent a link to <span>{{email}}</span>. Verify your address and we'll get you all set up!
         </p>
         <a class="mb-2 fs-6 p-2 btn btn-primary w-100">Rescend confirmation email</a>
      </div>
   </div>
</template>

<script>
   export default {
       name: "CheckYourEmail",
       props: {
           email: String
       }
   };
</script>

<style scoped>
    .card {
        width: 400px;

    }
</style>