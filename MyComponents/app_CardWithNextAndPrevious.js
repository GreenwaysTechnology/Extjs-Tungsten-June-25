
Ext.application({
    name: 'MyApp', //name of the application : this is namespace prefix
    launch: function () {
        Ext.create('Ext.panel.Panel', {
            renderTo: Ext.getBody(),
            width: 400,
            height: 200,
            layout: 'card',
            itemId: 'wizardContainer',
            items: [
                { html: '<h2>Step 1: Introduction</h2>' },
                { html: '<h2>Step 2: Details</h2>' },
                { html: '<h2>Step 3: Confirmation</h2>' }
            ],

            bbar: [
                {
                    text: 'Previous',
                    handler: function (btn) {
                        var container = btn.up('container#wizardContainer'),
                            layout = container.getLayout(),
                            currentIndex = layout.getActiveItem().getItemId() || layout.activeItemIndex || 0;

                        // fallback if itemId is not set:
                        var prevIndex = layout.activeItemIndex !== undefined ? layout.activeItemIndex - 1 : layout.getNext().index - 1;
                        if (prevIndex >= 0) {
                            layout.setActiveItem(prevIndex);
                            layout.activeItemIndex = prevIndex;
                        }
                    }
                },
                '->',
                {
                    text: 'Next',
                    handler: function (btn) {
                        var container = btn.up('container#wizardContainer'),
                            layout = container.getLayout(),
                            currentIndex = layout.activeItemIndex || 0;
                        var nextIndex = currentIndex + 1;

                        if (nextIndex < container.items.length) {
                            layout.setActiveItem(nextIndex);
                            layout.activeItemIndex = nextIndex;
                        }
                    }
                }
            ],

            listeners: {
                afterrender: function (container) {
                    // Track index manually for convenience
                    container.getLayout().activeItemIndex = 0;
                }
            }
        });

    }


})
