Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email']
});
Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.User',
    alias: 'store.users',
    data: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ]
});
Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    refs: [
        { ref: 'userForm', selector: 'userform' },
        { ref: 'userGrid', selector: 'grid' }
    ],

    init: function () {
        this.control({
            'button#saveBtn': {
                click: this.onSaveUser
            },
            'button#deleteBtn': {
                click: this.onDeleteUser
            },
            'grid#userGrid': {
                select: this.onUserSelect
            }
        });
    },
    onSaveUser: function () {
        var form = this.getUserForm().getForm()
        var values = form.getValues()
        //store has lot of curd apis
        var store = this.getUserGrid().getStore()
        if (form.isValid()) {
            if (values.id) {
                //update logic
                var record = store.getById(parseInt(values.id))
                record.set(values)
            } else {
                //create new Model then inser into grid
                store.add(values)
            }
            store.commitChanges()
            form.reset()
        }
    },
    onDeleteUser: function () {
        var grid = this.getUserGrid()
        var selected = grid.getSelectionModel().getSelection()[0]
        if (selected) {
            grid.getStore().remove(selected)
        } else {
            Ext.Msg.alert('Error', 'Please Select row to be deleted')
        }
    },
    onUserSelect: function (grid, record) {
        var formPanel = this.getUserForm()
        var form = formPanel.getForm()
        form.loadRecord(record)
        console.log('Selected Record', record.getData())
        formPanel.down('#saveBtn').setText('Update')
    }
})
Ext.define('MyApp.view.main.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    bodyPadding: 10,
    defaultType: 'textfield',
    width: 300,
    items: [
        { name: 'id', xtype: 'hiddenfield' },
        { fieldLabel: 'Name', name: 'name', allowBlank: false },
        { fieldLabel: 'Email', name: 'email', allowBlank: false, vtype: 'email' }
    ],
    buttons: [
        {
            text: 'Save',
            itemId: 'saveBtn'
        },
        {
            text: 'Reset',
            handler: function () {
                this.up('form').getForm().reset();
            }
        }
    ]
});
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    layout: 'hbox',
    padding: 10,
    items: [
        {
            xtype: 'grid',
            reference: 'userGrid', // refered by refs inside controller
            title: 'Users',
            itemId: 'userGrid',
            width: 400,
            height: 300,
            margin: '0 20 0 0',
            store: {
                type: 'users'
            },
            columns: [
                { text: 'ID', dataIndex: 'id', width: 50 },
                { text: 'Name', dataIndex: 'name', flex: 1 },
                { text: 'Email', dataIndex: 'email', flex: 1 }
            ],
            selModel: 'rowmodel',
            tbar: [
                { text: 'Delete', itemId: 'deleteBtn' }
            ]
        },
        {
            xtype: 'userform'
        }
    ]
});
Ext.application({
    name: 'MyMVCApp',
    //controllers configuration: Registring controllers
    controllers: [
        'MyApp.controller.MainController'
    ],
    launch: function () {
        Ext.create('MyApp.view.main.Main', {
            renderTo: Ext.getBody()
        })
    }
});