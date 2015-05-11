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
        var $scope = this.$scope;
        $scope.$watch("startDate", function (startDate, oldValue) {
            if (startDate) {
                var endDate = new Date(startDate.getTime());
                endDate.setMonth(startDate.getMonth() + 1);
                // Reset to the last day of the month for circumstances in which the end day is over the next months
                // bounds.
                if (endDate.getMonth() > startDate.getMonth() + 1) {
                    endDate.setMonth(endDate.getMonth(), 0);
                }
                $scope.endDate = endDate;
            }
        });
        $scope.$watch("endDate", function (newValue, oldValue) {
            console.log(newValue);
        });
    };
    PayrollController.prototype.getDefaultEndDate = function (startDate) {
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
var KittenController = (function () {
    function KittenController($scope, debounce) {
        this.$scope = $scope;
        this.debounce = debounce;
        // Public properties we'll bind to in the UI
        this.width = 400;
        this.height = 300;
        this.watchForSizeChanges();
    }
    KittenController.prototype.watchForSizeChanges = function () {
        var _this = this;
        // Use the debounce service to avoid spaming placekitten.com
        // with lots of requests at once.
        var delayMilliseconds = 250;
        var updateImageUrl = this.debounce(function () { return _this.updateImageUrl(); }, delayMilliseconds);
        this.$scope.$watch(
        // When width or height changes
        function () { return [_this.width, _this.height]; }, updateImageUrl, true);
    };
    KittenController.prototype.updateImageUrl = function () {
        var _this = this;
        var url = this.getImageUrl();
        if (!url)
            return false;
        this.status = "Loading image...";
        // Pre-load the image before trying to display it.
        var image = new Image();
        image.onload = function () {
            // This callback is invoked from outside of Angular.
            // Use $apply to get back into Angular's digest loop.
            _this.$scope.$apply(function () {
                _this.imageUrl = url;
                _this.status = "";
            });
        };
        image.onerror = function () {
            _this.$scope.$apply(function () { return _this.status = "Error loading image"; });
        };
        image.src = url;
    };
    KittenController.prototype.getImageUrl = function () {
        if (this.width > 0 && this.height > 0) {
            return "http://placekitten.com/" + this.width + "/" + this.height;
        }
        else {
            return null;
        }
    };
    return KittenController;
})();
function debounceFactory($timeout) {
    return function (func, threshold, execAsap) {
        var timeoutId;
        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeoutId = null;
            }
            ;
            if (timeoutId) {
                $timeout.cancel(timeoutId);
            }
            else if (execAsap) {
                func.apply(obj, args);
            }
            timeoutId = $timeout(delayed, threshold);
        };
    };
}
// Define the Angular module for our application.
var app = angular.module("app", ["ui.bootstrap"]);
// Define controllers used in the app.
app.controller("KittenController", ["$scope", "debounce", KittenController]);
app.factory("debounce", ["$timeout", debounceFactory]);
app.controller("PayrollController", ["$scope", PayrollController]);
app.controller("DatePickerController", ["$scope", DatePickerController]);
//# sourceMappingURL=app.js.map