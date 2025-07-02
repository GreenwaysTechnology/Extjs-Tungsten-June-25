//Model
Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        'id', 'name', 'email'
    ]
})
//Declare Store
Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.User',
    alias: 'store.users', // eq to itemId,xtype
    data: [{
        id: 1, name: 'Subramanian Murugan', email: 'sasubramanian_md@hotmail.com'
    },
    {
        id: 2, name: 'Murugan P', email: 'murugan@gmail.com'
    }]

})
//Ui binding with model
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainview',
    store: {
        type: 'users'
    },
    columns: [
        { text: 'ID', dataIndex: 'id', width: 50 },
        { text: 'Name', dataIndex: 'name', flex: 2 },
        { text: 'Email', dataIndex: 'email', flex: 1 }
    ],
    tbar: [
        {
            text: 'ShowSelectedItem',
            itemId: 'toolbarButton'
        }
    ]
})
Ext.define('MyApp.controller.UserGridController', {
    extend: 'Ext.app.Controller',
    init: function () {
        this.control({
            'mainview button#toolbarButton': {
                click: this.onShowSelected
            }
        })
    },
    onShowSelected: function (button) {
        var grid = button.up('grid')
        var selected = grid.getSelectionModel().getSelection()[0];
        if (selected) {
            Ext.Msg.alert('Selected User', selected.get('name'))
        }
    }

})

Ext.application({
    name: 'MyApp',

    controllers: [
        'MyApp.controller.UserGridController'
    ],

    launch: function () {
        Ext.create('MyApp.view.main.Main', {
            renderTo: Ext.getBody()
        })
    }
});