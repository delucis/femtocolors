import { styleText } from 'node:util';

type NonArray<T> = T extends any[] ? never : T;
type Styles = NonArray<Parameters<typeof styleText>[0]>;
type Formatter = { [key in Styles]: Formatter } & ((string: string) => string);

const createFormatter = (styles: Styles[] = []): Formatter =>
	new Proxy((string: string) => styleText(styles, string), {
		get: (_, style: Styles) => createFormatter([...styles, style]),
	}) as Formatter;

export default createFormatter();
