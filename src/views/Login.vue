<template>
   <div class="card">
      <div class="card-body w-100" >
         <h4 class="card-title text-center mb-3">Login</h4>
         <form @submit.prevent="onSubmit" class="w-100">
            <div class="mb-3">
               <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
               >
               <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  v-model="email"
               />
            </div>
            <div class="mb-4">
               <label for="exampleInputPassword1" class="form-label"
                  >Password</label
               >
               <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="**********"
                  v-model="password"
               />
            </div>

            <button type="submit" class="btn btn-primary w-100">Login</button>
         </form>
      </div>
   </div>
</template>

<script>
   import { store } from "../store/Store.js";

   export default {
      name: "Login",
      data() {
         return {
            email: "",
            password: "",
         };
      },
      methods: {
         onSubmit(e) {
            //Input verification
            store.doLogin(this.email, this.password);
         },
      },
   };
</script>

<style>
   .card {
      width: 25%;
      min-width: 320px;
      max-width: 500px;
   }
</style>