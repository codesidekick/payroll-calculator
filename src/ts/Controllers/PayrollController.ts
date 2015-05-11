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
        endDate: Date;
    }

    /**
     * Payroll controller.
     */
    export class PayrollController {

        constructor(private $scope:PayrollControllerScope, private taxUtility:TaxInterface) {
            this.setUp();
        }


        private setUp() {
            this.setUpDateWatcher();
        }

        private setUpDateWatcher() {
            var $scope:PayrollControllerScope = this.$scope,
                self = this;

            $scope.$watch("startDate", function (startDate:Date, oldValue) {

            });
        }
    }
}