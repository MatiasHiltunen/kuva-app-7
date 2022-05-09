<script setup>
import { theme } from '../../theme';
import NavigationBar from '../navigation/NavigationBar.vue';


</script>

<template>
    <div class="nav">
        <NavigationBar></NavigationBar>
    </div>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding-top: 10vh;
    background-color: v-bind('theme.colors.primary');
}

.nav {
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: v-bind('theme.colors.secondary');
    top: 0px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.428);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}
</style>