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
            margin: '10 0 0 0',
            handler: function (btn) {
                const view = btn.up('mainview');
                const msg = view.down('#msgField').getValue();
                // Fire global app-level event
                view.fireEvent('sendToSecondView', msg);
            }
        },
        {
            xtype: 'displayfield',
            fieldLabel: 'Reply from SecondView',
            itemId: 'replyField',
            margin: '20 0 0 0'
        }
    ],

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
                const view = btn.up('secondview');
                const value = view.down('#receivedField').getValue();

                view.fireEvent('replyToMainView', 'Got it: "' + value + '"');
            }
        }
    ],

});
Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    //life cycle methods : init, onLaunch
    //init : 
    // is called before views are created(Before elements creation)
    // setup app-level logic, control bindings(this.control)
    // you cant access any dom elements
    // used to setup this.control, app.on
    
    init: function () {
        //Get the Application Object through which you send events
        var app = this.getApplication();
        console.log(app)
        // Listen to custom app-level events
        //app.on('nameoftheCustomeEvent',listener,this)
        app.on('sendToSecondView', this.onSendToSecondView, this);
        app.on('replyToMainView', this.onReplyToMainView, this);
    },

    //Life cycle method, gets called after Views are created and renderd: UI is ready
    
    onLaunch: function () {
        // Bridge view-level custom events to app-level
        var mainView = Ext.ComponentQuery.query('mainview')[0];
        var secondView = Ext.ComponentQuery.query('secondview')[0];

        if (mainView) {
            mainView.on('sendToSecondView', function (msg) {
                this.getApplication().fireEvent('sendToSecondView', msg);
            }, this);
        }

        if (secondView) {
            secondView.on('replyToMainView', function (reply) {
                this.getApplication().fireEvent('replyToMainView', reply);
            }, this);
        }
    },

    //msg will have value which has been broadcasted from first view
    onSendToSecondView: function (msg) {
        const secondView = Ext.ComponentQuery.query('secondview')[0];
        if (secondView) {
            secondView.down('#receivedField').setValue(msg);
            Ext.Msg.alert('Sent', 'Message sent to SecondView.');
        }
    },

    onReplyToMainView: function (reply) {
        const mainView = Ext.ComponentQuery.query('mainview')[0];
        if (mainView) {
            mainView.down('#replyField').setValue(reply);
            Ext.Msg.alert('Reply', 'Reply sent back to MainView.');
        }
    }
});
Ext.application({
    name: 'MyApp',

    controllers: [
        'MyApp.controller.MainController'
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