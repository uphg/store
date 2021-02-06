---
title: "React 教程"
---

<h2>Todo</h2>

<div class="todo">
  <label v-for="(value, key) in todoList" :key="key" >
    <input
      type="checkbox"
      :value="value"
      v-model="checked"
    >
    <span>{{value.name}}</span>
  </label>
</div>

<script>
const createTodo = (status, name) => ({ name, status })

export default {
  data() {
    return {
      todoList: [
        createTodo(1, 'React 入门实例教程'),
        createTodo(1, 'React Hooks 入门教程'),
        createTodo(1, 'React 钩子：useEffect()'),
        createTodo(0, 'React Router 使用教程'),
        createTodo(1, 'Redux 入门教程（一）：基本用法'),
        createTodo(0, 'Redux 入门教程（二）：中间件与异步操作'),
        createTodo(0, 'Redux 入门教程（三）：React-Redux 的用法'),
      ],
      checked: []
    }
  },
  mounted() {
    const activeChecked = this.todoList.filter(item => item.status === 1)
    this.checked = [...activeChecked]
    console.log(this.checked)
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