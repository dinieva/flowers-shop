<template>
  <div class="follow-block">
    Будь в курсе актуальных предложений

    <form class="follow-block__form" @submit.prevent="sendForm">
      <input type="email" class="follow-block__input" placeholder="Email" v-model="userEmail" />

      <button type="submit" class="btn btn-form border-btn color-one">Подписаться</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()
const userEmail = ref('')
const sendForm = async (email) => {
  try {
    const response = await axios.post('https://httpbin.org/post ', {
      userEmail: email
    }) /* https://httpbin.org/post */
    if (response) {
      toast.success('Данные успешно отправлены!')
    }
    console.log(response)
  } catch (error) {
    toast.error('Ошибка!')
    console.log(error)
  } finally {
    userEmail.value = ''
  }
}
</script>

<style lang="scss" scoped>
.follow-block {
  background-color: rgba(229, 190, 190, 1);
  width: 100%;
  height: 18vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  font-size: 2rem;
  font-weight: 500;
  font-family: var(--cormorantGaramond), serif;
  color: #808080;

  &__input {
    padding: 5px 10px;
    height: 48px;
    line-height: 38px;
    background: #ffffff;
    border: 1px solid var(--color-background-light);
    font-size: 1.3rem;
    font-family: var(--cormorantGaramond), serif;
    color: #808080;
    outline: none;
    border-bottom: 1px solid #646464;
    outline-width: 0;
    background-color: transparent;
    -webkit-box-shadow: 0;
    box-shadow: 0;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  }
}
.Vue-Toastification__toast--default.my-custom-toast-class {
  background-color: rgb(98, 0, 255);
}
</style>