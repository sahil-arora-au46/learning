
<script setup>
import {reactive} from 'vue'
const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // don't forget to expose the function as well.
   


</script>
<template>
<div>
  <button @click="increment" class="scoped">
  {{ state.count }}
</button>
<h1>not rooot element</h1>
</div>
</template>

<style scoped>

</style>