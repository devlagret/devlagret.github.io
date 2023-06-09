window.onload = function() {
document.getElementById("year").innerHTML = new Date().getFullYear();
};
//read photo from fir
var fs = require('fs');
var files = fs.readdirSync('/img/');
console.log(files);