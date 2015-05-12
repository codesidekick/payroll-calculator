module SimplePayslip {
    export class TaxTableItem {
        protected bracketStart:number;
        protected bracketEnd:number;
        protected percentageTax:number;

        public constructor(bracketStart:number, bracketEnd:number, percentageTax:number) {
            this.bracketStart = bracketStart;
            this.bracketEnd = bracketEnd;
            this.percentageTax = percentageTax;
        }

        /**
         *
         * @param annualIncome
         */
        public getTaxedAmount(annualIncome:number):number {
            var taxedAmount:number = 0;

            if (annualIncome > this.bracketStart) {
                var bracketAmount:number = annualIncome - this.bracketStart;

                if (this.bracketEnd != null) {
                    bracketAmount -= annualIncome - this.bracketEnd;
                }

                taxedAmount = bracketAmount * (this.percentageTax / 100);
            }

            return taxedAmount;
        }
    }
}