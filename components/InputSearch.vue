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
    v-model="query" type="text" placeholder="Search Github Username...."
      class="flex-grow px-3 py-2  outline-none text-text placeholder:text-text/70">

    <button
      class="bg-button hover:bg-button/70 text-text rounded-xl text-center w-20 h-10 cursor-pointer"
      @click="emitSearch">
      Search
    </button>
  </div>
</template>
