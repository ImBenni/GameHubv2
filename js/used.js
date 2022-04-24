const url = "https://gamehub.bennisites.one/wp-json/wc/store/products";
const preGame = document.querySelector(".preorder-row");

async function getProducts() {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results)

    for (let i = 0; i < results.length; i++) {
        preGame.innerHTML += 
        `<div class="pre-game">
            <div class="game-brand">
                <a href="product.html?id=${results[i].id}"
                ><img src="${results[i].images[5].src}" alt=""
                /></a>
                <h1>${results[i].name}</h1>
                <h3>Available on:</h3>
            </div>
            <div class="pre-price">
                <img src="images/steam.png" alt="" />
                <img src="images/ps4.png" alt="" />
                <img src="images/xbox.png" alt="" />
                <img src="images/nintendo.png" alt="" />
                <button onclick="window.location.href='product.html?id=${results[i].id}';">$59</button>
            </div>
        </div>`
        
    }
}

getProducts();

