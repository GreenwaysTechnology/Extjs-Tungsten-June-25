//class declaration using function

function Employee() {
    //instance variables
    this.id = 1
    this.name = 'Subramanian'
    this.salary = 10000
    this.isValid = true
}

//var -keyword
//emp - is just reference variable which points object in heap
//new is keyword - memory allocation opertaor
//Employee() -  constructor call
var emp = new Employee()
console.log(emp)
console.log(emp.id, emp.name, emp.salary, emp.isValid)
emp.id = 90
emp.name = 'Ram'
emp.salary = 8133
emp.isValid = true
console.log(emp.id, emp.name, emp.salary, emp.isValid)
