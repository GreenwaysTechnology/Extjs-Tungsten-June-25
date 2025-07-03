//Model
Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email']
})
//store
Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',
    autoLoad: true, //load data from the api when ever data changes
    autoSync: false,  // true when ever the grid changes data , automatically updates api
    // false manually you handle api curd operation
    proxy: {
        //rest api configuration
        type: 'rest',
        //url: 'https://jsonplaceholder.typicode.com/users',
        url: 'http://localhost:3000/users',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
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
                var form = this.up('form')
                form.getForm().reset() // clear the form fields
                form.down('#saveBtn').setText('Save')
            }
        }
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
        var formPanel = this.getUserForm()
        var form = formPanel.getForm()
        var grid = this.getUserGrid()
        var store = grid.getStore()
        if (!form.isValid()) {
            return;
        }
        var values = form.getValues()
        var record = form.getRecord()
        if (record) {
            record.set(values)
        } else {
            record = Ext.create('MyApp.model.User', values)
            //add : HTTP POST  url
            store.add(record)
        }
        //sync syncs with back end
        store.sync({
            success: function () {
                form.reset()
                formPanel.down('#saveBtn').setText('Save')
                //GET
                store.load()
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Failed To Save')
            }
        })
    },
    onDeleteUser: function () {
        const grid = this.getUserGrid(),
            record = grid.getSelectionModel().getSelection()[0],
            store = grid.getStore();

        if (!record) {
            Ext.Msg.alert('Warning', 'No user selected');
            return;
        }
        Ext.Msg.confirm('Confirm', 'Delete selected user?', function (choice) {
            if (choice === 'yes') {
                store.remove(record);
                store.sync({
                    success: function () {
                        store.load()
                    },
                    failure: function () {
                        Ext.Msg.alert('Error', 'Failed to delete')
                    }
                });
            }
        });
    },
    onUserSelect: function (grid, record) {
        const form = this.getUserForm().getForm();
        form.loadRecord(record);
        this.getUserForm().down('#saveBtn').setText('Update');

    }
})

Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    layout: 'hbox',
    padding: 10,
    items: [
        {
            xtype: 'grid',
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
    name: 'MyApp',
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

