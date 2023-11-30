<script setup>
const properties = defineProps({
    //父组件传进来的参数
    essay: String,
    title: String,
    audio: String,
    id: String
})

</script>

<template>
    <div :id=properties.id class="audio-player" @mouseup="$router.push('/audio/'+properties.id)">
        <div class="container-above-audio">
            <span class="audio-title">{{ properties.title }}</span>
            <span>{{ properties.essay }}</span>
        </div>
        <audio controls>
            <source :src=properties.audio type="audio/mpeg">
        </audio>
    </div>
</template>

<style lang="scss">
    .audio-player{
        padding: 5px 20px 0 20px;

        .container-above-audio{
            display:flex;
            flex-direction: column;

            .audio-title{
                font-weight: bold;
                font-size: 20px
            }
        }
    }
</style>