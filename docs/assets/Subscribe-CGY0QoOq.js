import{_ as n,x as b,o as e,c as d,b as s,t as r,u as l,C as u,F as p,d as v,f as h,m,p as g,e as S,g as _}from"./index-B-2wakrO.js";const I={class:"slide"},T=["src"],$={class:"slide-content"},w={class:"slide-item"},x={class:"slide-item__price"},k={__name:"SubscribeTariff",props:{tariff:{type:Object,required:!0}},setup(a){const t=b();return(f,i)=>(e(),d("article",I,[s("img",{src:a.tariff.imgPath,class:"tariff-item__img"},null,8,T),s("div",$,[s("div",w,[s("h3",null,r(a.tariff.title),1),s("p",null,r(a.tariff.description),1),s("h3",x,r(a.tariff.price)+" ₽",1),s("button",{class:"btn border-btn color-one",onClick:i[0]||(i[0]=c=>l(t).addToCart(a.tariff))}," Выбрать ")])])]))}},P=n(k,[["__scopeId","data-v-c1ab959c"]]),B=u("subscribeTariffs",()=>({tariffs:[{title:'Пакет "Мини"',price:8e3,imgPath:"/flowers-shop/images/tariff-mini.jpg",description:"Состав: сезонные цветы или моно букет"},{title:'Пакет "Стандарт"',price:13e3,imgPath:"/flowers-shop/images/subscribe.png",description:"Состав: сезонные цветы, травы, злаки"},{title:'Пакет "VIP"',price:16e3,imgPath:"/flowers-shop/images/tariff-vip.jpg",description:"Состав: дизайнерская композиция, премиальные сорта цветов, травы, злаки"}]})),o=a=>(g("data-v-a18aaa88"),a=a(),S(),a),C={class:"container"},V={class:"subscribe"},j=o(()=>s("div",{class:"subscribe__title"},"Цветочная подписка",-1)),y=o(()=>s("div",{class:"subscribe__descr"},[s("p",null,[_(" У нас в наличие всегда входит большой ассортимент сезонных цветов. И мы с радостью предлагаем вам оформить цветочную подписку на доставку цветов в дом или офис. Подписка действует 1 месяц, в неё входят "),s("span",null,"4 доставки"),_(". ")]),s("p",null,"При первом заказе в подарок ваза и инструкция по уходу, флористический нож."),s("p",null,"При каждой доставке в подарок инструкция по уходу и подкормка для срезанных цветов.")],-1)),N={class:"subscribe-tariff"},F=o(()=>s("h2",{class:"subscribe-tariff__header"},"Виды подписок:",-1)),q={class:"subscribe-tariff__items"},D=h('<div class="subscribe-steps" data-v-a18aaa88><h2 class="subscribe-steps__header" data-v-a18aaa88>Этапы:</h2><div class="subscribe-steps__items" data-v-a18aaa88><div class="subscribe-steps__step-descr div1" data-v-a18aaa88>Выбираете пакет</div><div class="subscribe-steps__arrow div2" data-v-a18aaa88></div><div class="subscribe-steps__step-descr div3" data-v-a18aaa88> Дизайнерское оформление букета раз в неделю в течение 4 недель </div><div class="subscribe-steps__arrow div4" data-v-a18aaa88></div><div class="subscribe-steps__step-descr div5" data-v-a18aaa88>Отправка курьером</div></div></div>',1),E={__name:"Subscribe",setup(a){const t=B();return(f,i)=>(e(),d("div",C,[s("div",V,[j,y,s("div",N,[F,s("div",q,[(e(!0),d(p,null,v(l(t).tariffs,c=>(e(),m(P,{key:c,tariff:c},null,8,["tariff"]))),128))])]),D])]))}},O=n(E,[["__scopeId","data-v-a18aaa88"]]);export{O as default};