sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller,MessageToast){
    "use strict";

    return Controller.extend("test.test.controller.Main", {
        onButtonClick: function (){
            MessageToast.show("Butona tıklandı");
        }
    });
});