/**
 * @file
 * Payroll controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
var SimplePayslip;
(function (SimplePayslip) {
    /**
     * Payroll controller.
     */
    var PayrollController = (function () {
        function PayrollController($scope, taxUtility) {
            this.$scope = $scope;
            this.taxUtility = taxUtility;
            this.setUp();
        }
        PayrollController.prototype.setUp = function () {
            this.taxUtility.setPayPeriod(12 /* Month */);
            this.setUpWatchers();
            this.updateValues();
            this.$scope.dateOptions = {
                initDate: new Date()
            };
        };
        PayrollController.prototype.setUpWatchers = function () {
            var $scope = this.$scope, taxUtility = this.taxUtility, self = this;
            $scope.annualSalary = 0;
            $scope.$watch("annualSalary", function (annualSalary, oldValue) {
                taxUtility.setAnnualSalary(annualSalary);
                self.updateValues();
            });
            $scope.$watch("superRate", function (superRate, oldValue) {
                taxUtility.setSuperRate(superRate);
                self.updateValues();
            });
            $scope.$watch("startDate", function (startDate, oldValue) {
                taxUtility.setStartDate(startDate);
                self.updateValues();
            });
        };
        PayrollController.prototype.updateValues = function () {
            this.$scope.grossIncomeResult = this.taxUtility.getGrossIncome();
            this.$scope.incomeTaxResult = this.taxUtility.getIncomeTax();
            this.$scope.netIncomeResult = this.taxUtility.getNetIncome();
            this.$scope.superResult = this.taxUtility.getSuper();
        };
        return PayrollController;
    })();
    SimplePayslip.PayrollController = PayrollController;
})(SimplePayslip || (SimplePayslip = {}));
/**
 * @file
 * Payroll tax interfaces.
 */
var SimplePayslip;
(function (SimplePayslip) {
    (function (PayPeriod) {
        PayPeriod[PayPeriod["Week"] = 52] = "Week";
        PayPeriod[PayPeriod["Month"] = 12] = "Month";
    })(SimplePayslip.PayPeriod || (SimplePayslip.PayPeriod = {}));
    var PayPeriod = SimplePayslip.PayPeriod;
})(SimplePayslip || (SimplePayslip = {}));
var SimplePayslip;
(function (SimplePayslip) {
    var TaxTableItem = (function () {
        function TaxTableItem(bracketStart, bracketEnd, percentageTax) {
            this.bracketStart = bracketStart;
            this.bracketEnd = bracketEnd;
            this.percentageTax = percentageTax;
        }
        /**
         *
         * @param annualIncome
         */
        TaxTableItem.prototype.getTaxedAmount = function (annualIncome) {
            var taxedAmount = 0;
            if (annualIncome > this.bracketStart) {
                var bracketAmount = annualIncome - this.bracketStart;
                if (this.bracketEnd != null) {
                    bracketAmount -= annualIncome - this.bracketEnd;
                }
                taxedAmount = bracketAmount * (this.percentageTax / 100);
            }
            return taxedAmount;
        };
        return TaxTableItem;
    })();
    SimplePayslip.TaxTableItem = TaxTableItem;
})(SimplePayslip || (SimplePayslip = {}));
/// <reference path="TaxInterface.ts" />
/// <reference path="TaxTableItem.ts" />
var SimplePayslip;
(function (SimplePayslip) {
    /**
     * Australian Tax Class Calculator.
     */
    var TaxAustralia = (function () {
        function TaxAustralia() {
            this.setUp();
        }
        TaxAustralia.prototype.setTaxTables = function (taxTables) {
            this.taxTables = taxTables;
        };
        TaxAustralia.prototype.setUp = function () {
            var taxTables = [];
            taxTables.push(new SimplePayslip.TaxTableItem(18200, 37000, 19));
            taxTables.push(new SimplePayslip.TaxTableItem(37000, 80000, 32.5));
            taxTables.push(new SimplePayslip.TaxTableItem(80000, 180000, 37));
            taxTables.push(new SimplePayslip.TaxTableItem(180000, null, 45));
            this.setTaxTables(taxTables);
        };
        /**
         *
         * @param {PayPeriod} payPeriod
         */
        TaxAustralia.prototype.setPayPeriod = function (payPeriod) {
            this.payPeriod = payPeriod;
        };
        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        TaxAustralia.prototype.setAnnualSalary = function (salary) {
            this.annualSalary = salary;
        };
        /**
         *
         *
         * @param {number} superRate
         *
         * @return {number}
         *   The salary.
         */
        TaxAustralia.prototype.setSuperRate = function (superRate) {
            this.superRate = superRate;
        };
        /**
         *
         * @param startDate
         */
        TaxAustralia.prototype.setStartDate = function (startDate) {
            this.startDate = startDate;
        };
        /**
         *
         */
        TaxAustralia.prototype.getGrossIncome = function () {
            return TaxAustralia.round(this.annualSalary / this.payPeriod);
        };
        TaxAustralia.prototype.getIncomeTax = function () {
            var incomeTax = this.getTotalIncomeTax();
            incomeTax /= this.payPeriod;
            return TaxAustralia.round(incomeTax);
        };
        /**
         *
         */
        TaxAustralia.prototype.getTotalIncomeTax = function () {
            var incomeTax = 0;
            for (var delta in this.taxTables) {
                var taxTableItem = this.taxTables[delta];
                incomeTax += taxTableItem.getTaxedAmount(this.annualSalary);
            }
            return TaxAustralia.round(incomeTax);
        };
        /**
         *
         */
        TaxAustralia.prototype.getNetIncome = function () {
            return this.getGrossIncome() - this.getIncomeTax();
        };
        TaxAustralia.prototype.getSuper = function () {
            return TaxAustralia.round(this.getGrossIncome() * (this.superRate / 100));
        };
        TaxAustralia.round = function (amount) {
            return Math.round(amount);
        };
        return TaxAustralia;
    })();
    SimplePayslip.TaxAustralia = TaxAustralia;
})(SimplePayslip || (SimplePayslip = {}));
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="Controllers/PayrollController.ts" />
/// <reference path="Utilities/TaxAustralia.ts" />
// Define the Angular module for our application.
var app = angular.module("app", ["ui.bootstrap"]);
app.factory('taxAustralia', function () {
    return new SimplePayslip.TaxAustralia();
});
app.controller("PayrollController", ["$scope", "taxAustralia", SimplePayslip.PayrollController]);
//# sourceMappingURL=app.js.map