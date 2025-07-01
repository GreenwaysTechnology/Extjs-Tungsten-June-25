
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: Ext.getBody(),
            height:300,
            width:400,
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'I fill the whole Container',
                    html: '<p>This is Fit Layout</p>'
                }
            ]
        })

    }


})
