<template>
    <div @click="console.log('lower')" v-bind="$attrs">

    </div>
</template>
<script setup>

</script>
<style scoped>
div {
    width: 150px;
    height: 150px;
    background-color: rgb(219, 11, 11);
}
</style>
<script>
export default {
  inheritAttrs: false,

}
</script>