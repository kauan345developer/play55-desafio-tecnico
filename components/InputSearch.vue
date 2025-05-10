<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')

// const dataUser = ref({
//   avatar_url: '',
//   name: '',
//   login:'',
//   description:'',  
//   bio: '',
//   public_repos: '',
//   followers: '',
//   following: '',
//   location: '',
//   blog: '',
//   twitter_username: '',
// })

const emit = defineEmits(['search'])

const emitSearch = () => {
  emit("search",query.value)
}

</script>

<template>
  <!-- <div>fazer search debounce</div> -->
  <div
    class="flex items-center border-none bg-card rounded-xl overflow-hidden w-full max-w-lg px-2 py-3.5 xl:max-w-1/2">
    <div class="pl-3 grid place-items-center">
      <Icon name="uil:search" class="text-icon text-2xl" />
    </div>

    <input 
    v-model="query" type="search" placeholder="Search Github Username...."
      class="flex-grow px-3 py-2  outline-none text-text placeholder:text-text/70 min-w-0" @keydown.enter="emitSearch">

    <button
      class="bg-button hover:bg-button/70 text-text rounded-xl text-center w-14 h-10 cursor-pointer flex-shrink-0 md:w-24"
      @click="emitSearch">
      Search
    </button>
  </div>
</template>
