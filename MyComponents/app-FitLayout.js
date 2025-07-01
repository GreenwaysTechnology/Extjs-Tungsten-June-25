
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                //Header
                region: 'north',
                xtype: 'panel',
                title: 'Application Header',
                height: 60,
                bodyPadding: 10
            },
            {
                //NavBar
                region: 'west',
                xtype: 'panel',
                title: 'Navigation',
                width: 200,
                collapsible: true,
                split: true,
                bodyPadding: 10
            },
            //Main Content
            {
                region: 'center',
                xtype: 'container', //Ext.container.Container
                flex: 1, // takes the whole space 
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {
                        xtype: 'panel',
                        title: 'Left Sub Panel',
                        flex: 1,
                        margin: '5'
                    },
                    {
                        xtype: 'panel',
                        title: 'Right Sub Panel',
                        flex: 2,
                        margin: '5'
                    }],

            },
            {
                region: 'south',
                xtype: 'panel',
                title: 'Application Footer',
                height: 40,
                bodyPadding: 5
            }

            ],
            // SOUTH: Footer
        })
    },


})
