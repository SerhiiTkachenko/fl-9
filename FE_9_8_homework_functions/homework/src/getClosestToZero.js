function getClosestToZero() {
    let closestValue = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < Math.abs(closestValue)) {
            closestValue = arguments[i];
        }
    }
    return closestValue;
}
// alert(getClosestToZero(9, 5, -4, -9));