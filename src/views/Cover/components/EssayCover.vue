<script setup>
    const properties = defineProps({
        //父组件传进来的参数
        essay: String,
        cover: String,
        title: String
    })

    const id = 'id'
</script>

<template>
    <div class="essay-cover" @mouseup="$router.push('/essay/'+id)">
        <div class="cover-img">
            <img :src=properties.cover>
        </div>
        <div class="cover-content">
            <div class="cover-title">{{ properties.title }}</div>
            <div class="essay-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ properties.essay }}</div>
        </div>
    </div>

</template>

<style lang="scss">
    .essay-cover{
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
            
            .essay-content{
                margin-top: 5px;
            }
        }
        
    }
</style>