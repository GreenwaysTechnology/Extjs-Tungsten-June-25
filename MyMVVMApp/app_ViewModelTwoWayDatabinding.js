//View Model
Ext.define('MyApp.view.HelloModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.hello', // this would be refered by the view 
    data: {
        name: 'Subramanian'
    },
    formulas: {
        greeting: function (get) {
            return `Hello ${get('name')}`
        }
    }
})
//View
Ext.define('MyApp.view.HelloView', {
    extend: 'Ext.panel.Panel',
    xtype: 'helloView',
    title: 'ViewModel Example',
    //linking
    viewModel: {
        type: 'hello'
    },
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            bind: '{name}' // attach internall listener,update dom element
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Greeting',
            bind: '{greeting}'
        }
    ]
})

Ext.application({
    name: 'MyApp',
    launch: function () {
        Ext.create('MyApp.view.HelloView', {
            renderTo: Ext.getBody()
        })
    }
});