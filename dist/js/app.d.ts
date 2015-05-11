/// <reference path="../../src/ts/typings/angularjs/angular.d.ts" />
/// <reference path="../../src/ts/typings/jquery/jquery.d.ts" />
/// <reference path="../../src/ts/typings/angular-ui-bootstrap/angular-ui-bootstrap.d.ts" />
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
declare class PayrollController {
    private $scope;
    constructor($scope: PayrollControllerScope);
    private setUp();
    private setUpDateWatcher();
    private getDefaultEndDate(startDate);
}
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
declare class DatePickerController {
    private $scope;
    /**
     * Date picker configuration for Angular-Bootstrap bridge.
     *
     * @type angular.ui.bootstrap.IDatepickerConfig
     */
    options: angular.ui.bootstrap.IDatepickerConfig;
    /**
     * {@inheritdoc}
     */
    constructor($scope: DatePickerControllerScope);
    /**
     * Set up the date picker and scope variables.
     */
    private setUp();
    /**
     * Open the date picker.
     *
     * @param object $event
     *   HTML Dom event.
     */
    open: ($event: any) => void;
    /**
     * Close the date picker.
     *
     * @param object $event
     *   HTML Dom event.
     */
    close: ($event: any) => void;
}
declare class KittenController {
    private $scope;
    private debounce;
    constructor($scope: ng.IScope, debounce: IDebounce);
    width: number;
    height: number;
    status: string;
    imageUrl: string;
    private watchForSizeChanges();
    private updateImageUrl();
    private getImageUrl();
}
declare function debounceFactory($timeout: ng.ITimeoutService): IDebounce;
interface IDebounce {
    (func: Function, threshold: number, execAsap?: boolean): () => void;
}
declare var app: ng.IModule;
