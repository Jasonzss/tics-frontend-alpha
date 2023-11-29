<script setup>
    const a = "dictionary/word to translate"
</script>

<template>
    <div class="tool"><RouterLink :to=a>this is a tool</RouterLink></div>
</template>

<style lang="scss">
    .tool{
        width: 300px;
        height: 300px;
        background-color: rgba(255, 0, 0, 0.418);
        position: fixed;
        bottom: 60px;
        right: 70px;
        text-align: center;
    }
</style>