<template>

<h1>hi</h1>
<h2>from</h2>
<slot  name="header">
<h3>Default value</h3>
</slot>
<slot>
    <h1>default value1</h1>
</slot>
<slot>
    <h1>default value2</h1>
</slot>
<slot name="footer"></slot>
</template>

<script setup>

</script>

<style scoped>

</style>