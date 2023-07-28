<script lang="ts" setup>
import { Annonces } from '../entities';


defineProps<{
  ElData: Annonces[]
}>()


</script>

<template>
  <div class="container" v-if="ElData">
    <AnnoncesItem v-for="item of ElData" :annonce="item" />
  </div>
  <div class="text-center" v-if="!ElData">
    <h1 class="ts-6">Loading...</h1>
  </div>
</template>

<style scoped></style>
