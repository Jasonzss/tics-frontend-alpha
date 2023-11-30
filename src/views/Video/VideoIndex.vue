<script setup>
    import ContentOperations from '@/views/Components/ContentOperations.vue'

    import { onMounted } from 'vue'
    import DPlayer from 'dplayer'

    import { useRoute } from 'vue-router'
    const id = useRoute().params.id

    const url = 'http://localhost:4000/src/assets/video/SaveYourTears.mp4'

    onMounted(() => {
        new DPlayer({
        container: document.getElementById(id),
        autoplay: false,
        theme: '#FADFA3',
        loop: true,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: true,
        preload: 'auto',
        logo: 'http://localhost:4000/src/assets/images/logo1.png',
        volume: 0.7,
        mutex: true,
        video: {
            url: url,
            thumbnails: 'http://localhost:4000/src/assets/images/12345.png',
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
    <div class="video">
        <div class="video-header">
            <div class="video-title">video-title</div>
            <div class="video-info">
                <div class="video-upload-time">上传的时间</div>
                <div class="video-feedback">
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
        <main class="video-main-pannel">
            <div :id=id class="dplayer"></div>
        </main>
        <div class="container-under-video">
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
    .video{
        display: flex;
        flex-direction: column;
        align-items: center;

        .video-header{
            border: solid green 2px;
            height: 200px;
            width: 50%;

            .video-title{
                font-size: 40px;
                font-weight: bold;
                border: solid rgb(0, 255, 34) 2px;
            }

            .video-info{
                display: flex;
                border: solid rgb(98, 0, 255) 2px;
                align-items: center;

                *{
                    font-size: 12px;
                }

                .video-upload-time{
                    border: solid rgb(0, 255, 0) 2px;
                    margin-right: 20px;
                }

                .video-feedback{
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

        .video-main-pannel{
            width: 50%;
        }

        .container-under-video{
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