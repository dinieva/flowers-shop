<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import AdvantagesBlock from './AdvantagesBlock.vue'
import PropositionBlock from './PropositionBlock.vue'
import OurBestBlock from './OurBestBlock.vue'
import FollowUsBlock from './FollowUsBlock.vue'

const userName = ref('')
const userPhoneNumber = ref('')
const userEmail = ref('')
const toast = useToast()

const sendForm = async (name, phone, email) => {
  try {
    const response = await axios.post('https://httpbin.org/post', {
      userName: name,
      userPhoneNumber: phone,
      userEmail: email
    }) /* https://httpbin.org/post */
    if (response) {
      toast.success('Данные успешно отправлены!')
    }
    console.log('response отправки формы', response)
  } catch (error) {
    toast.error('Ошибка!')
    console.log(error)
  } finally {
    userName.value = ''
    userPhoneNumber.value = ''
    userEmail.value = ''
  }
}
const validate = () => {
  let pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g
  let correctNumber = userPhoneNumber.value.replace(pattern, '+7($2)$3-$4-$5')
  userPhoneNumber.value = correctNumber
}
</script>

<template>
  <div class="main-container">
    <div class="container">
      <div class="main">
        <div class="main__circle">
          <h1 class="main__title">Inspiration</h1>
          <div class="main__image">
            <img src="/public/images/main-bg.png" alt="" class="main__image-left" />
            <img src="/public/images/main-bg.png" alt="" class="main__image-right" />
          </div>
          <h4 class="main__text">flowers boutique</h4>
        </div>
      </div>
      <PropositionBlock />

      <OurBestBlock />
      <AdvantagesBlock />
      <div class="form-block">
        <h2 class="form-block__title title">Остались вопросы ?</h2>
        <!-- <img src="/public/images/subscribe.jpg" alt="flowers" class="flowers-img" /> -->

        <form
          action=""
          class="form"
          @submit.prevent="sendForm(userName, userPhoneNumber, userEmail)"
        >
          <div class="form-inner">
            <h3>
              Оставьте свои контактные данные. Мы обязательно свяжемся с вами в течение 24 часов.
            </h3>
            <div class="form-content">
              <label for="name">
                Имя
                <input type="text" name="" id="name" required v-model="userName" />
              </label>
              <label for="phone">
                Телефон
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  v-model="userPhoneNumber"
                  @input="validate"
                /><!-- pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" -->
              </label>
              <label for="email">
                Email...
                <input type="email" name="" id="email" required v-model="userEmail" />
              </label>
              <button class="btn border-btn color-one">Отправить</button>
            </div>
          </div>
        </form>
      </div>
      <FollowUsBlock />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/media';
/* .container {
  padding-top: 15vh;
} */
.main {
  position: relative;
  font-family: var(--lighthaus);
  text-align: center;
  padding: 5rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__circle {
    margin: 0 auto;
    padding: 5rem 0;
    height: calc(100vw / 2);
    width: calc(100vw / 2);
    background: var(--color-background-light);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
      padding: 0 0;
    }
  }

  &__title {
    font-size: 5rem;
    z-index: 10;
    text-transform: capitalize;

    @include laptop {
      font-size: 4rem;
    }
    @include largemobile {
      font-size: 2rem;
    }
  }

  &__text {
    text-align: center;
    font-family: var(--lighthaus);
    font-size: 1.5rem;
    font-weight: 400;
  }

  &__image {
    display: flex;
    justify-content: center;
    text-align: center;
    // background-image: url('/public/images/main-bg.png');
    &-right {
      transform: scale(-1, -1);
      @media (max-width: 1024px) {
        width: calc(100vw / 2);
      }
    }
    &-left {
      @media (max-width: 1024px) {
        width: calc(100vw / 2);
      }
    }
    @media (max-width: 1024px) {
      bottom: 0;
      object-fit: cover;
    }
  }
}
.form-block {
  text-align: center;
  margin: 0 auto;
  background: url('/public/images/form-bg.png') right center/contain no-repeat;
  padding: 2rem;
  &__title {
    font-weight: 500;
    font-size: 2.6rem;
    font-family: var(--lighthaus);
  }
}
.form {
  position: relative;
  max-width: 380px;
  text-align: center;
  padding: 1rem;
  margin: 0 auto;
}

.form-inner:before {
  display: inline-block;
  margin-top: -45px;
  content: url(https://html5book.ru/wp-content/uploads/2017/05/form-flower.png);
}
.form-inner {
  padding: 0 40px 10px;
  margin-top: 45px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.1);
}
.form-inner h3 {
  font-weight: 300;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: var(--cormorantGaramond), serif;
}
.form-content {
  position: relative;
  margin: 30px -40px 0 -40px;
  padding: 10px 40px 0 40px;
}
.form-content:before {
  content: '';
  position: absolute;
  top: -4px;
  right: 0;
  left: 0;
  height: 2px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
.form-content label {
  font-family: var(--marckScript), cursive;
  font-size: 22px;
  color: #898989;
  font-weight: normal;
}
.form-content input {
  height: 38px;
  line-height: 38px;
  padding: 0 10px;
  background: #ffffff;
  border: 1px solid #dddddd;
  font-size: 1.25rem;
  font-family: var(--cormorantGaramond), serif;
  color: #808080;
  outline: none;
}
.form-content input {
  width: 100%;
}
.form-content input:focus,
.form-content select:focus {
  border-color: #c44d58;
}
.btn {
  margin-top: 1rem;
}
</style>