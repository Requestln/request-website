<template>
   <nav class="navbar navbar-expand navbar-light fixed-top" style="height: 50px">
      <div class="container-fluid">
         <a href="#" class="navbar-brand">Home</a>
         <div id="auth" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a href="#" class="nav-link">Login</a>
               </li>
               <li class="nav-item">
                  <a href="#" class="nav-link">Sign up</a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
   export default {
      name: "Nav",
   };
</script>

<style>
   #auth {
      display: flex;
      justify-content: flex-end;
   }
</style>