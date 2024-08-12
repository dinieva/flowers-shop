import { defineStore } from 'pinia'

export const useCatalogStore = defineStore('catalog', () => {
  // composition - состав букета
  // type - вид букета микс, монобукет, сухоцветы
  // decoration - оформление в виде композиции: шляпные,корзина, ящик, упаковка
  // size - S, M, L
  //price по цене до 2500, до 3500,
  const allFlowers = [
    {
      title: 'Ажурные розы ',
      price: 3390,
      imgPath: '/flowers-shop/images/catalog/7f106c299e4a8f9ace07ad21e1fb0f70.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из семи штук французской розы сорта «Нина»'
    },
    {
      title: 'Монобукет Признание',
      price: 5900,
      imgPath: '/flowers-shop/images/catalog/1wk2s4re9y9ez1yz6w9ivtc5jklm241s.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 9 шт кустовых роз Мисти баблс'
    },
    {
      title: ' 21 ароматной розы ',
      price: 5300,
      imgPath: '/flowers-shop/images/catalog/58942124-e4eb-419a-9395-2f5a47712b7b.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 21 ароматной розы'
    },

    {
      title: '15 пионовидных тюльпанов',
      price: 3080,
      imgPath: '/flowers-shop/images/catalog/5vc9elq2rm044kkk48kw8k0ksw0k8w.jpeg',
      composition: ['Тюльпаны'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 15 пионовидных тюльпанов'
    },
    {
      title: '25 белых тюльпанов',
      price: 4800,
      imgPath: '/flowers-shop/images/catalog/buket-iz-25-belyh-tjulpanov-2-600x600.jpg',
      composition: ['Тюльпаны'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет, состоящий из 25 белых тюльпанов'
    },
    {
      title: 'розово-сиреневый букет из 25 тюльпанов',
      price: 5500,
      imgPath: '/flowers-shop/images/catalog/rozovo-sirenevyj-buket-tjulpanov-25-2-600x600.jpg',
      composition: ['Тюльпаны'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет, состоящий из 25 розово-сиреневых тюльпанов'
    },

    {
      title: 'Букет розовых ранункулюсов',
      price: 5500,
      imgPath: '/flowers-shop/images/catalog/P2480595.jpeg',
      composition: ['Ранункулюсы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 7 шт ранункулюсов'
    },
    {
      title: 'Букет из ранункулюсов ханой',
      price: 13390,
      imgPath: '/flowers-shop/images/catalog/IMG_8042-scaled.jpg',
      composition: ['Ранункулюсы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет, состоящий из 19 шт ранункулюсов'
    },
    {
      title: 'Ранункулюс - 7 шт, Эвкалипт',
      price: 6360,
      imgPath: '/flowers-shop/images/catalog/at0lxtsub7cw0cwsocs8ssw8oo0sgk.jpeg',
      composition: ['Ранункулюс', 'Эвкалипт'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 7 шт ранункулюсов'
    },

    {
      title: 'Букет из 7 розовых гортензий',
      price: 5700,
      imgPath: '/flowers-shop/images/catalog/buket-iz-7-rozovyh-gortenzij-rotated.jpg',
      composition: ['Гортензии'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 7 розовых гортензий'
    },
    {
      title: 'Букет из 7 белых гортензий',
      price: 5700,
      imgPath: '/flowers-shop/images/catalog/buket-iz-7-belyh-gortenzij-rotated.jpg',
      composition: ['Гортензии'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 7 белых гортензий'
    },
    {
      title: 'Букет Воздушный поцелуй',
      price: 3390,
      imgPath: '/flowers-shop/images/catalog/53leuc32io0wo4cco44gsw0sc0sco.jpeg',
      composition: ['Гортензии'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 7 белых, розовых, голубых гортензий'
    },

    {
      title: 'Букет из 9 шарообразных хризантем',
      price: 3200,
      imgPath: '/flowers-shop/images/catalog/siphetwst74ccwkkco4swwksc0sk0o.jpg',

      composition: ['Хризантемы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет из 9 шарообразных хризантем'
    },
    {
      title: '25 хризантем',
      price: 7500,
      imgPath: '/flowers-shop/images/catalog/bw4govjwxy0cwcco4cc0ssowwwgwgg.jpg',

      composition: ['Хризантемы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 25 хризантем'
    },
    {
      title: '21 хризантема',
      price: 9500,
      imgPath: '/flowers-shop/images/catalog/dwqyb3il8o8o4o0s008cgok8scowkg.jpg',

      composition: ['Хризантемы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 21 хризантемы'
    },

    {
      title: '15 веток гипсофилы',
      price: 7700,
      imgPath: '/flowers-shop/images/catalog/e9byii766io0w8sccogwc488gswgg8.jpg',

      composition: ['Гипсофила'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет из 15 веток гипсофилы'
    },
    {
      title: 'Букет из голубой гипсофилы',
      price: 9000,
      imgPath: '/flowers-shop/images/catalog/pup8p7rvzzksogcwgkwggcc0s0c484.jpeg',

      composition: ['Гипсофила'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'L',
      description: 'Чудесный букет'
    },
    {
      title: 'КОМПОЗИЦИЯ С ГОЛУБОЙ ГОРТЕНЗИЕЙ',
      price: 7800,
      imgPath: '/flowers-shop/images/catalog/image-12-07-20-10-22-12-large.jpg',
      composition: ['Гортензии', 'Розы'],
      type: 'Сборный',
      decoration: 'Шляпная коробка',
      size: 'L',
      description: 'Чудесный букет'
    },
    {
      title: 'Шляпная коробка с орхидеями',
      price: 4100,
      imgPath: '/flowers-shop/images/catalog/image-06-05-21-10-11-26-large.jpg',
      composition: ['Орхидеи'],
      type: 'Монобукет',
      decoration: 'Шляпная коробка',
      size: 'M',
      description: 'Чудесный букет'
    },
    {
      title: 'Воспоминание',
      price: 20500,
      imgPath: '/flowers-shop/images/catalog/8340756504c4e60499191377c4b976b3.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'Шляпная коробка',
      size: 'XL',
      description: 'Чудесный букет в корзине из 151 шт розы'
    },
    {
      title: 'Композиция из пудровых французских роз',
      price: 2000,
      imgPath: '/flowers-shop/images/catalog/img_9986-600x600.jpg',
      composition: ['Французские розы', 'Розы'],
      type: 'Монобукет',
      decoration: 'Шляпная коробка',
      size: 'S',
      description: 'Чудесный букет'
    },
    {
      title: 'Большая корзина роз с орхидеей и хризантемой',
      price: 20500,
      imgPath: '/flowers-shop/images/catalog/IMG_1556-scaled.jpg',
      composition: ['Орхидеи', 'Розы', 'Хризантема'],
      type: 'Сборный',
      decoration: 'Корзина с цветами',
      size: 'L',
      description: 'Чудесный букет'
    },
    {
      title: 'Лаванда',
      price: 2500,
      imgPath: '/flowers-shop/images/catalog/6569940126.jpg',
      composition: ['Лаванда'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет'
    },
    {
      title: 'Букет итальянской мимозы',
      price: 3500,
      imgPath: '/flowers-shop/images/catalog/3-5ccb1489f6e93ebde2cb0244ba283f26.jpg',
      composition: ['Мимоза'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из итальянской мимозы'
    },
    {
      title: 'Композиция в ящике ',
      price: 4500,
      imgPath: '/flowers-shop/images/catalog/5533.970.jpeg',
      composition: ['Диантус', 'Розы', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'Композиция в ящике',
      size: 'S',
      description: 'Композиция в деревянном ящике'
    },
    {
      title: 'Композиция в деревянном ящике',
      price: 4700,
      imgPath: '/flowers-shop/images/catalog/5201_img_8533-.jpg',
      composition: ['Орхидеи', 'Розы', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'Композиция в ящике',
      size: 'M',
      description: 'Композиция в деревянном ящике'
    },
    {
      title: 'Неожиданность',
      price: 4390,
      imgPath: '/flowers-shop/images/catalog/222758.jpg',
      composition: ['Орхидеи', 'Розы', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'Композиция в ящике',
      size: 'M',
      description: 'Композиция в деревянном ящике'
    },
    {
      title: 'Композиция намерение',
      price: 2000,
      imgPath: '/flowers-shop/images/catalog/elitnaya-kompoziciya-oblaka.jpg',
      composition: ['Гортензии', 'Розы', 'Рунункулусы', 'Эустома'],
      type: 'Сборный',
      decoration: 'Шляпная коробка',
      size: 'XL',
      description: 'Чудесный букет'
    },
    {
      title: 'Вау Эффект',
      price: 6000,
      imgPath: '/flowers-shop/images/catalog/NV8xLmpwZw.jpg',
      composition: ['Гортензии', 'Розы', 'Орхидеи', 'Диантус'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'XL',
      description: 'Чудесный букет'
    },
    {
      title: 'Рассвет',
      price: 3000,
      imgPath: '/flowers-shop/images/catalog/buket_2021-3-scaled.jpeg',
      composition: ['Ромашки', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет'
    },
    {
      title: 'Признание',
      price: 4000,
      imgPath: '/flowers-shop/images/catalog/p159_1573140652_63507.jpg',
      composition: ['Ромашки', 'Розы'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет в составе которого 11 ромашек с кустовой розой'
    },
    {
      title: 'Ромашковое поле',
      price: 4000,
      imgPath: '/flowers-shop/images/catalog/224031.jpg',
      composition: ['Ромашки'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет в составе которого 19 веток танацетума ромашек'
    },
    {
      title: 'Большая корзина флора',
      price: 12500,
      imgPath: '/flowers-shop/images/catalog/2020071.jpg',
      composition: ['Лилии', 'Розы', 'Гортензии'],
      type: 'Сборный',
      decoration: 'Корзина с цветами',
      size: 'L',
      description: 'Корзина цветов из лилий, роз и гортензий'
    },
    {
      title: 'Летнее настроение',
      price: 4000,
      imgPath: '/flowers-shop/images/catalog/222510.jpg',
      composition: ['Подсолнухи', 'Альстромерии', 'Ромашки'],
      type: 'Сборный',
      decoration: 'Корзина с цветами',
      size: 'L',
      description: 'Корзина цветов из подсолнухов, ромашек и альстромерии'
    },
    {
      title: 'Таинственное очарование',
      price: 10500,
      imgPath: '/flowers-shop/images/catalog/3035_1.jpg',
      composition: ['Эустома'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'L',
      description: '51 нежная эустома с эвкалиптом в букете'
    },
    {
      title: 'Настроение',
      price: 4500,
      imgPath: '/flowers-shop/images/catalog/buket-cvetov-gerbery-i-alstromerii.jpg',
      composition: ['Герберы', 'Альстромерии'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'L',
      description: 'Букет из гербер и альстромерий '
    },
    {
      title: 'Нежность',
      price: 6300,
      imgPath: '/flowers-shop/images/catalog/62a49557db3e4.jpg',
      composition: ['Пионы', 'Эустома', 'Диантус', 'Ромашки'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Ароматные пионы, ромашки и другие цветы в нежном авторском букете.'
    },
    {
      title: 'Спокойствие',
      price: 3300,
      imgPath: '/flowers-shop/images/catalog/scale_1200.jpeg',
      composition: ['Лунария'],
      type: 'Сухоцветы',
      decoration: 'В упаковке',
      size: 'M',
      description:
        'Букет из сухоцветов в виде небольшой полупрозрачной луны цветоков лунарии будут прекрасным  украшением интерьера. Состав: Лунария '
    },
    {
      title: 'Элегантность',
      price: 5300,
      imgPath: '/flowers-shop/images/catalog/5fb2ae578d08d.jpg',
      composition: ['Каллы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Потрясающий букет из белых цветов. Состав: каллы '
    },
    {
      title: 'Микс',
      price: 5300,
      imgPath: '/flowers-shop/images/catalog/skhnwu57rlqz54vadqif144wvqjnfts0.jpeg',
      composition: ['Каллы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Потрясающий букет микс оттенков. Состав: каллы '
    },
    {
      title: 'Весенний ',
      price: 5300,
      imgPath: '/flowers-shop/images/catalog/nezhnyy-buket-kupit-650x650.jpg',
      composition: ['Гиацинты', 'Тюльпаны'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Потрясающий букет их белых цветов. Состав: гиацинты 5шт, тюльпаны 6шт'
    }
  ]

  return { allFlowers }
})
