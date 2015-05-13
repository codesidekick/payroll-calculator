QUnit.module("TaxAustralia tests");
test('Gross income for a month', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(120000);
    taxAustralia.setPayPeriod(12 /* Month */);
    equal(taxAustralia.getGrossIncome(), 10000, 'Month gross income is correct.');
});
test('Gross income for a week', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(52000);
    taxAustralia.setPayPeriod(52 /* Week */);
    equal(taxAustralia.getGrossIncome(), 1000, 'Week gross income is correct.');
});
test('Income tax for lower bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(18199);
    equal(taxAustralia.getTotalIncomeTax(), 0, 'No tax for upper threshold of lower bracket');
});
test('Income tax for second bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(36999);
    equal(taxAustralia.getTotalIncomeTax(), 3572, 'Tax for upper threshold of second bracket correct');
});
test('Income tax for third bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(79999);
    equal(taxAustralia.getTotalIncomeTax(), 17547, 'Tax for upper threshold of third bracket correct');
});
test('Income tax for fourth bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(179999);
    equal(taxAustralia.getTotalIncomeTax(), 54547, 'Tax for upper threshold of fourth bracket correct');
});
test('Income tax for final bracket', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(1000000);
    equal(taxAustralia.getTotalIncomeTax(), 423547, 'Tax for millionaire correct');
});
test('Income tax for average wage', function () {
    var taxAustralia = new SimplePayslip.TaxAustralia();
    taxAustralia.setAnnualSalary(74724);
    equal(taxAustralia.getTotalIncomeTax(), 15832, 'Tax for average Australian wage correct');
});
//# sourceMappingURL=TaxAustraliaTest.js.map