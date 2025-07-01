
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            title: 'Column Example',
            width: 600,
            height: 400,
            layout: 'column',
            defaults: {
                bodyPadding: 10
            },
            items: [
                {
                    xtype:'panel',
                    title: 'Column 1',
                    columnWidth: 0.4,  // 50% width
                    height: 150,
                    html: 'Left side content'
                },
                  {
                    xtype:'panel',
                    title: 'Column 2',
                    columnWidth: 0.4,  // 50% width
                    height: 150,
                    html: 'Right side content'
                }
            ]
        });
    }
});


