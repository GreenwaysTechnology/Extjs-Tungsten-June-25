Ext.define('MyApp.view.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',
    data: {
        user: {
            name: 'xx',
            email: 'xxx'
        }
    }
});

Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maincontroller', //controller.AnyName - reference Name
    onShowDetails: function (btn) {
        // Get the form
        var form = btn.up('form');
        // Get the field values
        var values = form.getValues();
        // Update ViewModel explicitly
        this.getViewModel().set('user', {
            name: values.name,
            email: values.email
        });
    }
})

Ext.define('MyApp.view.user.Form', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    title: 'User Form',
    controller: 'maincontroller',
    // viewModel: {
    //     type:""
    // },
    bodyPadding: 10,
    width: 700,
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            bind: '{user.name}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            bind: '{user.email}'
        }
    ],
    buttons: [
        {
            text: 'Show Details',
            handler: 'onShowDetails'
        },
        {
            text: 'Reset',
            // handler: 'onResetUser'
        }
    ]
});



Ext.define('MyApp.view.user.Details', {
    extend: 'Ext.panel.Panel',
    xtype: 'userdetails',

    title: 'User Details',
    bodyPadding: 10,
    width: 250,

    //template : XTemplate dervied from frameworks : Handlebars,Mustache
    tpl: [
        '<p><strong>Name:</strong> {name}</p>',
        '<p><strong>Email:</strong> {email}</p>'
    ],
    bind: {
        data: '{user}'
    }
});
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    //
    viewModel: {
        type: 'user'
    },
    layout: 'hbox',
    padding: 20,
    items: [
        {
            xtype: 'userform',
            margin: '0 20 0 0'
        },
        {
            xtype: 'userdetails'
        }
    ]
});

Ext.application({
    name: 'MyApp',

    launch: function () {
        Ext.create('MyApp.view.main.Main', {
            renderTo: Ext.getBody()
        })
    }
});