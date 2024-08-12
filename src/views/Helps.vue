<template>
  <div class="helps">
    <div class="container">
      <h1>УСЛОВИЯ</h1>
      <div class="help-blocks">
        <div class="help-block" v-for="condition in allConditions" :key="condition">
          <div class="transform translate3d">
            <img :src="condition.icons" alt="" class="help-block__img" />
            <h3 class="condition-title">{{ condition.title }}</h3>
            <div>{{ condition.description }}</div>
          </div>
        </div>
        <img src="/public/images/flower.png" alt="flower" class="flower-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConditionsStore } from '../stores/conditions'

const conditionsStore = useConditionsStore()
const allConditions = conditionsStore.conditions
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
.help-blocks {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
h1 {
  text-align: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flower-image {
  width: 300px;
}
.condition-title {
  text-align: center;
}
/* .text-wrapper {
  max-width: 250px;
  padding: 20px 20px;
  font-size: 16px;
  line-height: 1.55;
} */
.help-block__img {
  width: 50px;
  height: 50px;
  margin: 0.5rem 0.5rem 0 0;
  float: left;
}

.help-block {
  width: 300px;
  position: relative;
  display: inline-block;
  margin: 2rem 2rem;
  // opacity: 0.9;
  border-radius: 5px;
  background: #e4e1e4;
  -webkit-perspective: 400px;
  perspective: 400px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.transform {
  /* position: absolute;
  top: 0; */
  // background: rgba(197, 127, 161, 0.5);
  background: var(--color-background-light);
  border-radius: 5px;
  -webkit-animation: notransform 8s; /* infinite */
  animation: notransform 8s; /* infinite */
  padding: 0.8rem 2rem;
  color: #000;
}
.translate3d {
  -webkit-transform: translate3d(20px, 20px, 20px);
  -ms-transform: translate3d(20px, 20px, 20px);
  transform: translate3d(20px, 20px, 20px);
  color: #000;
}
@-webkit-keyframes notransform {
  50% {
    transform: none;
  }
}
@keyframes notransform {
  50% {
    transform: none;
  }
}
</style>