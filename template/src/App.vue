<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import "./scss/app.scss";
    #app {
        width: 100%;
        height: 100%;
    }
</style>
