Ext.define('Logger', {
    logMessage: function (message, level) {
        console.log(`[ ${level.toUpperCase()} ] ${message}`)
    }
})
//Child class: SmartLogger that modifies args
Ext.define('SmartLogger', {
    extend: 'Logger',
    logMessage: function (message, level) {
        if (!level) {
            level = 'info'
        }
        //modify the args
        var args = [message, level]
        this.callParent(args)

    }
})
function App() {
    var logger = Ext.create('SmartLogger')
    logger.logMessage('System Started')
    logger.logMessage('Disk Full','warning')
    
}
App()