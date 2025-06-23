let a = 10
//hello is variable
//var is keyowrd
//function(){} - function is value
var hello = function () {
    console.log('Hello')
}
//that variable can be used to invoke that function
hello()

//anonymous function with args and return value

var multiply = function (a = 0, b = 0) {
    return a * b
}
console.log(multiply(2,5))