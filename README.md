# @ufhealth/stylelint-config-standard

> The shareable stylesheet standard for UF Health web development.

## Key features

- Based on [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)
- SCSS `@rule` support
- Enforces block separation with newlines
- Strict hex color formatting (uppercase, full-length only)

## Installation & usage

```bash
yarn install @ufhealth/stylelint-config-standard
```

In your `.stylelintrc`, `stylelint.config.js` or `package.json#stylelint`:

```json
{
  "extends": "@ufhealth/stylelint-config-standard"
}
```
