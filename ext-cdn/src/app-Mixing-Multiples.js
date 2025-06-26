
Ext.define('Greeter', {
    greet: function () {
        console.log('Hello from mixin!');
    }
});
Ext.define('Validator', {
    isValidAge: function (age) {
        return age > 18 && age < 60;
    }
});
Ext.define('Employee', {
    mixins: {
        greeter: 'Greeter',
        validator: 'Validator'
    },
    constructor: function (config) {
        Ext.apply(this, config);
        //here age is not declared how it would be part of Employee(this.age)
        //because of Ext.apply(this,config) now config is part of Employee
        if (this.isValidAge(this.age)) {
            this.greet();
        } else {
            console.log('Sorry you have supplied invalid input')
        }
    }
});
function App() {
    var emp = Ext.create('Employee', {
        name: 'Dhivya',
        age: 10
    });
    // Now you can call any methods or access properties
    console.log(emp.name, emp.age);     // Outputs: Dhivya
    // emp.greet();               // Outputs: Hello from mixin!

}
App()