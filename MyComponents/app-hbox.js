
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'Panel with More Configuration',
            width: 500,
            margin: '10 20 30 50',
            height: 500,
            collapsible: true,
            collapsed: false,
            bodyPadding:10,
            layout: {
                type: 'vbox',
                align:'stretch'
            },
            items: [
                {
                    xtype: 'panel',
                    title: 'Top Panel',
                    flex:1,
                    html: '1st panel'
                },
                {
                    xtype: 'panel',
                    title: 'Bottom Panel',
                    flex:2,
                    html: '2st panel'
                }
            ],
            renderTo: Ext.getBody() //View Port
        })

    }
})
