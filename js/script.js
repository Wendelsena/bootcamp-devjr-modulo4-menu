var prods = [
    { id: 1, name: "Cheeseburger", price: 11.0 },
    { id: 2, name: "Bacon Sandwich", price: 22.0 },
    { id: 3, name: "Cheese Fries", price: 33.0 },
    { id: 4, name: "Chicken Quesadilla", price: 40.0 },
    { id: 5, name: "Classic Burger", price: 22.0 },
    { id: 6, name: "French Fries", price: 24.0 },
    { id: 7, name: "Fried Shrimp", price: 25.0 },
    { id: 8, name: "Cheese Sandwich", price: 27.0 },
    { id: 9, name: "Salad Sandwich", price: 29.0 }
];

function calc() {
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;
    var userName = document.getElementById("name").value;
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    output.innerHTML = "";

    output.innerHTML = `Dear <strong>${userName}</strong>, <br><br>Here are the details of your order:<br><br>`;
    
    for (var input of quantities) {
        var id = parseInt(input.id);
        var quantity = parseInt(input.value);

        if (quantity > 0) {
            var index = id - 1;
            var totalPrice = prods[index].price * quantity;
            total += totalPrice;

            output.innerHTML += `• ${prods[index].name} - Unit price: ${formatter.format(prods[index].price)} - Quantity: ${quantity} - <strong>Subtotal: ${formatter.format(totalPrice)}</br>`;
        }
    }

    output.innerHTML += `<h2>Total: ${formatter.format(total)}</h2>`;
}
