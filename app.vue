<template>
  <div>
    <NuxtWelcome />
    <p>{{data}}</p>
  </div>
</template>
<script setup>
const { data } = await useFetch('/api/count');
console.log(data.value);
</script>