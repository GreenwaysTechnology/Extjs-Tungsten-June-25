
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            title: 'Anchor Layout Example',
            width: 400,
            height: 300,
            layout: 'anchor',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    anchor: '100%'   // takes 100% width of container
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Email',
                    anchor: '100%'   // also 100% width
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Address',
                    anchor: '100% 50%'  // 100% width, 50% height of container
                }
            ]
        });

    }
})
