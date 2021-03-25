const yargs = require("yargs");
const { addOrder, listOrders, removeOrder } = require("../utils/order.js")
const command = process.argv[2];

console.log(process.argv)

if (command == "add") {
    console.log("adding to order");
    addOrder(yargs.argv.order);
} else if (command == "remove") {
    console.log("removing that for you");
    removeOrder(yargs.argv.order);
} else if (command == "list") {
    console.log("your coffee order");
    listOrders();
} else {
    console.log("command not recognised");
}