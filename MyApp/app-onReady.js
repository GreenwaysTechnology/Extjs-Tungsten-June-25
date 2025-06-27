//Ext.onReady
Ext.onReady(function () {
    console.log('DOM is ready')
    var heading = document.createElement('h1')
    heading.innerHTML = 'Hello'
    var rootElement = document.getElementById('root')
    console.log(rootElement)
    rootElement.appendChild(heading)
})