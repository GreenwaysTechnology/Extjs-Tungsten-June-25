
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'Panel with More Configuration',
            width: 500,
            margin: '10 20 30 50',
            height: 500,
            collapsible: true,
            collapsed: true,
            //toolbar
            tbar: [
                {
                    text: 'Add',
                    handler: function () {
                        Ext.Msg.alert('Add', 'Add Button is clicked')
                    }
                },
                '->',

                {
                    text: 'Delete',
                }
            ],
            bbar: [{
                text: 'Save'
            },
                '->',
            {
                text: 'Cancel'
            }
            ],
            tools: [
                {
                    type: 'help',
                    handler: function () {
                        Ext.Msg.alert('Help')
                    }
                }
            ],
            buttons: [{
                text: 'MyButton'
            }],

            renderTo: Ext.getBody() //View Port
        })

    }
})
