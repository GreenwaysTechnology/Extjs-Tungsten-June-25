/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'StateManagerApp.Application',

    name: 'StateManagerApp',

    requires: [
        // This will automatically load all classes in the StateManagerApp namespace
        // so that application classes do not need to require each other.
        'StateManagerApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'StateManagerApp.view.main.Main'
});
