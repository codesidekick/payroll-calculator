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
