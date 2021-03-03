function safelyParseJSON(string: string) {
	try {
		return JSON.parse(string);
	} catch (e) {
		return null;
	}
}

export { safelyParseJSON };
