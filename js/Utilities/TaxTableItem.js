var SimplePayslip;
(function (SimplePayslip) {
    var TaxTableItem = (function () {
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
        function TaxTableItem(bracketStart, bracketEnd, percentageTax) {
            this.bracketStart = bracketStart;
            this.bracketEnd = bracketEnd;
            this.percentageTax = percentageTax;
        }
        /**
         * Get the amount of tax to pay on this bracket for a given annual income.
         *
         * @param {number} annualIncome
         *   The annual income to process.
         *
         * @return {number}
         *   The amount of tax to pay on this bracket.
         */
        TaxTableItem.prototype.getTaxedAmount = function (annualIncome) {
            return this.getTaxTableAmount(annualIncome) * (this.percentageTax / 100);
        };
        /**
         * Get the amount of annual income within this bracket that will be taxed.
         *
         * @param {number} annualIncome
         *   The annual income to be taxed.
         *
         * @return {number}
         *   The Annual income to be taxed by this bracket.
         */
        TaxTableItem.prototype.getTaxTableAmount = function (annualIncome) {
            var taxTableAmount = 0;
            if (annualIncome > this.bracketEnd && this.bracketEnd != null) {
                taxTableAmount = this.bracketEnd - this.bracketStart;
            }
            else if (annualIncome > this.bracketStart) {
                taxTableAmount = annualIncome - this.bracketStart;
            }
            return taxTableAmount;
        };
        return TaxTableItem;
    })();
    SimplePayslip.TaxTableItem = TaxTableItem;
})(SimplePayslip || (SimplePayslip = {}));
//# sourceMappingURL=TaxTableItem.js.map