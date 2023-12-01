<script setup>
    import MainPanel from './components/MainPanel.vue';
</script>
<template>
    <div class="main-container">
        <MainPanel class="main-panel"/>
    </div>

</template>


<style lang="scss">
    .main-container{
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .main-panel{
            width: 50%;
        }
    }
</style>