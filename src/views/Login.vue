<template>
   <div class="card">
      <div class="card-body">
         <h5 class="card-title text-center">Login</h5>
         <form @submit.prevent="onSubmit">
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

            <button type="submit" class="btn btn-primary">Login</button>
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
         async onSubmit(e) {
            //Input verification
            await store.doLogin(this.email, this.password);
         },
      },
   };
</script>

<style>
   .card {
      width: 25%;
      min-width: 250px;
   }
</style>