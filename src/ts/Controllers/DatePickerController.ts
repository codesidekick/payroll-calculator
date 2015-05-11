/**
 * @file
 * Date picker controller TypeScript file.
 *
 * Included automatically by app.ts before compilation.
 */

/**
 * Allowed scope for the Angular controller.
 */
interface DatePickerControllerScope extends ng.IScope {
    options?: angular.ui.bootstrap.IDatepickerConfig;
    open?: Function;
    isOpen?: boolean;
}

/**
 * Payroll controller.
 */
class DatePickerController {
    constructor(private $scope:DatePickerControllerScope) {
        this.setUp();
    }

    private setUp() {
        var $scope:DatePickerControllerScope = this.$scope;

        $scope.options = {
            formatYear: 'yy',
            startingDay: 1,
        };

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.isOpen = true;
        };
    }
}