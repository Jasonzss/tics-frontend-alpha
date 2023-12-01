<script setup>
    import ToolIndex from '../Tool/ToolIndex.vue';
    import ContextIndex from '../Context/ContextIndex.vue';
    import { RouterView } from 'vue-router';
</script>

<template>
    <div class="learning-layout">
        <ToolIndex/>
        <RouterView/>
        <ContextIndex/>
    </div>
</template>

<style lang="scss">
    
</style>