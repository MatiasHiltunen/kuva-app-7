<script setup>

defineProps({
    publication: Object
})

</script>

<template>
    <div>
        {{ publication.title }}
        <img :src="publication.url" />
        {{ publication.owner ? publication.owner.username : 'Anon' }}
    </div>
</template>

<style scoped>
img {
    width: 400px;
    margin: 20px;
}

div {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    padding: 10px;
}

</style>