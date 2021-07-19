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
import cleanup from 'clear'
import { throwError } from '../utils/customError'

export default (program: Record<string, any>): void => {
	program
		.command('init')
		.description('initializing go module')
		.action(function () {
			cleanup()
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
					cleanup()
					throw throwError({ message: 'Initializing go module error' })
				}
			})
		})
}
