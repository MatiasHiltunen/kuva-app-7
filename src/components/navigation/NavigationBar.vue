<script setup>
import { provide, ref } from 'vue';
import { RouterLink } from 'vue-router'
import LoginView from '../login/LoginView.vue';

const showLoginView = ref(false)

provide('showLogin', showLoginView)

</script>

<template>
    <router-link to="/">Koti</router-link>
    <router-link to="/create">Uusi</router-link>
    <router-link to="/users">Käyttäjät</router-link>
    <a href="#" @click.prevent="showLoginView = !showLoginView">Kirjaudu</a>
    <LoginView v-if="showLoginView"></LoginView>
</template>

<style scoped>
a {
    margin: 20px;
    font-size: 14px;
    text-decoration: none;
    color: aliceblue;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 24px;
    padding-bottom: 4px;
    padding-left: 3px;
    border-bottom: 3px solid transparent;
}

a:hover {
    border-bottom: 3px solid #f0f8ff;
    transition: border 0.3s ease-in;

}
</style>