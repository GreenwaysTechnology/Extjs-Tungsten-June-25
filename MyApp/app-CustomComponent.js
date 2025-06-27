Ext.define('MyApp.panel.MyPanel', {
    extend: 'Ext.panel.Panel',
    //override the Panel properties 
    html:'<h1>Hello,This is Custom Panel</h1>',
    renderTo:'root'
})

Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        //create instance
        var panel = Ext.create('MyApp.panel.MyPanel')
        console.log(panel)

    }
})