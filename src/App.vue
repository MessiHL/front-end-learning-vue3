<script lang="ts">
import TreeItem from './examples/TreeView/TreeItem.vue'
import { defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'App',
  components:{
    TreeItem
  },
  setup(props) {
    const treeData = ref({
    name: 'My Tree',
    children: [
      { name: 'hello' },
      { name: 'wat' },
      {
        name: 'child folder',
        children: [
          {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'wat' }]
          },
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [{ name: 'hello' }, { name: 'wat' }]
          }
        ]
      }
    ]
  })
    
    return {
      treeData
    }
  }
})

</script>

<template>
   <ul>
     <TreeItem class="item" :model="treeData">{{treeData.name}}</TreeItem>
   </ul>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
