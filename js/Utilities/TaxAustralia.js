var SimplePayslip;
(function (SimplePayslip) {
    /**
     * Australian Tax Class Calculator.
     */
    var TaxAustralia = (function () {
        /**
         * Class constructor.
         */
        function TaxAustralia() {
            this.setUp();
        }
        /**
         * Initialize the Tax system.
         */
        TaxAustralia.prototype.setUp = function () {
            this.taxTables = [
                new SimplePayslip.TaxTableItem(18200, 37000, 19),
                new SimplePayslip.TaxTableItem(37000, 80000, 32.5),
                new SimplePayslip.TaxTableItem(80000, 180000, 37),
                new SimplePayslip.TaxTableItem(180000, null, 45),
            ];
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.setAnnualSalary = function (salary) {
            this.annualSalary = salary;
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.setSuperRate = function (superRate) {
            this.superRate = superRate;
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.setStartDate = function (startDate) {
            this.startDate = startDate;
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.getGrossIncome = function (payPeriod) {
            if (payPeriod === void 0) { payPeriod = 12 /* Month */; }
            return TaxAustralia.round(this.annualSalary / payPeriod);
        };
        /**
         * Get the total yearly income tax.
         */
        TaxAustralia.prototype.getTotalIncomeTax = function () {
            var incomeTax = 0;
            for (var delta in this.taxTables) {
                var taxTableItem = this.taxTables[delta];
                incomeTax += taxTableItem.getTaxedAmount(this.annualSalary);
            }
            return TaxAustralia.round(incomeTax);
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.getIncomeTax = function (payPeriod) {
            if (payPeriod === void 0) { payPeriod = 12 /* Month */; }
            var incomeTax = this.getTotalIncomeTax();
            incomeTax /= payPeriod;
            return TaxAustralia.round(incomeTax);
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.getNetIncome = function (payPeriod) {
            if (payPeriod === void 0) { payPeriod = 12 /* Month */; }
            return this.getGrossIncome(payPeriod) - this.getIncomeTax(payPeriod);
        };
        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        TaxAustralia.prototype.getSuper = function (payPeriod) {
            if (payPeriod === void 0) { payPeriod = 12 /* Month */; }
            return TaxAustralia.round(this.getGrossIncome(payPeriod) * (this.superRate / 100));
        };
        /**
         * Wrapper for rounding numbers.
         *
         * @param {number} amount
         *   The number to round.
         *
         * @returns {number}
         *   The rounded number.
         */
        TaxAustralia.round = function (amount) {
            return Math.round(amount);
        };
        return TaxAustralia;
    })();
    SimplePayslip.TaxAustralia = TaxAustralia;
})(SimplePayslip || (SimplePayslip = {}));
//# sourceMappingURL=TaxAustralia.js.map