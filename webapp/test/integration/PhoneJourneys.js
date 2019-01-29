/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"df/training/sample001/FIORI-SAMPLE-001/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"df/training/sample001/FIORI-SAMPLE-001/test/integration/pages/App",
	"df/training/sample001/FIORI-SAMPLE-001/test/integration/pages/Browser",
	"df/training/sample001/FIORI-SAMPLE-001/test/integration/pages/Master",
	"df/training/sample001/FIORI-SAMPLE-001/test/integration/pages/Detail",
	"df/training/sample001/FIORI-SAMPLE-001/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "df.training.sample001.FIORI-SAMPLE-001.view."
	});

	sap.ui.require([
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/NavigationJourneyPhone",
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/NotFoundJourneyPhone",
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});