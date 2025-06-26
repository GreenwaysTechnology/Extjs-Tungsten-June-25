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
Ext.define('Mammal', {
    extend: 'Animal',
    //methods 
    speak: function () {
        var base = this.callParent()
        console.log('From Mammal :', base)
        return this.getName() + ' is mammal and  makes a sound'
    }
})
//child class /dervied class
Ext.define('Dog', {
    extend: 'Mammal',
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