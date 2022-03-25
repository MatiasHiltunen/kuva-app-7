<script setup>
import { ref } from 'vue';
import PublicationViewAll from './components/publication/PublicationViewAll.vue';

const color = ref('grey')

const toggleColor = ()=>{
    color.value = color.value === 'grey' ? 'pink' : 'grey'
}

</script>

<template>
 <button @click="toggleColor">Vaihda väriä</button>
 <PublicationViewAll></PublicationViewAll>
</template>

<style>

.primary-color {
    background-color: v-bind(color);
}

</style>
