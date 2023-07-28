<script lang="ts" setup>
import { User } from 'entities';

const emit =defineEmits(['submitUser'])

const personne=ref<User>(
  {
    name:"",
    firstName:"",
    address:"",
    email:"test@test.fr",
    password:"défault"
  }
)
function handleSubmit(){
  emit('submitUser',personne.value);
}
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleSubmit()">
      <div class="mt-3">
        <label for="nameP" class="form-label">Nom:</label>
        <input type="text" id="nameP" v-model="personne.name" class="form-control" placeholder="name">
        
        <label for="nameU" class="form-label">Prénom:</label>
        <input list="user" class="form-control" v-model="personne.firstName" placeholder="firstName">
        <label for="type" class="form-label">Address:</label>
        <input type="text" id="type" v-model="personne.address"  class="form-control" placeholder="Address">
       
      </div>
      <div class="text-center mt-3">
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
