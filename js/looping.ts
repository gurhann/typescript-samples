var randArray = [3,4,5,6];

for(var i in randArray) {
    document.write(i + "<br />");
}

var strArray = randArray.map(String);

for(var i of strArray) {
    document.write(i + "<br />");
}
document.write("type of randArray:" + typeof randArray + "<br />");
document.write("type of strArray:" + typeof strArray);