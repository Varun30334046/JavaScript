let allProducts = [];
function getIndianPrice(price){

    return Math.round(price * 20);

}

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(data){

    allProducts = data;

    loadProducts();

});

function loadProducts(){

    let output="";

    // Task 1

    document.getElementById("count").innerHTML =
    "Total Products : " + allProducts.length;
    allProducts.forEach(function(product){
        output += `
        <div class="card">
        `;

        // Task 2
        output += `
        <h3>${product.title}</h3>
        `;

        // Task 3
        
      if(product.price < 100){

    output += `
    <p>Price : ₹${getIndianPrice(product.price)}</p>
    `;

}

        // Task 4

      if(product.price > 100){

    output += `
    <p>Price : ₹${getIndianPrice(product.price)}</p>
    `;

}
        // Task 5

        output += `
        <p><b>Category :</b> ${product.category}</p>
        `;
        output += `
        </div>
        `;

    });

    document.getElementById("products").innerHTML=output;

}

// Task 6

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(items){

    let cards = "";

    items.forEach(function(value){

        cards += `
        <div class="card">
            <h3>${value.title}</h3>
            <p>Rating : ⭐ ${value.rating.rate}</p>
        </div>
        `;

    });

    document.getElementById("products").innerHTML = cards;

});



// Task 7

let storeItems = [];

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(list){

    storeItems = list;

    showProducts(storeItems);

});

document.getElementById("search").addEventListener("keyup", function(){

    let keyword = this.value.toLowerCase();

    let cards = "";

    storeItems.forEach(function(item){

        if(item.title.toLowerCase().includes(keyword)){

            cards += `
            <div class="card">
                <h3>${item.title}</h3>
                <p>Price : ₹${getIndianPrice(item.price)}</p>
            </div>
            `;

        }

    });

    document.getElementById("products").innerHTML = cards;

});

function showProducts(list){

    let cards = "";

    list.forEach(function(item){

        cards += `
        <div class="card">
            <h3>${item.title}</h3>
            <p>Price : ₹${getIndianPrice(item.price)}</p>
        </div>
        `;

    });

    document.getElementById("products").innerHTML = cards;

}


// Task 8

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(collection){

    let result = "";

    collection.forEach(function(record){

        if(record.category == "electronics"){

            result += `
            <div class="card">
                <h3>${record.title}</h3>
                <p>${record.category}</p>
            </div>
            `;

        }

    });

    document.getElementById("products").innerHTML = result;

});



// Task 9

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(productsList){

    let html = "";

    productsList.forEach(function(info){

        if(info.category == "men's clothing"){

            html += `
            <div class="card">
                <h3>${info.title}</h3>
                <p>${info.category}</p>
            </div>
            `;

        }

    });

    document.getElementById("products").innerHTML = html;

});



// Task 10
fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(records){

    let content = "";

    records.forEach(function(details){

        if(details.category == "women's clothing"){

            content += `
            <div class="card">
                <h3>${details.title}</h3>
                <p>${details.category}</p>
            </div>
            `;

        }

    });

    document.getElementById("products").innerHTML = content;

});

// Task 11

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(records){

    let content = "";

    records.forEach(function(details){

        if(details.category == "jewelery"){

            content += `
            <div class="card">
                <h3>${details.title}</h3>
                <p>${details.category}</p>
            </div>
            `;

        }

    });

    document.getElementById("products").innerHTML = content;

});



// Task 12

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(collection){

    let cards = "";
    let index = 0;

    collection.forEach(function(item){

        if(index < 5){

            cards += `
            <div class="card">
                <h3>${item.title}</h3>
            </div>
            `;

        }

        index++;

    });

    document.getElementById("products").innerHTML = cards;

});



// Task 13

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(productsList){

    let design = "";
    let count = 0;

    productsList.forEach(function(product){

        if(count >= productsList.length - 5){

            design += `
            <div class="card">
                <h3>${product.title}</h3>
            </div>
            `;

        }

        count++;

    });

    document.getElementById("products").innerHTML = design;

});



// Task 14

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(goods){

    let html = "";
    let serial = 1;

    goods.forEach(function(value){

        html += `
        <div class="card">
            <h2>Product ${serial}</h2>
            <h3>${value.title}</h3>
        </div>
        `;

        serial++;

    });

    document.getElementById("products").innerHTML = html;

});



// Task 15

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(storeItems){

    let result = "";

    storeItems.forEach(function(info){

        let shortDescription = "";

        if(info.description.length > 100){

            shortDescription =
            info.description.substring(0,100) + " Read More...";

        }
        else{

            shortDescription = info.description;

        }

        result += `
        <div class="card">
            <h3>${info.title}</h3>
            <p>${shortDescription}</p>
        </div>
        `;

    });

    document.getElementById("products").innerHTML = result;

});
// Task 16

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(records){

    let highest = records[0];

    records.forEach(function(item){

        if(item.rating.rate > highest.rating.rate){

            highest = item;

        }

    });

    document.getElementById("products").innerHTML = `
    <div class="card">
        <h3>${highest.title}</h3>
        <p>Rating : ⭐ ${highest.rating.rate}</p>
    </div>
    `;

});



// Task 17

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(collection){

    let cheapest = collection[0];

    collection.forEach(function(value){

        if(value.price < cheapest.price){

            cheapest = value;

        }

    });

    document.getElementById("products").innerHTML = `
    <div class="card">
        <h3>${cheapest.title}</h3>
        <p>Price : ₹${getIndianPrice(cheapest.price)}</p>
    </div>
    `;

});



// Task 18

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json();
})
.then(function(goods){

    let expensive = goods[0];

    goods.forEach(function(product){

        if(product.price > expensive.price){

            expensive = product;

        }

    });

    document.getElementById("products").innerHTML = `
    <div class="card">
        <h3>${expensive.title}</h3>
       <p>Price : ₹${getIndianPrice(expensive.price)}</p> 
    </div>
    `;

});



// Task 19

fetch("https://fakestoreapi.com/products")
.then(function(response){

    return response.json();

})
.then(function(items){

    let cards = "";

    items.forEach(function(data){

        cards += `
        <div class="card">
            <h3>${data.title}</h3>
        </div>
        `;

    });

    document.getElementById("products").innerHTML = cards;

})
.catch(function(){

    document.getElementById("products").innerHTML = `
    <h2>❌ Unable to Load Products</h2>
    <p>Please try again later.</p>
    `;

});



// Task 20

let productList = [];

fetch("https://fakestoreapi.com/products")
.then(function(response){

    return response.json();

})
.then(function(records){

    productList = records;

    displayProducts(productList);

})
.catch(function(){

    document.getElementById("products").innerHTML = `
    <h2>❌ Unable to Load Products</h2>
    <p>Please try again later.</p>
    `;

});

function displayProducts(list){

    let html = "";

    document.getElementById("count").innerHTML =
    "Total Products : " + list.length;

    list.forEach(function(item){

        html += `
        <div class="card">

            <img src="${item.image}" width="100">

            <h3>${item.title}</h3>

            <p>Category : ${item.category}</p>

           <p>Price : ₹${getIndianPrice(item.price)}</p> 

            <p>Rating : ⭐ ${item.rating.rate}</p>

            <button>Buy Now</button>

        </div>
        `;

    });

    document.getElementById("products").innerHTML = html;

}

document.getElementById("search").addEventListener("keyup", function(){

    let searchText = this.value.toLowerCase();

    let result = "";

    let total = 0;

    productList.forEach(function(product){

        if(product.title.toLowerCase().includes(searchText)){

            total++;

            result += `
            <div class="card">

                <img src="${product.image}" width="100">

                <h3>${product.title}</h3>

                <p>Category : ${product.category}</p>

                <p>Price : $${product.price}</p>

                <p>Rating : ⭐ ${product.rating.rate}</p>

                <button>Buy Now</button>

            </div>
            `;

        }

    });

    document.getElementById("count").innerHTML =
    "Total Products : " + total;

    document.getElementById("products").innerHTML = result;

});