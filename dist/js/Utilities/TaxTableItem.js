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
            var taxedAmount = 0;
            if (annualIncome > this.bracketStart) {
                var bracketAmount = annualIncome - this.bracketStart;
                if (this.bracketEnd != null) {
                    bracketAmount -= annualIncome - this.bracketEnd;
                }
                taxedAmount = bracketAmount * (this.percentageTax / 100);
            }
            return taxedAmount;
        };
        return TaxTableItem;
    })();
    SimplePayslip.TaxTableItem = TaxTableItem;
})(SimplePayslip || (SimplePayslip = {}));
//# sourceMappingURL=TaxTableItem.js.map