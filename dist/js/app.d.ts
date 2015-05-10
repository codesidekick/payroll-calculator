/// <reference path="../../src/ts/typings/angularjs/angular.d.ts" />
/// <reference path="../../src/ts/typings/jquery/jquery.d.ts" />
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
