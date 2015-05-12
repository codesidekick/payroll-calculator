QUnit.module("TaxAustralia tests");

test('Gross income for month', function() {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(120000);
    taxAustralia.setPayPeriod(SimplePayslip.PayPeriod.Month);

    equal(taxAustralia.getGrossIncome(), 10000, 'Month gross income is correct.');
});

test('Gross income for week', function() {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(52000);
    taxAustralia.setPayPeriod(SimplePayslip.PayPeriod.Week);

    equal(taxAustralia.getGrossIncome(), 1000, 'Week gross income is correct.');
});