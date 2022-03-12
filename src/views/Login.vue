<template>
   <div class="card">
      <div class="card-body">
         <h5 class="card-title text-center">Login</h5>
         <form>
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
               />
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
         </form>
      </div>
   </div>
</template>

<script>
   export default {
      name: "Login",
   };
</script>

<style>
   .card {
      width: 25%;
      min-width: 250px;
   }
</style>