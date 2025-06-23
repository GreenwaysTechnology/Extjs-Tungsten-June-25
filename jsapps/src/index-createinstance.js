//class declaration using function

//Employee is constructor function

function Employee(id = 0, name = '', salary = 0, isValid = false) {
    //instance variables
    this.id = id
    this.name = name
    this.salary = salary
    this.isValid = isValid
}

//var -keyword
//emp - is just reference variable which points object in heap
//new is keyword - memory allocation opertaor
//Employee() -  constructor call
var emp = new Employee(1,'Subramanian',123.823,true)
console.log(emp.id, emp.name, emp.salary, emp.isValid)

