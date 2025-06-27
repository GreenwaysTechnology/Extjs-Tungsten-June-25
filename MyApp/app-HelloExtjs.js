
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        //Helloworld
        var panel = Ext.create('Ext.panel.Panel', {
            html: '<h1>Hello,Ext.js, How are you?</h1>',
            renderTo: 'root',
            // renderTo: Ext.getBody()
            // renderTo: Ext.getBody()
        })
        console.log(panel)
    }
})