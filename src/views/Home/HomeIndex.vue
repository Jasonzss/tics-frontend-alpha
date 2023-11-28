<script setup>
    import LeftPanel from './components/LeftPanel.vue';
    import MainPanel from './components/MainPanel.vue';
    import RightPanel from './components/RightPanel.vue';
</script>
<template>
    <div class="main-container">
        <LeftPanel class="left-panel"/>
        <MainPanel class="main-panel"/>
        <RightPanel class="right-panel"/>
    </div>

</template>


<style lang="scss">
    .main-container{
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .left-panel{
            width: 25%;
        }
        .main-panel{
            width: 50%;
        }
        .right-panel{
            width: 25%;
        }
    }
</style>