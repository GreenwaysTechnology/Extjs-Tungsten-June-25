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
        //btn.addEventListener('click',function(btn){})
    },
    //biz logic
    onButtonClick: function (btn) {
        var panel = btn.up('mainview')
        var textfield = panel.down('#myTextField')
        var value = textfield.getValue()
        //validation logic
        if (!textfield.isValid()) {
            return;
        }
        //write code to submitt data to server
        Ext.Msg.alert('Info', value)

    }
})

//Declare View
Ext.define('MyApp.view.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    title: 'Classic Controller',
    margin: 50,
    width: 600,
    layout: 'anchor',
    height: 200,
    items: [
        {
            xtype: 'textfield',
            itemId: 'myTextField',
            anchor: '100%',
            fieldLabel: 'Enter Name',
            emptyText:'Enter Your Name',
            //validation properties
            allowBlank: false,
            minLength: 3,                   // Minimum 3 chars
            maxLength: 20,
            msgTarget: 'under',                // Max 20 chars
            regex: /^[a-zA-Z]+$/,           // Only letters
            regexText: 'Only letters allowed', // Custom error text
            //Validation Rule
            validator: function (value) {
                if (!value) return 'This field is required';
                const pattern = /^[A-Z][a-z]*$/; // Must start with capital, followed by lowercase

                if (!pattern.test(value)) {
                    return 'Name must start with a capital letter and contain only lowercase letters after';
                }

                return true;
            }
        },
        {
            xtype: 'button',
            margin: '50 20 20 10 ',
            anchor: '100%',
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
