<template>
 <!-- 
  自定义组件

 -->
  <h2>自定义指令</h2>
  <button v-auth="'add'">add</button>
  <button v-auth="'update'">update</button>
  <button v-auth="'delete'">delete</button>
  <!-- save 不会显示 -->
  <button v-auth="'save'">save</button>

</template>

<script setup lang="ts">

</script>
<style>
button{
    margin: 20px;
}
</style>
