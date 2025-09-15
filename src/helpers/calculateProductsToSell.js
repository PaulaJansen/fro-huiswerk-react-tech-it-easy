import calculateProductsSold from './calculateProductsSold.js';
import calculateProductsPurchased from './calculateProductsPurchased.js';

function calculateProductsToSell(productArray){
    const productsPurchased = calculateProductsPurchased(productArray);
    const productsSold = calculateProductsSold(productArray);
    return productsPurchased - productsSold;
}

export default calculateProductsToSell;