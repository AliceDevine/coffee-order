const fs = require("fs");

const loadOrders = () => {
    try {
        const dataBuffer = fs.readFileSync("src/Orders.json");
        const OrdersJson = dataBuffer.toString();
        return JSON.parse(OrdersJson);

    } catch (error) {
        return [];
    }
};

const saveOrders = (allOrders) => {
    const OrdersJson = JSON.stringify(allOrders);
    fs.writeFileSync("src/Orders.json",OrdersJson);
}

const addOrder = (myOrder) => {
    const allOrders = loadOrders();
    allOrders.push({ coffee: myOrder });
    saveOrders(allOrders);
}

const listOrders = () => {
    const allOrders = loadOrders();

    allOrders.map(Order => {
        console.log(Order)
    });
};

const removeOrder = OrderToDelete => {
    const allOrders = loadOrders();

    const OrdersToKeep = allOrders.filter(Order => {
        return Order.coffee != OrderToDelete;
    });

    saveOrders(OrdersToKeep);
}

module.exports = {
    addOrder,
    listOrders,
    removeOrder
}