const changeBasketState = (name, size, color, price, basketState) => {
    const order = {}
    order.name = name;
    order.size = size;
    order.color = color;
    order.price = price;
    order.count = 1;
    basketState.push(order);
}

export default changeBasketState;