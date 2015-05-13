/**
 * @file
 * Payroll tax interfaces.
 */
declare module SimplePayslip {
    /**
     * Constants for pay period settings.
     */
    enum PayPeriod {
        Week = 52,
        Month = 12,
    }
    interface TaxInterface {
        /**
         * Set the annual salary.
         *
         * @param {number} salary
         *   The full dollar amount of the annual salary.
         */
        setAnnualSalary: (salary: number) => void;
        /**
         * Set the super rate percentage.
         *
         * @param {number} superRate
         *   The full number percentage rate (eg 9.5 for 9.5%).
         */
        setSuperRate: (superRate: number) => void;
        /**
         * Set the start date for the payment period.
         *
         * @param {Date} startDate
         *   The JavaScript date object for the start date.
         */
        setStartDate: (startDate: Date) => void;
        /**
         * Get the gross income.
         *
         * @param {PayPeriod} payPeriod
         *   The payment period, use PayPeriod.Month as default in implementations.
         *
         *  @see SimplePayslip.PayPeriod
         *
         *  @return {number}
         */
        getGrossIncome: (payPeriod?: PayPeriod) => number;
        /**
         * Get the income tax.
         *
         * @param {PayPeriod} payPeriod
         *   The payment period, use PayPeriod.Month as default in implementations.
         *
         *  @see SimplePayslip.PayPeriod
         *
         *  @return {number}
         */
        getIncomeTax: (payPeriod?: PayPeriod) => number;
        /**
         * Get the net income.
         *
         * @param {PayPeriod} payPeriod
         *   The payment period, use PayPeriod.Month as default in implementations.
         *
         *  @see SimplePayslip.PayPeriod
         *
         *  @return {number}
         */
        getNetIncome: (payPeriod?: PayPeriod) => number;
        /**
         * Get the super amount.
         *
         * @param {PayPeriod} payPeriod
         *   The payment period, use PayPeriod.Month as default in implementations.
         *
         *  @see SimplePayslip.PayPeriod
         *
         *  @return {number}
         */
        getSuper: (payPeriod?: PayPeriod) => number;
    }
}
