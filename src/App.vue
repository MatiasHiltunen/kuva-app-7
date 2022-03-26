<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation/NavigationBar.vue';

const color = ref('grey')

const toggleColor = ()=>{
    color.value = color.value === 'grey' ? 'pink' : 'grey'
}

</script>

<template>
 <button @click="toggleColor">Vaihda väriä</button>
 <NavigationBar></NavigationBar>
 <router-view></router-view>
</template>

<style>

.primary-color {
    background-color: v-bind(color);
}

</style>
