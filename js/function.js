var getSum = function (num1, num2) {
    return num1 + num2;
};
var total = getSum(5, 2);
document.write("5+2=" + total + "<br />");
var getDiff = function (num1, num2, num3) {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
var diff1 = getDiff(5, 2);
document.write("5-2=" + diff1 + "<br />");
var diff2 = getDiff(5, 2, 1);
document.write("5-2-1=" + diff2 + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum:" + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5, 6);
var addOne = function (x) { return x + 1; };
document.write("1+1 = " + addOne(1));
