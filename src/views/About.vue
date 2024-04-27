<template>
  <div class="about">
    <div class="container">
      <div class="about-header">
        <h1 class="about-header__title">Доставка цветов и букетов по Казани</h1>
        <p class="about-header__subtitle">
          С любовью и заботой доставляем улыбки по вашим заявкам каждый день, без перерывов и
          выходных на протяжении 8 лет.
        </p>
      </div>
      <AdvantagesBlock />
      <div class="about-main">
        Широкий ассортимент свежей цветочной продукции, опытный персонал, любящий свою работу,
        четкий алгоритм действий, умеренные расценки, - вот лишь краткий перечень преимуществ нашего
        флористического салона.
      </div>
      <div class="other-services">
        <h3>Виды услуг</h3>
        <div class="services-items">
          <div class="service-item">
            <h4 class="service-item__title">АНОНИМНАЯ ДОСТАВКА ЦВЕТОЧНЫХ КОМПОЗИЦИЙ</h4>
            <p class="service-item__descr">
              Мы можем доставить цветы не сообщая получателю от кого была заказана доставка, это для
              этого при заказе товара с сайта поставьте галочку в соответствующей графе. Мы в свою
              очередь ГАРАНТИРУЕМ, что информация о заказе будет удалена из всех источников после
              его доставки
            </p>
          </div>
          <div class="service-item">
            <h4 class="service-item__title">ДОСТАВКА БУКЕТОВ БЕЗ ЗВОНКА</h4>
            <p class="service-item__descr">
              Вы также можете сделать "сюрприз" получателю указав только точный адрес, и в графе
              "Комментарии" при заказе цветов с доставкой указать, что это сюрприз, однако для того
              что-бы заказ был выполнен нам необходимо быть уверенными, что получатель
              гарантированно будет находиться по указанному адресу.
            </p>
          </div>
          <div class="service-item">
            <h4 class="service-item__title">Цветочная подписка</h4>
            <p class="service-item__descr">
              Еженедельная доставка авторских букетов в любую точку Казани на протяжении месяца (4
              недели)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdvantagesBlock from '../components/AdvantagesBlock.vue'
</script>

<style lang="scss" scoped>
.about-header {
  background: url('/public/images/blossoming-delicate-peony.jpg') center center/cover no-repeat;
}
.about-header__title {
  padding: 2rem;
  text-align: center;
}
.about-header__subtitle {
  font-size: 1.5rem;
  text-align: center;
  margin-top: 4rem;
  padding-bottom: 2rem;
}
.advantages-block {
  background: none;
}
.other-services h3 {
  text-align: center;
  margin: 2rem;
  font-size: 1.5rem;
}
.about-main {
  text-align: center;
  padding: 2rem;
  font-size: 1.3rem;
}
.services-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.service-item {
  width: 500px;
  height: 300px;
  border-radius: 30%;
  background: url('/public/images/bg-item.png') center center/cover no-repeat;
  text-align: center;
  padding: 2rem;
  margin: 0 1.5rem;
}
</style>