<script setup>
import { onClickOutside } from '@vueuse/core';
import { inject, reactive, ref } from 'vue'
import { theme } from '../../theme';

const showLoginView = inject('showLogin')

const credentials = reactive({
    username: '',
    password: ''
})

const target = ref(null)

onClickOutside(target, () => {
    showLoginView.value = false
})

</script>

<template>
    <form class="login" ref="target">
        <label>Käyttäjänimi</label>
        <input v-model="credentials.username" type="text">

        <label>Salasana</label>
        <input v-model="credentials.password" type="password">

        <button type="submit">Kirjaudu</button>
    </form>
</template>

<style>
.login {
    width: 250px;
    position: fixed;
    left: 50%;
    right: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}



button {
    background-color: v-bind('theme.colors.primary');
    border: none;
    border-bottom: solid 3px v-bind('theme.colors.light');
    border-radius: 5px;
    height: 30px;
    padding: 5px;
    margin-top: 12px;
    padding-top: 6px;
    color: v-bind('theme.colors.light');
    text-transform: uppercase;
    letter-spacing: 3px;
}

button:hover {
    background-color: v-bind('theme.colors.light');
    color: v-bind('theme.colors.primary');
    cursor: pointer;
    transition: 0.4s color ease-in;
}

label {
    margin-top: 6px;
    padding: 3px;
}

input {
    margin-bottom: 12px;
}
</style>