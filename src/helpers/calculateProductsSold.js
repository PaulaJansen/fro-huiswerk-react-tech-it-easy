function calculateProductsSold(productsArray) {
    let total =  0;
    for (let i = 0; i < productsArray.length; i++) {
        total = total + productsArray[i].sold;
    }

    return total;
}

export default calculateProductsSold;