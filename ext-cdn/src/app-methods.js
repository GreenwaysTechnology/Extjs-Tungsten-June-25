//instance members
Ext.define('Greeting', {
    message: '',
    constructor: function (message='Welcome') {
        this.message = message
    },
    sayHello: function (name='John') {
        return `${this.message} ${name}`
    }
})
function App() {
    const greet = Ext.create('Greeting', 'Hello')
    console.log(greet.sayHello('Subramanian'))
}
App()

