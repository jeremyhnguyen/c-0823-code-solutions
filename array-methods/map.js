const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const sales = prices.map((x) => ({price: x, salePrice: x / 2}));

console.log('original price:', prices, '\n', 'sale price:', sales);


const salesObject = {};
prices.forEach((key, i) => (salesObject[key] = sales[i]));
console.log(salesObject);










const formattedPrices = prices.map((p) => `$${p.toFixed(2)})


console.log(formattedPrices);
