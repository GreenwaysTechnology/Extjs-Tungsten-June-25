Ext.define('MyApp.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Stateful Form Example',
    width: 500,
    bodyPadding: 20,
    stateful: true, // enabling state management
    stateId: 'registration-form', //key for storing information
    layout: 'anchor',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            itemId: 'nameField',
            anchor: '100%'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            itemId: 'emailField',
            anchor: '100%'
        },
        {
            xtype: 'button',
            text: 'Clear Fields',
            margin: '10 0 0 0',
            handler: function (btn) {
                const panel = btn.up('panel');
                panel.down('#nameField').setValue('');
                panel.down('#emailField').setValue('');
                Ext.state.Manager.getProvider().clear(panel.stateId);
            }
        }
    ],

    // Save state (field values)
    getState: function () {
        console.log('getState is called')
        return {
            name: this.down('#nameField').getValue(),
            email: this.down('#emailField').getValue()
        };
    },

    // Restore state (field values)
    applyState: function (state) {
        console.log('applyState is called')
        this.down('#nameField').setValue(state.name || 'Subramanian Murugan');
        this.down('#emailField').setValue(state.email || 'sasubramanian_md@hotmail.com');
    }
});


Ext.application({
    name: 'StateManagerApp',
    launch: function () {
        // Enable LocalStorage-based state management
        Ext.state.Manager.setProvider(new Ext.state.LocalStorageProvider());
        Ext.create('MyApp.view.Main', {
            renderTo: Ext.getBody()
        });
    }


});
