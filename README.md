# day-by-day
everyday study notes
# 2017-3-12 
  一大早就来公司了，吃的很饱，心满意足的。查了论文的一些资料，然后把昨天剩下的requirejs看完了，requirejs加载script标签比传统的script标签优雅一些。传统script 需要引用很多个标签，对于每次加载脚本对性能消耗很大。requirejs 用的baseUrl方式搜索脚本。data-main 就是baseUrl路径。后面的文件当作js接口，不用引入很多脚本。
  requirejs 的原理就是动态的加入script标签。head.appendChild()方式。
  就昨天和今天看的前端模块化，现在的前端项目大多数都是模块化组件化开发。把整个项目的功能写成模块，对于多人开发和后期维护更友好，COMMONJS规范就是常见的require全局变量写入依赖模块，exports.xx写入模块。AMD规范就是define（{}）.必须的就是回调函数，当省略前两个参数时候，可以加入commonjs require 依赖模块。
# 2017-3-13 
  每天都是早上吃的贼饱愉快的来公司上班，下一整夜的雨 心情一下子就不怎么愉快了。学习了一上午的react，操作了一点基本入门操作。react思想主要就是组件化思想。将一个页面分为几个组件，跟传统的思想不一样了，传统的表现层行为层分离。但是react只是行为层的表现，对于数据要靠redux结合使用。中午又去吃了冒菜，异乡最有成都味的美食了。回来又在gitbook上去寻找到了一本函数式编程。对于里面的思想还没有很透彻的理解，不过倒是明白一个纯函数和柯里化的概念。今晚回去把柯里化搞懂。 然后愉快的一天打酱油又过去了。
# 2017-3-15
  昨天太忙没来得及记录我的日常。昨天真的是蒙蔽了一整天，几个月没有写过代码了，代码量太少真的苦逼。现在的到一个心得就是看的多不如写的多。一切不动手练习的都是空了吹。昨天写的页面其实是一个很简单的页面，由于从来没有干过移动端和切图对于很多东西都是陌生的。这两天忙的差不多了，晚上可以好好睡觉了，好好吃饭了。由于缺乏经验还是害怕自己会失业，所以加油吧。对移动端的我完全是陌生的，想做一个最简单的js弹出框都怕写错，还有就是页面还有一个问题就是图片的自适应不知道怎么做到，定位的图片分辨率不同会改变位置。
# 2017-3-17
  昨天忙着回家做饭又忘了更新这个，这两天每天都在做一个需求，昨天写了一个js弹出框，功能实现倒是很简单，就是没有考虑太多，其实在师父没有给我说要声明一个变量来检测底层锁定我完全对下层锁定是没有想法的。还有一个遮罩功能透明黑色背景也没有想到。今天也是没啥事就写了一个页面，比第一天写页面快多了，不过还是跟师父的页面区别很大。还是没搞清楚我的为啥不是想象中的那样子。今天的高铁页面还要有一个滑动功能，应该是跟轮播功能差不多，不过不知道到底是圆圈滑动还是下面的站台也跟着动。明天下午来公司再研究了。今天好像也快感冒了，真不想上班。看了一天的屏幕眼睛快瞎了的感觉。难过。
