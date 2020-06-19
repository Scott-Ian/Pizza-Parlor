// Business Logic

function Pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = 5;
}

Pizza.prototype.determinePrice = function () {
  if (this.crust === "Thin") {
    this.price += 3;
  } else if (this.crust === "Stuffed") {
    this.price += 5;
  } else if (this.crust === "Deep Dish") {
    this.price += 8;
  }

  if (this.size === "Small") {
    this.price += 3;
  } else if (this.size === "Medium") {
    this.price += 5;
  } else if (this.size === "Large") {
    this.price += 8;
  } else if (this.size === "Family") {
    this.price += 10;
  }

  if (this.toppings.length >=3) {
    this.price += 1.50 * (this.toppings.length -2)
  }

}

function displayPizzaPrice (pizza) {
  size, crust, toppings
  $("#size").text(pizza.size);
  $("#crust").text(pizza.crust);
  const pizzaToppingsString = pizza.toppings.join(", ");
  $("#toppings").text(pizzaToppingsString);
  $("#pizza-cost").text(pizza.price);

  $("#pizza-display").show();
}

function attachContactListeners (pizza) {
  $("ul#")
}

// UI Logic
$(document).ready(function() {
  let pizza;

  $("form#pizza-form").submit(function (event) {
    event.preventDefault();

    const pizzaSize = $("#pizza-size").val();
    const pizzaCrust = $("#pizza-crust").val();
    const pizzaToppings = [];
    $("input:checkbox[name='pizza-toppings']:checked").each(function () {
      pizzaToppings.push($(this).val());
    })

    console.log(`Pizza Size: ${pizzaSize}\n Pizza Crust: ${pizzaCrust}\n Pizza Toppings: ${pizzaToppings}`);

    pizza = new Pizza (pizzaSize, pizzaCrust, pizzaToppings);
    $("form#pizza-form").hide();
    pizza.determinePrice();
    displayPizzaPrice(pizza);
  });

});