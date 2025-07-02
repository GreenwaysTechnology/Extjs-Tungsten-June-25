//Declare controller
Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',
    //override init function:
    init: function () {
        console.log('Init is called for initalizing something')
        //UI binding with this controller
        this.control({
            'mainview button#helloButton': {
                click: this.onHelloClick
            },
            'mainview button#greetButton': {
                click: this.onGreeterClick
            },
        });
        //btn.addEventListener('click',function(btn){})
    },
    //biz logic
    onHelloClick: function () {
        Ext.Msg.alert('Message', 'Hello there!');
    },

    onGreeterClick: function () {
        Ext.Msg.alert('Message', 'Goodbye!');
    }
})
Ext.define('MyApp.view.hello.HelloView', {
    extend: 'Ext.panel.Panel',
    xtype: 'helloview',
    title: 'Hello View',
    layout: 'fit',
    items: [{
        xtype: 'button',
        text: 'Hello',
        itemId: 'helloButton'
    }]
})
Ext.define('MyApp.view.greet.GreeterView', {
    extend: 'Ext.panel.Panel',
    xtype: 'greeterview',
    title: 'Greeter View',
    items: [{
        xtype: 'button',
        text: 'Greet',
        itemId: 'greetButton'
    }]
})
//Declare View
Ext.define('MyApp.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Classic Controller',
    margin: 50,
    width: 600,
    layout: 'anchor',
    height: 500,
    items: [
        {
            xtype: 'button',
            text: 'Say Hello',
            itemId: 'helloButton',
            margin: '0 0 10 0'
        },
        {
            xtype: 'button',
            text: 'Greet',
            itemId: 'greetButton',
            margin: '0 0 10 0'
        },
        {
            xtype: 'helloview'
        },
        {
            xtype: 'greeterview'
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
        });
    }
});
