import { products } from "./products.js";
//console.log(products);




let displayProducts = '';
products.map((curElem) => {
  displayProducts += `
    <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="box">
            <a href="productDetail.html?id=${curElem.id}">
              <div class="img-box">
                <img src="${curElem.category.image}" alt="">
              </div>
              <div class="detail-box">
                <h6>
                  ${curElem.title}
                </h6>
                <h6>
                  Price
                  <span>
                    ₹${curElem.price}
                  </span>
                </h6>
              </div>
              <div class="new">
                <span>
                  New
                </span>
              </div>
            </a>
          </div>
        </div>
    `
})

document.querySelector('.latestProduct').innerHTML = displayProducts;

function imageDetail(event) {
  event.preventDefault();
  alert('image clicked');
}