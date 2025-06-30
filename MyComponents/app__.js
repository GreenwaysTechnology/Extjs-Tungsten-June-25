/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyComponents.Application',

    name: 'MyComponents',

    requires: [
        // This will automatically load all classes in the MyComponents namespace
        // so that application classes do not need to require each other.
        'MyComponents.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyComponents.view.main.Main'
});
