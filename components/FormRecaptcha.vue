<script setup>
// other functions

const { executeRecaptcha } = useGoogleRecaptcha()

// the function where you submit the form 
const submitForm = async () => {
  const { token } = await executeRecaptcha('form_submit')
  console.log("aaaaa")
  console.log(token)
  const bodyData = {
    token
  }
  // combine the form value with g-recaptcha-response that we need to send via api
  try {
    const data = await $fetch("https://form-validacao-captcha.vercel.app/validar-recaptcha", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    }) 
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

// other functions 
</script>

<template>
  <h1>Ola Mundo</h1>
  <button @click="submitForm" class="p-2 bg-icon">
    clicke
  </button>
</template>