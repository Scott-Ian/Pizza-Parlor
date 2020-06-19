# _Pizza Parlor_

#### _A website that allows users to place pizza orders, June 19, 2020_

#### By _**Ian Scott**_

## Description

_This is a web application that allows the user to place an order for pizzas, choosing size, crust type, and toppings. The program generates a list of all pizzas ordered, with a brief description of each (size, crust, number of toppings, price). The program further displays a running total of the number of pizzas ordered, and the total price of the order._

## Setup/Installation Requirements

_Open by downloading:_
1. Download this repository onto your computer by clicking the "clone or download button"
2. Double click index.html within your file explorer or GUI to open it in your web browser

_Open via Bash/GitBash;_
1. Clone this repository onto your computer: https://github.com/Scott-Ian/Pizza-Parlor.git
2. Navigate into the "Pizza-Parlor" directory in Visual Studio Code, or your preferred text editor
3. Enter the command line prompt "code ." or your text editor's equivalent
4. Open index.html in Chrome or your preferred browser: "open index.html" or other equivalent

## Known Bugs

_There are currently no known bugs_

## Support and contact details

_If you have any questions, run into any issues or bugs, or if you would like to contribute to this project, please contact the author via e-mail at: chesnekov@gmail.com._

## Technologies Used

_This program utilizes HTML, CSS, Bootstrap v3.3.7, jQuery. This program, being an exercise in Objects and Object prototype methods, uses both extensively as well._

## Specifications

| | Behavior | Input | Output | isComplete |
|----|----|----|----|----|
| 1.| The program has the ability to store pizza toppings and pizza size in a "pizza object"| Cheese, Small | N/A | _True_|
| 2.| The program's pizza object has a prototype method to determine pizza cost based upon pizza size, and pizza toppings | Peperoni, Cheese, Large | $12.50 | _True_|
| 3.| The program has a submittable form with which a user can interact and submit their pizza order| Olives, Pineapple, Anchovies, Family-Size | $32 | _True_|
| 4.| The program allows for the selection of various crust types which affect the final price| Thin-crust Pepperoni, Olives | $15 | _True_|
| 5.| After Submitting a pizza order, the program will display a list of the ordered pizza's| Cheese Pizza | Cheese Pizza  | _True_|
| 6.| The pizza order form will have the ability to order multiple pizza's with different toppings| Cheese Pizza, Small, Pepperoni Pizza, Large etc.  | Cheese Pizza, Pepperoni Pizza | _True_|
| 7.| The program will update the user on the number of pizza's ordered, and the order total with each successive submision of the form.| click "Submit" | Your order of: 1 pizza(s) will be $14 | _True_|


### License

Copyright (c) 2020 **_Ian Scott._** This web project is licensed under the MIT license.