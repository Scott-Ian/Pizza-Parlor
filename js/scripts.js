// Business Logic

function Pizza (size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.price = 5;
}

Pizza.prototype.price = function {
  if (this.crust === "Thin") {
    this.price += 3;
  }
  if (this.crust === "Stuffed") {
    this.price += 5;
  }
  if (this.crust === "Deep Dish") {
    this.price += 8;
  }

  if (this.size === "Small") {
    this.price += 3;
  }
  if (this.size === "Medium") {
    this.price += 5;
  }
  if (this.size === "Large") {
    this.price += 8;
  }
  if (this.size === "Family") {
    this.price += 10;
  }

  if (this.toppings.length >=3) {
    this.price += 1.50 * (this.toppings.length -2)
  }

}




// UI Logic