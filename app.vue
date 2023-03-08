<template>
  <div>
    <p>{{ data }}</p>
    <button @click="getData">CLICK</button>
  </div>
</template>
<script setup>
const data = ref();
const getData = async () => {
  const { data: response } = await useFetch("/api/count");
  console.log(data.value);
  data.value = response;
};
</script>
