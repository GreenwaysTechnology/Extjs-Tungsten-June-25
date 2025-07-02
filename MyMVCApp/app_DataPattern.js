Ext.define('MyApp.view.MainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Main View',
    width: 400,
    height: 200,
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
            margin: '10 0 0 0'
        }
    ]
});
Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    init: function () {
        this.control({
            'mainview button#sendBtn': {
                click: this.onSendClick
            },
            'secondview button#replyBtn': {
                click: this.onReplyClick
            }
        });
    },

    onSendClick: function () {
        var mainView = Ext.ComponentQuery.query('mainview')[0]
        var secondView = Ext.ComponentQuery.query('secondview')[0];

        if (mainView && secondView) {
            var msg = mainView.down('#msgField').getValue();
            secondView.down('#receivedField').setValue(msg);
            Ext.Msg.alert('Sent', 'Message sent to SecondView.');
        }
    },

    onReplyClick: function () {
        var secondView = Ext.ComponentQuery.query('secondview')[0]
        var   mainView = Ext.ComponentQuery.query('mainview')[0];

        if (secondView && mainView) {
            var reply = 'Got it: "' + secondView.down('#receivedField').getValue() + '"';
            mainView.down('#replyField').setValue(reply);
            Ext.Msg.alert('Reply', 'Reply sent back to MainView.');
        }
    }
});
Ext.application({
    name: 'MyApp',

    controllers: [
        'MainController'
    ],

    launch: function () {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            title:'containerView',
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

