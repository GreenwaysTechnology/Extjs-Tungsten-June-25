//config
Ext.define("Person", {
    config: {
        id: 0,
        name: '',
        age: 18
    },
    constructor: function (config) {
        //set inital value
        this.initConfig(config)
    },
    //hooks 
    applyAge: function (value) {
        if (value < 0) {
            console.log('Age Cant be Negative setting to default Value(18)')
            return 18
        }
        return value
    },
    updateAge: function (newAge, oldAge) {
        //you can do something with old and new values
        console.log(`Age Changed from ${oldAge} to ${newAge}`)
    }
})

function App() {
    var person = Ext.create('Person', {
        id: 1,
        name: 'Subramanian M',
        // age: -1
        age: 18
    })
    person.setAge(20)
    //set Age:
    console.log(`Id : ${person.getId()}`)
    console.log(`Name : ${person.getName()}`)
    console.log(`Age : ${person.getAge()}`)

}
App()
