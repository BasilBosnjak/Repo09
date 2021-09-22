function myForLoop1() {
    var evenNumbers = "";
    var i;
    for (i = 0; i < 9; i++) {
        if (i % 2 == 0) {
            evenNumbers += i;
            if (i != 8) {
                evenNumbers += ", ";
            }
        }
    }
    return evenNumbers;
}
function myForLoop2() {
    var evenInverseNumbers = "";
    var i;
    for (i = 8; i >= 0; i--) {
        if (i % 2 == 0) {
            evenInverseNumbers += i;
            if (i != 0) {
                evenInverseNumbers += ", ";
            }
        }
    }
    return evenInverseNumbers;
}
console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};