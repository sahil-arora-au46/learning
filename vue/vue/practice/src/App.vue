<script setup>

// import { reactive } from 'vue';
import RefTest from "./components/RefTest.vue"
import ReactiveTest from "./components/ReactiveTest.vue"
<<<<<<< HEAD:vue/vue/practice/src/App.vue
import CssTest from "./components/CssTest.vue"
import GlobalCss from "./components/GlobalCss.vue"
import VFor from "./components/VFor.vue"
// import ScopedCss from "./components/ScopedCss.vue"
=======
import ComputedTest from "./components/ComutedTest.vue"
// const num = reactive({count:0})
// setInterval(()=> num.count++,1000                                                                                                                                                                                                                                                     )
>>>>>>> 7a15f592f20d2c1025e62c01fe172c13b6b27a9b:vue/vue/calculator/src/App.vue
</script>
<template>
    <div>

        <RefTest />
        <button v-bind:disabled="''" v-if="'s'">Button</button>
<<<<<<< HEAD:vue/vue/practice/src/App.vue
        <!-- <ReactiveTest class="global" /> -->
        <ReactiveTest />
        <CssTest />
        <GlobalCss />
        <VFor />
        <!-- <ScopedCss /> -->
=======
        <ReactiveTest /> <br>
        <ComputedTest class="'test'" />


>>>>>>> 7a15f592f20d2c1025e62c01fe172c13b6b27a9b:vue/vue/calculator/src/App.vue
    </div>
    <!-- <hi>{{ num.count }}</hi> -->
</template>
<style scoped></style>