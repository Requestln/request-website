<template>
   <nav
      class="navbar navbar-expand fixed-top navbar-light bg-light ps-5 pe-5"
   >
      <div class="container-fluid">
         <a class="navbar-brand" href="/">
            <img
               class="crop-circle"
               src="../assets/ak.svg"
               alt=""
               loading="lazy"
            />
         </a>
         <ul class="navbar-nav">
            <li class="nav-item">
               <a href="/login" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
               <a href="/signup" class="nav-link">Sign up</a>
            </li>
         </ul>
      </div>
   </nav>
</template>

<script>
   export default {
      name: "Nav",
   };
</script>

<style>
   .crop-circle {
      width: 45px;
      height: 45px;
      position: relative;
      overflow: hidden;
      border-radius: 20%;
      filter: drop-shadow(5px 5px 6px #1876f248);
      background-color: #fff;
   }
</style>