import { deleteData } from './fileSystem'

export const detectKeyboard = (): void => {
	process.openStdin().on('keypress', function (_, key: Record<string, any>) {
		if (key && key.name === 'c' && key.ctrl) {
			deleteData()
			process.exit()
		}
	})
}
