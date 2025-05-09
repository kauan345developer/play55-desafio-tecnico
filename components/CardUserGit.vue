<script setup lang="ts">
import type { GithubUser } from '~/types/github';
import { format } from 'date-fns';

// https://api.github.com/users/wellwelwel/social_accounts
defineProps<{
  data: GithubUser
}>()
</script>

<template>
  <div class="bg-card-dark flex flex-grow gap-6 rounded-xl w-full max-w-lg xl:max-w-1/2 p-6 h-full">
    <div class="h-full w-32">
      <img :src="data.avatar_url" :alt="`user photo from ${data.login}`" class="rounded-full w-24 h-24">
    </div>
    <div class="flex-col w-full">
      <div class="flex gap-2">
        <div class="flex justify-between w-full">
          <div>
            <h1 class="text-text-dark text-2xl">{{ data.name }}</h1>
            <p class="text-icon-dark">@{{ data.login }}</p>
          </div>
          <p class="text-subtext-dark">joined {{ format(data.created_at, "dd MMM yyyy") }}</p>
        </div>
      </div>
      <div class="space-y-6">
        <p v-if="data.bio" class="text-text-dark">{{ data.bio }}</p>
        <p v-else class="text-subtext-dark">The user has no bio</p>
        <div class="bg-bg-dark flex gap-4 p-2 rounded-xl  justify-between">
          <div class= " *:text-text-dark">
            <p>Repos</p>
            <p class="text-4xl font-bold">{{ data.public_repos }}</p>
          </div>
          <div class="*:text-text-dark last:text-2xl">
            <p>Followers</p>
            <p class="text-4xl font-bold">{{ data.followers  }}</p>
          </div>
          <div class="*:text-text-dark">
            <p>Following</p>
            <p class="text-4xl font-bold">{{ data.following }}</p>
          </div>
        </div>
      </div>
      <div class="grid items-center grid-cols-2 grid-rows-2 gap-4 p-4 *:text-text-dark">
        <div class="flex flex-col gap-0.5 text-text-dark">
          <div v-if="data.social_links.length > 0" class="flex flex-col gap-0.5 text-text-dark">
            <p class="font-bold">Social Links</p>
            <div class="space-x-2 pl-2">
              <a v-for="social in data.social_links" :key="social.url" :href="social.url" >
                <Icon :name="`uil:${social.provider}`" class="text-2xl"/>
              </a>
            </div>
          </div>
          <p v-else class="text-subtext-dark">The user has no social links</p>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:location-point" class="text-2xl"/>
          <p v-if="data.location" class="text-xl">
            {{ data.location }}
          </p>
          <p v-else class="text-subtext-dark">the user does not have a location</p>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:link" class="text-2xl"/>
          <a v-if="data.blog" class="text-xl truncate" :href="data.blog">
            {{ data.blog }}
          </a>
          <p v-else class="text-subtext-dark">the user does not have a link </p>
        </div>
        <div class="flex gap-2">
          <Icon name="uil:building" class="text-2xl"/>
          <p v-if="data.company" class="text-xl">

            {{ data.company }}
          </p>
          <p v-else class="text-subtext-dark">the user does not have a company</p>
        </div>
      </div>
    </div>
  </div>
</template>