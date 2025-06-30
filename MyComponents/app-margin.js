
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            title: 'Panel with TextBox and Button',
            width: 500,
           // margin: 100, // top,right,bottom,left
            margin:'10 20 30 50',
            height: 500,
            html: `
            
                <h1>This is simple Panel with Height and width</h1>
            <h1>This is simple Panel with Height and width</h1>
            <h1>This is simple Panel with Height and width</h1><h1>This is simple Panel with Height and width</h1><h1>This is simple Panel with Height and width</h1><h1>This is simple Panel with Height and width</h1>
            
            `,
            renderTo: Ext.getBody() //View Port
        })

    }
})
