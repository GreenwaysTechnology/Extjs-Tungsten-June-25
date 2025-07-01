
Ext.application({
    name: 'MyMVCApp',
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'MVC Panel',
            items: [
                {
                    xtype: 'button',
                    text: 'Click',
                    margin:50,
                    handler: function () {
                        Ext.Msg.alert('Title', 'This is biz logic')
                    }
                }

            ], //referes the other component
            renderTo: Ext.getBody()
        })
    }
});
