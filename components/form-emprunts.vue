<script lang="ts" setup>
import { Annonces, Emprunts } from 'entities';

const emit = defineEmits(['submit'])
function handleSubmit(){
    emit('submit',emprunt.value);
}
const userData=defineProps<{userEmprunt:Annonces}>();
const emprunt=ref<Emprunts>({
    status:"En Attente",
    dateDebut:"",
    dateFin:"",
    msgEmprunts:"",
    emObjet:{
        _id:"",
        name:"",
        owner:{
            _id:userData.userEmprunt._id,
            name:"",
            address:""
        }
    },
    borrower:{
        _id:"6548548",
        name:""
    }
})
if (userData) {
    emprunt.value.emObjet.owner.name=userData.userEmprunt.name;
    if (userData.userEmprunt.owner.address) {
      emprunt.value.emObjet.owner.address=userData.userEmprunt.owner.address;
    }else{
      emprunt.value.emObjet.owner.address="pas d'address";

    }
    
    emprunt.value.emObjet._id=userData.userEmprunt._id;
    emprunt.value.emObjet.name=userData.userEmprunt.name;
}

</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit()">
                <div class="mb-3 d-flex justify-content-around">
                    <div>
                        <label for="dateDebut" class="form-label">Date de l'emprunt</label>
                        <input type="date" name="dateDebut" id="dateDebut" class="form-control" v-model="emprunt.dateDebut">
                    </div>
                    <div>
                        <label for="dateFin" class="form-label">Date de fin</label>
                        <input type="date" name="dateFin" id="dateFin" class="form-control" v-model="emprunt.dateFin">
                    </div>
                </div>
                <div>
                    <label for="name" class="form-label">Nom de l'emprunter</label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="Nom:" v-model="emprunt.borrower.name">   
            
                    <label for="msg" class="form-label">Message</label>
                    <textarea type="text" name="msg" id="msg" class="form-control" placeholder="Msg" v-model="emprunt.msgEmprunts">   </textarea>
                </div>
                <div class="text-center m-3">
                    <button type="submit" class="btn btn-outline-success" >Submit</button>
                </div>
            </form>
  </div>
</template>

<style scoped></style>
