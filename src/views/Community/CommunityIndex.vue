<script setup>

</script>

<template>
    <div class="community">
        <div class="community-banner">
            <div>社区内部页面，在这你可以只查看这个社区相关的内容</div>
            <div>banner</div>
        </div>
        <div class="community-header">
            <div class="header-main">
                <div class="community-img">
                    
                </div>
                <div class="container-next-img">
                    <div class="community-info">
                        <div>社区信息</div>
                    </div>
                    <div class="community-operator">
                        <div>操作</div>
                    </div>
                </div>
            </div>
            <div class="header-tag">
                <div class="community-tag">tag1</div>
                <div class="community-tag">tag2</div>
                <div class="community-tag">tag3</div>
                <div class="community-tag">tag4</div>
            </div>
        </div>
        <div class="community-main-pannel">
            <div class="community-posts">
                <div class="posts-filter">帖子过滤器</div>
                <div class="posts-view">帖子视图</div>
            </div>
            <div class="container-next-posts">
                this is a container
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .community{
        display: flex;
        flex-direction: column;

        .community-banner{
            width: 100%;
            height: 150px;
            border: rgb(9, 255, 0) solid 2px;
        }

        .community-header{
            width: 100%;
            height: 120px;
            border: rgb(0, 81, 255) solid 2px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .header-main{
                height: 70%;
                width: 60%;
                display: flex;
                border: rgb(9, 255, 0) solid 2px;
            }

            .header-tag{
                height: 30%;
                width: 60%;
                display: flex;
                border: rgb(9, 255, 0) solid 2px;

                .community-tag{
                    margin: 5px 10px 0px 10px;
                }
            }
        }

        .community-main-pannel{
            display: flex;
            justify-content: center;
            border: rgb(255, 251, 0) solid 2px;

            .community-posts{
                width: 35%;
                height: 1000px;
                border: rgb(0, 238, 255) solid 2px;
                padding: 20px;

                .posts-filter{
                    height: 100px;
                    border: rgb(0, 81, 255) solid 2px;
                }

                .posts-view{
                    height: 800px;
                    border: rgb(195, 0, 255) solid 2px;
                }
                
            }

            .container-next-posts{
                width:20%;
                height: 600px;
                border: rgb(0, 162, 255) solid 2px;
            }
        }
    }
    
</style>