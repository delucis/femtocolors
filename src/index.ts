import { styleText } from 'node:util';

type Styles = Exclude<Parameters<typeof styleText>[0], any[]>;
type Formatter = { [k in Styles]: Formatter } & ((str: string) => string);

const createFormatter = (styles: Styles[] = []): Formatter =>
	new Proxy((string: string) => styleText(styles, string), {
		get: (_, style: Styles) => createFormatter([...styles, style]),
	}) as Formatter;

export default createFormatter();
