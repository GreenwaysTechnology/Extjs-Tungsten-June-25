
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.container.Container', {
            layout: 'fit',
            renderTo: Ext.getBody(),
            width: 400,
            height: 300,
            items: [
                {
                    xtype: 'panel',
                    title: 'First Panel',
                    html: 'I am visible'
                },
                {
                    xtype: 'panel',
                    hidden: true,
                    title: 'Second Panel',
                    html: 'I am ignored!'
                }

            ]
        })

    }


})
