# femtocolors

A microscopic, zero-dependency library for styling terminal text in Node.js.

- **Tiny** — 130 bytes, total install size ≤3 KB
- **Zero dependencies** — uses Node.js built-in `styleText()`
- **Chaining API** — quickly combine styles
- **Respects `NO_COLOR`** — automatically detects color support from environment
- **TypeScript support** — fully typed
- **Node.js >=20 only** — for older versions and browsers, see [picocolors](https://www.npmjs.com/package/picocolors)

## Installation

```bash
npm install femtocolors
```

## Usage

```js
import fmt from 'femtocolors';

// Apply styles by chaining properties
const error = fmt.black.bgRed('Error message');
const success = fmt.green.bold.italic('Success!');
const link = fmt.blue.underline('https://example.com');

// You can also reuse a formatter
const linkStyle = fmt.cyan.underline;
console.log(linkStyle('https://example.com'));
console.log(linkStyle('https://another-link.com'));
```

### Available Styles

All Node.js `styleText()` styles are supported. See the [Node.js documentation](https://nodejs.org/api/util.html#modifiers) for the full list.

## License

MIT License © Copyright (c) 2025 Chris Swithinbank
