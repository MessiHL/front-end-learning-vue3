<template>
<!-- 
  // 参考  https://blog.csdn.net/qq1195566313/article/details/122792620
 -->
  <h2>computed-购物车</h2>
  <div>
    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <th>名称</th>
        <th>单价</th>
        <th>数量</th>
        <th>操作</th>
      </thead>
      <tBody>
        <tr v-for="(item,index) in goods" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.count}}</td>
          <td>
            <button @click="addCount(index)">+</button>
            <button @click="addPrice(index)">加价</button>
            <button @click="minusPrice(index)">促销</button>
            <button @click="delCount(index)">-</button>
          </td>
        </tr>
         <tr>
          <td>合计</td>
          <td></td>
          <td>{{totalCount}}</td>
          <td>{{total}}</td>
        </tr>
      </tBody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { reactive,ref,computed } from 'vue';
type goodInfo = {
  id:string,
  name:string,
  price:number,
  count:number
}
let goods = reactive<goodInfo[]>([
  {id:'001',name:'苹果',price:10,count:0},
  {id:'002',name:'香蕉',price:20,count:0},
  {id:'003',name:'西瓜',price:30,count:0}
])

let totalCount = ref(0)
totalCount = computed<number>(()=>{
  return goods.reduce((perv,current)=>{
    return perv + current.count
  },0)
})

let total = ref(0);
total = computed<number>(()=>{
  return goods.reduce((prev,current) => {
    return prev + current.price*current.count
  },0)
})

const addCount = (index: number)=>{
  goods[index].count++
}
const delCount = (index: number)=>{
  goods[index].count > 0 ? goods[index].count-- : 0
}

const  addPrice = (index:number) =>{
   goods[index].price += 5
}

const  minusPrice = (index:number) =>{
  goods[index].price > 1 ? goods[index].price-- : 0
}
</script>
<style>

</style>
