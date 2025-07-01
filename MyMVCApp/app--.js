/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyMVCApp.Application',

    name: 'MyMVCApp',

    requires: [
        // This will automatically load all classes in the MyMVCApp namespace
        // so that application classes do not need to require each other.
        'MyMVCApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyMVCApp.view.main.Main'
});
