<script setup lang="ts">
import type { GithubUser, GithubUserOriginal } from '~/types/github';

const data = ref<GithubUser | null>(null)
const searchData = async (valor: string) => {
  const userData:GithubUserOriginal = await $fetch(`https://api.github.com/users/${valor}`)
  const socialLinksData:[] = await $fetch(`https://api.github.com/users/${valor}/social_accounts`)
  data.value = {...userData,social_links:socialLinksData}
}
</script>


<template>
  <div class="flex flex-col justify-center items-center gap-4 h-full">
    <InputSearch @search="searchData"/>
    <CardUserGit v-if="data" :data="data"/>
  </div>
</template>