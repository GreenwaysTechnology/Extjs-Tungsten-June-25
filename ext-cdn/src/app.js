//config
Ext.define("Person", {
    config: {
        id: 0,
        name: '',
        email: '',
        status: false,
        address: {
            city: ''
        },
        skills: []
    },
    constructor: function (config) {
        //set inital value
        this.initConfig(config)
    }
})

function App() {
    var person = Ext.create('Person', {
        id: 1,
        name: 'Subramanian M',
        status: true,
        address: {
            city: 'Coimbatore'
        },
        skills: ['js', 'java']
    })
    console.log(person)
    console.log(`Id : ${person.getId()}`)
    console.log(`Name : ${person.getName()}`)
    console.log(`status : ${person.getStatus()}`)
    console.log(`Id : ${person.getAddress().city}`)
    console.log(`Skills : ${person.getSkills()}`)


}
App()
