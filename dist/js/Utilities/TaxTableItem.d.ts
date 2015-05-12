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
