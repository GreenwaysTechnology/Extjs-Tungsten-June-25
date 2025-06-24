//array

function printPrimitiveArray() {
    var courses = ['Ext.js', 'Js', 'C#', 'C++']
    //iteration
    courses.forEach(function (item) {
        console.log(item)
    })
}
function printObjectArray() {
    return [
        {
            itemId: 'myText', label: 'Enter Name', xtype: 'textBox', listners: {
                handler: function () {
                    console.log('typing...')
                }
            }
        },
        {
            itemId: 'myButton', label: 'Click', xtype: 'button', listners: {
                handler: function () {
                    console.log('Clicked')
                }
            }
        },
        
    ]
}

function main() {
    printPrimitiveArray()
    var configs = printObjectArray()
    configs.forEach(function (config) {
        console.log(config.itemId, config.xtype,config.label,config.listners)
    })
}
main()