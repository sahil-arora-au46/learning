<template>
<SlotComponent>
<template v-slot:header>
<h1>hi from header</h1>
</template>
<h1>hi from slot with name and default name </h1> 
<h2>testing implicite slot</h2><!--this is taking the given data implicitly-->
<template #footer>     <!--short way to write v-slot-->
<h1>hi from footer</h1>
</template>

</SlotComponent>
</template>
<script setup>
import SlotComponent from "./components/SlotComponent.vue"

</script>

<style scoped>

</style>