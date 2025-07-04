Ext.define('MyApp.view.MainForm', {
    extend: 'Ext.form.Panel',
    xtype: 'mainform',
    title: 'Stateful Form with getValues()',
    width: 500,
    bodyPadding: 20,
    renderTo: Ext.getBody(),
    state:true,
    stateId: 'form-state',
    defaults: {
        anchor: '100%',
        allowBlank: false,
        msgTarget: 'side',
        labelWidth: 100
    },

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Full Name',
            name: 'name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Age',
            name: 'age',
            minValue: 1,
            maxValue: 120
        },
        {
            xtype: 'combo',
            fieldLabel: 'Gender',
            name: 'gender',
            store: ['Male', 'Female', 'Other'],
            forceSelection: true
        }
    ],

    buttons: [
        {
            text: 'Save to LocalStorage',
            handler: function (btn) {
                const form = btn.up('form');
                const values = form.getForm().getValues();
                Ext.state.Manager.getProvider().set(form.stateId, values);
                form.getForm().reset();
                Ext.Msg.alert('Saved', 'Form values saved to localStorage.');
            }
        },
        {
            text: 'Load from LocalStorage',
            handler: function (btn) {
                const form = btn.up('form');
                const state = Ext.state.Manager.getProvider().get(form.stateId);

                if (state) {
                    form.getForm().setValues(state);
                    Ext.Msg.alert('Loaded', 'Form values loaded from localStorage.');
                } else {
                    Ext.Msg.alert('Not Found', 'No data found in localStorage.');
                }
            }
        },
        {
            text: 'Clear All',
            handler: function (btn) {
                const form = btn.up('form');
                form.getForm().reset();
                Ext.state.Manager.getProvider().clear(form.stateId);
                Ext.Msg.alert('Cleared', 'Form and saved state cleared.');
            }
        }
    ]
});


Ext.application({
    name: 'MyApp',

    launch: function () {
        // Enable LocalStorage-based state management
        Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());

        Ext.create('MyApp.view.MainForm', {
            renderTo: Ext.getBody()
        });
    }
});
