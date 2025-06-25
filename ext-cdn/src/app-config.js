//config
Ext.define("Person", {
    config: {
        id: 0,
        name: 'Subramanian',
        email: 'subu@gmail.com',
        status: false,
        address: {
            city: 'Coimbatore'
        },
        skills: ['Java', 'JS']
    },
    constructor: function (config) {
        //set inital value
        this.initConfig(config)
    }
})

function App() {
    var person = Ext.create('Person')
    console.log(person)
    console.log(`Id : ${person.getId()}`)
    console.log(`Name : ${person.getName()}`)
    console.log(`status : ${person.getStatus()}`)
    console.log(`Id : ${person.getAddress().city}`)
    console.log(`Skills : ${person.getSkills()}`)

}
App()
