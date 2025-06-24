
function printValues(config) {
    console.log(config.id, config.name, config.status)
}
function MyApp(name, config) {
    console.log(name)
    console.log(config)
    console.log(config.itemId, config.name, config.params.page, config.params.count)
    console.log(config.items)
    console.log(config.handler())
}

//start up 
function main() {
    //pass object as parameter
    printValues({
        id: 1,
        name: 'Subramanian',
        status: true
    })
    MyApp('MyApp.view.GridView', {
        itemId: 'grid',
        name: 'grid',
        params: {
            page: 1,
            count: 10
        },
        items: [
            'TextBox', 'Button', 'GridCell'
        ],
        handler: function () {
            return 'clicked'
        }
    })
}
main()