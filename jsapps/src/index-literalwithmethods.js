var emp = {
    id: 1,
    name: 'Subramanian',
    status: true,
    calculate: function (value = 0) {
        return value
    }
}
console.log(emp)
console.log(emp.id, emp.name, emp.status, emp.calculate(12323))