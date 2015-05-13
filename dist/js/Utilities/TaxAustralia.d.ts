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
        /**
         *
         */
        getTotalIncomeTax(): number;
        getIncomeTax(): number;
        /**
         *
         */
        getNetIncome(): number;
        getSuper(): number;
        private static round(amount);
    }
}
