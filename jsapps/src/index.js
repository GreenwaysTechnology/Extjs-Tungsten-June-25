
function createElement() {
    //create heading element (object)
    var heading = document.createElement('h1')
    //properties
    heading.innerHTML = 'Welcome to Ext.js'
    console.log(heading)
    //get existing tree
    var rootElement = document.getElementById('root')
    console.log(rootElement)
    rootElement.appendChild(heading)
}


function main() {
    createElement()
}
main()