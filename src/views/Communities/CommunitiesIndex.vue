<script setup>
    import CommunityItem from '@/views/Communities/components/CommunityItem.vue'
</script>

<template>
    <div class="communities">
        <div class="my-communities">myCommunities</div>
        <div class="look-communities">
            <div class="communities-filter">社区过滤器</div>
            <div class="recommend-communities">
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
                <CommunityItem />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .communities{
        display: flex;
        flex-direction: column;
        align-items: center;

        .my-communities{
            width: 50%;
            height: 620px;
            border: rgb(0, 81, 255) solid 2px;
        }

        .look-communities{
            display: flex;  
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 1000px;
            border: rgb(0, 255, 106) solid 2px;

            .communities-filter{
                width: 90%;
                height: 100px;
                border: rgb(217, 255, 0) solid 2px;
            }
            
            .recommend-communities{
                width: 90%;
                height: 70%;
                border: rgb(212, 0, 255) solid 2px;
                display: flex;
                align-items: center;
                flex-direction: column;
            }
        }
    }
</style>