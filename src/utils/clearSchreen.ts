import cleanup from 'clear'

export const clearScreen = (): void => {
	if (process.platform === 'win32') {
		console.clear()
	} else {
		cleanup()
	}
}
