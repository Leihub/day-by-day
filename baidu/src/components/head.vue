<template>
<header class="head">
  <img v-for='img in imgs' :class="setClass(img.class)" :src="setSrc(img.src)" />
  <img src='../assets/head/icon-search.png' class="searchBtn" v-on:click="openSearch">
  <div class="searchPage">
    <div class="header">
      <div class="search">
        <img src="../assets/head/icon-search.png">
      </div>
      <div class="closeSearch" v-on:click="closeSearch">
        <div class="left"></div>
        <div class="right"></div>
      </div>

    </div>
  </div>
  <div class="aside" v-on:click="showlist">
      <div v-for="i in 3" class="line"></div>
  </div>
  <!-- <div class="asidenav">
    <ul>
      <li v-for="item in items" class="navlist">{{ item }}</li>
    </ul>
  </div> -->
</header>
</template>

<script>
export default {
  name: 'head',
  data() {
    return {
      imgs: [],
    }
  },
  created() {
    this.imgs = [{
        class: 'baijia',
        src: require('../assets/head/logo-baijia.png')
      },
      {
        class: 'baidu',
        src: require('../assets/head/logo-baidu.png')
      }
    ]
  },
  methods: {
    setClass: function(classname) {
      return classname
    },
    setSrc: function(src) {
      return src
    },
    openSearch: function() {
      var searchpage = document.querySelector('.head .searchPage')
      searchpage.style.display = ' block'
    },
    closeSearch:function () {
      var searchpage = document.querySelector('.head .searchPage')
      searchpage.style.display = ' none'
    },
    showlist:function() {

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {height: 60px;background: #262627;position: relative;}
img {height: 50px;position: absolute;top: 5px;}
.baijia {height: 40px;top: 10px;left: 10px;}
.baidu {right: 30%;}
.searchBtn {position: absolute;right: 15%}
.searchPage {display: none;position: fixed;height: 100%;width: 100%;background: #fff;z-index: 999;}
.header {height: 60px;display: flex;justify-content: space-around;align-items: center;padding: 0 2%;background: #262627;}
.search {height: 40px;width: 82%;border: 1px solid #eee;display: flex;justify-content: flex-end;align-items: center;}
.right,.left{height: 2px;width: 30px;background-color: white;position: absolute;top: 30px;right: 10px}
.right{transform: rotate(-45deg)}
.left{transform: rotate(45deg);}
.aside{position: absolute;right: 10px;top: 20px}
.aside .line{height: 2px;width: 30px;background-color: white;margin-bottom: 10px}
.asidenav{width: 80px;height: auto;position: fixed;right: 0;top:30px;background-color: #262627;}
.asidenav li{text-align: center;color: white;}

</style>
