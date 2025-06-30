//custom component
// Ext.define('MyApp.panel.MyPanel', {
//     extend: 'Ext.panel.Panel',
//     xtype:'greeter', //assigning xtype 
//     html: '<h1>Hello,This is Custom Panel</h1>',
// })
Ext.define('MyApp.panel.MyPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'greeter', //assigning xtype 
})

Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            items: [
                {
                    xtype: 'panel',
                    html: '<h1>Header</h1>'
                }, {
                    xtype: 'panel',
                    html: `<div>
                         <p>
                        Ext JS is a powerful JavaScript framework and UI library developed 
                        by Sencha. It is used to build cross-platform web and mobile applications with
                        a comprehensive set of pre-built UI components and tools. Ext JS is known for its rich set of features, including a large library of customizable widgets, data visualization tools
                        , and integration capabilities with other frameworks. 
                        </p>
                    </div>
                    `
                }, {
                    xtype: 'greeter',
                    html: '<h1>Weclome to Component</h1>'
                }

            ], //referes the other component
            renderTo: 'root'
        })


    }
})
