//parent
Ext.define('MyLogger', {
    log: function (msg) {
        console.log('[LOG]: ' + msg);
    }
});

Ext.define('Person', {
    mixins: {
        logger: 'MyLogger'
    },
    name: 'Subramanian Murugan',
    constructor: function (config) {
        Ext.apply(this, config)
        this.log('Person Created  ', this.name)

    },
    sayHello: function () {
        this.log('Hello,MyName is '+ this.name)
    }
})

function App() {
    var person = Ext.create('Person', {
        age: 18,
        name: 'Subramanian M',
    })
    person.sayHello()
}
App()