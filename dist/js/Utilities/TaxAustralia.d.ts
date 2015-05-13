declare module SimplePayslip {
    /**
     * Australian Tax Class Calculator.
     */
    class TaxAustralia implements TaxInterface {
        private annualSalary;
        private startDate;
        private taxTables;
        private superRate;
        /**
         * Class constructor.
         */
        constructor();
        /**
         * Initialize the Tax system.
         */
        setUp(): void;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        setAnnualSalary(salary: number): void;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        setSuperRate(superRate: number): void;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        setStartDate(startDate: Date): void;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        getGrossIncome(payPeriod?: PayPeriod): number;
        /**
         * Get the total yearly income tax.
         */
        getTotalIncomeTax(): number;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        getIncomeTax(payPeriod?: PayPeriod): number;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        getNetIncome(payPeriod?: PayPeriod): number;
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        getSuper(payPeriod?: PayPeriod): number;
        /**
         * Wrapper for rounding numbers.
         *
         * @param {number} amount
         *   The number to round.
         *
         * @returns {number}
         *   The rounded number.
         */
        private static round(amount);
    }
}
