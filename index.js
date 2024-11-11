let menu =[
    { name: "Magratira", price: 100 },
    { name: "Indisica", price: 80 },
    { name: "Terramisa", price: 50 },
    { name: "Fumbolia", price: 100 },
]

let cashInRegister = 100

let orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName) {
    let pizza = menu.find( pizza => pizza.name === pizzaName)
    let pizzaPrice = pizza.price
    cashInRegister += pizzaPrice
    const newOrder = { pizza : pizza, status: "Ordered"}
    orderQueue.push(newOrder)
    return orderQueue
}

let orderId = 1

function completeOrder(id) {
    
}

addNewPizza({name : "doritos", price: 50})

console.log(menu);

console.log(placeOrder('doritos'));


