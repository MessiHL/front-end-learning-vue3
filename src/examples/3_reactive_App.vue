<template>
  <h2>reactive</h2>
  <div>
    <h3>Object:</h3>
    <button @click="changeObj()">changeObj</button>
    <div>name:{{info.name}}</div>
    <div>age:{{info.age}}</div>
    <h3>Array:</h3>
    <button @click="changeArray1()">changeArray1</button>
    <button @click="changeArray2()">changeArray2-push</button>
    <div>{{arr}}</div>
     <button @click="changeArray3()">changeArray3</button>
    <div>{{arrInObj}}</div>
  </div>
</template>
<script setup lang="ts">
import {reactive} from 'vue'
let info = reactive({name:'tom',age:12})
const changeObj = ()=>{
  info.name += '~'
  info.age++
}

let arr = reactive<number[]>([1,2])

// 数组异步赋值问题: 这样赋值页面是不会变化的，因为会脱离响应式
const changeArray1 = ()=>{
  arr = [2,3]
  console.log(arr);
}

// 解决方案1 : push
const changeArray2 = ()=>{
  const newArr = [2,3,4]
  arr.push(...newArr)
}

// 解决方案2: 包裹一层对象
type List = {
  arr?:Array<number>
}
let arrInObj = reactive<List>({arr:[]})
const changeArray3 = ()=>{
  const arr = [1,2,3,4]
  arrInObj.arr = arr
  console.log(arrInObj);
}

</script>
<style>
  button{
    margin: 20px;
  }
</style>
