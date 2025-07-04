Ext.define('MyApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['firstName', 'lastName', 'email', 'age']
});
Ext.define('MyApp.store.WizardData', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.User',
    autoLoad: true,
    proxy: {
        type: 'memory'
    }
});
Ext.define('MyApp.view.wizard.WizardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.wizardmodel',

    data: {
        userData: {
            firstName: '',
            lastName: '',
            email: '',
            age: ''
        }
    }
});
Ext.define('MyApp.view.wizard.WizardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wizardcontroller',

    onNext: function () {
        let wizard = this.getView(),
            layout = wizard.getLayout(),
            activeItem = layout.getActiveItem(),
            index = wizard.items.indexOf(activeItem);

        if (index < wizard.items.length - 1) {
            layout.setActiveItem(index + 1);
        }
    },

    onBack: function () {
        let wizard = this.getView(),
            layout = wizard.getLayout(),
            activeItem = layout.getActiveItem(),
            index = wizard.items.indexOf(activeItem);

        if (index > 0) {
            layout.setActiveItem(index - 1);
        }
    },

    onSaveToLocal: function () {
        const data = this.getViewModel().getData().userData;
        localStorage.setItem('wizardUserData', JSON.stringify(data));
        Ext.Msg.alert('Saved', 'Data saved to localStorage.');
    },

    onLoadFromLocal: function () {
        const saved = localStorage.getItem('wizardUserData');
        if (saved) {
            this.getViewModel().set('userData', JSON.parse(saved));
        } else {
            Ext.Msg.alert('Info', 'No data in localStorage');
        }
    },

    onSubmit: function () {
        const userData = this.getViewModel().get('userData');
        Ext.Ajax.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            jsonData: userData,
            success: function () {
                Ext.Msg.alert('Success', 'Submitted to server!');
                localStorage.removeItem('wizardUserData');
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Submission failed');
            }
        });
    }
});
Ext.define('MyApp.view.wizard.Step1', {
    extend: 'Ext.panel.Panel',
    xtype: 'wizardstep1',
    bodyPadding: 10,
    layout: 'form',
    title: 'Step 1 - Basic Info',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'First Name',
            bind: '{userData.firstName}'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            bind: '{userData.lastName}'
        }
    ]
});
Ext.define('MyApp.view.wizard.Step2', {
    extend: 'Ext.panel.Panel',
    xtype: 'wizardstep2',
    bodyPadding: 10,
    layout: 'form',
    title: 'Step 2 - Contact Info',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            bind: '{userData.email}'
        }
    ]
});
Ext.define('MyApp.view.wizard.Step3', {
    extend: 'Ext.panel.Panel',
    xtype: 'wizardstep3',
    bodyPadding: 10,
    layout: 'form',
    title: 'Step 3 - Additional Info',

    items: [
        {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            bind: '{userData.age}'
        }
    ]
});
Ext.define('MyApp.view.wizard.Wizard', {
    extend: 'Ext.panel.Panel',
    xtype: 'wizardpanel',
    requires: [
        'MyApp.view.wizard.Step1',
        'MyApp.view.wizard.Step2',
        'MyApp.view.wizard.Step3'
    ],
    viewModel: 'wizardmodel',
    controller: 'wizardcontroller',
    width: 500,
    height: 300,
    layout: 'card',
    bodyPadding: 10,
    renderTo: Ext.getBody(),

    items: [
        { xtype: 'wizardstep1' },
        { xtype: 'wizardstep2' },
        { xtype: 'wizardstep3' }
    ],

    bbar: [
        { text: 'Back', handler: 'onBack' },
        { text: 'Next', handler: 'onNext' },
        '->',
        { text: 'Save Local', handler: 'onSaveToLocal' },
        { text: 'Load Local', handler: 'onLoadFromLocal' },
        { text: 'Submit', handler: 'onSubmit' }
    ]
});
Ext.application({
    name: 'MyApp',
    launch: function () {
        Ext.create('MyApp.view.wizard.Wizard');
    }
});
