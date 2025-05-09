<script setup lang="ts">
const { setItem, getItem } = useLocalStorage()
const route = useRoute()
const currentPath = ref(route.path)

const isDark = ref(false)

onBeforeMount(() => {
  const theme = getItem<string>("theme")
  if (!theme) {
    setItem("theme", "dark")
    isDark.value = true
  } else {
    isDark.value = theme === "dark"
  }
})

watchEffect(() => {
  currentPath.value = route.path
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  const newTheme = isDark.value ? "dark" : "light"
  setItem("theme", newTheme)
}
</script>

<template>
  <div :class="`min-h-screen bg-bg py-8 px-4 space-y-8 ${isDark ? 'dark' : 'light'}`">

    <header class="px-8">
      <div class="flex justify-between ">
        <p class="text-3xl text-text">
          DevFinder
        </p>

        <div class="flex gap-5 items-center">
          <NuxtLink v-if="currentPath !== '/history'" to="/history">
            <button class="flex items-center cursor-pointer">
              <Icon name="uil:history" class="text-2xl text-text" />
            </button>
          </NuxtLink>
          <NuxtLink v-else to="/">
            <button class="flex items-center cursor-pointer">
              <Icon name="uil:home" class="text-2xl text-text" />
            </button>
          </NuxtLink>
          <button class="flex gap-2 items-center cursor-pointer" @click="toggleTheme">
            <Icon :name="isDark ? 'uil:moon' : 'uil:sun'" class="text-text text-2xl" />
            <p class="text-text ">{{ isDark ? 'Dark' : 'Light' }} Mode</p>
          </button>
        </div>
      </div>
    </header>
    <main>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>
