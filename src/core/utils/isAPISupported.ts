function isAPISupported(api: string) {
	return api in window;
}

export { isAPISupported };
