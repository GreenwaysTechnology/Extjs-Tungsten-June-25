Ext.define('MyApp.panel.MyPanel', {
    extend: 'Ext.panel.Panel',
    //override the Panel properties 
    html: '<h1>Hello,This is Custom Panel</h1>',
})

Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            items: [
                Ext.create('Ext.panel.Panel', {
                    html: '<h1>Header!</h1>'
                }),
                Ext.create('Ext.panel.Panel', {
                    items: [
                        Ext.create('Ext.panel.Panel', {
                            html: `
                        <p>
                        Ext JS is a powerful JavaScript framework and UI library developed 
                        by Sencha. It is used to build cross-platform web and mobile applications with
                        a comprehensive set of pre-built UI components and tools. Ext JS is known for its rich set of features, including a large library of customizable widgets, data visualization tools
                        , and integration capabilities with other frameworks. 
                        </p>
                    `
                        }),
                        Ext.create('MyApp.panel.MyPanel')
                    ]
                }),
                Ext.create('Ext.panel.Panel', {
                    html: '<h1>Footer</h1>'
                }),
            ], //referes the other component
            renderTo: 'root'
        })


    }
})
