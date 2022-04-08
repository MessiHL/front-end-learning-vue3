<template>
  <li></li>
</template>

<script lang='ts'>
import { defineComponent, toRefs } from 'vue'
export default defineComponent({
  name: 'TreeItem',
  props:{
    model:{
      type:Object,
      required:true,
      default(){
        return {}
      }
    }
  },
  setup(props) {
    const t = props.model.children
    console.log(t);
    
    
    return {

    }
  }
})
</script>

<style scoped>
</style>