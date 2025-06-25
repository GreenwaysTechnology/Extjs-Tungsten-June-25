//instance members
Ext.define('Person', {
    id: 1,
    name: 'Subrmanian Murugan',
    email: 'sasubramanan_md@hotmail.com',
    status: true,
    address: {
        city: 'Coimbatore'
    },
    skills: [
        'java', 'javascript'
    ]

})
function App() {
    var person = Ext.create('Person')
    console.log(`Id : ${person.id}`)
    console.log(`Name : ${person.name}`)
    console.log(`status : ${person.status}`)
    console.log(`Id : ${person.address.city}`)
    console.log(`Skills : ${person.skills}`)

    //reinitalize with different data
    person.id = 2
    person.name = 'Murugan P'
    person.status = true
    person.address = {
        city: 'Chennai'
    }
    person.skills = [
        "Data Science", "ML"
    ]

    console.log(`Id : ${person.id}`)
    console.log(`Name : ${person.name}`)
    console.log(`status : ${person.status}`)
    console.log(`Id : ${person.address.city}`)
    console.log(`Skills : ${person.skills}`)

}
App()

