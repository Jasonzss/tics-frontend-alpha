<script setup>

</script>

<template>
    <div class="dictionary">
        <div class="top-container">
            <div class="word-container">
                <div class="target-word">word</div>
                <div class="word-pronunciation">
                    <div class="pronunciation-item">美式发音</div>
                    <div class="pronunciation-item">英式发音</div>
                </div>
            </div>
            <div class="familiarity">熟悉度</div>
        </div>
        <div class="main-container">
            <div class="left-container">
                <main class="word-main-pannel">
                    <div class="word-translation">
                        翻译
                    </div>
                    <div class="example-sentence">
                        例句
                    </div>
                    <div class="word-plugins">
                        <div class="word-plugin">相似单词</div>
                        <div class="word-plugin">变体单词</div>
                        <div class="word-plugin">变体</div>
                        <div class="word-plugin">来源</div>
                    </div>
                    <div class="related-content">
                        相关内容
                    </div>
                </main>
            </div>
            <div class="right-container">
                <div class="i-note">我的笔记</div>
                <div class="comment-area">评论区</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .dictionary{
        display: flex;
        align-items: center;
        flex-direction: column;

        & > *{
            width: 60%;
        }

        .top-container{
            padding: 5px;
            border: solid red 2px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .word-container{
                display: flex;
                align-items: flex-end;

                .target-word{
                    padding: 12px;
                    font-size: 40px;
                    font-weight: bold;
                    border: solid rgb(21, 255, 0) 2px;
                }

                .word-pronunciation{
                    display: flex;
                    border: solid rgb(25, 0, 255) 2px;

                    .pronunciation-item{
                        margin: 15px;
                    }
                }
            }

            .familiarity{
                border: solid rgb(0, 255, 128) 2px;
            }
        } 

        .main-container{
            .left-container{
                width: 70%;
                
                .word-main-pannel{
                    border: solid rgb(157, 255, 0) 2px;

                    & > *{
                        width: 100%;
                        border: solid rgb(255, 72, 0) 2px;
                        height: 300px;
                    }

                    .word-plugins{
                        display: flex;
                        padding: 20px;

                        .word-plugin{
                            width: 200px;
                            height: 100%;
                            border: solid rgb(94, 255, 0) 2px;
                        }
                    }
                } 
            }

            .right-container{
                width: 30%;
                height: 800px;
                border: solid rgb(157, 255, 0) 2px;

                .i-note{
                    height: 200px;
                    border: solid rgb(255, 81, 0) 2px;
                }

                .comment-area{
                    height: 500px;
                    border: solid rgb(255, 0, 191) 2px;
                }
            }
        }

    }
</style>