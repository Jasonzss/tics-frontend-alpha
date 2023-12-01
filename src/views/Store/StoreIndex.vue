<script setup>
</script>

<template>
    <div class="store">
        <div class="banner">
            轮播图
        </div>
        <div class="store-header">
            <div>积分</div>
        </div>
        <div class="store-main">
            <div class="store-menus">
                <div class="store-menu">商城主页既包含每日任务也包含推荐商品</div>
                <div class="store-menu">所有商品</div>
                <div class="store-menu">积分任务</div>
                <div class="store-menu">积分收支情况</div>
            </div>
            <div class="store-main-pannel">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .store{
        display: flex;
        flex-direction: column;
        align-items: center;

        & > * {
            width: 50%;
            border: solid red 2px;
        }

        .banner{
            height: 200px;
        }

        .store-header{
            height: 80px;
        }

        .store-main{
            height: 400px;
            display: flex;
            flex-direction: column;

            .store-menus{
                display: flex;
                border: solid red 2px;

                .store-menu{
                    margin: 15px;
                }
            }

            .store-main-pannel{
                width: 100%;
                height: 400px;
                border: solid rgb(9, 255, 0) 2px;
            }
        }
    }
</style>