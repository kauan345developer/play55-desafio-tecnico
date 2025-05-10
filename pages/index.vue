<script setup lang="ts">
import type { GithubUser, GithubUserOriginal } from '~/types/github';
import { format } from 'date-fns';
import type { IHistoricoDePesquisas } from '~/types/localStorage';

const data = ref<GithubUser | null>(null)
const { setItem,getItem } = useLocalStorage()
const config = useRuntimeConfig()
const token = config.public.GITHUB_TOKEN
const searchData = async (valor: string) => {
  const userData:GithubUserOriginal = await $fetch(`https://api.github.com/users/${valor}`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  console.log(userData)
  const socialLinksData:[] = await $fetch(`https://api.github.com/users/${valor}/social_accounts`,{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  data.value = {...userData,social_links:socialLinksData}
  const historyData = {
    urlImgPerfil: userData.avatar_url,
    nome: userData.name || "No name",
    usuario: userData.login,
    dataConsulta: format(new Date(), 'dd/MM/yyyy HH:mm'),
    linksSociais: socialLinksData
  }
  const history = getItem<IHistoricoDePesquisas[]>('users') || []
  history.push(historyData)
  setItem<IHistoricoDePesquisas[]>('users',history)
}
</script>


<template>
  <div class="flex flex-col justify-center items-center gap-4 h-full">
    <InputSearch @search="searchData"/>
    <CardUserGit v-if="data" :data="data"/>
  </div>
</template>
