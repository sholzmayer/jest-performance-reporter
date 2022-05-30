# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.1.2](https://github.com/sholzmayer/jest-performance-reporter/compare/@jest-performance-reporter/core@2.1.1...@jest-performance-reporter/core@2.1.2) (2022-05-30)


### Bug Fixes

* only sort output but not report files ([a5bdede](https://github.com/sholzmayer/jest-performance-reporter/commit/a5bdede5ea956487620699da1b0d626411cb80b6))





## [2.1.1](https://github.com/sholzmayer/jest-performance-reporter/compare/@jest-performance-reporter/core@2.1.0...@jest-performance-reporter/core@2.1.1) (2022-05-23)


### Bug Fixes

* avoid infinite runs on watch mode ([d25a285](https://github.com/sholzmayer/jest-performance-reporter/commit/d25a28594808ab8f4cf4077806dadd8dea125c0c))





# [2.1.0](https://github.com/sholzmayer/jest-performance-reporter/compare/@jest-performance-reporter/core@2.0.0...@jest-performance-reporter/core@2.1.0) (2022-05-04)


### Features

* add test status (failed | passed) to json report ([2d14af8](https://github.com/sholzmayer/jest-performance-reporter/commit/2d14af8efc78b5063d85247ca00a943d54e3fe72))
* support csv report ([1b9cecb](https://github.com/sholzmayer/jest-performance-reporter/commit/1b9cecb3ba783d8cc767a5bbdbe3012484c15804))





# [2.0.0](https://github.com/sholzmayer/jest-performance-reporter/compare/@jest-performance-reporter/core@1.0.8...@jest-performance-reporter/core@2.0.0) (2022-05-03)


### Features

* allow individual json report file path ([5990e1d](https://github.com/sholzmayer/jest-performance-reporter/commit/5990e1dcf6ce98da4866a8d09c6c8dc2b9e9e387))


### BREAKING CHANGES

* `createReport` was removed in favor of the jsonReportPath
