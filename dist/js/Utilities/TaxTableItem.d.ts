declare module SimplePayslip {
    class TaxTableItem {
        private bracketStart;
        private bracketEnd;
        private percentageTax;
        /**
         * Class constructor.
         *
         * @param {number} bracketStart
         *   The starting salary this bracket affects.
         * @param {number} bracketEnd
         *   The salary cap this bracket affects.
         * @param {number} percentageTax
         *   The percentage of tax as a whole number that the bracket will use.
         */
        constructor(bracketStart: number, bracketEnd: number, percentageTax: number);
        /**
         * Get the amount of tax to pay on this bracket for a given annual income.
         *
         * @param {number} annualIncome
         *   The annual income to process.
         *
         * @return {number}
         *   The amount of tax to pay on this bracket.
         */
        getTaxedAmount(annualIncome: number): number;
        /**
         * Get the amount of annual income within this bracket that will be taxed.
         *
         * @param {number} annualIncome
         *   The annual income to be taxed.
         *
         * @return {number}
         *   The Annual income to be taxed by this bracket.
         */
        getTaxTableAmount(annualIncome: number): number;
    }
}
