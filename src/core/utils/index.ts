export function isAPISupported(api: string) {
	return api in window;
}

export function isCSSSupports(propertyName: string | string[], value: string) {
	if (CSS && CSS.supports) {
		return Array.isArray(propertyName)
			? propertyName.every((propertyName) => CSS.supports(propertyName, value))
			: CSS.supports(propertyName, value);
	}

	return false;
}

export function safelyParseJSON<T extends Record<string, any> | any[]>(string: string) {
	try {
		return JSON.parse(string) as T;
	} catch (e) {
		return null;
	}
}

export function camelCaseToPascalCase(string: string) {
	const [firstLetter, ...rest] = string;
	return `${firstLetter.toUpperCase()}${rest.join("")}`;
}
