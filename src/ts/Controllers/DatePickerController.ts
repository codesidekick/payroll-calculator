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
    close?: Function;
    isOpen?: boolean;
    date: Date;
}

/**
 * Payroll controller.
 */
class DatePickerController {

    /**
     * Date picker configuration for Angular-Bootstrap bridge.
     *
     * @type angular.ui.bootstrap.IDatepickerConfig
     */
    options: angular.ui.bootstrap.IDatepickerConfig = {
        formatYear: 'yy',
        startingDay: 1,
    }

    /**
     * {@inheritdoc}
     */
    constructor(private $scope:DatePickerControllerScope) {
        this.setUp();
    }

    /**
     * Set up the date picker and scope variables.
     */
    private setUp() {
        var $scope:DatePickerControllerScope = this.$scope;

        $scope.options = this.options;
        $scope.open = this.open;
        $scope.close = this.close;
    }

    /**
     * Open the date picker.
     *
     * @param object $event
     *   HTML Dom event.
     */
    public open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        this.isOpen = true;
    }

    /**
     * Close the date picker.
     *
     * @param object $event
     *   HTML Dom event.
     */
    public close = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        this.isOpen = false;
    }
}