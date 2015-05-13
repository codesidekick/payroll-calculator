/**
 * @file
 * Payroll controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
declare module SimplePayslip {
    /**
     * Allowed scope for the Angular controller.
     */
    interface PayrollControllerScope extends angular.IScope {
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
    class PayrollController {
        private $scope;
        private taxUtility;
        /**
         * Class constructor.
         *
         * @param {PayrollControllerScope} $scope
         *   The angular scope to be passed to the controller.
         * @param {TaxInterface} taxUtility
         *   The tax system to be used by the controller.
         */
        constructor($scope: PayrollControllerScope, taxUtility: TaxInterface);
        /**
         * Preparation for the controller when initially invoked.
         */
        private setUp();
        /**
         * Set up Angular watchers for models.
         */
        private setUpWatchers();
        /**
         * Update all scope model values with latest values from TaxInterface.
         */
        updateValues(): void;
    }
}
