let products = {
    apple: 800,
    banana: 600,
    milk: 700
}

function newPriceProducts() {
    for(let index in products) { 
        let val = products[index];
        val += (val / 100) * 15;
        if(val % 10 === 5)
            products[index] = val;
        else
            products[index] = Math.round(val / 10) * 10
    }
    return products;
}

console.log(newPriceProducts());




