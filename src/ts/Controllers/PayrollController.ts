/**
 * @file
 * Payroll controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */

/**
 * Allowed scope for the Angular controller.
 */
interface PayrollControllerScope extends ng.IScope {
    startDate: Date;
    endDate: Date;
}

/**
 * Payroll controller.
 */
class PayrollController {

    constructor(private $scope:PayrollControllerScope) {
        this.setUp();
    }


    private setUp() {
        this.setUpDateWatcher();
    }

    private setUpDateWatcher() {
        var $scope:PayrollControllerScope = this.$scope;

        $scope.$watch("startDate", function(startDate:Date, oldValue) {
            if (startDate) {
                $scope.endDate = getDefaultEndDate(startDate);
            }
        });
        $scope.$watch("endDate", function(newValue, oldValue) {
            console.log(newValue);
        });
    }

    /**
     * Get an end date exactly one month from the given start date.
     *
     * Compensates for shorter months, for example if the 31st of January is chosen as a start date, the 28th of
     * February (or 29th in a leap year) will be chosen as the end date.
     *
     * @param {Date} startDate
     *   The start date to calculate from.
     *
     * @returns {Date}
     *   The end date.
     */
    private getDefaultEndDate(startDate:Date) {
        var endDate:Date = new Date(startDate.getTime());
        endDate.setMonth(startDate.getMonth() + 1);

        // Reset to the last day of the month for circumstances in which the end day is over the next months
        // bounds.
        if (endDate.getMonth() > startDate.getMonth() + 1) {
            endDate.setMonth(endDate.getMonth(), 0);
        }

        return endDate;
    }

}