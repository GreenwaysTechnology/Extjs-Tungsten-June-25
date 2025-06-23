//has a
function Employee(id = 0, name = '', salary = 0, isValid = false, address) {
    //local variables
    var noOfDays = 100
    //instance variables
    this.id = id
    this.name = name
    this.salary = salary
    this.isValid = isValid
    //has -a
    this.address = address
    //instance methods
    this.getSalary = function () {
        return this.salary * noOfDays
    }
}
function Address(city = "", state = "") {
    this.city = city
    this.state = state
}
let emp = new Employee(1, "Subramnaian", 22323.89, true, new Address('Coimbatore', 'TamilNadue'))
console.log(emp.id, emp.name, emp.address.city, emp.address.state)
