<template>
  <h2>to系列：toRef toRefs toRaw</h2>
  <p>toRef 如果原始对象是非响应式的就不会更新视图 数据是会变的,如果原始对象是响应式的是会更新视图并且改变数据的</p>
   <button @click="testToRef()">test toRef</button>
    <div>{{state}}</div>
  <p>toRefs 可以帮我们批量创建ref对象主要是方便我们解构使用</p>
   <button @click="testToRefs()">test toRefs</button>
    <div>{{obj}}</div>
  <p>toRaw 将响应式对象转化为普通对象。此时，只改变，视图不会更新</p>
  <button @click="testToRow()">test toRow</button>
    <div>{{row}}</div>

</template>
<script setup lang="ts">
import {toRef,isRef,reactive,toRefs,toRaw} from 'vue'
// 如果原始对象是非响应式的就不会更新视图 数据是会变的
let point = { x:1,  y:1,  z:1 }
let state = toRef(point,'y')
const testToRef = ()=>{
  state.value++
  console.log(isRef(state),state.value,point);
  
}

// 如果原始对象是响应式的是会更新视图并且改变数据的
let obj = reactive({x:1,y:2,z:3})
let {x,y} = toRefs(obj)
const testToRefs=()=>{
  x.value++
  y.value++
  console.log(x.value,y.value,'`~~~',obj);
  
}

// toRaw 将响应式对象转化为普通对象
let row = reactive({foo:1,bar:1})
const newRow = toRaw(row)
const testToRow = ()=>{
  newRow.foo +2
  newRow.bar += 2
  
  console.log(newRow);
}

</script>
<style>

</style>
