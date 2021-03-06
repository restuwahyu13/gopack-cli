/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { deleteData, existData } from './fileSystem'

export const detectKeyboard = (): void => {
	process.openStdin().on('keypress', function (_, key: Record<string, any>) {
		if (existData('.gopack') !== false) {
			if (key && key.name === 'c' && key.ctrl) {
				deleteData('.gopack')
				process.exit(0)
			}
		}
	})
}
