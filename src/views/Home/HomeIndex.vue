<script setup>
    import MainPanel from './components/MainPanel.vue';
    import ToolIndex from '../Tool/ToolIndex.vue';
    import ContextIndex from '../Context/ContextIndex.vue';
    import Hotspot from '../Hotspot/HotspotIndex.vue'
</script>
<template>
    <div class="main-container">
        <ToolIndex/>
        <Hotspot/>
        <MainPanel class="main-panel"/>
        <ContextIndex/>
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