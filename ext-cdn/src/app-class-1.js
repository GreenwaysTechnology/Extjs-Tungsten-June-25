//Define class
var HelloWorld = Ext.define('HelloWorld', {

})
function App() {
    //js way
    var h = new HelloWorld()
    console.log(h)
    //Ext way
   var h1= Ext.create('HelloWorld')
   console.log(h1)
}
App()