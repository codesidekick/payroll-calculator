
/**
 * @file
 * Payroll controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
module SimplePayslip {
    /**
     * Allowed scope for the Angular controller.
     */
    export interface PayrollControllerScope extends angular.IScope {
        startDate: Date;
        annualSalary: number;
        superRate: number;
        grossIncomeResult: number;
        incomeTaxResult: number;
        netIncomeResult: number;
        superResult: number;
        dateOptions: angular.ui.bootstrap.IDatepickerConfig;
        firstName: string;
        lastName: string;
    }

    /**
     * Angular Payroll controller.
     */
    export class PayrollController {

        /**
         * Class constructor.
         *
         * @param {PayrollControllerScope} $scope
         *   The angular scope to be passed to the controller.
         * @param {TaxInterface} taxUtility
         *   The tax system to be used by the controller.
         */
        constructor(private $scope:PayrollControllerScope, private taxUtility:TaxInterface) {
            this.setUp();
        }

        /**
         * Preparation for the controller when initially invoked.
         */
        private setUp() {
            this.setUpWatchers();
            this.updateValues();

            this.$scope.dateOptions = {
                initDate: new Date()
            }
        }

        /**
         * Set up Angular watchers for models.
         */
        private setUpWatchers() {
            var $scope:PayrollControllerScope = this.$scope,
                taxUtility:TaxInterface = this.taxUtility,
                self = this;

            $scope.annualSalary = 0;

            $scope.$watch("annualSalary", function (annualSalary:number, oldValue) {
                taxUtility.setAnnualSalary(annualSalary);

                self.updateValues();
            });

            $scope.$watch("superRate", function (superRate:number, oldValue) {
                taxUtility.setSuperRate(superRate);

                self.updateValues();
            });

            $scope.$watch("startDate", function (startDate:Date, oldValue) {
                taxUtility.setStartDate(startDate);

                self.updateValues();
            });
        }

        /**
         * Update all scope model values with latest values from TaxInterface.
         */
        public updateValues() {
            this.$scope.grossIncomeResult = this.taxUtility.getGrossIncome();
            this.$scope.incomeTaxResult = this.taxUtility.getIncomeTax();
            this.$scope.netIncomeResult = this.taxUtility.getNetIncome();
            this.$scope.superResult = this.taxUtility.getSuper();
        }

    }
}