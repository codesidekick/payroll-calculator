// Define the Angular module for our application.
var app = angular.module("app", ["ui.bootstrap"]);
app.factory('taxAustralia', function () {
    return new SimplePayslip.TaxAustralia();
});
app.controller("PayrollController", ["$scope", "taxAustralia", SimplePayslip.PayrollController]);
//# sourceMappingURL=app.js.map