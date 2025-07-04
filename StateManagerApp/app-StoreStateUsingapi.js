Ext.define('MyApp.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Manual Form State Save/Load Example',
    width: 500,
    bodyPadding: 20,
    layout: 'anchor',
    state: true,
    stateId: 'manual-form-state', // Used as localStorage key
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            itemId: 'nameField',
            anchor: '100%'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            itemId: 'emailField',
            anchor: '100%'
        },
        {
            xtype: 'container',
            layout: 'hbox',
            margin: '10 0 0 0',
            defaults: {
                margin: '0 10 0 0'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Save to LocalStorage',
                    handler: function (btn) {
                        const panel = btn.up('panel');
                        const name = panel.down('#nameField').getValue();
                        const email = panel.down('#emailField').getValue();

                        //store data into local storage
                        Ext.state.Manager.getProvider().set(panel.stateId, {
                            name: name,
                            email: email
                        });
                        Ext.Msg.alert('Success', 'Form data saved to localStorage!');
                        panel.down('#nameField').setValue('')
                        panel.down('#emailField').setValue();

                    }
                },
                {
                    xtype: 'button',
                    text: 'Load from LocalStorage',
                    handler: function (btn) {
                        const panel = btn.up('panel');
                        const state = Ext.state.Manager.getProvider().get(panel.stateId);

                        if (state) {
                            panel.down('#nameField').setValue(state.name || '');
                            panel.down('#emailField').setValue(state.email || '');
                            Ext.Msg.alert('Loaded', 'Form data loaded from localStorage!');
                        } else {
                            Ext.Msg.alert('No Data', 'Nothing found in localStorage!');
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Clear',
                    handler: function (btn) {
                        const panel = btn.up('panel');
                        panel.down('#nameField').setValue('');
                        panel.down('#emailField').setValue('');

                        Ext.state.Manager.getProvider().clear(panel.stateId);

                        Ext.Msg.alert('Cleared', 'Form and localStorage cleared.');
                    }
                }
            ]
        }
    ]
});



Ext.application({
    name: 'MyApp',

    launch: function () {
        // Enable LocalStorage-based state management
        Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());

        Ext.create('MyApp.view.Main', {
            renderTo: Ext.getBody()
        });
    }
});
