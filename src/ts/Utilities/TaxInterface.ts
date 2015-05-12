/**
 * @file
 * Payroll tax interfaces.
 */

module SimplePayslip {
    export enum PayPeriod {
        Week = 52,
        Month = 12
    }

    export interface TaxInterface {

        /**
         *
         * @param {Array} taxTables
         */
        setTaxTables: (taxTables:TaxTableItem[]) => void;

        /**
         *
         * @param payPeriod
         */
        setPayPeriod: (payPeriod:PayPeriod) => void;

        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        setAnnualSalary: (salary:number) => void;

        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        setSuperRate: (salary:number) => void;

        /**
         *
         * @param startDate
         */
        setStartDate: (startDate:Date) => void;

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