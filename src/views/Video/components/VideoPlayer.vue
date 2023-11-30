<script setup>
const properties = defineProps({
    //父组件传进来的参数
    video: String,
    id: String
})

import { onMounted } from 'vue'
import DPlayer from 'dplayer'

onMounted(() => {
    new DPlayer({
    container: document.getElementById(properties.id),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    logo: 'src/assets/images/logo1.png',
    volume: 0.7,
    mutex: true,
    video: {
        url: properties.video,
        thumbnails: 'src/assets/images/12345.png',
        type: 'auto',
    },
    highlight: [
        {
            time: 20,
            text: '这是第 20 秒',
        },
        {
            time: 120,
            text: '这是 2 分钟',
        },
    ],
});
})

</script>

<template>
    <div :id=properties.id class="dplayer"></div>
</template>

<style lang="scss">
    .dplayer{
        margin: 2px 7px 10px 15px;
        width: 95%;
    }
</style>