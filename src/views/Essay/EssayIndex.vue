<script setup>
    import ContentOperations from '@/views/Components/ContentOperations.vue'
</script>

<template>
    <div class="essay">
        <div class="essay-header">
            <div class="essay-title">essay-title</div>
            <div class="essay-info">
                <div class="essay-upload-time">上传的时间</div>
                <div class="essay-feedback">
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
        <main class="essay-main">
            内容
        </main>
        <div class="container-under-essay">
            <div class="content-tags">
                <div class="content-tag">tag</div>
                <div class="content-tag">tag</div>
                <div class="content-tag">tag</div>
                <div class="content-tag">tag</div>
            </div>
        </div>
        <div class="comment-area">

        </div>
    </div>
</template>

<style lang="scss">
    .essay{
        display: flex;
        flex-direction: column;
        align-items: center;

        .essay-header{
            padding: 10px;
            display: flex;
            flex-direction: column;
            width: 50%;
            border: solid red 2px;

            .essay-title{
                font-size: 40px;
                font-weight: bold;
                border: solid rgb(0, 255, 34) 2px;
            }

            .essay-info{
                display: flex;
                border: solid rgb(98, 0, 255) 2px;
                align-items: center;

                *{
                    font-size: 12px;
                }

                .essay-upload-time{
                    border: solid rgb(0, 255, 0) 2px;
                    margin-right: 20px;
                }

                .essay-feedback{
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

        .essay-main{
            height: 500px;
            width: 50%;
            border: solid red 2px;
        }

        .container-under-essay{
            width: 50%;
            border: solid red 2px;
            .content-tags{
                display: flex;

                .content-tag{
                    margin: 12px;
                }
            }
        }

        .comment-area{
            width: 50%;
            border: solid red 2px;
            height: 400px;
            display: none;
        }
    }
</style>