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
            return this.getTaxTableAmount(annualIncome) * (this.percentageTax / 100);
        }

        public getTaxTableAmount(annualIncome:number):number {
            var taxTableAmount:number = 0;

            if (annualIncome > this.bracketEnd && this.bracketEnd != null) {
                taxTableAmount = this.bracketEnd - this.bracketStart;
            }
            else if (annualIncome > this.bracketStart) {
                taxTableAmount = annualIncome - this.bracketStart;
            }

            return taxTableAmount;
        }
    }
}