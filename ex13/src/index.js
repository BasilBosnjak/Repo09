function inverseWhile() {
    var fiveNumbers = "", i = "5";
    while (i > -1) {
        fiveNumbers += i;
        if (i != 0) {
            fiveNumbers += ",";
        }
        i--;
    }
    return fiveNumbers;
}

console.log(inverseWhile());

module.exports = inverseWhile;