<template>
   <div class="card">
      <div class="card-body w-100">
         <h4 class="card-title text-center mb-3">Sign Up</h4>
         <form @submit.prevent="onSubmit" class="w-100">
            <div class="mb-3">
               <label for="firstname" class="form-label">First Name</label>
               <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  v-model="firstname"
               />
            </div>
            <div class="mb-3">
               <label for="lastname" class="form-label">Last Name</label>
               <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  v-model="lastname"
               />
            </div>
            <div class="mb-3">
               <label for="email" class="form-label">Email address</label>
               <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  v-model="email"
               />
            </div>
            <div class="mb-4">
               <label for="password" class="form-label">Password</label>
               <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="**********"
                  v-model="password"
               />
            </div>

            <button type="submit" class="btn btn-primary w-100">
               Register
            </button>
         </form>
      </div>
   </div>
</template>

<script>
   import { store } from "../store/Store.js";
   export default {
      name: "SignUp",
      data() {
         return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
         };
      },
      methods: {
         onSubmit() {
            // TODO('Input validation')
            store.doSignUp({
               firstname: this.firstname,
               lastname: this.lastname,
               email: this.email,
               password: this.password,
            });
         },
      },
   };
</script>

<style>
</style>