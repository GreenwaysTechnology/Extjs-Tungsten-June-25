
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        console.log('DOM is ready')
        var heading = document.createElement('h1')
        heading.innerHTML = 'Hello'
        var rootElement = document.getElementById('root')
        console.log(rootElement)
        rootElement.appendChild(heading)
    }
})