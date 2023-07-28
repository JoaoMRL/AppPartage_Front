<script lang="ts" setup>
import { Annonces, User } from 'entities';
const { data:UserData } = useFetch<User[]>('http://localhost:8000/api/user');

const emit = defineEmits(['submitAnnonce']);

const annonce=ref<Annonces>(
  {
    msg:"",
    name:"",
    owner:{
      _id:"",
      name:"",
      address:""
    },
    status:false,
    type:""
  }
)


function handleSubmit(){
  const { data:User} = useFetch<User>('http://localhost:8000/api/OneUser/'+annonce.value.owner.name.toString());
  if (User.value && annonce.value.owner.name) {
    annonce.value.owner._id=User.value._id;
    if (User.value.address) {
      annonce.value.owner.address=User.value.address;
    }else{
      annonce.value.owner.address="Pas d'address";
    }
  }
  nextSubmit();
}

function nextSubmit(){
  emit('submitAnnonce',annonce.value);
}

</script>

<template>
  <div class="container">
    <form @submit.prevent="handleSubmit()">
      <div class="mt-3">
        <label for="nameP" class="form-label">Nom du Produit:</label>
        <input type="text" id="nameP" v-model="annonce.name" class="form-control" placeholder="nom">
        
        <label for="nameU" class="form-label">User Name</label>
        <input list="user" class="form-control" v-model="annonce.owner.name" placeholder="Choix">
        <datalist id="user">
          <option v-for="item of UserData" :value="item.name"></option>
        </datalist>
        <label for="type" class="form-label">Type du Produit:</label>
        <input type="text" id="type" v-model="annonce.type" class="form-control" placeholder="Type">
        <label for="msg" class="form-label">Message:</label>
        <textarea type="text" id="msg" v-model="annonce.msg" class="form-control" placeholder="Msg"></textarea>
      </div>
      <div class="text-center mt-3">
        <button type="submit" class="btn btn-outline-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
