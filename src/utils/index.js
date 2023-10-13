/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects 
 * @returns {Number} Acumulate value of price
 */
export const totalPrice = (products) => {
    let sum = 0

    products.forEach(product => {
        sum +=  product.price
    })
    
    return sum
}

/**
 * @returns string with current date
 */
export const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
 }