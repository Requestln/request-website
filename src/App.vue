<template>
   <v-app>
      <div class="mydiv">
         <h1>Hello World</h1>
      </div>
      <div class="mydiv">
         <v-btn color="primary" elevation="5" large>Hello</v-btn>
      </div>
   </v-app>
</template>

<script>
   export default {
      name: "App",
   };
</script>

<style scoped>
   .mydiv {
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
</style>
