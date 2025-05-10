<script setup lang="ts">
import type { IHistoricoDePesquisas } from '~/types/localStorage';
// https://api.github.com/users/wellwelwel/social_accounts
defineProps<{
  data: IHistoricoDePesquisas
}>()
</script>

<template>
  <div class="bg-card flex flex-grow rounded-xl h-52 w-full max-w-lg lg:h-40 xl:max-w-1/2 p-4 hover:bg-card/40">
    <div class="h-full w-32">
      <img :src="data.urlImgPerfil" :alt="`user photo from ${data.usuario}`" class="rounded-full w-20 h-20">
    </div>
    <div class="flex-col w-full">
      <div class="flex flex-col gap-2">
        <div>
          <h1 v-if="data.nome" class="text-text text-2xl">{{ data.nome }}</h1>
          <a class="text-icon" :href="`https://github.com/${data.usuario}`">@{{ data.usuario }}</a>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:clock" class="text-2xl text-text" />
          <p class="text-subtext">This online research was conducted on {{ data.dataConsulta }}</p>
        </div>
        <div class="space-y-6">
          <div v-if="data.linksSociais.length > 0" class="flex flex-col gap-0.5 text-text">
            <div class="space-x-2 pl-2">
              <a v-for="social in data.linksSociais" :key="social.url" :href="social.url">
                <Icon :name="`uil:${social.provider}`" class="text-2xl" />
              </a>
            </div>
          </div>
          <p v-else class="text-subtext">The user has no social links</p>
        </div>
      </div>
    </div>
  </div>
</template>