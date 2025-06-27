Ext.define('MyApp.model.Person', {
    config: {
        name: ''
    },
    constructor: function (config) {
        this.initConfig(config)
    }
})

Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        //create instance
        var person = Ext.create('MyApp.model.Person', {
            name: 'Subramanian Murugan'
        })
        console.log(person.getName())
    }
})