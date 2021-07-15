import { prompt } from 'inquirer'
import consola from 'consola'
import chalk from 'chalk'
import shell from 'shelljs'
import fs from 'fs'
import path from 'path'
import cleanup from 'clear'

export default (program: Record<string, any>): void => {
	program
		.command('init')
		.description('initializing go module')
		.action(function () {
			cleanup()
			prompt({
				type: 'input',
				name: 'moduleName',
				message: 'Initializing go module name ?',
				validate: function (input: string): any {
					let done = this.async()
					setTimeout(function () {
						const validate = /[a-zA-Z]/gi.test(input)
						if (!validate) {
							done('Input value must be string format')
							return
						}
						done(null, true)
					}, 2000)
				}
			}).then((input: Record<string, any>) => {
				if (!fs.existsSync(path.resolve(__dirname, 'go.mod'))) {
					shell.exec(`go mod init ${input.moduleName}`, { silent: true })
					consola.success(chalk.bold.white('Initializing go module success'))
					process.exit(0)
				} else {
					consola.error(chalk.bold.white('Initializing go module failed'))
					process.exit(0)
				}
			})
		})
}
