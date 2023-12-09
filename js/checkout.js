let products = [
    {
        name: "Spanish Latte",
        price: 180,
        quantity: 0
    },
    {
        name: "Caramel Macchiato",
        price: 185,
        quantity: 0
    },
    {
        name: "Cookie Bundle",
        price: 150,
        quantity: 0
    },
    {
        name: "Croissant",
        price: 165,
        quantity: 0
    }
];

$("#add-spanish-latte").click(function() {
    products[0].quantity++;
    updateCart();
    showPopup("Added Spanish Latte to cart!");
});

$("#add-caramel-macchiato").click(function () {
    products[1].quantity++;
    updateCart();
    showPopup("Added Caramel Macchiato to cart!");
});

$("#add-cookies").click(function () {
    products[2].quantity++;
    showPopup("Added Cookie Bundle to cart!");
    updateCart();
});

$("#add-croissant").click(function () {
    products[3].quantity++;
    updateCart();
    showPopup("Added Croissant to cart!");
});

$("#submit-btn").click(function () {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }
    if (total > 0){
        if ($("#name").val() == "" && $("#email").val() == "" && $("#address").val() == "") {
            showPopup("Please fill out checkout details!");
            return;
        }
        showPopup("Order submitted!");
        $("#name").val("");
        $("#email").val("");
        $("#address").val("");
        for (let i = 0; i < products.length; i++) {
            products[i].quantity = 0;
        }
        updateCart();
    } else {
        showPopup("Please add items to cart!");
    }
});
function showPopup(message) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}
function updateCart() {
    let cart = document.getElementById("cart");
    while (cart.rows.length > 1) {
        cart.deleteRow(1);
    }
    for (let i = 0; i < products.length; i++) {
        if (products[i].quantity > 0) {
            let row = cart.insertRow();
            let nameCell = row.insertCell(0);
            let priceCell = row.insertCell(1);
            let quantityCell = row.insertCell(2);
            let subtotalCell = row.insertCell(3);
            nameCell.innerHTML = products[i].name;
            priceCell.innerHTML = "₱"+products[i].price+".00";
            quantityCell.innerHTML = products[i].quantity;
            subtotalCell.innerHTML = "₱"+products[i].price * products[i].quantity+".00";
        }
    }
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
        }
    if (total > 0) {
        let blankrow = cart.insertRow();
        for (let i = 0; i < 4; i++) {
            blankrow.insertCell(i);
        }
        let line = blankrow.insertCell(3);
        let rowTotal = cart.insertRow();
        for (let i = 0; i < 4; i++) {
            rowTotal.insertCell(i);
        }
        let totalCell = rowTotal.insertCell(3);
        line.innerHTML = "__________";
        totalCell.innerHTML = "₱" + total+".00";
        totalCell.style.fontWeight = "bold";
    }
    
}
