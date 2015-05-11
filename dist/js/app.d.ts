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
}
/**
 * Payroll controller.
 */
declare class PayrollController {
    private $scope;
    constructor($scope: PayrollControllerScope);
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
    isOpen?: boolean;
}
/**
 * Payroll controller.
 */
declare class DatePickerController {
    private $scope;
    constructor($scope: DatePickerControllerScope);
    private setUp();
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
