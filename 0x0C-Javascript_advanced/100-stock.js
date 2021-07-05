let stock = {
    macbook: 2,
    iphone: 4
}

function processPayment(itemName) {
    const Reststock = stock[`${itemName}`];
    stock[`${itemName}`] = Reststock - 1;
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);
    const str = itemName.toLowerCase();
    if (stock[`${str}`] > 0) {
        callbackPayment(str);
    } else {
        callbackError(str);
    }
}
let item = prompt("Please enter the item you would like to purchase (Macbook, IPhone)");
processOrder(item, processPayment, processError);
