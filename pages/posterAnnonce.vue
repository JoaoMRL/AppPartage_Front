<script lang="ts" setup>
import { Annonces } from 'entities';
 
const { refresh } = useFetch<Annonces[]>('http://localhost:8000/api/annonces')

async function addAnnonce(annonce:Annonces){
  await $fetch('http://localhost:8000/api/annonces',{
    method:'POST',
    body: annonce
  });
  refresh();
}
</script>

<template>
  <div>
    <FormAnnonceItem @submitAnnonce="addAnnonce($event)" ></FormAnnonceItem>
  </div>
</template>

<style scoped></style>
