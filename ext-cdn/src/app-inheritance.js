//base class /parent class
Ext.define('Animal', {
    config: {
        name: ''
    },
    constructor: function (config) {
        this.initConfig(config)
    },
    speak: function () {
        return `${this.getName()} makes a noise`
    }

})
//child class /dervied class
Ext.define('Dog', {
    extend: 'Animal',
    speak: function () {
        //calling parent class method
        var parentResult = this.callParent()
        console.log(`From Parent ${parentResult}`)
        return `${this.getName()} says woof!`
    }
})


function App() {
    //create instance of Child class
    var dog = Ext.create('Dog', {
        name: 'Jacky'
    })
    console.log(dog.speak())
}
App()