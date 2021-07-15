import axios from 'axios'
import consola from 'consola'
import chalk from 'chalk'
import cleanup from 'clear'

export default async (prompt: any, answer: Record<string, any>, callback: any): Promise<void> => {
	try {
		const res = await axios.get('https://api.godoc.org/search?q=' + answer.package.toLowerCase())
		const newResponse = res.data.results.slice(0, answer.limit).map((val: Record<string, any>): Record<string, any> => {
			return { name: val.path }
		})
		cleanup()
		prompt({
			choices: newResponse,
			type: 'checkbox',
			name: 'name',
			message: 'Choice to install go package name ?'
		}).then((answer: Record<string, any>) => {
			let packages = answer.name
			prompt({
				type: 'confirm',
				name: 'confirms',
				message: 'You want to install another package ?'
			}).then((answer: Record<string, any>) => callback(answer, packages))
		})
	} catch (err) {
		consola.error(chalk.bold.white('go package unavailable'))
		process.exit(0)
	}
}
