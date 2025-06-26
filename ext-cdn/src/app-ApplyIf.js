
function App() {
    var person = {
        name: 'John'
    };
    console.log('Before copy', person)
    Ext.applyIf(person, {
        name: 'Subramanian',
        age: 30,
        occupation: 'Engineer'
    });
    console.log('After Copy', person);
}
App()