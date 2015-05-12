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
//# sourceMappingURL=PayrollController.js.map