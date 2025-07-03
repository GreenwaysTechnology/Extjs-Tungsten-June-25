/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyMVVMApp.Application',
    name: 'MyMVVMApp',

    //this is configuration for the class loader to load (classes from various location)
    requires: [
        // This will automatically load all classes in the MyMVVMApp namespace
        // so that application classes do not need to require each other.
        'MyMVVMApp.*'
    ],
    // The name of the initial view to create. //Ext.create('MyMVVMApp.view.main.Main')
    mainView: 'MyMVVMApp.view.main.Main'
});
