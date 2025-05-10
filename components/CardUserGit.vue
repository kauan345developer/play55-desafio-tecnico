<script setup lang="ts">
import type { GithubUser } from '~/types/github';
import { format } from 'date-fns';

defineProps<{
  data: GithubUser
}>()
</script>

<template>
  <div class="bg-card flex flex-col flex-grow gap-1 rounded-xl w-full max-w-lg xl:max-w-1/2 py-4 px-6 h-auto">
    <div class="flex gap-6">
      <div class="h-full w-32">
        <img :src="data.avatar_url" :alt="`user photo from ${data.login}`" class="rounded-full w-16 h-16 md:w-24 md:h-24">
      </div>
      <div class="flex gap-2 w-full">
        <div class="flex flex-col justify-between w-full lg:flex-row">
          <div class="space-y-2.5">
            <h1 v-if="data.name" class="text-text text-2xl">{{ data.name }}</h1>
            <a class="text-icon" :href="`https://github.com/${data.login}`">@{{ data.login }}</a>
          </div>
          <p class="text-subtext">joined {{ format(data.created_at, "dd MMM yyyy") }}</p>
        </div>
      </div>
    </div>
    <div class="flex-col w-full pl-0 lg:pl-32">
      <div class="space-y-6">
        <p v-if="data.bio" class="text-text">{{ data.bio }}</p>
        <p v-else class="text-subtext">The user has no bio</p>
        <div class="bg-bg flex gap-4 p-2 rounded-xl  justify-between">
          <div class=" *:text-text">
            <p>Repos</p>
            <p class="text-4xl font-bold">{{ data.public_repos }}</p>
          </div>
          <div class="*:text-text last:text-2xl">
            <p>Followers</p>
            <p class="text-4xl font-bold">{{ data.followers }}</p>
          </div>
          <div class="*:text-text">
            <p>Following</p>
            <p class="text-4xl font-bold">{{ data.following }}</p>
          </div>
        </div>
      </div>
      <div class="grid items-center grid-cols-1 grid-rows-1 gap-4 p-4 md:grid-cols-2 md:grid-rows-2 *:text-text">
        <div class="flex flex-col gap-0.5 text-text">
          <div v-if="data.social_links.length > 0" class="flex flex-col gap-0.5 text-text">
            <p class="font-bold">Social Links</p>
            <div class="space-x-2 pl-2">
              <a v-for="social in data.social_links" :key="social.url" :href="social.url">
                <Icon :name="`uil:${social.provider}`" class="text-2xl" />
              </a>
            </div>
          </div>
          <p v-else class="text-subtext">The user has no social links</p>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:location-point" class="text-2xl" />
          <p v-if="data.location" class="text-xl">
            {{ data.location }}
          </p>
          <p v-else class="text-subtext">the user does not have a location</p>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:link" class="text-2xl" />
          <a v-if="data.blog" class="text-xl truncate" :href="data.blog">
            {{ data.blog }}
          </a>
          <p v-else class="text-subtext">the user does not have a link </p>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:building" class="text-2xl" />
          <p v-if="data.company" class="text-xl">

            {{ data.company }}
          </p>
          <p v-else class="text-subtext">the user does not have a company</p>
        </div>
      </div>
    </div>
  </div>
</template>