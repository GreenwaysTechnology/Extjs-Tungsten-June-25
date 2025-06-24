
function getConfig() {
    return {
        itemId: 'MyGrid',
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
    }
}

//declaration
function App() {
    console.log(getConfig())
    var config = getConfig()
    console.log(config.itemId,config.name,config.items,config.handler())
}
//invocation
App()