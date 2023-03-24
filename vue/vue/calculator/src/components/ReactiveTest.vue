
<script setup>
import {reactive} from 'vue'
const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }

    // don't forget to expose the function as well.
   


</script>
<template>
    <button @click="increment">
  {{ state.count }}
</button>
</template>

<style scoped>

</style>