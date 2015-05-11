/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="Controllers/PayrollController.ts" />
/// <reference path="Controllers/DatePickerController.ts" />
/// <reference path="Utilities/TaxAustralia.ts" />

// Define the Angular module for our application.
var app = angular.module("app", ["ui.bootstrap"]);

app.controller("PayrollController", ["$scope", SimplePayslip.TaxAustralia, SimplePayslip.PayrollController]);
app.controller("DatePickerController", ["$scope", SimplePayslip.DatePickerController]);
