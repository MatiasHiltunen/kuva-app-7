<script setup>
import { computed, reactive } from 'vue';

const publicationData = reactive({
    title: '',
    description: '',
    url: '',
    visibility: 2, // tarkoittaa julkista postausta
    tags: []
})

const isDataValid = computed(()=>{

    return !!(publicationData.title && publicationData.description && publicationData.url)

})

const createNewPublication = () => {

    if(!isDataValid.value) return


    publicationData.title = ''
    publicationData.description = ''
    publicationData.url = ''
}

/* 

{
    "title":"title",
    "description":"kuvaus",
    "url":"https://i.redd.it/4abzoaca95p81.jpg",
    "visibility":2,
    "tags":[]
}

*/

</script>

<template>

    <div class="publication-form">
        <label>Otsikko</label>
        <input v-model="publicationData.title" type="text" />

        <label>Kuvaus</label>
        <input v-model="publicationData.description" type="text" />

        <label>URL</label>
        <input v-model="publicationData.url" type="text" />

        <button :disabled="!isDataValid" @click="createNewPublication">Lähetä</button>
    </div>
</template>

<style scoped>
.publication-form {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    width: 200px;
}
</style>