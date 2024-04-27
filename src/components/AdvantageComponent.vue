<template>
  <div class="advantage-item">
    <div class="advantage-content">
      <div class="advantage-body">
        <div class="item-header">
          <div class="advantage-icon">
            {{ num }}
          </div>
          <h3 class="advantage-icon__title">{{ advantage.title }}</h3>
        </div>
        <p>{{ advantage.descr }}</p>
      </div>
      <div class="item-footer">
        <router-link to="/helps" class="link"><span>Подробнее</span></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  advantage: {
    type: Object,
    required: true
  },
  num: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.advantage-item {
  width: 350px;
  padding: 15px;
  cursor: pointer;
  margin: 1rem;
}
.advantage-item * {
  transition: 0.3s linear;
}
.advantage-content {
  background: var(--color-background-container);
  padding: 40px;
}
.item-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.advantage-icon {
  margin-bottom: 20px;
  color: #f09ea3;
  font-size: 3.2rem;
  line-height: 1;
  &__title {
    font-weight: 500;
    margin-bottom: 15px;
    transition-delay: 0.05s;
  }
}

.advantage-item:hover .advantage-icon,
.advantage-item:hover .advantage-body h3,
.advantage-item:hover .advantage-body p {
  transform: translateY(-8px);
}
.advantage-body {
  // color: #f5e2cd;
  color: var(--color-text);
  font-size: 0.9rem;
}

.advantage-body p {
  transition-delay: 0.1s;
}
.advantage-footer {
  padding-top: 15px;
}
.link {
  text-decoration: none;
  display: inline-block;
  overflow: hidden;
  position: relative;
  padding-right: 30px;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 600;
}
.link:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  height: 0.125rem;
  margin: auto;
  background: #f09ea3;
  transform: scaleX(0.2);
  transform-origin: left center;
  z-index: 0;
  transition: 0.6s cubic-bezier(0.6, 0.01, 0, 1);
}
.link span {
  display: inline-block;
  position: relative;
  transform: translateX(-200%);
  transition: 0.6s cubic-bezier(0.6, 0.01, 0, 1);
}
.advantage-item:hover .link span {
  transform: translateX(0%);
}
.advantage-item:hover .link:before {
  transform-origin: right center;
}
/* @media (min-width: 768px) {
  .advantage-item {
    flex-basis: 50%;
    flex-shrink: 0;
  }
}
@media (min-width: 960px) {
  .advantage-item {
    flex-basis: 33.333333333%;
  }
} */
</style>