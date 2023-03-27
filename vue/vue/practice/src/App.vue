<script setup>

// import { reactive } from 'vue';
import RefTest from "./components/RefTest.vue"
import ReactiveTest from "./components/ReactiveTest.vue"
import CssTest from "./components/CssTest.vue"
import GlobalCss from "./components/GlobalCss.vue"
import VFor from "./components/VFor.vue"
// import ScopedCss from "./components/ScopedCss.vue"
</script>
<template>
    <div>

        <RefTest />
        <button v-bind:disabled="''" v-if="'s'">Button</button>
        <!-- <ReactiveTest class="global" /> -->
        <ReactiveTest />
        <CssTest />
        <GlobalCss />
        <VFor />
        <!-- <ScopedCss /> -->
    </div>
<!-- <hi>{{ num.count }}</hi> -->
</template>
<style scoped>
</style>