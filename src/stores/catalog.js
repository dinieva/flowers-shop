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
      imgPath: '/public/images/trends/7f106c299e4a8f9ace07ad21e1fb0f70.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из семи штук французской розы сорта «Нина»'
    },
    {
      title: 'Монобукет Признание',
      price: 5900,
      imgPath: 'https://flowerskostroma.ru/upload/iblock/de0/1wk2s4re9y9ez1yz6w9ivtc5jklm241s.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 9 шт кустовых роз Мисти баблс'
    },
    {
      title: ' 21 ароматной розы ',
      price: 10000,
      imgPath:
        'https://klumba.moscow/wp-content/uploads/2022/02/58942124-e4eb-419a-9395-2f5a47712b7b.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 21 ароматной розы'
    },

    {
      title: '15 пионовидных тюльпанов',
      price: 3080,
      imgPath:
        'https://i.siteapi.org/zSGuAOhYpc6nJnhVx0PYGtzpvPI=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/1aa8a624fd24470/img/5vc9elq2rm044kkk48kw8k0ksw0k8w',
      composition: ['Тюльпаны'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 15 пионовидных тюльпанов'
    },
    {
      title: '25 белых тюльпанов',
      price: 4800,
      imgPath:
        'https://klumba.moscow/wp-content/uploads/2024/03/buket-iz-25-belyh-tjulpanov-2-600x600.jpg',
      composition: ['Тюльпаны'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет, состоящий из 25 белых тюльпанов'
    },
    {
      title: 'розово-сиреневый букет из 25 тюльпанов',
      price: 5500,
      imgPath:
        'https://klumba.moscow/wp-content/uploads/2024/03/rozovo-sirenevyj-buket-tjulpanov-25-2-600x600.jpg',
      composition: ['Тюльпаны'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет, состоящий из 25 розово-сиреневых тюльпанов'
    },

    {
      title: 'Букет розовых ранункулюсов',
      price: 5500,
      imgPath: 'https://klumba.moscow/wp-content/uploads/2021/02/P2480595.jpeg',
      composition: ['Ранункулюсы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 7 шт ранункулюсов'
    },
    {
      title: 'Букет из ранункулюсов ханой',
      price: 13390,
      imgPath: 'https://klumba.moscow/wp-content/uploads/2021/02/IMG_8042-scaled.jpg',
      composition: ['Ранункулюсы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет, состоящий из 19 шт ранункулюсов'
    },
    {
      title: 'Ранункулюс - 7 шт, Эвкалипт',
      price: 6360,
      imgPath:
        'https://i.siteapi.org/QDllZBKvB38EsnGQOeuY5APG718=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/1aa8a624fd24470/img/at0lxtsub7cw0cwsocs8ssw8oo0sgk',
      composition: ['Ранункулюс', 'Эвкалипт'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет, состоящий из 7 шт ранункулюсов'
    },

    {
      title: 'Букет из 7 розовых гортензий',
      price: 5700,
      imgPath:
        'https://klumba.moscow/wp-content/uploads/2022/11/buket-iz-7-rozovyh-gortenzij-rotated.jpg',
      composition: ['Гортензии'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 7 розовых гортензий'
    },
    {
      title: 'Букет из 7 белых гортензий',
      price: 5700,
      imgPath:
        'https://klumba.moscow/wp-content/uploads/2022/11/buket-iz-7-belyh-gortenzij-rotated.jpg',
      composition: ['Гортензии'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 7 белых гортензий'
    },
    {
      title: 'Букет Воздушный поцелуй',
      price: 3390,
      imgPath:
        'https://i.siteapi.org/fpMzSFXEGOzDpE-Ce8rApsgtDNM=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/1aa8a624fd24470/img/g53leuc32io0wo4cco44gsw0sc0sco',
      composition: ['Гортензии'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 7 белых, розовых, голубых гортензий'
    },

    {
      title: 'Букет из 9 шарообразных хризантем',
      price: 3200,
      imgPath:
        'https://i.siteapi.org/52ifYJTZ_muu6VXCmIoozsTcAq4=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/1aa8a624fd24470/img/siphetwst74ccwkkco4swwksc0sk0o',

      composition: ['Хризантемы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет из 9 шарообразных хризантем'
    },
    {
      title: '25 хризантем',
      price: 7500,
      imgPath:
        'https://i.siteapi.org/AFUh1ACEPyvyYLhwwYSJoZXkDvY=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/1aa8a624fd24470.s.siteapi.org/img/bw4govjwxy0cwcco4cc0ssowwwgwgg',

      composition: ['Хризантемы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 25 хризантем'
    },
    {
      title: '21 хризантема',
      price: 9500,
      imgPath:
        'https://i.siteapi.org/ZI5cRKW4eK5g3f3wHF2z-G6cfAc=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/1aa8a624fd24470.s.siteapi.org/img/dwqyb3il8o8o4o0s008cgok8scowkg',

      composition: ['Хризантемы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из 21 хризантемы'
    },

    {
      title: '15 веток гипсофилы',
      price: 7700,
      imgPath:
        'https://i.siteapi.org/6i9UtNhS2XRogkA4gYQGD5Q-KWk=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/1aa8a624fd24470/img/e9byii766io0w8sccogwc488gswgg8',

      composition: ['Гипсофила'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет из 15 веток гипсофилы'
    },
    {
      title: 'Букет из голубой гипсофилы',
      price: 9000,
      imgPath:
        'https://i.siteapi.org/5QksqJdR2RxUolP_4POtxRCj4T0=/fit-in/400x534/center/top/filters:fill(transparent):format(webp)/s.siteapi.org/1aa8a624fd24470/img/pup8p7rvzzksogcwgkwggcc0s0c484',

      composition: ['Гипсофила'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'L',
      description: 'Чудесный букет'
    },
    {
      title: 'КОМПОЗИЦИЯ С ГОЛУБОЙ ГОРТЕНЗИЕЙ',
      price: 7800,
      imgPath:
        'https://festivalshop.ru/wp-content/uploads/2018/01/image-12-07-20-10-22-12-large.jpg',
      composition: ['Гортензии', 'Розы'],
      type: 'Сборный',
      decoration: 'Шляпная коробка',
      size: 'L',
      description: 'Чудесный букет'
    },
    {
      title: 'Шляпная коробка с орхидеями',
      price: 4100,
      imgPath:
        'https://festivalshop.ru/wp-content/uploads/2019/12/image-06-05-21-10-11-26-large.jpg',
      composition: ['Орхидеи'],
      type: 'Монобукет',
      decoration: 'Шляпная коробка',
      size: 'M',
      description: 'Чудесный букет'
    },
    {
      title: 'Воспоминание',
      price: 20500,
      imgPath:
        'https://balashiha.mybloom.ru/upload/iblock/834/8340756504c4e60499191377c4b976b3.jpg',
      composition: ['Розы'],
      type: 'Монобукет',
      decoration: 'Шляпная коробка',
      size: 'XL',
      description: 'Чудесный букет в корзине из 151 шт розы'
    },
    {
      title: 'Композиция из пудровых французских роз',
      price: 2000,
      imgPath: 'https://festivalshop.ru/wp-content/uploads/2020/05/img_9986-600x600.jpg',
      composition: ['Французские розы', 'Розы'],
      type: 'Монобукет',
      decoration: 'Шляпная коробка',
      size: 'S',
      description: 'Чудесный букет'
    },
    {
      title: 'Большая корзина роз с орхидеей и хризантемой',
      price: 20500,
      imgPath: 'https://klumba.moscow/wp-content/uploads/2020/11/IMG_1556-scaled.jpg',
      composition: ['Орхидеи', 'Розы', 'Хризантема'],
      type: 'Сборный',
      decoration: 'Корзина с цветами',
      size: 'L',
      description: 'Чудесный букет'
    },
    {
      title: 'Лаванда',
      price: 2500,
      imgPath: 'https://ir.ozone.ru/s3/multimedia-6/c1000/6569940126.jpg',
      composition: ['Лаванда'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет'
    },
    {
      title: 'Букет итальянской мимозы',
      price: 3500,
      imgPath:
        'https://shop-cdn1-2.vigbo.tech/shops/29666/products/16282412/images/3-5ccb1489f6e93ebde2cb0244ba283f26.jpg',
      composition: ['Мимоза'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Чудесный букет из итальянской мимозы'
    },
    {
      title: 'Композиция в деревянном ящике',
      price: 4500,
      imgPath:
        'https://kingvl.ru/wa-data/public/shop/products/07/12/1207/images/5533/5533.970.jpeg',
      composition: ['Диантус', 'Розы', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'Композиция в ящике',
      size: 'S',
      description: 'Композиция в деревянном ящике'
    },
    {
      title: 'Композиция в деревянном ящике',
      price: 4700,
      imgPath: 'https://meandyou-studio.ru/userfiles/shop/medium/5201_img_8533-.jpg',
      composition: ['Орхидеи', 'Розы', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'Композиция в ящике',
      size: 'M',
      description: 'Композиция в деревянном ящике'
    },
    {
      title: 'Композиция намерение',
      price: 2000,
      imgPath:
        'https://lovelybuket.ru/wp-content/webp-express/webp-images/uploads/2021/05/elitnaya-kompoziciya-oblaka-500x500.jpg.webp',
      composition: ['Гортензии', 'Розы', 'Рунункулусы', 'Эустома'],
      type: 'Сборный',
      decoration: 'Шляпная коробка',
      size: 'XL',
      description: 'Чудесный букет'
    },
    {
      title: 'Вау Эффект',
      price: 6000,
      imgPath:
        'https://imgproxy.sbermarket.ru/imgproxy/size-500-500/czM6Ly9jb250ZW50LWltYWdlcy1wcm9kL3Byb2R1Y3RzLzMyMDQ1NDA1L29yaWdpbmFsLzEvMjAyNC0wMy0wN1QwOSUzQTA5JTNBMTcuNDI1MTQ0JTJCMDAlM0EwMC8zMjA0NTQwNV8xLmpwZw==.jpg',
      composition: ['Гортензии', 'Розы', 'Орхидеи', 'Диантус'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'XL',
      description: 'Чудесный букет'
    },
    {
      title: 'Рассвет',
      price: 3000,
      imgPath: 'https://kamelia-tver.ru/wp-content/uploads/2022/07/buket_2021-3-scaled.jpeg',
      composition: ['Ромашки', 'Хризантемы'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет'
    },
    {
      title: 'Признание',
      price: 4000,
      imgPath: 'https://dostavka-tsvety.ru/wp-content/uploads/2023/08/p159_1573140652_63507.jpg',
      composition: ['Ромашки', 'Розы'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'S',
      description: 'Чудесный букет в составе которого 11 ромашек с кустовой розой'
    },
    {
      title: 'Большая корзина флора',
      price: 12500,
      imgPath:
        'https://talisman-flora.ru/image/cache/catalog/20200628/20200711_140909-auto_width_600.jpg',
      composition: ['Лилии', 'Розы', 'Гортензии'],
      type: 'Сборный',
      decoration: 'Корзина с цветами',
      size: 'L',
      description: 'Корзина цветов из лилий, роз и гортензий'
    },
    {
      title: 'Таинственное очарование',
      price: 10500,
      imgPath: 'https://venusinfleurs.ru/image/catalog/product/3035/3035_1.jpg',
      composition: ['Эустома'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'L',
      description: '51 нежная эустома с эвкалиптом в букете'
    },
    {
      title: 'Настроение',
      price: 4500,
      imgPath: 'https://million-buketov.ru/d/buket-cvetov-gerbery-i-alstromerii.jpg',
      composition: ['Герберы', 'Альстромерии'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'L',
      description: 'Букет из гербер и альстромерий '
    },
    {
      title: 'Нежность',
      price: 6300,
      imgPath: 'https://www.rosemarkt.ru/resources/data/photos/62a49557db3e4/big.jpg',
      composition: ['Пионы', 'Эустома', 'Диантус', 'Ромашки'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Ароматные пионы, ромашки и другие цветы в нежном авторском букете.'
    },
    {
      title: 'Спокойствие',
      price: 3300,
      imgPath:
        'https://avatars.dzeninfra.ru/get-zen_doc/112297/pub_619f8b73a423177f7d4111f7_619f8c3f012f035dd49754b5/scale_1200',
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
      imgPath: 'https://www.rosemarkt.ru/resources/data/photos/5fb2ae578d08d/big.jpg',
      composition: ['Каллы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Потрясающий букет из белых цветов. Состав: каллы '
    },
    {
      title: 'Микс',
      price: 5300,
      imgPath: 'https://uflor.ru/upload/iblock/1f7/skhnwu57rlqz54vadqif144wvqjnfts0.JPG',
      composition: ['Каллы'],
      type: 'Монобукет',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Потрясающий букет микс оттенков. Состав: каллы '
    },
    {
      title: 'Весенний ',
      price: 5300,
      imgPath:
        'https://www.dostavka-tsvetov.com/image/cache/catalog/bukets2021/nezhnyy-buket-kupit-650x650.webp',
      composition: ['Гиацинты', 'Тюльпаны'],
      type: 'Сборный',
      decoration: 'В упаковке',
      size: 'M',
      description: 'Потрясающий букет их белых цветов. Состав: гиацинты 5шт, тюльпаны 6шт'
    }
    //https://uflor.ru/upload/iblock/1f7/skhnwu57rlqz54vadqif144wvqjnfts0.JPG
  ]

  return { allFlowers }
})
