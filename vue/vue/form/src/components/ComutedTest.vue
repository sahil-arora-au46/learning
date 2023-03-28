<template>
  <div>
    <div>
      <input v-bind:maxlength="20" type="text" v-model="input.name" />
      <textarea v-model="input.des" maxlength="5"></textarea>
      <p>{{ computedValue }}/20</p>
      <p>{{ computedValue }}</p>
      <h1>{{ input }}</h1>
    </div>
    <div :class="clas">

    </div>
  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue'
let clas = 'sahil'
const input = ref({
  name: "",
  des: ""
});

const computedValue = computed(() => input.value.name.length);



</script>
