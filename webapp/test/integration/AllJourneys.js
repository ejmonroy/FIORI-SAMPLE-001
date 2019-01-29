/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 AllocationHeaderSet in the list
// * All 3 AllocationHeaderSet have at least one HeaderToItem

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
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/MasterJourney",
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/NavigationJourney",
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/NotFoundJourney",
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/BusyJourney",
		"df/training/sample001/FIORI-SAMPLE-001/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});