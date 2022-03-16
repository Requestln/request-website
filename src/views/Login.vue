<template>
   <div class="card">
      <div class="card-body w-100">
         <h4 class="card-title text-center mb-3">Login</h4>
         <form
            @submit.prevent="onSubmit"
            class="w-100"
            novalidate
         >
            <div class="mb-3">
               <label for="email" class="form-label">Email address</label>
               <input
                  type="email"
                  class="form-control"
                  :class="v$.email.$error ? 'error-form-control' : ' '"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="name@example.com"
                  v-model="email"
               />
               <p
                  class="text-danger ms-1 error-msg"
                  v-if="v$.email.$error"
                  >{{ v$.email.$errors[0].$message }}</p
               >
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

            <button type="submit" class="btn btn-primary w-100">Login</button>
         </form>
      </div>
   </div>
</template>

<script>
   import { store } from "../store/Store.js";
   import useValidate from "@vuelidate/core";
   import { required, email } from "@vuelidate/validators";

   export default {
      name: "Login",
      data() {
         return {
            v$: useValidate(),
            email: "",
            password: "",
         };
      },
      validations() {
         return {
            email: { email, required },
            password: {},
         };
      },
      methods: {
         onSubmit(e) {
            this.v$.$validate();
            if (!this.v$.$error) {
               store.doLogin(this.email, this.password);
            }
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
   .error-msg {
      font-size: 0.89em;
   }
   .error-form-control {
      border-color: #dc3545;
   }
   .error-form-control:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem #dc35454f;
   }
</style>