function Employee(id = 0, name = '', salary = 0, isValid = false) {
    //local variables
    var noOfDays = 100
    //instance variables
    this.id = id
    this.name = name
    this.salary = salary
    this.isValid = isValid
    //instance methods
    this.getSalary = function () {
        return this.salary * noOfDays
    }
}
var emp = new Employee(1, 'Subramanian', 100, true)
console.log(emp.id, emp.name, emp.getSalary(), emp.isValid)


