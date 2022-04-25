<template>
 <div class="layout">
   <div class="layout-header">
     <Header>#071D70</Header>
   </div>
   <div class="layout-body">
     <div class="layout-aside">
       <Menu>4867D6</Menu>
     </div>
     <div class="layout-content">
       <Body  :data="data" title="title from main.vue">f8f8f8</Body>
     </div>
   </div>
   <div class="layout-footer">
      <Footer>071D70</Footer>
    </div>
 </div>
  

</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Header from './Header.vue'
import Menu from './Menu.vue'
import Body from './Body.vue'
import Footer from './Footer.vue'

import './../../styles/layout/index.scss'

const data = reactive([1,2,3,4])


</script>
<style lang="scss" scoped>



</style>
