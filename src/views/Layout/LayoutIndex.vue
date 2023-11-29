<script setup>
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
    <div class="layout-index">
        <LayoutNav/>
        <RouterView/>
        <LayoutFooter/>
    </div>
</template>

