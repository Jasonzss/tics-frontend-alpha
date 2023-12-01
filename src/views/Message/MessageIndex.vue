<script setup>

</script>

<template>
    <div class="message">
        <div class="message-header">
            <div class="message-menus">
                <div class="message-menu">点赞</div>
                <div class="message-menu">回复</div>
                <div class="message-menu">系统消息</div>
                <div class="message-menu">我的消息</div>
            </div>
        </div>
        <main class="message-main">
            <RouterView/>
        </main>
    </div>
</template>

<style lang="scss">
    .message{
        display:flex;
        flex-direction: column;
        align-items:center;

        & > *{
            width: 50%;
            border: solid red 2px;
        }

        .message-header{
            .message-menus{
                display: flex;

                .message-menu{
                    margin: 15px;
                }
            }
        }

        .message-main{
            height: 500px;
        }
    }
</style>