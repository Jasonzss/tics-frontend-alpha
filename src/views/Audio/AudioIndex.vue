<script setup>
    import ContentOperations from '@/views/Components/ContentOperations.vue'

    import { useRoute } from 'vue-router'
    const id = useRoute().params.id
    console.log(id)

    const url = 'http://localhost:4000/src/assets/audio/GrazeTheRoof.mp3'
</script>

<template>
    <div class="audio">
        <div class="audio-header">
            <div class="audio-title">audio-title</div>
            <div class="audio-info">
                <div class="audio-upload-time">上传的时间</div>
                <div class="audio-feedback">
                    <div class="feedback-item">浏览量</div>
                    <div class="feedback-item">点赞</div>
                    <div class="feedback-item">喜欢</div>
                    <div class="feedback-item">收藏</div>
                    <div class="feedback-item">评论</div>
                </div>
            </div>
            <div class="author-info">
                <div class="info-left-container">
                    <div class="avatar-container">
                        <img src="@/assets/images/avatar.jpg"/>
                    </div>
                    <div class="container-next-avatar">
                        <div class="author-name">Jason</div>
                    </div>
                </div>
                <div class="info-right-container">
                    <div>关注</div>
                </div>
            </div>
        </div>
        <ContentOperations/>
        <main class="audio-main-pannel">
            <div class="cover-img">cover-img</div>
            <audio controls>
                <source :src=url type="audio/mpeg">
            </audio>
        </main>
        <div class="container-under-audio">
            <div class="intro">
                简介
            </div>
            <div class="content-tags">
                <div class="content-tag">tag</div>
                <div class="content-tag">tag</div>
                <div class="content-tag">tag</div>
                <div class="content-tag">tag</div>
            </div>
        </div>
        <div class="related-recommend">
            相关推荐
        </div>
        <div class="comment-area">
            评论区
        </div>
    </div>
</template>

<style lang="scss">
    .audio{
        display: flex;
        flex-direction: column;
        align-items: center;

        .audio-header{
            border: solid green 2px;
            height: 200px;
            width: 50%;

            .audio-title{
                font-size: 40px;
                font-weight: bold;
                border: solid rgb(0, 255, 34) 2px;
            }

            .audio-info{
                display: flex;
                border: solid rgb(98, 0, 255) 2px;
                align-items: center;

                *{
                    font-size: 12px;
                }

                .audio-upload-time{
                    border: solid rgb(0, 255, 0) 2px;
                    margin-right: 20px;
                }

                .audio-feedback{
                    display: flex;
                    border: solid rgb(0, 255, 0) 2px;
                    margin-right: 20px;
                    
                    .feedback-item{
                        margin: 10px 20px 10px 20px;
                    }
                }
            }

            .author-info{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .info-left-container{
                    display: flex;

                    .avatar-container{
                        img{
                            width: 70px;
                        }
                    }

                    .container-next-avatar{
                        .author-name{
                            font-size: 20px;
                            margin: 15px;
                        }
                    }
                }
            }
        }

        .audio-main-pannel{
            width: 50%;
            height: 400px;
            border: solid rgb(0, 255, 149) 2px;
        }

        .container-under-audio{
            width: 50%;
            height: 100px;
            
            .intro{
                border: solid red 2px;
                height: 50px;
            }

            .content-tags{
                border: solid red 2px;
                display: flex;

                .content-tag{
                    margin: 15px;
                }
            }
        }

        .related-recommend{
            width: 50%;
            height: 400px;
            border: solid rgb(136, 255, 0) 2px;
        }

        .comment-area{
            display: none;
        }

    }
</style>