var emp = {
    id: 1,
    name: 'Subramanian',
    status: true,
    //has-a
    address: {
        state:'Tamil Nadu',
        city:'Coimbatore'
    }
}
console.log(emp.id, emp.name, emp.address.city, emp.address.state)
