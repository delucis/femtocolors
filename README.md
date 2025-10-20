# femtocolors

A tiny, zero-dependency library for styling terminal text in Node.js.

- 130 bytes, total install size <2 KB
- Convenient chaining API
- Respects `NO_COLOR`
- Fully typed
- Supports [all Node.js `styleText()` styles](https://nodejs.org/api/util.html#modifiers)
- Node.js ≥20 only (for other runtimes, see [picocolors](https://www.npm.im/picocolors))

## Usage

```js
import fmt from 'femtocolors';

// Apply styles by chaining properties
const success = fmt.green('Success!');
const error = fmt.black.bgRed('Error');
const link = fmt.blue.underline('https://example.com');

// You can also reuse a formatter
const errorStyle = fmt.red.bold;
errorStyle('Error 1');
errorStyle('Error 2');
```

## License

MIT License © Copyright (c) 2025 Chris Swithinbank
