/// <reference path="../../src/ts/typings/angularjs/angular.d.ts" />
/// <reference path="../../src/ts/typings/jquery/jquery.d.ts" />
/// <reference path="../../src/ts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
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
/**
 * @file
 * Payroll tax interfaces.
 */
declare module SimplePayslip {
    enum PayPeriod {
        Week = 52,
        Month = 12,
    }
    interface TaxInterface {
        /**
         *
         * @param {Array} taxTables
         */
        setTaxTables: (taxTables: TaxTableItem[]) => void;
        /**
         *
         * @param payPeriod
         */
        setPayPeriod: (payPeriod: PayPeriod) => void;
        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        setAnnualSalary: (salary: number) => void;
        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        setSuperRate: (salary: number) => void;
        /**
         *
         * @param startDate
         */
        setStartDate: (startDate: Date) => void;
        /**
         *
         */
        getGrossIncome: () => number;
        /**
         *
         */
        getIncomeTax: () => number;
        /**
         *
         */
        getNetIncome: () => number;
        getSuper: () => number;
    }
}
declare module SimplePayslip {
    class TaxTableItem {
        protected bracketStart: number;
        protected bracketEnd: number;
        protected percentageTax: number;
        constructor(bracketStart: number, bracketEnd: number, percentageTax: number);
        /**
         *
         * @param annualIncome
         */
        getTaxedAmount(annualIncome: number): number;
    }
}
declare module SimplePayslip {
    /**
     * Australian Tax Class Calculator.
     */
    class TaxAustralia implements TaxInterface {
        private annualSalary;
        private startDate;
        private payPeriod;
        private taxTables;
        private superRate;
        setTaxTables(taxTables: TaxTableItem[]): void;
        constructor();
        setUp(): void;
        /**
         *
         * @param {PayPeriod} payPeriod
         */
        setPayPeriod(payPeriod: PayPeriod): void;
        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        setAnnualSalary(salary: number): void;
        /**
         *
         *
         * @param {number} superRate
         *
         * @return {number}
         *   The salary.
         */
        setSuperRate(superRate: number): void;
        /**
         *
         * @param startDate
         */
        setStartDate(startDate: Date): void;
        /**
         *
         */
        getGrossIncome(): number;
        getIncomeTax(): number;
        /**
         *
         */
        private getTotalIncomeTax();
        /**
         *
         */
        getNetIncome(): number;
        getSuper(): number;
        private static round(amount);
    }
}
declare var app: ng.IModule;
