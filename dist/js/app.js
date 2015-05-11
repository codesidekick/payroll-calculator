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
            this.setUpDateWatcher();
        };
        PayrollController.prototype.setUpDateWatcher = function () {
            var $scope = this.$scope, self = this;
            $scope.$watch("startDate", function (startDate, oldValue) {
            });
        };
        return PayrollController;
    })();
    SimplePayslip.PayrollController = PayrollController;
})(SimplePayslip || (SimplePayslip = {}));
/**
 * @file
 * Date picker controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
var SimplePayslip;
(function (SimplePayslip) {
    /**
     * Payroll controller.
     */
    var DatePickerController = (function () {
        /**
         * {@inheritdoc}
         */
        function DatePickerController($scope) {
            this.$scope = $scope;
            /**
             * Date picker configuration for Angular-Bootstrap bridge.
             *
             * @type angular.ui.bootstrap.IDatepickerConfig
             */
            this.options = {
                formatYear: 'yy',
                startingDay: 1
            };
            /**
             * Open the date picker.
             *
             * @param object $event
             *   HTML Dom event.
             */
            this.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.isOpen = true;
            };
            /**
             * Close the date picker.
             *
             * @param object $event
             *   HTML Dom event.
             */
            this.close = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                this.isOpen = false;
            };
            this.setUp();
        }
        /**
         * Set up the date picker and scope variables.
         */
        DatePickerController.prototype.setUp = function () {
            var $scope = this.$scope;
            $scope.options = this.options;
            $scope.open = this.open;
            $scope.close = this.close;
        };
        return DatePickerController;
    })();
    SimplePayslip.DatePickerController = DatePickerController;
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
            return Math.round(taxedAmount);
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
            this.taxTables.push(new SimplePayslip.TaxTableItem(18200, 37000, 19));
            this.taxTables.push(new SimplePayslip.TaxTableItem(37000, 80000, 32.5));
            this.taxTables.push(new SimplePayslip.TaxTableItem(80000, 180000, 37));
            this.taxTables.push(new SimplePayslip.TaxTableItem(180000, null, 180000));
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
         * @param startDate
         */
        TaxAustralia.prototype.setStartDate = function (startDate) {
            this.startDate = startDate;
        };
        /**
         *
         */
        TaxAustralia.prototype.getGrossIncome = function () {
            return this.annualSalary / this.payPeriod;
        };
        /**
         *
         */
        TaxAustralia.prototype.getIncomeTax = function () {
            var incomeTax = 0;
            for (var delta in this.taxTables) {
                var taxTableItem = this.taxTables[delta];
                incomeTax += taxTableItem.getTaxedAmount(this.annualSalary);
            }
            return incomeTax;
        };
        /**
         *
         */
        TaxAustralia.prototype.getNetIncome = function () {
            return this.annualSalary - this.getIncomeTax();
        };
        return TaxAustralia;
    })();
    SimplePayslip.TaxAustralia = TaxAustralia;
})(SimplePayslip || (SimplePayslip = {}));
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
//# sourceMappingURL=app.js.map