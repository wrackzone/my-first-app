Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    
    items : [
        {
            xtype: 'rallybutton',
            text: 'Click me',
            handler: function() {
                Ext.Msg.alert('Button', 'You clicked me');
            }
        }
    ],

    launch: function() {
        //Write app code here
    }
});
