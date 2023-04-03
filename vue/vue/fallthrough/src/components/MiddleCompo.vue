<template>
    <div @click="console.log('middle')" v-bind="$attrs">
        <LowerMost />
    </div>
</template>
<script setup>
import LowerMost from './LowerCompo.vue'
</script>
<style scoped>
div{
    width: 200px;
    height: 200px;
    background-color: rgb(11, 219, 132);
}
</style>
<script>
export default {
    inheritAttrs:false,
};
</script>