const createFood = (arr, container) => {
  let html = document.querySelector(container);
  arr.map((item) => {
    let foodInfo = `
    <a href="#" class = 'col pe-2'>
      <div class="card1">
        <div class="hovver">
        </div>
        
        <div class="card">
        <div class="d-flex flex-row-reverse foodPicture">
        <img src="${item.img}" alt="" />
          
          </div>
          <div class="card-body d-flex flex-column">
            <h5
              class="card-title d-flex justify-content-start ms-0"
            >${item.name}</h5>
            <p class="card-text d-flex">
              <span class="saled">${item.price}</span>
            </p>
          </div>
        </div></div
    ></a>
  `;
    html.innerHTML += foodInfo;
  });
};

const menuXhr = new XMLHttpRequest();

menuXhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    const datas = JSON.parse(this.responseText);
    const discountDish = datas.filter((dish) => dish.category == "discount");
    const mainDish = datas.filter((dish) => dish.category == "main");
    const salad = datas.filter((dish) => dish.category == "salad");
    const desert = datas.filter((dish) => dish.category == "desert");

    createFood(discountDish, "#discoundDish");
    createFood(mainDish, "#mainDish");
    createFood(salad, "#salad");
    createFood(desert, "#desert");
  }
};

menuXhr.open("GET", "/js/data.json", true);

menuXhr.send();
