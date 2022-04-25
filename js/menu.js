const food = [
  {
    name: "Зайрмаг",
    price: "4,800₮",
    img: "./pics/menu-food/food1.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: "Панкейк",
    price: "4,800₮",
    img: "./pics/menu-food/food2.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: "Өглөөний хоол",
    price: "4,800₮",
    img: "./pics/menu-food/food3.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: "Банана сендвич",
    price: "4,800₮",
    img: "./pics/menu-food/food4.svg",
    discount: 20,
    discount_price: "6,800₮",
    category: "discount",
  },
  {
    name: " Салмон загас",
    price: "11,800₮",
    img: "./pics/menu-food/food5.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: " Бөөрөнхий мах",
    price: "14,000₮",
    img: "./pics/menu-food/food6.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: "Самрын нухаш",
    price: "9,800₮",
    img: "./pics/menu-food/food7.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: " Чикен бургер",
    price: "14,000₮",
    img: "./pics/menu-food/food8.svg",
    discount: 0,
    discount_price: " ",
    category: "main",
  },
  {
    name: "Детокс салад",
    price: "6,800₮",
    img: "./pics/menu-food/food9.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Кобб салад",
    price: "6,800₮",
    img: "./pics/menu-food/food10.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Авокадо салад",
    price: "6,800₮",
    img: "./pics/menu-food/food11.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Сендвич",
    price: "4,800₮",
    img: "./pics/menu-food/food12.svg",
    discount: 0,
    discount_price: " ",
    category: "salad",
  },
  {
    name: "Донатс",
    price: "5,800₮",
    img: "./pics/menu-food/food13.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
  {
    name: " Орео дессерт",
    price: "7,800₮",
    img: "./pics/menu-food/food14.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
  {
    name: "Вафли",
    price: "5,800₮",
    img: "./pics/menu-food/food15.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
  {
    name: "Макарон",
    price: "3,800₮",
    img: "./pics/menu-food/food16.svg",
    discount: 0,
    discount_price: " ",
    category: "desert",
  },
];
const discountDish = food.filter((dish) => dish.category == "discount");
const mainDish = food.filter((dish) => dish.category == "main");
const salad = food.filter((dish) => dish.category == "salad");
const desert = food.filter((dish) => dish.category == "desert");

const createFood = (arr, container) => {
  let html = document.querySelector(container);
  for (let i = 0; i < arr.length; i++) {
    let foodInfo = `
  <a href="#" class = 'col pe-2'>
    <div class="card1">
      <div class="hovver">
      </div>
      
      <div class="card">
      <div class="d-flex flex-row-reverse foodPicture">
      <img src="${arr[i].img}" alt="" />
        
        </div>
        <div class="card-body d-flex flex-column">
          <h5
            class="card-title d-flex justify-content-start ms-0"
          >${arr[i].name}</h5>
          <p class="card-text d-flex">
            <span class="saled">${arr[i].price}</span>
          </p>
        </div>
      </div></div
  ></a>
`;
    // if (arr[i].discount > 0) {
    //   const discountPer = (arr[i].price * (100 - discount)) / 100;
    //   document.querySelector(
    //     ".card-text"
    //   ).innerHTML += `<span class = 'declined'> ${discountPer}</span>`;
    // }
    html.innerHTML += foodInfo;
  }
};

createFood(discountDish, "#discoundDish");
createFood(mainDish, "#mainDish");
createFood(salad, "#salad");
createFood(desert, "#desert");
