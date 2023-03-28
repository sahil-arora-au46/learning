<script setup>

// import { reactive } from 'vue';
import RefTest from "./components/RefTest.vue"
import ReactiveTest from "./components/ReactiveTest.vue"
import ComputedTest from "./components/ComutedTest.vue"
// const num = reactive({count:0})
// setInterval(()=> num.count++,1000                                                                                                                                                                                                                                                     )
</script>
<template>
    <div>

        <RefTest />
        <button v-bind:disabled="''" v-if="'s'">Button</button>
        <ReactiveTest /> <br>
        <ComputedTest class="'test'" />


    </div>
    <!-- <hi>{{ num.count }}</hi> -->
</template>
<style scoped></style>