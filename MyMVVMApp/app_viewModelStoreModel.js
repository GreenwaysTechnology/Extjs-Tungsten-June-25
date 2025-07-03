Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email']
});
Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',
    autoLoad: true,
    proxy: {
        type: 'rest',
        url: 'https://jsonplaceholder.typicode.com/users',
        reader: {
            type: 'json',
        }
    }
});
Ext.define('MyApp.view.main.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',
    //Transfer data from the store into Model so that ui can easily bind data
    stores: {
        users: {
            type: 'users' // refers to the store alias
        }
    }
});
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    //controller:'',
    viewModel: {
        type: 'user'
    },
    bind: {
        store: '{users}'
    },
    columns: [
        { text: 'ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email' }
    ]
});


Ext.application({
    name: 'MyApp',
    launch: function () {
        Ext.create('MyApp.view.main.Main', {
            renderTo: Ext.getBody()
        });
    }
});