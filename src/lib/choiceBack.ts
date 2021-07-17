/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import cleanup from 'clear'
import consola from 'consola'
import chalk from 'chalk'

export default async (prompt: any, callback: any): Promise<void> => {
	cleanup()
	consola.info(chalk.bold.white('go package unavailable'))
	setTimeout(() => {
		cleanup()
		prompt({
			type: 'confirm',
			name: 'confirms',
			message: 'You want to install package you have selected ?'
		}).then((answer: Record<string, any>) => callback(answer))
	}, 2000)
}
