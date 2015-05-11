/**
 * @file
 * Payroll controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
/**
 * Payroll controller.
 */
var PayrollController = (function () {
    function PayrollController($scope) {
        this.$scope = $scope;
        this.setUp();
    }
    PayrollController.prototype.setUp = function () {
        this.setUpDateWatcher();
    };
    PayrollController.prototype.setUpDateWatcher = function () {
        var $scope = this.$scope, self = this;
        $scope.$watch("startDate", function (startDate, oldValue) {
            // Automatically set the end date if it is not already set or the end date is below the start date.
            if (startDate && (!$scope.endDate || $scope.endDate < startDate)) {
                $scope.endDate = self.getDefaultEndDate(startDate);
            }
        });
        $scope.$watch("endDate", function (endDate, oldValue) {
            // Ensure the end date is never below the start date.
            if ($scope.startDate && $scope.startDate > endDate) {
                $scope.startDate = endDate;
            }
        });
    };
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
    PayrollController.prototype.getDefaultEndDate = function (startDate) {
        var endDate = new Date(startDate.getTime());
        endDate.setMonth(startDate.getMonth() + 1);
        // Reset to the last day of the month for circumstances in which the end day is over the next months
        // bounds.
        if (endDate.getMonth() > startDate.getMonth() + 1) {
            endDate.setMonth(endDate.getMonth(), 0);
        }
        return endDate;
    };
    return PayrollController;
})();
/**
 * @file
 * Date picker controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */
/**
 * Payroll controller.
 */
var DatePickerController = (function () {
    /**
     * {@inheritdoc}
     */
    function DatePickerController($scope) {
        this.$scope = $scope;
        /**
         * Date picker configuration for Angular-Bootstrap bridge.
         *
         * @type angular.ui.bootstrap.IDatepickerConfig
         */
        this.options = {
            formatYear: 'yy',
            startingDay: 1,
        };
        /**
         * Open the date picker.
         *
         * @param object $event
         *   HTML Dom event.
         */
        this.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.isOpen = true;
        };
        /**
         * Close the date picker.
         *
         * @param object $event
         *   HTML Dom event.
         */
        this.close = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.isOpen = false;
        };
        this.setUp();
    }
    /**
     * Set up the date picker and scope variables.
     */
    DatePickerController.prototype.setUp = function () {
        var $scope = this.$scope;
        $scope.options = this.options;
        $scope.open = this.open;
        $scope.close = this.close;
    };
    return DatePickerController;
})();
/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
/// <reference path="Controllers/PayrollController.ts" />
/// <reference path="Controllers/DatePickerController.ts" />
// Define the Angular module for our application.
var app = angular.module("app", ["ui.bootstrap"]);
app.controller("PayrollController", ["$scope", PayrollController]);
app.controller("DatePickerController", ["$scope", DatePickerController]);
//# sourceMappingURL=app.js.map