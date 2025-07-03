/**
 * This view is an example list of people.
 */
Ext.define('MyMVVMApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyMVVMApp.store.Personnel'
    ],

    title: 'Users',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    //handler: config : in MVVM , listners are valid config
    listeners: {
        select: 'onItemSelected'
    }
});
