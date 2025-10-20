import { describe, expect, test } from 'vitest';
import fmt from '../src';

describe('femtocolors', () => {
	test('root level call is a no-op', () => {
		expect(fmt('Hello, World!')).toMatchInlineSnapshot(`"Hello, World!"`);
	});

	test('red text includes ANSI codes', () => {
		expect(fmt.red('This is red text.')).toMatchInlineSnapshot(`"[31mThis is red text.[39m"`);
	});

	test('green bold text includes ANSI codes', () => {
		expect(fmt.green.bold('This is bold green text.')).toMatchInlineSnapshot(
			`"[32m[1mThis is bold green text.[22m[39m"`
		);
	});

	test('blue background with white underlined text includes ANSI codes', () => {
		expect(
			fmt.bgBlue.white.underline('This is underlined white text on a blue background.')
		).toMatchInlineSnapshot(`"[44m[37m[4mThis is underlined white text on a blue background.[24m[39m[49m"`);
	});

	test('contradictory styles are handled correctly', () => {
		expect(fmt.red.green('This text should be green.')).toMatchInlineSnapshot(
			`"[31m[32mThis text should be green.[39m[39m"`
		);
	});

	test('reset resets styles', () => {
		expect(fmt.red.bold.reset('This text should have styles reset.')).toMatchInlineSnapshot(
			`"[31m[1m[0mThis text should have styles reset.[0m[22m[39m"`
		);
	});
});
