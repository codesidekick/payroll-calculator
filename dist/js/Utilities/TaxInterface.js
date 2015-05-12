/**
 * @file
 * Payroll tax interfaces.
 */
var SimplePayslip;
(function (SimplePayslip) {
    (function (PayPeriod) {
        PayPeriod[PayPeriod["Week"] = 52] = "Week";
        PayPeriod[PayPeriod["Month"] = 12] = "Month";
    })(SimplePayslip.PayPeriod || (SimplePayslip.PayPeriod = {}));
    var PayPeriod = SimplePayslip.PayPeriod;
})(SimplePayslip || (SimplePayslip = {}));
//# sourceMappingURL=TaxInterface.js.map