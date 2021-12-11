# Jest Performance report

## Usage

Configure Jest to process the test results by adding the following entry to the Jest config (jest.config.json) or your package.json:

```json
{
  "reporters": [
    "default",
    [
      "jest-performance-reporterer",
      {
        "pageTitle": "Test Report"
      }
    ]
  ]
}
```

As you run Jest from within the terminal, a file called _performance-report.json_ will be created within your folder.
