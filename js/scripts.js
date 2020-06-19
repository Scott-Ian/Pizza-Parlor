// Business Logic for PizzaOrder
  function PizzaOrder () {
    this.pizzas = [];
    this.currentId = 0;
    this.orderTotal;
  }
  
  PizzaOrder.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza);
  }

  PizzaOrder.prototype.calculateOrderTotal = function () {
    let total = 0;
    this.pizzas.forEach(function (pizza) {
      total += pizza.price;
    });
    this.orderTotal = total;
  }

// Business logic for Pizza
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

// UI Logic
function displayPizzaOrderDetails (pizzaOrder) {
  let pizzaList = $("#pizza-list");
  let htmlForPizzaInfo = "";
  pizzaOrder.pizzas.forEach(function (pizza) {
    htmlForPizzaInfo += "<li>" + pizza.size + ", " + pizza.crust + " crust, " + "toppings: " + pizza.toppings.length + ", cost: $" + pizza.price + "</li>";
  })
  pizzaList.html(htmlForPizzaInfo);
  $("#pizza-display").show();
}

function attachContactListeners (pizzaOrder) {
  $("ul#pizza-list").on("click", "li", function () {
    this.append(pizzaOrder.pizzas);
  console.log("UL has been clicked!")
  });
}

$(document).ready(function() {
  let pizzaOrder = new PizzaOrder ();
  attachContactListeners(pizzaOrder);

  $("form#pizza-form").submit(function (event) {
    event.preventDefault();

    const pizzaSize = $("#pizza-size").val();
    const pizzaCrust = $("#pizza-crust").val();
    const pizzaToppings = [];
    $("input:checkbox[name='pizza-toppings']:checked").each(function () {
      pizzaToppings.push($(this).val());
      $(this).prop('checked',false);
    })

    let pizza = new Pizza (pizzaSize, pizzaCrust, pizzaToppings);
    pizza.determinePrice();
    console.log("Pizza price: " + pizza.price);
    pizzaOrder.addPizza(pizza);

    console.log("Pizza Order Total: " + pizzaOrder.orderTotal);
    pizzaOrder.calculateOrderTotal();
    console.log("Pizza Order Total: " + pizzaOrder.orderTotal);
    $("#pizza-count").text(pizzaOrder.pizzas.length);
    $("#pizza-order-cost").text(pizzaOrder.orderTotal);

    displayPizzaOrderDetails(pizzaOrder);

    console.log(pizzaOrder.pizzas)
  });
});