<script setup>
const properties = defineProps({
    //父组件传进来的参数
    essay: String,
    title: String,
    video: String,
    id: String
})

//import VideoPlayer from '@/views/Video/Components/VideoPlayer.vue'

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
    <div class="video-player-container">
        <div class="container-above-video" @mouseup="$router.push('/video/'+properties.id)">
            <div class="video-title">{{ properties.title }}</div>
        </div>
        <div :id=properties.id class="dplayer"></div>
        <div class="container-under-video" @mouseup="$router.push('/video/'+properties.id)">
            <div class="video-desc">{{ properties.essay }}</div>
        </div>
    </div>
</template>



<style lang="scss">
    .video-player-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    

        .container-above-video{
            display: flex;
            width: 94%;
            margin-top: 10px;
            margin-bottom: 5px;

            .video-title{
                font-weight: bold;
                font-size: 20px;
            }
        }
        
        .dplayer{
            margin: 2px 7px 10px 15px;
            width: 95%;
        }

        .container-under-video{
            margin: 0px 40px 10px 30px;
        }
    }
</style>