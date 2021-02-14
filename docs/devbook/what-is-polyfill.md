---
title: "polyfill 为何物"
date: 2020-10-21T09:31:21+08:00
categories:
    - 前端
tags:
    - JavaScript
    - polyfill
---

Polyfill 你可以理解为"腻子"，就是装修的时候，可以把缺损的地方填充抹平。

举个例子，html5的storage(session,local), 不同浏览器，不同版本，有些支持，有些不支持。

我们又想使用这个特性，怎么办？

有些人就写对应的Polyfill（Polyfill有很多），帮你把这些差异化抹平，不支持的变得支持了（简单来讲，写些代码判断当前浏览器有没有这个功能，没有的话，就写一些支持的补丁代码）。

你只需要把需要的Polyfill引入到你的程序里，就可以了。

比如下面就是对html5各个特性支持的Polyfill,你需要哪个，就引入哪个。当然，你也可以自己写 ：） https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills

举个例子，有些旧浏览器不支持Number.isNaN方法，Polyfill就可以是这样的：

if(!Number.isNaN) { Number.isNaN = function(num) { return(num !== num); } } 啥意思呢，就是假如浏览器没有Number.isNaN方法，那咱们就给它添加上去，所谓Polyfill就是这样解决API的兼容问题的。

shim和polyfill有什么区别 在JavaScript的世界里,有两个词经常被提到,shim和polyfill.它们指的都是什么,又有什么区别? 一个shim是一个库,它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现 一个polyfill就是一个用在浏览器API上的shim.我们通常的做法是先检查当前浏览器是否支持某个API,如果不支持的话就加载对应的polyfill.然后新旧浏览器就都可以使用这个API了.术语polyfill来自于一个家装产品Polyfilla:

Polyfilla是一个英国产品,在美国称之为Spackling Paste(译者注:刮墙的,在中国称为腻子).记住这一点就行:把旧的浏览器想象成为一面有了裂缝的墙.这些[polyfills]会帮助我们把这面墙的裂缝抹平,还我们一个更好的光滑的墙壁(浏览器) Paul Irish发布过一个Polyfills的总结页面“HTML5 Cross Browser Polyfills”.es5-shim是一个shim(而不是polyfill)的例子,它在ECMAScript 3的引擎上实现了ECMAScript 5的新特性,而且在Node.js上和在浏览器上有完全相同的表现(译者注:因为它能在Node.js上使用,不光浏览器上,所以它不是polyfill).

前端真是万年坑。。。


******

本文转自：[https://juejin.im/post/6844903549768302606](https://juejin.im/post/6844903549768302606)