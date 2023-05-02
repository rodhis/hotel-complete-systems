<template>
    <router-view name="header"></router-view>
    <router-view name="mainpage"></router-view>
    <router-view name="footer"></router-view>
    <router-view name="login"></router-view>
    <router-view name="painel"></router-view>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name: 'App',
}
</script>

<style lang="scss">
@use '@/assets/scss/reset' as *;
@use '@/assets/scss/base' as *;
</style>
