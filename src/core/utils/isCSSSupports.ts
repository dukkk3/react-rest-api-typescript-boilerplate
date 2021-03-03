function isCSSSupports(propertyName: string | string[], value: string) {
	if (CSS && CSS.supports) {
		return Array.isArray(propertyName)
			? propertyName.every((propertyName) => CSS.supports(propertyName, value))
			: CSS.supports(propertyName, value);
	}

	return false;
}

export { isCSSSupports };
