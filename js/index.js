const url = "https://gamehub.bennisites.one/wp-json/wc/store/products";

const newRelease = document.querySelector(".new-release");
const recRow = document.querySelector(".rec-row");
const bestRow = document.querySelector(".best-row");


async function getProducts() {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results)

    for (let i = 0; i < results.length; i++) {
        if (results[i].categories[0].slug == "new-releases") {
            newRelease.innerHTML += 
            `<h1>NEW RELEASES</h1>
            <div class="new-game" onclick="window.location.href='product.html?id=${results[i].id}';">
                <img class="game-img" src="${results[i].images[0].src}" alt="" />
                <div class="new-text">
                    <h2>${results[i].name}</h2>
                    <h3>$${results[i].prices.price}</h3>
                </div> 
            </div>`
        }
    }

    for (let i = 0; i < results.length; i++) {
        if (results[i].categories[0].slug == "recommended-for-you") {
            recRow.innerHTML += 
            `<div onclick="window.location.href='product.html?id=${results[i].id}';" class="row-game">
                <img src="${results[i].images[0].src}"/>
                <div class="row-text">
                    <h2>${results[i].name}</h2>
                    <h3>$${results[i].prices.price}</h3>
                </div>
            </div>`
        }
    }
    
    for (let i = 0; i < results.length; i++) {
        if (results[i].categories[0].slug == "bestseller") {
            bestRow.innerHTML +=
            `<div onclick="window.location.href='product.html?id=${results[i].id}';" class="row-game">
                <img src="${results[i].images[0].src}"/>
                <div class="row-text">
                    <h2>${results[i].name}</h2>
                    <h3>$${results[i].prices.price}</h3>
                </div>
            </div>`
        }
    }
}

getProducts();