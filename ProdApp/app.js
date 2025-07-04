/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ProdApp.Application',

    name: 'ProdApp',

    requires: [
        // This will automatically load all classes in the ProdApp namespace
        // so that application classes do not need to require each other.
        'ProdApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ProdApp.view.main.Main'
});
