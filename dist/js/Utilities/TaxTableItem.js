var SimplePayslip;
(function (SimplePayslip) {
    var TaxTableItem = (function () {
        function TaxTableItem(bracketStart, bracketEnd, percentageTax) {
            this.bracketStart = bracketStart;
            this.bracketEnd = bracketEnd;
            this.percentageTax = percentageTax;
        }
        /**
         *
         * @param annualIncome
         */
        TaxTableItem.prototype.getTaxedAmount = function (annualIncome) {
            return this.getTaxTableAmount(annualIncome) * (this.percentageTax / 100);
        };
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