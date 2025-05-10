<script setup lang="ts">
import type {  GithubUser, GithubUserOriginal, SocialLink } from '~/types/github';
import { format } from 'date-fns';
import type { IHistoricoDePesquisas } from '~/types/localStorage';

const data = ref<GithubUser | null>(null)
const userNotFound = ref(false)
const genericError = ref(false)
const { setItem, getItem } = useLocalStorage()
const config = useRuntimeConfig()
const token = config.public.GITHUB_TOKEN

const searchData = async (valor: string) => {
  try {
    const userData: GithubUserOriginal = await $fetch(`https://api.github.com/users/${valor}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(userData)
    const socialLinksData: SocialLink[] = await $fetch(`https://api.github.com/users/${valor}/social_accounts`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    data.value = { ...userData, social_links: socialLinksData }
    const historyData = {
      urlImgPerfil: userData.avatar_url,
      nome: userData.name || "",
      usuario: userData.login,
      dataConsulta: format(new Date(), 'dd/MM/yyyy HH:mm'),
      linksSociais: socialLinksData
    }
    const history = getItem<IHistoricoDePesquisas[]>('users') || []
    history.unshift(historyData)
    setItem<IHistoricoDePesquisas[]>('users', history)
  } catch (error:unknown) {
    if (typeof error === 'object' && error !== null && 'response' in error) {
    const apiError = error as { response: { status: number } };
    if (apiError.response.status === 404) {
      console.log("entrou");
      userNotFound.value = true;
      data.value = null
    } else {
      genericError.value = true;
      data.value = null
    }
  } else {
    // Handle unexpected error types
    data.value = null
    genericError.value = true;
  }

  }
}
</script>


<template>
  <div class="flex flex-col justify-center items-center gap-4 h-full">
    
    <InputSearch @search="searchData" />
    <CardUserGit v-if="data" :data="data" />
    <div v-else-if="userNotFound" class="bg-card rounded-xl w-full max-w-lg xl:max-w-1/2 h-full p-6">
      <p class="text-2xl text-text">User Not Found</p>
    </div>
    <div v-else-if="genericError" class="bg-card rounded-xl w-full max-w-lg xl:max-w-1/2 h-full p-6">
      <p class="text-2xl text-text">Error, Try again</p>
    </div>
  </div>
</template>
