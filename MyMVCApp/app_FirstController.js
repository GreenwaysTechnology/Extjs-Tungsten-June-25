//Declare controller
Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    //override init function:
    init: function () {
        console.log('Init is called for initalizing something')
        //UI binding with this controller
        this.control({
            'mainview button#myButton': {
                click: this.onButtonClick
            }
        })
    },
    //biz logic
    onButtonClick: function () {
        Ext.Msg.alert('Info', 'Button is clicked using classic Controller!')
    }
})

//Declare View
Ext.define('MyApp.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Classic Controller',
    margin: 50,
    width: 600,
    height: 200,
    items: [
        {
            xtype: 'button',
            margin: 50,
            text: 'Click',
            itemId: 'myButton'
        }
    ]
})

Ext.application({
    name: 'MyMVCApp',
    //controllers configuration: Registring controllers
    controllers: [
        'MyApp.controller.MainController'
    ],
    launch: function () {
        Ext.create('MyApp.view.Main', {
            renderTo: Ext.getBody()
        })
    }
});
