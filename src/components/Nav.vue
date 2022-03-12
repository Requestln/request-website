<template>
   <nav class="navbar navbar-expand fixed-top navbar-light bg-light ps-5 pe-5">
      <div class="container-fluid">
         <router-link class="navbar-brand" to="/">
            <img
               class="crop-circle"
               src="../assets/ak.svg"
               alt=""
               loading="lazy"
            />
         </router-link>
         <ul
            v-if="state.userState.isLoggedIn"
            id="nav-right"
            class="navbar-nav"
         >
            <li class="nav-item">
               <router-link
                  @click="onLogout"
                  class="text-danger nav-link"
                  to="/"
                  >Logout</router-link
               >
            </li>
         </ul>
         <ul class="navbar-nav" v-else>
            <li class="nav-item">
               <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
               <router-link to="/signup" class="nav-link">Sign up</router-link>
            </li>
         </ul>
      </div>
   </nav>
</template>

<script>
   import { store } from "../store/Store.js";
   import { ref } from "vue";

   export default {
      name: "Nav",
      data() {
         return {
            state: store,
         };
      },
      methods: {
         onLogout() {
            console.log(store.userState);
            console.log(this.state.userState);
            store.userState.isLoggedIn = false;
            //store.onUserStateUpdated();
            console.log(store.userState);
            console.log(this.state.userState);
         },
      },
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

   .logout {
   }
</style>