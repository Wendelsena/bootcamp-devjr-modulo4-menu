var prods = [
    { id: 1, name: "Cheeseburger", price: 2.00 },
    { id: 2, name: "Bacon Sandwich", price: 3.00 },
    { id: 3, name: "Cheese Fries", price: 5.00 },
    { id: 4, name: "Chicken Quesadilla", price: 7.00 },
    { id: 5, name: "Classic Burger", price: 1.50 },
    { id: 6, name: "French Fries", price: 2.00 },
    { id: 7, name: "Fried Shrimp", price: 8.00 },
    { id: 8, name: "Cheese Sandwich", price: 3.00 },
    { id: 9, name: "Salad Sandwich", price: 4.00 }
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
