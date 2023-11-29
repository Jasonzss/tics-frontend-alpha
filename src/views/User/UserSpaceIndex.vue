<script setup>
    const uid = 'uid'
</script>

<template>
    <div class="userspace">
        <div class="user-banner">banner</div>
        <div class="user-info">
            <div class="userspace-avatar">
                <img src="@/assets/images/avatar.jpg">
            </div>
            <div class="userspace-info">
                <div class="userspace-username">Jason</div>
                <div class="desc">你好</div>
            </div>
        </div>
        <div class="userspace-main">
            <div class="userspace-header">
                <div class="userspace-header-item" @click="$router.push('/userspace/'+uid)">主页</div>
                <div class="userspace-header-item" @click="$router.push('/userspace/'+uid+'/favlist')">收藏</div>
                <div class="userspace-header-item" @click="$router.push('/userspace/'+uid+'/creation')">创作</div>
                <div class="userspace-header-item" @click="$router.push('/userspace/'+uid+'/comment')">评论</div>
            </div>
            <div class="userspace-main-pannel">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .userspace{
        display: flex;
        align-items: center;
        flex-direction: column;

        .user-banner{
            width: 70%;
            height: 150px;
            border: 2px solid #00b43b;
        }

        .user-info{
            display: flex;
            border: 2px solid #0039b4;
            width: 70%;

            .userspace-avatar{
                img{
                    width: 70px;
                }
            }
        }

        .userspace-main{
            display: flex;
            border: 2px solid #8db400;
            width: 70%;
            flex-direction: column;

            .userspace-header{
                display: flex;
                border: 2px solid #b45100;
                
                .userspace-header-item{
                    margin: 0 20px 0 20px;
                }
            }

            .userspace-main-pannel{
                width: 100%;
                height: 1000px;
                border: 2px solid #b41b00;
            }
        }
    }
</style>