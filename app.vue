<template>
  <header class="d-flex navbar container-fluid justify-content-around">
    <div>
      <NuxtLink  :to="'/'"  class=" navbar-brand text-decoration-none">Home</NuxtLink>
    </div>
    <div class="nav-item">
      <NuxtLink :to="'/posterAnnonce/'"  class="fs-6 navbar-brand text-decoration-none">Poster une Annonce</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="'/'" class="fs-6 navbar-brand text-decoration-none">Voir ses emprunts</NuxtLink>
    </div>
    <div>
      <NuxtLink :to="'/personne/'" class="fs-6 navbar-brand text-decoration-none">Ajouter une Personne</NuxtLink>
    </div>
    <div>
      <input type="text" @keyup="recherche()" class="form-control" placeholder="Search" v-model="search.search">
    </div>
  </header>
  <div>
    <NuxtPage :ElData="LaData"/>
  </div>
</template>

<script lang="ts" setup>
import { Annonces } from 'entities';
const { data:LaData, refresh } = useFetch<Annonces[]>('http://localhost:8000/api/annonces')

const search:any =ref({search:''});
async function recherche(){
  if (search.value.search.length>2) {
    
    const { data:NewData} = useFetch<Annonces[]>('http://localhost:8000/api/annoncesSearch',{
      method:'POST',
      body:search
    })

    LaData.value=NewData.value;
    // refresh();
  }else{
    const { data:NewData} = useFetch<Annonces[]>('http://localhost:8000/api/annonces')
    LaData.value=NewData.value;
  }
}
refresh();


</script>