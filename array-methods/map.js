const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const sales = prices.map((x) => ({ price: x, salePrice: x / 2 }));

const salesObject = {};
prices.forEach((key, i) => (salesObject[key] = sales[i]));
console.log('Price objects:', salesObject);

const formattedPrices = prices.map((p) => `$${p.toFixed(2)}`);

console.log('Formatted prices:', formattedPrices);
