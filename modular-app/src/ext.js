
//create single object to hold object functionality

/**
 *  or operator
 *   if first operand is "truthy" return result as firstOperand else second operator
 * falsy values -  false,0,undefined,NaN,null,""
 */
//parsed code
// var x;
// x = x || 10;
var x = x || 10
console.log(x)

//if Ext returns false, return empty object
var Ext = Ext || {}

//you have add properties into empty Object

//object augmentation : you can add,delete,edit,iterate object properties during runtime.
let emp = {
    id: 1
}
console.log(emp)
emp.name = 'Subramanian'
console.log(emp)
delete emp.name
console.log(emp)

//Namespace
//IIFE - Immediately invoked Function Expression.
//IIFE functions are get executed automatially
//IIFE functions are used to encaspulate code - Namespace
EXT = (function () {
    return {
        //apis
        sayHello: function(message){
            return message
        },
        create: function (name, config) {
            console.log(name, config)
            return config
        },
        define: function (name, config) {
            console.log(name, config)
            return config
        }
    }
})()
console.log(EXT)

//invoke namespace apis 
var person=EXT.create('MyApp.app.Person', {
    id: 1,
    name: 'Subramanian'
})
console.log(person)

var product = EXT.define('MyApp.app.Product',{
    name:'Product'
})
console.log(product)
var hello = EXT.sayHello('hello')
