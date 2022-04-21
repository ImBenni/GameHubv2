const productInfo = document.querySelector(".product_info");
const productDesc = document.querySelector(".scroll-desc");
const bigGallery = document.querySelector(".big_picture");
const smallGallery = document.querySelector(".small_gallery");
const tags = document.querySelector(".tags");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const worksId = params.get("id");

const url = `https://gamehub.bennisites.one/wp-json/wc/store/products/${worksId}`;

async function getData() {
    const response = await fetch(url);
    const results = await response.json();
  
    createPage(results);
}
  
getData();

function createPage(product) {
    productInfo.innerHTML += 
    `<div class="info""><h2>${product.name}</h2>
      <div class="info_line"></div>
      <h1>${product.prices.price}$</h1>
      <button  onclick="window.location.href='checkout.html';">ORDER NOW</button>
      <img src="images/payment-methods.png" alt="" />
    </div>`

    productDesc.innerHTML += 
    `<div class="scroll-desc">
        <h3>${product.description}</h3>
    </div>`

    bigGallery.innerHTML += 
    `<img src="${product.images[1].src}">`


    for (let i = 2; i < product.images.length; i++) {
        smallGallery.innerHTML += 
        `<img src="${product.images[i].src}">`
    }

    

    for (let i = 0; i < product.tags.length; i++) {
        tags.innerHTML += `
        <h3>${product.tags[i].name}</h3>`
    }
        
    
  ;
}


