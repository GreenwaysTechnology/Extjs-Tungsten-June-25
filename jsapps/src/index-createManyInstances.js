
function Employee(id = 0, name = '', salary = 0, isValid = false) {
    //instance variables
    this.id = id
    this.name = name
    this.salary = salary
    this.isValid = isValid
}
var emp = new Employee(1,'Subramanian',123.823,true)
console.log(emp.id, emp.name, emp.salary, emp.isValid)

var emp1 =new Employee(3,'Ram',3333.823,true)
console.log(emp1.id, emp1.name, emp1.salary, emp1.isValid)


