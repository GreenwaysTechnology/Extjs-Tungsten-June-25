
//greet = function(){}
function hello(greet) {
    greet()
}

var welcome = function () {
    console.log('welcome')
}
hello(welcome)

hello(function () {
    console.log('Hello')
})

//Higher order function with params and args

function fetchData(callback) {
    callback('Hey How are you?')
}
fetchData(function (message) {
    console.log(message)
})