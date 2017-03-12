# day-by-day
everyday study notes
# 2017-3-12 
  一大早就来公司了，吃的很饱，心满意足的。查了论文的一些资料，然后把昨天剩下的requirejs看完了，requirejs加载script标签比传统的script标签优雅一些。传统script 需要引用很多个标签，对于每次加载脚本对性能消耗很大。requirejs 用的baseUrl方式搜索脚本。data-main 就是baseUrl路径。后面的文件当作js接口，不用引入很多脚本。
  requirejs 的原理就是动态的加入script标签。head.appendChild()方式。
  就昨天和今天看的前端模块化，现在的前端项目大多数都是模块化组件化开发。把整个项目的功能写成模块，对于多人开发和后期维护更友好，COMMONJS规范就是常见的require全局变量写入依赖模块，exports.xx写入模块。AMD规范就是define（{}）.必须的就是回调函数，当省略前两个参数时候，可以加入commonjs require 依赖模块。
