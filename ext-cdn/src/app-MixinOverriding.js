Ext.define('Logger', {
    log: function (msg) {
        console.log('[LOG]: ' + msg);
    }
});
Ext.define('CustomLogger', {
    mixins: {
        logger: 'Logger'
    },
    // This overrides the mixin's log() method
    log: function (msg) {
        console.log('[CUSTOM LOG]: ' + msg);
    },
});
function App(){
  var customLogger =Ext.create('CustomLogger')
  customLogger.log('Hello')
}
App()