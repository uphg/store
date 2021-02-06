---
title: "React 教程"
---

<h2>Todo</h2>

<div class="todo">
  <label v-for="(value, key) in todoList" :key="key" >
    <input
      type="checkbox"
      :value="value"
      v-model="checkedNames"
    >
    <span>{{value}}</span>
  </label>
</div>

<script>
export default {
  data() {
    return {
      todoList: [
        'React 入门实例教程',
        'React Hooks 入门教程',
        'React 钩子：useEffect()',
        'React Router 使用教程',
        'Redux 入门教程（一）：基本用法',
        'Redux 入门教程（二）：中间件与异步操作',
        'Redux 入门教程（三）：React-Redux 的用法',
      ],
      checkedNames: [
        'React 入门实例教程',
        'React Hooks 入门教程',
        'React 钩子：useEffect()',
        'Redux 入门教程（一）：基本用法',
      ]
    }
  }
}
</script>

<style>
.todo {

}
.todo > label {
  display: block;
  margin: 0.5em 0;
}
</style>