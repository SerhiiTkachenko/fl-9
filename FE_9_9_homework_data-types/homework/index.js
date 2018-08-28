
// 1. Write function, which returns type of passed parameter.
function findType(param) {
    return typeof param;
} 
//  2. Write function, which iterates over array and executes function on each element.
  const forEach = (arr, foo) => {
    for(let i = 0; i < arr.length; i++){
        foo(inputArray[i]);
}
//   3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.
function map(array, modFn) {
    let modArr = [];

    forEach(array, function(el) {
        modArr.push(modFn(el));
    })

    return modArr;
}
//   4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.
  const filter = (newArr, filterFn) => {
    let filteredArr = [];

    forEach(newArr, el => {
        if(filterFn(el)) {
            filteredArr.push(el)
        }
    });

    return filteredArr;
}
//   5. Write function, which returns array of names of people, who are over 18 and their favorite fruit is apple. Reuse functions from task 2 and 3.
function getAdultAppleLovers(array) {

    let filteredArray = filter(array, el => {
        return el.age > 18 && el.favoriteFruit === 'apple';
    });

    let mapData = map(filteredArray, el => {
        return el.name;
    });

    return mapData;
}
//   6. Write function, which returns array of keys of an object.
function keys(object) {
    let arrOfKeys = [];

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            arrOfKeys.push(key);
        }
    }
    return arrOfKeys;
}
// 7. Write function, which returns array of values of an object.
  function values(object) {
    let arrayOfValues = [];

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            arrayOfValues.push(object[key]);
        }
    }
    return arrayOfValues;
}

// 8. Write function, which returns formatted date.
function showFormattedDate(date) {
    const MONTH = [
        'Jan', 
        'Feb', 
        'Mar', 
        'Apr', 
        'May', 
        'Jun', 
        'Jul', 
        'Aug', 
        'Sep', 
        'Oct', 
        'Nov', 
        'Dec'
    ];
    return `It is ${date.getDate()} of ${MONTH[date.getMonth()]}, ${date.getFullYear()}`
}