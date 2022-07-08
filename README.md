# Issue with package.json type "module"

Example of an issue were `.d.ts` files are not picked up for files that does not contain `.js` extension in the module request specifier when using `"moduleResolution": "node16"` in `tsconfig.json` and `"type": "module"` in `package.json`.


