<template>
  <div class="info">
    <h1>{{ info.title }}</h1>

    <div class="info-content">
      <div class="info-content__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6345.872521087542!2d49.128416030795854!3d55.7827362752702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead0843ed69af%3A0x92e1492f8bc3455a!2z0YPQuy4g0J_QtdGC0LXRgNCx0YPRgNCz0YHQutCw0Y8sINCa0LDQt9Cw0L3RjCwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwg0KDQvtGB0YHQuNGP!5e0!3m2!1sru!2sus!4v1713359653727!5m2!1sru!2sus"
          max-width="600"
          height="450"
          frameborder="0"
          style="border: 2px solid #dacbda"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div class="info-block">
        <div class="info-content__info">
          <h3>{{ info.description.subtitle }}</h3>
          <p v-for="(item, idx) in info.description.content" :key="idx">{{ item }}</p>
        </div>

        <div class="info-content__info" v-if="info.other">
          <h3>{{ info.other.subtitle }}</h3>
          <p v-for="(item, idx) in info.other.content" :key="idx">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  info: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/media';
.info {
  min-height: 100vh;
  //   background: url('/public/images/form-bg.png') center center/contain repeat;
}
h1 {
  text-align: center;
  padding: 1rem 0;
}
h3 {
  font-size: 1.4rem;
  text-align: center;
}
.info-content {
  max-width: 100vw;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;

  @include tablet {
    flex-direction: column-reverse;
    align-items: center;
    gap: 30px;
  }
}
.info-block {
  // max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-content__info {
  position: relative;
  padding: 2rem;
  margin: 1rem;
  max-width: 400px;
  //   background: radial-gradient(#dacbda, #dda3b6);
  background: url('/public/images/form-bg.png') center center/contain repeat;
  color: #000;
  border-radius: 50% 0;
  border: 1px solid #dacbda;
  &:before {
    position: absolute;
    content: '';
    background: inherit;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
    filter: blur(10px);
    border-radius: 50% 0;
  }
  @media screen and (max-width: 401px) {
    margin: 1rem 0.2rem;
  }
}
.info-content__info p {
  padding: 1rem 0 0 0;
}
.info-content__map {
  overflow: hidden;
}
</style>