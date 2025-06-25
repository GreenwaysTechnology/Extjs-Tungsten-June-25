//instance members
Ext.define('Person', {
    id: 0,
    name: '',
    email: '',
    status: false,
    address: {
        city: ''
    },
    skills: [],
    constructor: function (id, name, email, status, address, skills) {
        this.id = id
        this.name = name
        this.email = email
        this.status = status
        this.address = address
        this.skills = skills
    }

})
function App() {
    var person = Ext.create('Person', 1, 'Subramanian', 'subu@gmail.com',
        true, { city: 'Coimbatore' }, ['java', 'js'])
    console.log(`Id : ${person.id}`)
    console.log(`Name : ${person.name}`)
    console.log(`status : ${person.status}`)
    console.log(`Id : ${person.address.city}`)
    console.log(`Skills : ${person.skills}`)
}
App()

