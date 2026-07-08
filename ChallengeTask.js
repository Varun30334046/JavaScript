let allItems = [];

fetch("https://fakestoreapi.com/products")
.then(function(response){

    return response.json();

})
.then(function(result){

    allItems = result;

    displayProducts(allItems);

})
.catch(function(){

    document.getElementById("products").innerHTML = `
    <h2>❌ Unable to Load Products</h2>
    <p>Please try again later.</p>
    `;

});

function displayProducts(list){

    let cards = "";

    document.getElementById("count").innerHTML =
    "Total Products : " + list.length;

    list.forEach(function(item){

        cards += `
        <div class="card">

            <img src="${item.image}">

            <h3>${item.title}</h3>

            <p><b>Category :</b> ${item.category}</p>

            <p><b>Price :</b> $${item.price}</p>

            <p><b>Rating :</b> ⭐ ${item.rating.rate}</p>

            <button>Buy Now</button>

        </div>
        `;

    });

    document.getElementById("products").innerHTML = cards;

}

document.getElementById("search").addEventListener("keyup", searchProducts);

document.getElementById("category").addEventListener("change", searchProducts);

document.getElementById("price").addEventListener("change", searchProducts);

function searchProducts(){

    let searchText =
    document.getElementById("search").value.toLowerCase();

    let categoryText =
    document.getElementById("category").value;

    let priceValue =
    document.getElementById("price").value;

    let html = "";

    let total = 0;

    allItems.forEach(function(product){

        let searchMatch = false;
        let categoryMatch = false;
        let priceMatch = false;

        // Search

        if(product.title.toLowerCase().includes(searchText)){

            searchMatch = true;

        }

        // Category

        if(categoryText == "all"){

            categoryMatch = true;

        }
        else{

            if(product.category == categoryText){

                categoryMatch = true;

            }

        }

        // Price

        if(priceValue == "all"){

            priceMatch = true;

        }
        else{

            if(product.price < Number(priceValue)){

                priceMatch = true;

            }

        }

        if(searchMatch && categoryMatch && priceMatch){

            total++;

            html += `
            <div class="card">

                <img src="${product.image}">

                <h3>${product.title}</h3>

                <p><b>Category :</b> ${product.category}</p>

                <p><b>Price :</b> $${product.price}</p>

                <p><b>Rating :</b> ⭐ ${product.rating.rate}</p>

                <button>Buy Now</button>

            </div>
            `;

        }

    });

    document.getElementById("count").innerHTML =
    "Total Products : " + total;

    if(total == 0){

        document.getElementById("products").innerHTML = `
        <h2>No Products Found</h2>
        `;

    }
    else{

        document.getElementById("products").innerHTML = html;

    }

}