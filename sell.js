var cartItems = [];
var n = 0; // Déclarer n en dehors de la fonction add

function addItemToCart(itemName, itemPrice) {
    var item = {
        name: itemName,
        price: itemPrice
    };
    cartItems.push(item);
}

function calculateTotal() {
    var total = 0;

    for (var i = 0; i < cartItems.length; i++) {
        total += cartItems[i].price;
    }

    return total;
}

function displayCart() {
    var cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = "";

    cartItems.forEach(function (item) {
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = item.name + " - $" + item.price;
        cartContainer.appendChild(itemDiv);
    }); 
    var totalDiv = document.createElement("div");
    totalDiv.innerHTML = "Total: $" + calculateTotal();
    cartContainer.appendChild(totalDiv);

}

var elementVar = document.getElementById("cartBadge");

("#azer").on("click", function() {
    elementVar.setAttribute("value", add());
}); 

function add() {
    console.log(n);
    return ++n }
