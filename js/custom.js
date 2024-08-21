import { products } from "./products.js";
console.log(products);
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});



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