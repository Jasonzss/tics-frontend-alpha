<script setup>

</script>

<template>
    <div class="creator">
        <div class="creator-header">
            <div class="creator-menus">
                <div class="creator-menu">上传文章</div>
                <div class="creator-menu">上传视频</div>
                <div class="creator-menu">上传音频</div>
                <div class="creator-menu">上传单词本</div>
                <div class="creator-menu">上传...</div>
            </div>
        </div>
        <div class="creator-main">
            在此上传
        </div>
    </div>

</template>

<style lang="scss">
    .creator{
        display: flex;
        flex-direction: column;
        align-items: center;

        & > *{
            width: 50%;
            border: solid red 2px;
        }

        .creator-header{
            .creator-menus{
                display: flex;

                .creator-menu{
                    margin: 15px;
                }
            }
        }

        .creator-main{
            height: 800px;
        }
    }
</style>