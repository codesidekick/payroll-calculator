module SimplePayslip {
    /**
     * Australian Tax Class Calculator.
     */
    export class TaxAustralia implements TaxInterface {
        private annualSalary:number;
        private startDate:Date;
        private taxTables:TaxTableItem[];
        private superRate:number;

        /**
         * Class constructor.
         */
        public constructor() {
            this.setUp();
        }

        /**
         * Initialize the Tax system.
         */
        public setUp() {
            this.taxTables = [
                new TaxTableItem(18200, 37000, 19),
                new TaxTableItem(37000, 80000, 32.5),
                new TaxTableItem(80000, 180000, 37),
                new TaxTableItem(180000, null, 45),
            ];
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public setAnnualSalary(salary:number):void {
            this.annualSalary = salary;
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public setSuperRate(superRate:number):void {
            this.superRate = superRate;
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public setStartDate(startDate:Date):void {
            this.startDate = startDate;
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public getGrossIncome(payPeriod:PayPeriod = PayPeriod.Month):number {
            return TaxAustralia.round(this.annualSalary / payPeriod);
        }

        /**
         * Get the total yearly income tax.
         */
        public getTotalIncomeTax():number {
            var incomeTax:number = 0;

            for (var delta in this.taxTables) {
                var taxTableItem:TaxTableItem = this.taxTables[delta];

                incomeTax += taxTableItem.getTaxedAmount(this.annualSalary);
            }

            return TaxAustralia.round(incomeTax);
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public getIncomeTax(payPeriod:PayPeriod = PayPeriod.Month):number {
            var incomeTax:number = this.getTotalIncomeTax();

            incomeTax /= payPeriod;

            return TaxAustralia.round(incomeTax);
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public getNetIncome(payPeriod:PayPeriod = PayPeriod.Month):number {
            return this.getGrossIncome(payPeriod) - this.getIncomeTax(payPeriod);
        }

        /**
         * {@inheritdoc}
         *
         * @see SimplePayslip.TaxInterface
         */
        public getSuper(payPeriod:PayPeriod = PayPeriod.Month):number {
            return TaxAustralia.round(this.getGrossIncome(payPeriod) * (this.superRate / 100));
        }

        /**
         * Wrapper for rounding numbers.
         *
         * @param {number} amount
         *   The number to round.
         *
         * @returns {number}
         *   The rounded number.
         */
        private static round(amount:number):number {
            return Math.round(amount);
        }

    }
}