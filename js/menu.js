const food = [
  {
    name: "Зайрмаг",
    price: "4,800₮",
    img: "./pics/menu-food/food1.svg",
    discount: 20,
    discount_price: "6,800₮",
  },
  {
    name: "Панкейк",
    price: "4,800₮",
    img: "./pics/menu-food/food2.svg",
    discount: 20,
    discount_price: "6,800₮",
  },
  {
    name: "Өглөөний хоол",
    price: "4,800₮",
    img: "./pics/menu-food/food3.svg",
    discount: 20,
    discount_price: "6,800₮",
  },
  {
    name: "Банана сендвич",
    price: "4,800₮",
    img: "./pics/menu-food/food4.svg",
    discount: 20,
    discount_price: "6,800₮",
  },
  {
    name: " Салмон загас",
    price: "11,800₮",
    img: "./pics/menu-food/food5.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: " Бөөрөнхий мах",
    price: "14,000₮",
    img: "./pics/menu-food/food6.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Самрын нухаш",
    price: "9,800₮",
    img: "./pics/menu-food/food7.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: " Чикен бургер",
    price: "14,000₮",
    img: "./pics/menu-food/food8.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Детокс салад",
    price: "6,800₮",
    img: "./pics/menu-food/food9.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Кобб салад",
    price: "6,800₮",
    img: "./pics/menu-food/food10.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Авокадо салад",
    price: "6,800₮",
    img: "./pics/menu-food/food11.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Сендвич",
    price: "4,800₮",
    img: "./pics/menu-food/food12.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Донатс",
    price: "5,800₮",
    img: "./pics/menu-food/food13.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: " Орео дессерт",
    price: "7,800₮",
    img: "./pics/menu-food/food14.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Вафли",
    price: "5,800₮",
    img: "./pics/menu-food/food15.svg",
    discount: 0,
    discount_price: " ",
  },
  {
    name: "Макарон",
    price: "3,800₮",
    img: "./pics/menu-food/food16.svg",
    discount: 0,
    discount_price: " ",
  },
];
let foodName = document.querySelectorAll(".card-title");
let foodPrice = document.querySelectorAll(".saled");
let foodDiscount = document.querySelectorAll(".declined");
let foodPic = document.querySelectorAll(".foodPicture");
for (let i = 0; i < food.length; i++) {
  foodName[i].innerHTML += food[i].name;
  foodPrice[
    i
  ].innerHTML += `${food[i].price} <span class ='declined'>${food[i].discount_price}</span>`;
  //   foodimg = food[i].img;
  //   food_main_price[i] = ;
  foodPic[i].innerHTML += `<img
  class="card-img-top"
  src="${food[i].img}"
  alt="Card image cap"
/>`;
}
