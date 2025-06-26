Ext.define('ConsoleLogger', {
    log: function (msg) {
        console.log('[Console] ' + msg);
    }
});
Ext.define('AlertLogger', {
    log: function (msg) {
        console.log('[Alert] ' + msg);
    }
});
Ext.define('LoggerUser', {
    mixins: {
        consoleLogger: 'ConsoleLogger',
        alertLogger: 'AlertLogger'
    },
    log: function (msg) {
        console.log('[Combined]' + msg)
        //call both mixins explicitly
        this.mixins.consoleLogger.log.call(this, msg + '(from Console Logger)')
        this.mixins.alertLogger.log.call(this, msg + '(from Alert Logger)')
    },
    run: function(){
        this.log('Testing Multiple mixins')
    }
})
function App() {
    var logger = Ext.create('LoggerUser');
    logger.run();
}
App()