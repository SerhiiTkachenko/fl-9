// Your code goes here
let price = parseFloat(prompt('Enter amount of money:', '4950')),
    discount = parseInt(prompt('And please enter discount:', '30'));

if (price >= 0 && price !== '' && discount >= 0 && discount !== '' && discount <= 100) {
    
    let save = Math.round( price * discount / 100 * 100 ) / 100;
    let priceDisc = Math.round(( price - save ) * 100) / 100;
    
    price = +price.toFixed(2);
    console.log(
        'Price without discount: ', price, '\n',
        'Discount: ', discount + '%', '\n',
        'Price with discount: ', priceDisc, '\n',
        'Saved: ',save
    );

} else {
    console.log(`’Invalid data’`);
}


