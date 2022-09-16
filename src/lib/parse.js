
const bn_parse = function (text, options) {
	'use strict';

	const rx =  /:\s*([-+Ee0-9.]+)/g
		,spType = ['string', 'array', 'bigint']; // Type of conversion supported by big number
	const prefix = 'prefixBn-';
	
	// Default options one can override by passing options to the parse()
	const _options = {
		type: 'string',
	}

	if (options !== undefined && options !== null) {

		if (spType.includes(options.type)) {
			_options.type = options.type;
		}
	}

	if (typeof text !== 'string') {
		throw new Error('text must be a string.');
	}

	const error = function (m, i) {
		throw {
			name: 'SyntaxError',
			message: m,
			index: i,
			text,
		}
	}

	const array = function (s) {
		s = s.trim();
		let at = 0,
			ch = s.charAt(at),
			stack = [];
		
		while (ch) {
			stack.push(ch);
			ch = s.charAt(++at);
		}
		return stack;
	}

	const replacer = function (m, p1, p2) {
		const number = +p1;
		if (!isFinite(number)) {
			error('Bad number', p2);
		}

		if (!Number.isSafeInteger(number)) {
			return `: "${prefix + p1}"`;
		}
		return m;
	}

	return JSON.parse(text.replace(rx, replacer), (k, v) => {
		if (!v.startsWith(prefix)) return v;
		const s = v.slice(prefix.length);

	});
}

