<script setup>

import PublicationView from './PublicationView.vue';
import { publicationService } from '../../services/publicationService';
import { useRouter } from 'vue-router';

const {data, error, isFinished} = publicationService.useGetAll()

const router = useRouter()

</script>

<template>
    <div v-if="error">Valitettavasti postauksia ei ollut juuri nyt saatavilla</div>
    <div v-if="!isFinished">Ladataan...</div>
    <div v-else class="container">
        <div class="item" @click="router.push('/publication/'+ publication._id)" v-for="publication in data.publications">
            <PublicationView :publication="publication"></PublicationView>
        </div>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(231, 231, 231);
    margin: 20px;
}


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>