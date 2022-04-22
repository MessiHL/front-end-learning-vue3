<template>
<!-- 
  参考  
  https://blog.csdn.net/qq1195566313/article/details/122792620
 -->
  <h2>computed 对象形式</h2>
  <button @click="comp = 100">setPrice</button>
  <div>{{comp}}</div>

</template>

<script setup lang="ts">
import { computed,ref } from 'vue';
let price = ref<number | string>(1)
let comp = computed({
  get:()=>{
    console.log('get');
    return price.value
  },
  set:(value) =>{
    price.value = 'set~~' + value
  }
})



</script>
<style>

</style>
