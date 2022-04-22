<template>
<!-- 
  参考  
  https://blog.csdn.net/qq1195566313/article/details/122792620
 -->
  <h2>computed 函数形式</h2>
  <button @click="setPrice()">setPrice</button>
  <div>{{comp}}</div>

</template>

<script setup lang="ts">
import { computed,ref } from 'vue';
let price = ref(0)
let comp = computed<string>(()=>{
  return `$  ${price.value * 2}`
})

const setPrice = ()=>{
  price.value++
}

</script>
<style>

</style>
