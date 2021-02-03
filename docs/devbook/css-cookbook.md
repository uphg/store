---
title: CSS 使用技巧
date: 2021-01-31T11:16:01+08:00
categories: 前端
tags:
  - CSS
  - 阮一峰
---

## 3D 按钮

要使按钮具有3D效果，只要将它的左上部边框设为浅色，右下部边框设为深色即可。

```css
div#button {
  background: #888;
  border: 1px solid;
  border-color: #999 #777 #777 #999;
}
```

<section class="re-part">
  <button class="css-button-demo">Home</button>
  <button class="css-button-demo">About</button>
  <button class="css-button-demo">Services</button>
</section>

<style scoped>
.css-button-demo {
  color: #eeeeee;
  font-size: 20px;
  padding: 6px 24px;
  border-radius: 0;
  background: #6c4330;
  border: 5px solid;
  border-color: #906957 #4c1c0a #4c1c0a #906957;
}
.css-button-demo:hover,
.css-button-demo:active {
  color: #eeeeee;
  border-color: #906957 #4c1c0a #4c1c0a #906957;
}
.css-button-demo:focus {
  color: #eeeeee;
}
.css-button-demo:active,
.css-button-demo:focus {
  background-color: #ac8a7b;
  border-color: #966f5d #cfaf9a #cfaf9a #966f5d;
}
</style>