<template>
  <div id="app">
    <div class="page">
      <HeadMobile></HeadMobile>
      <NavMobile></NavMobile>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadMobile from './components/head'
import NavMobile from './components/nav'
export default {
  name: 'app',
  components:{
    HeadMobile,
    NavMobile
  }
}
</script>

<style>

.page{  position: relative;z-index: 99; transition: all 0.5s;}
</style>
