<script lang="ts" setup>
import { User } from 'entities';


async function addUser(perso:User){
  await $fetch('http://localhost:8000/api/user',{
    method:'POST',
    body:perso
  });
}

</script>

<template>
  <div>
    <FormPersonne @submitUser="addUser($event)" ></FormPersonne>
  </div>
</template>

<style scoped></style>
