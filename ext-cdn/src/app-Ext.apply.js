
function App() {
    var person = {
        name: 'John'
    };
    console.log('Before copy', person)
    Ext.apply(person, {
        age: 30,
        occupation: 'Engineer'
    });
    console.log('After Copy',person);
}
App()