var randArray = [3, 4, 5, 6];
for (var i in randArray) {
    document.write(i + "<br />");
}
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var i = strArray_1[_i];
    document.write(i + "<br />");
}
document.write("type of randArray:" + typeof randArray + "<br />");
document.write("type of strArray:" + typeof strArray);
