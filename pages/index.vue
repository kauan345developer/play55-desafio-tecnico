<script setup lang="ts">
const data = ref(null)
const searchData = async (valor: string) => {
  data.value = await $fetch(`https://api.github.com/users/${valor}`)
}
</script>


<template>
  <div class="flex flex-col justify-center items-center">
    <InputSearch @search="searchData"/>
    
  </div>
</template>