const url = "https://gamehub.bennisites.one/wp-json/wc/store/products";
const preGame = document.querySelector(".preorder-row");

const sortList = document.querySelector("#sort-select")
const sortRelevancy = document.querySelector("#sortRelevancy")

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
                <h2>January 2022</h2>
                <button onclick="window.location.href='product.html?id=${results[i].id}';">$${results[i].prices.price}</button>
            </div>
        </div>`

        // let gameSort = [
        //     {name: results[i].name, price: results[i].prices.price}
            
        // ];
        // console.log(gameSort)

        // function createHTML(results){
            
        //     results.forEach(function(){
        //         preGame.innerHTML += 
        //         `<div class="pre-game">
        //         <div class="game-brand">
        //             <a href="product.html?id=${results[i].id}"
        //             ><img src="${results[i].images[5].src}" alt=""
        //             /></a>
        //             <h1>${results[i].name}</h1>
        //             <h3>Available on:</h3>
        //         </div>
        //         <div class="pre-price">
        //             <h2>January 2022</h2>
        //             <button onclick="window.location.href='product.html?id=${results[i].id}';">$${results[i].prices.price}</button>
        //         </div>
        //     </div>`
        //     })
        // }

        // // createHTML(gameSort);

        // document.querySelector(".sort").addEventListener("click", function(){
        //     preGame.innerHTML = "";
        //     results.sort();

        //     console.log(results)
        //     createHTML(results);
        // })
        
    }

    


}

// async function changeFunc(selectedObject) {
//     const selectedValue = selectedObject.value;
//     console.log(selectedValue);
// }
getProducts();
