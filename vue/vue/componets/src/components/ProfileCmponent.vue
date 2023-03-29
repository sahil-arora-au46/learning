<template>
<h1> hi {{ props.userName}},from profile</h1>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(['userName'])
</script>