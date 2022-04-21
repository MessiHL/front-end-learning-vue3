<script setup lang="ts">
import { track, trigger } from '@vue/reactivity';
import {customRef} from 'vue'
function myRef<T>(value:T){
  return customRef((track,trigger)=>{
    return{
      get(){
        console.log('get...');
        track()
        return value
      },
      set(newVal: T){
        console.log('set...');
        value = newVal
        trigger()
      }
    }
  })
}

let msg =myRef('a')
const changeMsg = ()=>{
  console.log(msg.value);
  msg.value += '!!'
}

</script>

<template>
  <h2>customRef:   是个工厂函数要求我们返回一个对象 并且实现 get 和 set</h2>
  <div>
    <button @click="changeMsg()">change</button>
  </div>
</template>

<style>

</style>
