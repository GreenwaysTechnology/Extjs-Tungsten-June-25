
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'north',
                    xtype: 'panel',
                    title: 'Header',
                    height: 50
                },
                {
                    region: 'center',
                    xtype: 'panel',
                    title: 'Main Content',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'tabpanel',
                            items: [
                                { title: 'Tab 1', html: 'Content 1' },
                                { title: 'Tab 2', html: 'Content 2' }
                            ]
                        }
                    ]
                }
            ]
        });

    }


})
