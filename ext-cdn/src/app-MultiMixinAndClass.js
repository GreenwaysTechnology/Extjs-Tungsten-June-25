Ext.define('LoggerMixin', {
    log: function (msg) {
        console.log('[LOG]: ' + msg);
    }
});
Ext.define('Person', {
    name: '',
    constructor: function (config) {
        Ext.apply(this, config);
        console.log('Person constructor called for ' + this.name);
    },

    sayHi: function () {
        console.log('Hi, I am ' + this.name);
    }
});
Ext.define('Employee', {
    extend: 'Person',
    mixins: {
        logger: 'LoggerMixin'
    },
    employeeId: '',

    constructor: function (config) {
        this.callParent([config]); // Call Person's constructor
        this.log('Employee created: ' + this.name + ', ID: ' + this.employeeId);
    },

    sayHi: function () {
        this.callParent(); // Call Person's sayHi
        this.log('Employee says hi too.');
    }
});
function App() {
    var emp = Ext.create('Employee',{
        employeeId: 1,
        name: 'Subramanian'
    })
    emp.sayHi()

}
App()