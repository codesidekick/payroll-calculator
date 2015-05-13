QUnit.module("TaxTableItem tests");
test('Income below bracket', function () {
    var annualIncome = 10000, lowerThreshold = 20000, upperThreshold = 50000, taxAmount = 20, taxBracket = new SimplePayslip.TaxTableItem(lowerThreshold, upperThreshold, taxAmount);
    equal(0, taxBracket.getTaxedAmount(annualIncome), 'Tax amount correct');
    equal(0, taxBracket.getTaxTableAmount(annualIncome), 'Tax table amount correct');
});
test('Income within bracket', function () {
    var annualIncome = 30000, lowerThreshold = 20000, upperThreshold = 50000, taxAmount = 20, taxBracket = new SimplePayslip.TaxTableItem(lowerThreshold, upperThreshold, taxAmount);
    equal(2000, taxBracket.getTaxedAmount(annualIncome), 'Tax amount correct');
    equal(10000, taxBracket.getTaxTableAmount(annualIncome), 'Tax table amount correct');
});
test('Income above bracket', function () {
    var annualIncome = 60000, lowerThreshold = 20000, upperThreshold = 50000, taxAmount = 20, taxBracket = new SimplePayslip.TaxTableItem(lowerThreshold, upperThreshold, taxAmount);
    equal(6000, taxBracket.getTaxedAmount(annualIncome), 'Tax amount correct');
    equal(30000, taxBracket.getTaxTableAmount(annualIncome), 'Tax table amount correct');
});
//# sourceMappingURL=TaxTableItemTest.js.map