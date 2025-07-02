Ext.define('MyApp.view.MainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Main View',
    width: 400,
    height: 500,
    bodyPadding: 20,

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Message to send',
            itemId: 'msgField'
        },
        {
            xtype: 'button',
            text: 'Send to SecondView',
            itemId: 'sendBtn',
            margin: '10 0 0 0'
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Reply from SecondView',
            itemId: 'replyField',
            margin: '20 0 0 0'
        }
    ]
});
Ext.define('MyApp.view.SecondView', {
    extend: 'Ext.panel.Panel',
    xtype: 'secondview',
    title: 'Second View',
    width: 400,
    height: 200,
    bodyPadding: 20,
    margin: '20 0 0 0',
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: 'Received message',
            itemId: 'receivedField'
        },
        {
            xtype: 'button',
            text: 'Reply to MainView',
            itemId: 'replyBtn',
            margin: '10 0 0 0',
            handler: function (btn) {
                var view = btn.up('secondview')
                var value = view.down('#receivedField').getValue()
                console.log('value',value)
                view.fireEvent('replyToMainView', ' Got It ', value)
            }
        }
    ]
});
Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    init: function () {
        var app = this.getApplication()
        //register events
        app.on('sendToSecondView', this.onSendToSecondView, this)
        app.on('replyToMainView', this.onReplyToMainView, this)
        // //regiser control
        // this.control({
        //     'mainview button#sendBtn': {
        //         click: this.onSendClick
        //     },
        //     'secondview button#replyBtn': {
        //         click: this.onReplyClick
        //     }
        // });
    },
    onLaunch: function () {
        //Bride view level custom events to app level
        var mainview = Ext.ComponentQuery.query('mainview')[0]
        var secondView = Ext.ComponentQuery.query('secondview')[0]
        console.log('onLaunch is called')
        if (mainview) {
            mainview.on('sendToSecondView', function (msg) {
                this.getApplication().fireEvent('sendToSecondView', msg)
            }, this)
        }
        if (secondView) {
            secondView.on('replyToMainView', function (reply) {
                this.getApplication().fireEvent('replyToMainView', reply)
            }, this)
        }
    },
    onSendToSecondView: function (msg) {
        console.log('msg from ',msg)
        var secondView = Ext.ComponentQuery.query('secondview')[0]
        if (secondView) {
            secondView.down('#receivedField').setValue(msg)
            Ext.Msg.alert('sent', 'Message sent to SecondView')
        }
    },
    onReplyToMainView: function (reply) {
        var mainView = Ext.ComponentQuery.query('mainview')[0]
        if (mainView) {
            mainView.down('#replyField').setValue(reply)
            Ext.Msg.alert('reply', 'Reply Sent to MainView')
        }
    }


});
Ext.application({
    name: 'MyApp',

    controllers: [
        'MainController'
    ],

    launch: function () {
        Ext.create('Ext.container.Container', {
            renderTo: Ext.getBody(),
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                { xtype: 'mainview' },
                { xtype: 'secondview' }
            ]
        });
    }
});


