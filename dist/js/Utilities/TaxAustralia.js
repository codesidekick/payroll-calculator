var SimplePayslip;
(function (SimplePayslip) {
    /**
     * Australian Tax Class Calculator.
     */
    var TaxAustralia = (function () {
        function TaxAustralia() {
            this.setUp();
        }
        TaxAustralia.prototype.setUp = function () {
            this.taxTables = [
                new SimplePayslip.TaxTableItem(18200, 37000, 19),
                new SimplePayslip.TaxTableItem(37000, 80000, 32.5),
                new SimplePayslip.TaxTableItem(80000, 180000, 37),
                new SimplePayslip.TaxTableItem(180000, null, 45),
            ];
        };
        /**
         *
         * @param {PayPeriod} payPeriod
         */
        TaxAustralia.prototype.setPayPeriod = function (payPeriod) {
            this.payPeriod = payPeriod;
        };
        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        TaxAustralia.prototype.setAnnualSalary = function (salary) {
            this.annualSalary = salary;
        };
        /**
         *
         *
         * @param {number} superRate
         *
         * @return {number}
         *   The salary.
         */
        TaxAustralia.prototype.setSuperRate = function (superRate) {
            this.superRate = superRate;
        };
        /**
         *
         * @param startDate
         */
        TaxAustralia.prototype.setStartDate = function (startDate) {
            this.startDate = startDate;
        };
        /**
         *
         */
        TaxAustralia.prototype.getGrossIncome = function () {
            return TaxAustralia.round(this.annualSalary / this.payPeriod);
        };
        /**
         *
         */
        TaxAustralia.prototype.getTotalIncomeTax = function () {
            var incomeTax = 0;
            for (var delta in this.taxTables) {
                var taxTableItem = this.taxTables[delta];
                incomeTax += taxTableItem.getTaxedAmount(this.annualSalary);
            }
            return TaxAustralia.round(incomeTax);
        };
        TaxAustralia.prototype.getIncomeTax = function () {
            var incomeTax = this.getTotalIncomeTax();
            incomeTax /= this.payPeriod;
            return TaxAustralia.round(incomeTax);
        };
        /**
         *
         */
        TaxAustralia.prototype.getNetIncome = function () {
            return this.getGrossIncome() - this.getIncomeTax();
        };
        TaxAustralia.prototype.getSuper = function () {
            return TaxAustralia.round(this.getGrossIncome() * (this.superRate / 100));
        };
        TaxAustralia.round = function (amount) {
            return Math.round(amount);
        };
        return TaxAustralia;
    })();
    SimplePayslip.TaxAustralia = TaxAustralia;
})(SimplePayslip || (SimplePayslip = {}));
//# sourceMappingURL=TaxAustralia.js.map