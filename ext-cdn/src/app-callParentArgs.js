//base class
Ext.define('Calculator', {
    multiply: function (a, b) {
        console.log(`a ${a} b ${b}`)
        return a * b;
    }
});
Ext.define('SmartCalculator', {
    extend: 'Calculator',
    multiply: function (a, b) {
        console.log('Multiplying:', a, '*', b);
        
        var result = this.callParent(arguments);
        console.log('Result From Parent:', result);
        return result * 2;
    }
});

function App() {
    var calc = Ext.create('SmartCalculator');
    var output = calc.multiply(3, 4);
    console.log('Output', '3 × 4 = ' + output);

}
App()
