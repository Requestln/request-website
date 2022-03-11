<template>
   <div id="app">
      <div class="d-flex flex-column h-100">
         <div class="d-flex mydiv2 align-items-center justify-content-center">
            <Nav />
         </div>
         <div
            class="
               d-flex
               mydiv
               flex-grow-1
               align-items-center
               justify-content-center
            "
         >
            <router-view class="text-light"></router-view>
         </div>
      </div>
   </div>
</template>

<script>
   import Nav from "./components/Nav.vue";

   export default {
      name: "App",
      components: { Nav },
   };
</script>

<style>
   @import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");
   * {
      box-sizing: border-box;
   }

   body {
      background: #6ee4c0;
      /*min-height: 100vh;
                                                                  display: flex;*/
      font-weight: 400;
      font-family: Roboto, Helvetica, Arial, sans-serif;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   label,
   span {
      font-weight: 500;
      font-family: "Fira Sans", sans-serif;
   }

   body,
   html {
      width: 100%;
      height: 100%;
   }

   #app {
      height: 100%;
      width: 100%;
   }

   .navbar-light {
      background-color: rgb(255, 255, 255);
      box-shadow: 0, 14px, 80px, rgba(100, 104, 175, 0.2);
   }

   .mydiv {
      background-color: rgb(47, 118, 248);
   }
   .mydiv2 {
      background-color: rgb(95, 209, 171);
   }
</style>
