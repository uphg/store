---
title: CSS 使用技巧
date: 2021-01-31T11:16:01+08:00
categories: 前端
tags:
  - CSS
  - 阮一峰
---

***

作者： [阮一峰](http://www.ruanyifeng.com/)

日期： [2010年3月31日](http://www.ruanyifeng.com/blog/2010/03/)

***

## 3D 按钮

要使按钮具有3D效果，只要将它的左上部边框设为浅色，右下部边框设为深色即可。

```css
button {
  color: #ffffff;
  outline: 0;
  background-color: #6c4330;
  border: 3px solid;
  border-color: #906957 #4c1c0a #4c1c0a #906957;
}
button:active,
button:focus {
  background-color: #ac8a7b;
  border-color: #966f5d #cfaf9a #cfaf9a #966f5d;
}
```

<section class="re-part button-tab">
  <button class="css-button-demo">Home</button>
  <button class="css-button-demo">About</button>
  <button class="css-button-demo">Services</button>
</section>

## font属性的快捷写法

font快捷写法的格式为：

```css
body {
  font: font-style font-variant font-weight font-size line-height font-family;
}
```

所以，

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: normal;
  font-variant: small-caps;
  font-style: italic;
  line-height: 150%;
}
```

可以被写成：

```css
body {
  font: italic small-caps normal 13px/150% Arial, Helvetica, sans-serif;
}
```

## link 状态的设置顺序

link 的四种状态，需要按照下面的前后顺序进行设置：

```css
a:link
a:visited
a:hover
a:active
```

## CSS三角形

如何使用CSS生成一个三角形？

先编写一个空元素

```html
<div class="triangle"></div>
```

然后，将它四个边框中的三个边框设为透明，剩下一个设为可见，就可以生成三角形效果：

```css
.triangle {
  border-color: transparent transparent #276678 transparent;
  border-style: solid;
  border-width: 0px 60px 60px 60px;
  height: 0px;
  width: 0px;
}
```

<section class="re-part">
  <div class="triangle"></div>
</section>


## 禁止自动换行

如果你希望文字在一行中显示完成，不要自动换行，CSS命令如下

```css
h1 { white-space:nowrap; }
```


<style scoped>
.css-button-demo {
  color: #eeeeee;
  font-size: 20px;
  padding: 6px 24px;
  border-radius: 0;
  background: #6c4330;
  border: 3px solid;
  border-color: #906957 #4c1c0a #4c1c0a #906957;
}
.css-button-demo:hover,
.css-button-demo:active {
  color: #eeeeee;
  border-color: #906957 #4c1c0a #4c1c0a #906957;
}
.css-button-demo:focus {
  color: #eeeeee;
  box-shadow: none;
}
.css-button-demo:active,
.css-button-demo:focus {
  background-color: #ac8a7b;
  border-color: #966f5d #cfaf9a #cfaf9a #966f5d;
}
.button-tab {
  display: flex;
}

.triangle {
  border-color: transparent transparent #276678 transparent;
  border-style: solid;
  border-width: 0px 60px 60px 60px;
  height: 0px;
  width: 0px;
}
</style>