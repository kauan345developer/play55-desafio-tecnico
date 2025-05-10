<script setup lang="ts">
import type { IHistoricoDePesquisas } from '~/types/localStorage';

const { getItem } = useLocalStorage()
const history = getItem<IHistoricoDePesquisas[]>('users')
console.log(history) 
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-6 h-full w-full">
    <h1 class="text-6xl text-text">Search History</h1>
    <div v-if="history && history.length > 0" class="flex flex-col justify-center items-center gap-4 h-full w-full">
      <CardHistory v-for="(item, index) in history" :key="index" :data="item"/>
    </div>
    <h2 v-else class="text-subtext text-2xl">no search history</h2>
  </div>
</template>