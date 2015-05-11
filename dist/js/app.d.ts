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
        endDate: Date;
    }
    /**
     * Payroll controller.
     */
    class PayrollController {
        private $scope;
        private taxUtility;
        constructor($scope: PayrollControllerScope, taxUtility: TaxInterface);
        private setUp();
        private setUpDateWatcher();
    }
}
/**
 * @file
 * Date picker controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
declare module SimplePayslip {
    /**
     * Allowed scope for the Angular controller.
     */
    interface DatePickerControllerScope extends angular.IScope {
        options?: angular.ui.bootstrap.IDatepickerConfig;
        open?: Function;
        close?: Function;
        isOpen?: boolean;
        date: Date;
    }
    /**
     * Payroll controller.
     */
    class DatePickerController {
        private $scope;
        /**
         * Date picker configuration for Angular-Bootstrap bridge.
         *
         * @type angular.ui.bootstrap.IDatepickerConfig
         */
        options: angular.ui.bootstrap.IDatepickerConfig;
        /**
         * {@inheritdoc}
         */
        constructor($scope: DatePickerControllerScope);
        /**
         * Set up the date picker and scope variables.
         */
        private setUp();
        /**
         * Open the date picker.
         *
         * @param object $event
         *   HTML Dom event.
         */
        open: ($event: any) => void;
        /**
         * Close the date picker.
         *
         * @param object $event
         *   HTML Dom event.
         */
        close: ($event: any) => void;
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
         * @param startDate
         */
        setStartDate(startDate: Date): void;
        /**
         *
         */
        getGrossIncome(): number;
        /**
         *
         */
        getIncomeTax(): number;
        /**
         *
         */
        getNetIncome(): number;
    }
}
declare var app: ng.IModule;
