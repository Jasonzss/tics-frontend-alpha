<script setup>
    const properties = defineProps({
        //父组件传进来的参数
        essay: String,
        cover: String,
        title: String
    })
</script>

<template>
    <div class="text-cover">
        <div class="cover-img">
            <img :src=properties.cover>
        </div>
        <div class="cover-content">
            <div class="cover-title">{{ properties.title }}</div>
            <div class="text-essay">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ properties.essay }}</div>
        </div>
    </div>

</template>

<style lang="scss">
    .text-cover{
        display: flex;
        align-items: flex-start;

        .cover-img{
            width: 700px;
            margin: 10px 5px 0 10px;

            img{
                height: 220px;
            }
        }
        
        .cover-content{
            margin: 12px 10px 0 5px;
            .cover-title{
                margin-top: 5px;
                font-size: 18px;
                font-weight: bold;
            }
            
            .text-essay{
                margin-top: 5px;
            }
        }
        
    }
</style>