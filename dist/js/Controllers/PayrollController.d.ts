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
     * Payroll controller.
     */
    class PayrollController {
        private $scope;
        private taxUtility;
        constructor($scope: PayrollControllerScope, taxUtility: TaxInterface);
        private setUp();
        private setUpWatchers();
        updateValues(): void;
    }
}
