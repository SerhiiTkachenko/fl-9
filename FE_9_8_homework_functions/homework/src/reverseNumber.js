
function reverseNumber(num) {

    let number = parseInt(num).toString();
    let reverseNumber = '';

    for (let i = number.length - 1; i >= 0; i--) {
      reverseNumber += number[i];
    }

    return parseInt(reverseNumber) * Math.sign(num);
  }

// alert(reverseNumber(1000));