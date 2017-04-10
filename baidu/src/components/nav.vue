<template>
<div id="nav">
  <div class="navlist" v-for="item in items">
    <router-link :to='setPaht(item.path)'><span>{{item.navname}}</span></router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      items: [{
          navname: '精选',
          path: '/select'
        },
        {
          navname: '争鸣',
          path: '/point'
        },
        {
          navname: '作者',
          path: '/author'
        }
      ]
    }
  },
  methods:{
    setPaht:function (path) {
      return path
    }
  }
}
</script>
<style>
#nav{display: flex;height: 50px}
.navlist{display: inline-block;flex:2;text-align: center;line-height: 50px}
.navlist a{display: inline-block;width: 100%;}
.navlist span{font-size: 18px;}
.router-link-active {border-bottom:2px solid red}

</style>
