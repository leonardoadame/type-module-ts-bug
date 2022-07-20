# Issue with package.json type "module"

Example of an issue where `.d.ts` files are not picked up for files that do not contain a `.js` extension in the module request specifier.

This happens when using the following configuration:
- `"moduleResolution": "node16"` in `tsconfig.json`
- `"type": "module"` in `package.json`.


