
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            title: 'Accordion Example',
            width: 300,
            height: 400,
            layout: 'accordion',
            defaults: {
                bodyPadding: 10
            },
            items: [
                {
                    title: 'Panel 1',
                    html: 'Content for Panel 1'
                },
                {
                    title: 'Panel 2',
                    html: 'Content for Panel 2'
                },
                {
                    title: 'Panel 3',
                    html: 'Content for Panel 3'
                }
            ]
        });
    }
});


