<template>
<div>
   <!-- 父组件参数 -->
    {{title}}
    <p>{{data}}</p>
    <div>
      <Card content="全局组件Card,在main.ts中注册"></Card>
    </div>
</div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import Card from '../common/Card.vue'
defineProps<{
  title:string,
  data:number[]
}>()

const clickTap = ()=>{

}

</script>
<style>
</style>