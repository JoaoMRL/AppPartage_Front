<script lang="ts" setup>
import { User } from '../../entities';

const route = useRoute();

const { data:UserInfo } = useFetch<User>('http://localhost:8000/api/user/' + route.params.id);

</script>

<template>
    <div v-if="UserInfo" class="">
        <div class=" text-left m-3">
            <h5>{{ UserInfo.name }} {{ UserInfo.firstName }}</h5>
        </div>
        <div class="text-left m-3">
            <h6>{{ UserInfo.email }}</h6>
        </div>
        <div class="text-end m-5">
            <h6>{{ UserInfo.address }}</h6>
        </div>
    </div>
    <div class="text-center" v-if="!UserInfo">

        <h1 class="ts-6">Loading...</h1>
    </div>
</template>