sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller) {
	"use strict";

	return Controller.extend("ca.bra.controller.App", {

		onInit : function () {
			// set data model on view
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		},
		
		onShowHello : function () {
			// show a native JavaScript alert
			alert("Hello World");
		}
	});

});