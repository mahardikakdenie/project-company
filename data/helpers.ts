export const scrollToElement = (hash: string): void => {
	const targetElement = document.querySelector(hash);

	if (targetElement) {
		targetElement.scrollIntoView({
			behavior: 'smooth',
		});
	}
};
