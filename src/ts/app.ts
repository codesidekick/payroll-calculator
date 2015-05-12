/// <reference path="typings/typings/angularjs/angular.d.ts" />
/// <reference path="typings/typings/jquery/jquery.d.ts" />
/// <reference path="typings/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="typings/Controllers/PayrollController.ts" />
/// <reference path="typings/Utilities/TaxAustralia.ts" />
/// <reference path="typings/qunit/qunit.d.ts" />

// Define the Angular module for our application.
var app = angular.module("app", ["ui.bootstrap"]);

app.factory('taxAustralia', function() {
    return new SimplePayslip.TaxAustralia();
});

app.controller("PayrollController", ["$scope", "taxAustralia", SimplePayslip.PayrollController]);
