
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            title: 'Table Layout Example',
            width: 400,
            height: 200,
            layout: {
                type: 'table',
                columns: 4
            },
            defaults: {
                bodyPadding: 10,
                border: 1,
                style: 'background: #f0f0f0;'
            },
            items: [
                {
                    html: 'Cell 1'
                },
                {
                    html: 'Cell 2'
                },
                {
                    html: 'Cell 3'
                },
                {
                    html: 'Cell 4'
                }
            ]
        });


    }
})
