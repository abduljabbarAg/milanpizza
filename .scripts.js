/*makes function available once page is loaded*/
$(document).ready(function() {

/* Function to get order from the form*/    
$("#text-center").submit(function(event) {
function flavor() {
var pizzaFlavour = document.getElementById("flavor").value;
return parseInt(pizzaFlavour);
}

function size() {
var pizzaSize = document.getElementById("size").value;
return parseInt(pizzaSize);
}

function crust() {
var pizzaCrust = document.getElementById("crust").value;
return parseInt(pizzaCrust);
}

function topping() {
var pizzaTopping = document.getElementById("topping").value;
return parseInt(pizzaTopping);
}

function number() {
var pizzaNumber = document.getElementById("quantity").value;
return parseInt(pizzaNumber);
}


/* Constructor create objects from user order*/            
function Order(flavor, size, crust, topping, quantity) {
this.newFlavor = flavor;
this.newSize = size;
this.newCrust = crust;
this.newTopping = topping;
this.newQuantity = quantity;
}            

/*create object for new order from constructor */
var userInput = new Order(flavor(), size(), crust(), topping(), number());  


/*variable Total cost to collect user total order */
var totalCost = (userInput.newSize + userInput.newCrust + userInput.newTopping + userInput.newFlavor) *userInput.newQuantity;


/*Alert user on the total amout and prompt delivery information */
alert("Your charges for Pizza" + totalCost);
prompt("Please enter your phone number");
prompt("Where are you located");
alert("Your pizza will be delivered in 1 hour");

/*when clicking submit this prevents submitting the form*/
event.preventDefault();
});
});