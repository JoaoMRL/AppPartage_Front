<script lang="ts" setup>
import { Annonces } from '../entities';

defineProps<{
  annonce:Annonces
}>()
const { refresh } = useFetch<Annonces[]>('http://localhost:8000/api/annonces')

async function remove(id:string) {
  await $fetch('http://localhost:8000/api/annonces/'+id,{
    method:'DELETE'
  })
  refresh();
}

</script>
  
<template>
  <div class="card m-2">
    <div class="card-body ">
    <h3 class="card-title text-center " ><NuxtLink :to="'/annonce/'+annonce._id" class="text-decoration-none">{{ annonce.name }}</NuxtLink></h3>
    <div class="card-body">
      <p class="card-text text-center fs-5">{{ annonce.msg }}</p>
      
    </div>
    <div class="card-text text-right">
      <p >Par: {{ annonce.owner.name }}</p>
    </div>
    <p>{{ annonce.type }}</p>
    </div>
    <div class="text-end p-2">
      <form>
        <button @click="remove(annonce._id)" class="btn btn-outline-danger">Remove</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
