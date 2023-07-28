<script lang="ts" setup>
import { Annonces, Emprunts } from '../../entities';

const route = useRoute();

const { data,refresh } = useFetch<Annonces>('http://localhost:8000/api/annonces/' + route.params.id);
const boolDemande= ref<boolean>(false);



function demande(){
    boolDemande.value =!boolDemande.value;
    console.log(boolDemande.value);
}

async function addEmprunt(emprunt:Emprunts){
    await $fetch('http://localhost:8000/api/emprunts',{
        method:'POST',
        body:emprunt
    });
    refresh();
}
</script>

<template>
    <div v-if="data" class="">
        <div class=" text-left">
            <h1> <NuxtLink :to="'/user/'+data.owner._id"> De: {{ data.owner.name }}</NuxtLink></h1>
        </div>
        <div class="text-right">
            <h6>{{ data.type }}</h6>
        </div>
        <div class="text-center m-3">
            <h3>{{ data.name }}</h3>
        </div>
        <div class="m-3">
            <h4 v-if="!data.status">Disponible</h4>
            <h4 v-if="data.status">Indisponible</h4>
        </div>
        <div > 
            <h5>Resume:</h5>
            <div class="container">
                <p>{{ data.msg }}</p>
            </div>
        </div>
        <div class="">
            <p>Address:{{ data.owner.address }}</p>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary" @click="demande()" >Demander</button>
        </div>
        <div v-if="boolDemande" class="container p-3 mt-3 rounded border border-dark-subtle">
            <FormEmprunts :userEmprunt="data" @submit="addEmprunt($event)"></FormEmprunts>
            
        </div>
    </div>
    <div class="text-center" v-if="!data">

        <h1 class="ts-6">Loading...</h1>
    </div>
</template>