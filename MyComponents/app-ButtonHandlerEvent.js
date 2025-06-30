
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            items: [
                {
                    xtype: 'button',
                    text: 'Click',
                    //listner
                    handler: function () {
                        //write logic when button is clicked
                        //console.log('button is clicked')
                        Ext.Msg.alert('Title','You clicked button')
                    }
                }

            ], //referes the other component
            renderTo: 'root'
        })


    }
})
