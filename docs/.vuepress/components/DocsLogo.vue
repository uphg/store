<template>
  <div class="docs-logo">
    <span :style="{ fontSize: `${size}px`, lineHeight: `${size}px` }">{{
      title
    }}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "v10",
    },
    size: {
      type: [String, Number],
      default: 60,
    },
  },
};
</script>
<style>
.docs-logo {
  height: 200px;
  width: 200px;
  background-color: #ffca26;
  color: #fff;
  font-weight: bold;
  font-family: "Inter", Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 14px;
  padding-bottom: 12px;
  box-sizing: border-box;
}
</style>