<script setup lang="ts">
  import{ref,Ref,isRef} from 'vue'
  let message:Ref<string> = ref('message')
  let noRefTest:number = 1;
  const changeMeg = ()=>{
    message.value += '!';
    console.log(`isRef:message-${isRef(message)};noRefTest-${isRef(noRefTest)} `);
    
  }
</script>
<template>
<!-- 
  参考 https://blog.csdn.net/qq1195566313/article/details/122780637
 -->
  <div>
    <h2>vue案例：ref_入门</h2>
    <p>ref: 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象仅有一个 .value property，指向该内部值。</p>
    <p>isRef: 判断是不是一个ref对象。</p>
  </div>
  <button @click="changeMeg()">change</button>
  <div>{{message}}</div>
</template>

<style>

</style>
