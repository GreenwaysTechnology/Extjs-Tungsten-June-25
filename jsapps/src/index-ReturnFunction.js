function greet() {
    // var hello = function () {
    //     console.log('hello')
    // }
    // return hello
    return function () {
        console.log('hello')
    }
}
var res = greet()
res()