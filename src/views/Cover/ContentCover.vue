<script setup>
    const properties = defineProps({
        //父组件传进来的参数
        id: String
    })

    //查找id对应的内容资源，根据资源类型使用不同的 content-cover-main
    import { useContentsIntroStore } from '@/stores/content.js'

    const contentIntroStore = useContentsIntroStore()
    const { getContentsIntro } = contentIntroStore
    var contentIntroData  = await getContentsIntro(properties.id)
    console.log(contentIntroData)

    import TextCover from '@/views/Cover/components/TextCover.vue';
    import AudioCover from '@/views/Cover/components/AudioCover.vue';
    import VideoCover from '@/views/Cover/components/VideoCover.vue';
</script>

<template>
    <div class="content-template">
        <div class="content-cover-title">
            <div class="content-info">
                <img class="info-avatar" :src=contentIntroData.author.avatar>
                <div class="info-txt">
                    <span>{{ contentIntroData.author.username }}</span>
                    <span>{{ contentIntroData.time }}</span>
                </div>
                <span>{{ contentIntroData.id }}</span>
            </div>
        </div>
        <div class="content-cover-main">
            <div v-if="0 === contentIntroData.type">
                <TextCover :cover=contentIntroData.cover :essay=contentIntroData.intro :title=contentIntroData.title />
            </div>
            <div v-else-if="1 === contentIntroData.type" >
                <AudioCover :essay=contentIntroData.intro :title=contentIntroData.title :audio=contentIntroData.audio :id=contentIntroData.id />
            </div>
            <div v-else-if="2 === contentIntroData.type">     
                <VideoCover :essay=contentIntroData.intro :title=contentIntroData.title :video=contentIntroData.video :id=contentIntroData.id />
            </div>
        </div>
        <div class="content-feedback">
            <div><i class="iconfont icon-bofangliang"/><div>{{ contentIntroData.feedback.views }}</div></div>
            <div><i class="iconfont icon-iconfontxihuan"/><div>{{ contentIntroData.feedback.like }}</div></div>
            <div><i class="iconfont icon-z-like"/><div>{{ contentIntroData.feedback.approve }}</div></div>
            <div><i class="iconfont icon-pinglun"/><div>{{ contentIntroData.feedback.comment }}</div></div>
        </div>
    </div>
</template>

<style lang="scss">
    .content-template{
        border: 2px solid #00b43b;
        margin: 20px;

        .content-cover-title{
            .content-info{
                display: flex;
                margin-left: 5px;
                margin-top: 5px;

                img{
                    width:50px
                }

                .info-txt{
                    display: flex;
                    flex-direction: column
                }
            }
        }

        .content-cover-main{
            height: 70%;
        }

        .content-feedback{
            display: flex;
            justify-content: space-around;
        }
    }
</style>