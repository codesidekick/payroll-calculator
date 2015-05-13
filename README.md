# Simple Payroll Calculator

## Synopsis
An experimental angularjs application written with TypeScript to calculate Australian payroll taxes.

## Motivation
A demonstration of the awesomeness of TypeScript working with Angular v1 complete with QUnit tests and a build script
that automatically compiles TypeScript and SASS files as well as runs the full test suite on every source file change.

## Requirements
* NPM
* Grunt
* Bower

## Demo
Visit [http://codesidekick.github.io/payroll-calculator](http://codesidekick.github.io/payroll-calculator) to demo the
app or [http://codesidekick.github.io/payroll-calculator/tests.html](http://codesidekick.github.io/payroll-calculator/tests.html)
to run the tests.

## Demo guide
1. Check out the repository.
2. Visit dist/index.html to access the demonstration.
3. Visit dist/tests.html to see the QUnit tests.

## Development guide
1. Check out the repository.
2. In the root directory run `npm install` to get all the required modules.
3. In the root directory run `grunt` to run the grunt installation routine.
4. In the root directory run `grunt dev` to execute the watchers for compiling SCSS and TypeScript files.
5. Edit the files in the `/src` directory and preview the generated app. Every time the watcher runs, the test suite for
   the app will run and ensure that there are no failures.

## Credits
* Marton Bodonyi (@codesidekick)