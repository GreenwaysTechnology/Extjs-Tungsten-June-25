
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            layout: 'card',
            renderTo: Ext.getBody(),
            width: 400,
            height: 300,
            itemId: 'cardContainer',
            items: [
                {
                    xtype: 'panel',
                    title: 'Card 1',
                    html: '<h2>Welcome to Card 1</h2>'
                },
                {
                    xtype: 'panel',
                    title: 'Card 2',
                    html: '<h2>Now you are on Card 2</h2>'
                },
                {
                    xtype: 'panel',
                    title: 'Card 3',
                    html: '<h2>Finally, Card 3</h2>'
                }
            ],
            bbar: [
                {
                    text: 'Card-1',
                    handler: function (btn) {
                        var container = btn.up('container#cardContainer')
                        container.getLayout().setActiveItem(0)
                    }
                },
                {
                    text: 'Card-2',
                    handler: function (btn) {
                        var container = btn.up('container#cardContainer')
                        container.getLayout().setActiveItem(1)
                    }
                },
                {
                    text: 'Card-3',
                    handler: function (btn) {
                        var container = btn.up('container#cardContainer')
                        container.getLayout().setActiveItem(2)
                    }
                }
            ]
        })

    }


})
