QUnit.module("TaxTableItem tests");

test('Income below bracket', function () {
    var annualIncome:number = 10000,
        lowerThreshold:number = 20000,
        upperThreshold:number = 50000,
        taxAmount:number = 20,
        taxBracket:SimplePayslip.TaxTableItem = new SimplePayslip.TaxTableItem(lowerThreshold, upperThreshold, taxAmount);

    equal(0, taxBracket.getTaxedAmount(annualIncome), 'Tax amount correct');
    equal(0, taxBracket.getTaxTableAmount(annualIncome), 'Tax table amount correct');
});

test('Income within bracket', function () {
    var annualIncome:number = 30000,
        lowerThreshold:number = 20000,
        upperThreshold:number = 50000,
        taxAmount:number = 20,
        taxBracket:SimplePayslip.TaxTableItem = new SimplePayslip.TaxTableItem(lowerThreshold, upperThreshold, taxAmount);

    equal(2000, taxBracket.getTaxedAmount(annualIncome), 'Tax amount correct');
    equal(10000, taxBracket.getTaxTableAmount(annualIncome), 'Tax table amount correct');
});

test('Income above bracket', function () {
    var annualIncome:number = 60000,
        lowerThreshold:number = 20000,
        upperThreshold:number = 50000,
        taxAmount:number = 20,
        taxBracket:SimplePayslip.TaxTableItem = new SimplePayslip.TaxTableItem(lowerThreshold, upperThreshold, taxAmount);

    equal(6000, taxBracket.getTaxedAmount(annualIncome), 'Tax amount correct');
    equal(30000, taxBracket.getTaxTableAmount(annualIncome), 'Tax table amount correct');
});
