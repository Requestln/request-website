<template>
   <nav
      class="navbar navbar-expand navbar-light fixed-top"
      style="height: 65px"
   >
      <div class="container-fluid">
         <a class="navbar-brand ms-2" href="/">
            <img
               class="crop-circle"
               src="../assets/ak.png"
               alt=""
               loading="lazy"
            />
         </a>
         <div id="auth" class="collapse navbar-collapse me-2">
            <ul class="navbar-nav ml-auto">
               <li class="nav-item">
                  <a href="/login" class="nav-link">Login</a>
               </li>
               <li class="nav-item">
                  <a href="/signup" class="nav-link">Sign up</a>
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

   .crop-circle {
      width: 50px;
      height: 50px;
      position: relative;
      overflow: hidden;
      border-radius: 20%;
      filter: drop-shadow(5px 5px 6px #1876f248);
   }
</style>