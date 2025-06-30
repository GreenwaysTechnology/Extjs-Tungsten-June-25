
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'Panel with TextBox and Button',
            width: 600,
            height: 500,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Name',
                    itemId: 'myTextField' // Given an itemId to find it easily 
                },
                {
                    xtype: 'button',
                    text: 'Click',
                    //listner
                    handler: function (btn) {
                        //Get the Button Object reference
                        //Get the Immediate Parent Object Reference
                        var panel = btn.up('panel')
                        //console.log(panel)
                        console.log(panel.getTitle())
                        //set the new Panel Title when i click the button
                        //  Ext.Msg.alert('')
                        panel.setTitle('Welcome To Event Listeners')
                        console.log(panel.getTitle())
                        //Get the TextField Value
                        var textfield = panel.down('#myTextField')
                        console.log(textfield.getValue())
                        Ext.Msg.alert('YourName',textfield.getValue())
                    }
                }

            ], //referes the other component
            renderTo: 'root'
        })


    }
})
