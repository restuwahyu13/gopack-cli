/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { prompt } from 'inquirer'
import consola from 'consola'
import chalk from 'chalk'
import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import notifier from 'node-notifier'
import { clearScreen } from '../utils/clearSchreen'
import { existData } from '../utils/fileSystem'

export default (program: Record<string, any>): void => {
	if (!existData('gocheck.txt')) {
		program
			.command('init')
			.description('initializing go module')
			.action(function () {
				clearScreen()
				prompt({
					type: 'input',
					name: 'moduleName',
					message: 'Initializing go module name ?'
				}).then((input: Record<string, any>) => {
					if (!fs.existsSync(path.resolve(__dirname, 'go.mod'))) {
						shell.exec(`go mod init ${input.moduleName}`, { silent: true })
						consola.success(chalk.bold.white('Initializing go module success'))
						process.exit(0)
					} else {
						clearScreen()
						notifier.notify({
							title: 'Gopack CLI Notification',
							message: 'Initializing go module error',
							sound: true,
							wait: true,
							timeout: 7
						})
						process.exit(0)
					}
				})
			})
	}
}
