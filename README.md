# Overview

🧐 Identify slow tests during development

📚 Create json or csv report including the test execution times

```bash
yarn add -DE @jest-performance-reporter/core
```

![Example test run](https://raw.githubusercontent.com/sholzmayer/jest-performance-reporter/c766d041e908170f968a33d0c2b00cabfb111d4f/docs/test-example.png)

# Setup

Configure jest to use this reporter via the jest section in the package.json or your jest config.

```json
{
  "reporters": [
    "default",
    [
      "@jest-performance-reporter/core",
      {
        "errorAfterMs": 1000,
        "warnAfterMs": 500,
        "logLevel": "warn",
        "maxItems": 5,
        "jsonReportPath": "performance-report.json",
        "csvReportPath": "performance-report.csv"
      }
    ]
  ]
}
```

The "default"-reporter creates the default jest output. If you don't need it, of course you can remove it.
