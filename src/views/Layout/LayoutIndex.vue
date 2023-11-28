<script setup>
    import LayoutNav from './components/LayoutNav.vue';
    import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
    <div>
        <LayoutNav/>
        <RouterView/>
        <LayoutFooter/>
    </div>
</template>