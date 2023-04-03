<template>
<div @click="console.log('upperMost')"> 
<MiddleCompo />
</div>

</template>
<script setup>
import MiddleCompo from './components/MiddleCompo.vue'
</script>
<style scoped>
div{
  width: 300px;
  height:300px;
  background-color:blue;
}
</style>