<script setup>

</script>

<template>
    <div class="search">
        <div class="search-banner"></div>
        <div class="search-header">header</div>
        <main class="search-main">
            content
        </main>
    </div>
</template>

<style lang="scss">
    .search{
        display: flex;
        flex-direction: column;
        align-items:center;

        & > *{
            border: solid 2px red;
            width: 50%;
            height: 200px;
        }

        .search-banner{
            display: none;
        }
    }
</style>