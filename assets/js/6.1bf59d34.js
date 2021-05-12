(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{391:function(t,e,s){},426:function(t,e,s){"use strict";s(391)},445:function(t,e,s){"use strict";s.r(e);s(426);var a=s(29),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("p",[t._v("作者： "),s("a",{attrs:{href:"http://www.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("日期： "),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/",target:"_blank",rel:"noopener noreferrer"}},[t._v("2015 年 7 月 10 日"),s("OutboundLink")],1)]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("网页布局（layout）是 CSS 的一个重点应用。")]),t._v(" "),s("p",[t._v("布局的传统解决方案，基于"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/box_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("盒状模型"),s("OutboundLink")],1),t._v("，依赖 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("display")]),s("OutboundLink")],1),t._v(" 属性 + "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("position")]),s("OutboundLink")],1),t._v("属性 + "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/float",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("float")]),s("OutboundLink")],1),t._v("属性。它对于那些特殊布局非常不方便，比如，"),s("a",{attrs:{href:"https://css-tricks.com/centering-css-complete-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("垂直居中"),s("OutboundLink")],1),t._v("就不容易实现。")]),t._v(" "),s("p",[t._v("2009 年，W3C 提出了一种新的方案----Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。")]),t._v(" "),s("table",[s("caption",[t._v("Browsers support")]),t._v(" "),s("tr",[s("th",[t._v("Chrome")]),t._v(" "),s("th",[t._v("Opera")]),t._v(" "),s("th",[t._v("Firefox")]),t._v(" "),s("th",[t._v("Safari")]),t._v(" "),s("th",[t._v("IE")])]),t._v(" "),s("tr",[s("td",[t._v("21+")]),t._v(" "),s("td",[t._v("12.1+")]),t._v(" "),s("td",[t._v("22+")]),t._v(" "),s("td",[t._v("6.1+")]),t._v(" "),s("td",[t._v("10+")])])]),t._v(" "),s("p",[t._v("Flex 布局将成为未来布局的首选方案。本文介绍它的语法，"),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下一篇文章"),s("OutboundLink")],1),t._v("给出常见布局的 Flex 写法。网友 "),s("a",{attrs:{href:"http://vgee.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JailBreak"),s("OutboundLink")],1),t._v(" 为本文的所有示例制作了 "),s("a",{attrs:{href:"http://static.vgee.cn/static/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo"),s("OutboundLink")],1),t._v("，也可以参考。")]),t._v(" "),s("p",[t._v("以下内容主要参考了下面两篇文章："),s("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Complete Guide to Flexbox"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Visual Guide to CSS3 Flexbox Properties"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"一、flex-布局是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-布局是什么"}},[t._v("#")]),t._v(" 一、Flex 布局是什么？")]),t._v(" "),s("p",[t._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。')]),t._v(" "),s("p",[t._v("任何一个容器都可以指定为 Flex 布局。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("行内元素也可以使用 Flex 布局。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Webkit 内核的浏览器，必须加上"),s("code",[t._v("-webkit")]),t._v("前缀。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -webkit-flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Safari */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意，设为 Flex 布局以后，子元素的"),s("code",[t._v("float")]),t._v("、"),s("code",[t._v("clear")]),t._v("和"),s("code",[t._v("vertical-align")]),t._v("属性将失效。")]),t._v(" "),s("h2",{attrs:{id:"二、基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[t._v("#")]),t._v(" 二、基本概念")]),t._v(" "),s("p",[t._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/bg2015071004.png"),alt:"图片"}}),t._v(" "),s("p",[t._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做"),s("code",[t._v("main start")]),t._v("，结束位置叫做"),s("code",[t._v("main end")]),t._v("；交叉轴的开始位置叫做"),s("code",[t._v("cross start")]),t._v("，结束位置叫做"),s("code",[t._v("cross end")]),t._v("。")]),t._v(" "),s("p",[t._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做"),s("code",[t._v("main size")]),t._v("，占据的交叉轴空间叫做"),s("code",[t._v("cross size")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"三、父容器的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、父容器的属性"}},[t._v("#")]),t._v(" 三、父容器的属性")]),t._v(" "),s("p",[t._v("以下 6 个属性设置在父容器上。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("flex-direction")])]),t._v(" "),s("li",[s("code",[t._v("flex-wrap")])]),t._v(" "),s("li",[s("code",[t._v("flex-flow")])]),t._v(" "),s("li",[s("code",[t._v("justify-content")])]),t._v(" "),s("li",[s("code",[t._v("align-items")])]),t._v(" "),s("li",[s("code",[t._v("align-content")])])]),t._v(" "),s("h3",{attrs:{id:"_3-1-flex-direction-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction-属性"}},[t._v("#")]),t._v(" 3.1 flex-direction 属性")]),t._v(" "),s("p",[s("code",[t._v("flex-direction")]),t._v("属性决定主轴的方向（即项目的排列方向）。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row | row-reverse | column | column-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/css-flex_01.jpg"),alt:"图片"}}),t._v(" "),s("p",[t._v("它可能有 4 个值。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("row")]),t._v("（默认值）：主轴为水平方向，起点在左端。")]),t._v(" "),s("li",[s("code",[t._v("row-reverse")]),t._v("：主轴为水平方向，起点在右端。")]),t._v(" "),s("li",[s("code",[t._v("column")]),t._v("：主轴为垂直方向，起点在上沿。")]),t._v(" "),s("li",[s("code",[t._v("column-reverse")]),t._v("：主轴为垂直方向，起点在下沿。")])]),t._v(" "),s("h3",{attrs:{id:"_3-2-flex-wrap-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-flex-wrap-属性"}},[t._v("#")]),t._v(" 3.2 flex-wrap 属性")]),t._v(" "),s("p",[t._v('默认情况下，项目都排在一条线（又称"轴线"）上。'),s("code",[t._v("flex-wrap")]),t._v("属性定义，如果一条轴线排不下，如何换行。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/bg2015071006.png"),alt:"图片"}}),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-wrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap | wrap | wrap-reverse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("它可能取三个值。")]),t._v(" "),s("p",[t._v("（1）"),s("code",[t._v("nowrap")]),t._v("（默认）：不换行。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/css-flex_04.jpg"),alt:"图片"}}),t._v(" "),s("p",[t._v("（2）"),s("code",[t._v("wrap")]),t._v("：换行，第一行在上方。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/css-flex_02.jpg"),alt:"图片"}}),t._v(" "),s("p",[t._v("（3）"),s("code",[t._v("wrap-reverse")]),t._v("：换行，第一行在下方。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/css-flex_03-01.jpg"),alt:"图片"}}),t._v(" "),s("h3",{attrs:{id:"_3-3-flex-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-flow"}},[t._v("#")]),t._v(" 3.3 flex-flow")]),t._v(" "),s("p",[s("code",[t._v("flex-flow")]),t._v("属性是"),s("code",[t._v("flex-direction")]),t._v("属性和"),s("code",[t._v("flex-wrap")]),t._v("属性的简写形式，默认值为"),s("code",[t._v("row nowrap")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <flex-direction> || <flex-wrap>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-4-justify-content-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-justify-content-属性"}},[t._v("#")]),t._v(" 3.4 justify-content 属性")]),t._v(" "),s("p",[s("code",[t._v("justify-content")]),t._v("属性定义了项目在主轴上的对齐方式。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/bg2015071010.png"),alt:"图片"}}),t._v(" "),s("p",[t._v("它可能取 5 个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("flex-start")]),t._v("（默认值）：左对齐")]),t._v(" "),s("li",[s("code",[t._v("flex-end")]),t._v("：右对齐")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v("： 居中")]),t._v(" "),s("li",[s("code",[t._v("space-between")]),t._v("：两端对齐，项目之间的间隔都相等。")]),t._v(" "),s("li",[s("code",[t._v("space-around")]),t._v("：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])]),t._v(" "),s("h3",{attrs:{id:"_3-5-align-items-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-items-属性"}},[t._v("#")]),t._v(" 3.5 align-items 属性")]),t._v(" "),s("p",[s("code",[t._v("align-items")]),t._v("属性定义项目在交叉轴上如何对齐。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/css-flex_06.jpg"),alt:"图片"}}),t._v(" "),s("p",[t._v("baseline 属性图示")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/css-flex_07.jpg"),alt:"图片"}}),t._v(" "),s("p",[t._v("它可能取 5 个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("flex-start")]),t._v("：交叉轴的起点对齐。")]),t._v(" "),s("li",[s("code",[t._v("flex-end")]),t._v("：交叉轴的终点对齐。")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v("：交叉轴的中点对齐。")]),t._v(" "),s("li",[s("code",[t._v("baseline")]),t._v(": 项目的第一行文字的基线对齐。")]),t._v(" "),s("li",[s("code",[t._v("stretch")]),t._v("（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。")])]),t._v(" "),s("h3",{attrs:{id:"_3-6-align-content-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content-属性"}},[t._v("#")]),t._v(" 3.6 align-content 属性")]),t._v(" "),s("p",[s("code",[t._v("align-content")]),t._v("属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-start | flex-end | center | space-between | space-around |\n    stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/bg2015071012.png"),alt:"图片"}}),t._v(" "),s("p",[t._v("该属性可能取 6 个值。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("flex-start")]),t._v("：与交叉轴的起点对齐。")]),t._v(" "),s("li",[s("code",[t._v("flex-end")]),t._v("：与交叉轴的终点对齐。")]),t._v(" "),s("li",[s("code",[t._v("center")]),t._v("：与交叉轴的中点对齐。")]),t._v(" "),s("li",[s("code",[t._v("space-between")]),t._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),t._v(" "),s("li",[s("code",[t._v("space-around")]),t._v("：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),t._v(" "),s("li",[s("code",[t._v("stretch")]),t._v("（默认值）：轴线占满整个交叉轴。")])]),t._v(" "),s("h2",{attrs:{id:"四、子元素的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、子元素的属性"}},[t._v("#")]),t._v(" 四、子元素的属性")]),t._v(" "),s("p",[t._v("以下 6 个属性设置在子元素上。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("order")])]),t._v(" "),s("li",[s("code",[t._v("flex-grow")])]),t._v(" "),s("li",[s("code",[t._v("flex-shrink")])]),t._v(" "),s("li",[s("code",[t._v("flex-basis")])]),t._v(" "),s("li",[s("code",[t._v("flex")])]),t._v(" "),s("li",[s("code",[t._v("align-self")])])]),t._v(" "),s("h3",{attrs:{id:"_4-1-order-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-order-属性"}},[t._v("#")]),t._v(" 4.1 order 属性")]),t._v(" "),s("p",[s("code",[t._v("order")]),t._v("属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <integer>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/bg2015071013.png"),alt:"图片"}}),t._v(" "),s("h3",{attrs:{id:"_4-2-flex-grow-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-flex-grow-属性"}},[t._v("#")]),t._v(" 4.2 flex-grow 属性")]),t._v(" "),s("p",[s("code",[t._v("flex-grow")]),t._v("属性定义项目的放大比例，默认为"),s("code",[t._v("0")]),t._v("，即如果存在剩余空间，也不放大。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 0 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/bg2015071014.png"),alt:"图片"}}),t._v(" "),s("p",[t._v("如果所有项目的"),s("code",[t._v("flex-grow")]),t._v("属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的"),s("code",[t._v("flex-grow")]),t._v("属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。")]),t._v(" "),s("h3",{attrs:{id:"_4-3-flex-shrink-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-flex-shrink-属性"}},[t._v("#")]),t._v(" 4.3 flex-shrink 属性")]),t._v(" "),s("p",[s("code",[t._v("flex-shrink")]),t._v("属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default 1 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/css_flex_08.jpg"),alt:"图片"}}),t._v(" "),s("p",[t._v("如果所有项目的"),s("code",[t._v("flex-shrink")]),t._v("属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的"),s("code",[t._v("flex-shrink")]),t._v("属性为 0，其他项目都为 1，则空间不足时，前者不缩小。")]),t._v(" "),s("p",[t._v("负值对该属性无效。")]),t._v(" "),s("h3",{attrs:{id:"_4-4-flex-basis-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-flex-basis-属性"}},[t._v("#")]),t._v(" 4.4 flex-basis 属性")]),t._v(" "),s("p",[s("code",[t._v("flex-basis")]),t._v("属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为"),s("code",[t._v("auto")]),t._v("，即项目的本来大小。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-basis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <length> | auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* default auto */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("它可以设为跟"),s("code",[t._v("width")]),t._v("或"),s("code",[t._v("height")]),t._v("属性一样的值（比如 350px），则项目将占据固定空间。")]),t._v(" "),s("h3",{attrs:{id:"_4-5-flex-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-flex-属性"}},[t._v("#")]),t._v(" 4.5 flex 属性")]),t._v(" "),s("p",[s("code",[t._v("flex")]),t._v("属性是"),s("code",[t._v("flex-grow")]),t._v(", "),s("code",[t._v("flex-shrink")]),t._v(" 和 "),s("code",[t._v("flex-basis")]),t._v("的简写，默认值为"),s("code",[t._v("0 1 auto")]),t._v("。后两个属性可选。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none | [ < "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-grow'")]),t._v(" > < "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-shrink'")]),t._v(" >? || < "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'flex-basis'")]),t._v(" > ]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("该属性有两个快捷值："),s("code",[t._v("auto")]),t._v(" ("),s("code",[t._v("1 1 auto")]),t._v(") 和 none ("),s("code",[t._v("0 0 auto")]),t._v(")。")]),t._v(" "),s("p",[t._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),t._v(" "),s("h3",{attrs:{id:"_4-6-align-self-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-align-self-属性"}},[t._v("#")]),t._v(" 4.6 align-self 属性")]),t._v(" "),s("p",[s("code",[t._v("align-self")]),t._v("属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),s("code",[t._v("align-items")]),t._v("属性。默认值为"),s("code",[t._v("auto")]),t._v("，表示继承父元素的"),s("code",[t._v("align-items")]),t._v("属性，如果没有父元素，则等同于"),s("code",[t._v("stretch")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto | flex-start | flex-end | center | baseline | stretch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/bg2015071016.png"),alt:"图片"}}),t._v(" "),s("p",[t._v("该属性可能取 6 个值，除了 auto，其他都与 "),s("code",[t._v("align-items")]),t._v(" 属性完全一致。")]),t._v(" "),s("p",[t._v("（完）")]),t._v(" "),s("h2",{attrs:{id:"文档信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档信息"}},[t._v("#")]),t._v(" 文档信息")]),t._v(" "),s("ul",[s("li",[t._v("版权声明：自由转载-非商用-非衍生-保持署名"),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("创意共享 3.0 许可证"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("发表日期： 2015 年 7 月 10 日")])]),t._v(" "),s("blockquote",[s("p",[t._v("转载自："),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);