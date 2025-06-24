
function jsonDetails() {
    var config = [
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
        }
    ]
    //array to string(json)
    var configJson = JSON.stringify(config)
    console.log(configJson)

    //json(string ) to object
    var configJsonObj= JSON.parse(configJson)
    console.log(configJsonObj)
}


function main() {
    jsonDetails()
}
main()