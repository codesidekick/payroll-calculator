/// <reference path="TaxInterface.ts" />
/// <reference path="TaxTableItem.ts" />

module SimplePayslip {
    /**
     * Australian Tax Class Calculator.
     */
    export class TaxAustralia implements TaxInterface {
        private annualSalary:number;
        private startDate:Date;
        private payPeriod:PayPeriod;
        private taxTables:TaxTableItem[];

        public setTaxTables(taxTables:TaxTableItem[]): void {
            this.taxTables = taxTables;
        }

        public constructor() {
            this.setUp();
        }

        public setUp() {
            this.taxTables.push(new TaxTableItem(18200, 37000, 19));
            this.taxTables.push(new TaxTableItem(37000, 80000, 32.5));
            this.taxTables.push(new TaxTableItem(80000, 180000, 37));
            this.taxTables.push(new TaxTableItem(180000, null, 180000));
        }

        /**
         *
         * @param {PayPeriod} payPeriod
         */
        public setPayPeriod(payPeriod:PayPeriod):void {
            this.payPeriod = payPeriod;
        }

        /**
         *
         *
         * @param {number} salary
         *
         * @return {number}
         *   The salary.
         */
        public setAnnualSalary(salary:number):void {
            this.annualSalary = salary;
        }

        /**
         *
         * @param startDate
         */
        public setStartDate(startDate:Date):void {
            this.startDate = startDate;
        }

        /**
         *
         */
        public getGrossIncome():number {
            return this.annualSalary / this.payPeriod;
        }

        /**
         *
         */
        public getIncomeTax():number {
            var incomeTax:number = 0;

            for (var delta in this.taxTables) {
                var taxTableItem:TaxTableItem = this.taxTables[delta];

                incomeTax += taxTableItem.getTaxedAmount(this.annualSalary);
            }

            return incomeTax;
        }

        /**
         *
         */
        public getNetIncome():number {
            return this.annualSalary - this.getIncomeTax();
        }

    }
}