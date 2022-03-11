<template>
   <MDBCard class="card">
      <MDBCardBody>
         <MDBCardTitle>Request.tn Login</MDBCardTitle>
         <div class="d-flex flex-column gap-3 mb-3 mt-3 w-100">
            <MDBInput class="w-100" label="email" />
            <MDBInput class="w-100" type="password" label="password">
               <MDBIcon icon="fa-solid fa-eye" class="trailing"></MDBIcon>
            </MDBInput>
         </div>

         <MDBBtn color="primary">Login</MDBBtn>
      </MDBCardBody>
   </MDBCard>
</template>

<script>
   import {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBBtn,
      MDBInput,
      MDBIcon,
   } from "mdb-vue-ui-kit";
   export default {
      name: "Login",
      components: {
         MDBCard,
         MDBCardBody,
         MDBCardTitle,
         MDBCardText,
         MDBBtn,
         MDBInput,
         MDBIcon,
      },
   };
</script>

<style>
   .card {
      width: 25%;
      min-width: 250px;
   }
</style>