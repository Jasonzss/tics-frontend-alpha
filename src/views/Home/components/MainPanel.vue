<script setup>
    import { useRecommandIdsStore } from '../../../stores/recommand.js'
    import { storeToRefs } from 'pinia'
    import ContentCover from '@/views/Cover/ContentCover.vue';
    import Hotspot from '../../Hotspot/HotspotIndex.vue'

    const recommandIdsStore = useRecommandIdsStore()
    
    //使用 storeToRefs 对 counterStore 中的数据进行响应式解构
    const { ids } = storeToRefs(recommandIdsStore)
    //转换为数组
    var idArray = ids._rawValue.data
</script>

<template>
    <div class="main-panel-container">
        <div class="slides-show">
            轮播图            
        </div>
        <!-- 此标签用于解决异步方法问题 -->
        <Suspense>
            <ContentCover v-for="id in idArray" :key="id" :id="id"/>
        </Suspense>
        <Hotspot/>
    </div>
</template>

<style class="scss">
    .main-panel-container{
        display:flex;
        flex-direction: column;

        .slides-show{
            height: 300px;
            border: solid red 2px;
        }
    }
</style>