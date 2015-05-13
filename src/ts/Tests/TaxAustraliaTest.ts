QUnit.module("TaxAustralia tests");

test('Gross income for a month', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(120000);

    equal(10000, taxAustralia.getGrossIncome(SimplePayslip.PayPeriod.Month), 'Month gross income is correct');
});

test('Gross income for a week', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(52000);

    equal(1000, taxAustralia.getGrossIncome(SimplePayslip.PayPeriod.Week), 'Week gross income is correct');
});

test('Income tax for lower bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(18199);

    equal(0, taxAustralia.getTotalIncomeTax(), 'No tax for upper threshold');

    equal(0, taxAustralia.getIncomeTax(SimplePayslip.PayPeriod.Week), 'No weekly tax for upper threshold');

    equal(0, taxAustralia.getIncomeTax(), 'No monthly tax for upper threshold');
});

test('Income tax for second bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(36999);

    equal(3572, taxAustralia.getTotalIncomeTax(), 'Tax for upper threshold correct');

    equal(69, taxAustralia.getIncomeTax(SimplePayslip.PayPeriod.Week), 'Weekly tax for upper threshold correct');

    equal(298, taxAustralia.getIncomeTax(), 'Monthly tax for upper threshold correct');
});

test('Income tax for third bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(79999);

    equal(17547, taxAustralia.getTotalIncomeTax(), 'Tax for upper threshold correct');

    equal(337, taxAustralia.getIncomeTax(SimplePayslip.PayPeriod.Week), 'Weekly tax for upper threshold correct');

    equal(1462, taxAustralia.getIncomeTax(), 'Monthly tax for upper threshold correct');
});

test('Income tax for fourth bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(179999);

    equal(54547, taxAustralia.getTotalIncomeTax(), 'Tax for upper threshold of fourth bracket correct');

    equal(1049, taxAustralia.getIncomeTax(SimplePayslip.PayPeriod.Week), 'Weekly tax for upper threshold correct');

    equal(4546, taxAustralia.getIncomeTax(), 'Monthly tax for upper threshold correct');
});

test('Income tax for final bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(1000000);

    equal(423547, taxAustralia.getTotalIncomeTax(), 'Tax for millionaire correct');

    equal(8145, taxAustralia.getIncomeTax(SimplePayslip.PayPeriod.Week), 'Weekly tax for millionaire correct');

    equal(35296, taxAustralia.getIncomeTax(), 'Monthly tax for millionaire correct');
});

test('Income tax for average wage', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(74724);

    equal(15832, taxAustralia.getTotalIncomeTax(), 'Tax for average Australian wage correct');

    equal(304, taxAustralia.getIncomeTax(SimplePayslip.PayPeriod.Week), 'Weekly tax for upper threshold correct');

    equal(1319, taxAustralia.getIncomeTax(), 'Monthly tax for upper threshold correct');
});

test('Super calculation', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(74724);
    taxAustralia.setSuperRate(9.5);

    equal(137, taxAustralia.getSuper(SimplePayslip.PayPeriod.Week), 'Weekly super for average wage correct');

    equal(592, taxAustralia.getSuper(), 'Monthly super for average wage correct');
});