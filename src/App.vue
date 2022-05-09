<script setup>
import { RouterView } from 'vue-router'
import BaseLayout from './components/layout/BaseLayout.vue';
import { theme } from './theme';

</script>

<template>
    <BaseLayout>
        <router-view></router-view>
    </BaseLayout>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

* {
    margin: 0px;
}

html {
    font-family: "Roboto", sans-serif;
}


input {
    border-radius: 5px;
    height: 20px;
    background-color: v-bind('theme.colors.primary');
    border: none;
    border-bottom: solid 3px white;
    padding: 4px;
    font-size: 1em;
    color: v-bind('theme.colors.light');
}

input:focus {
    border: none;
    border-bottom: solid 3px white;
    outline: solid 3px white;
}

form {
    display: flex;
    flex-flow: column wrap;
    background-color: v-bind('theme.colors.secondary');
    padding: 20px;
    border: solid 1px rgba(255, 255, 255, 0.508);
    border-radius: 10px;
    color: v-bind('theme.colors.light');
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 12px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
</style>
