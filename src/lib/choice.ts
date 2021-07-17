/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import axios from 'axios'
import consola from 'consola'
import chalk from 'chalk'
import cleanup from 'clear'
import { deleteData, readData } from '../utils/fileSystem'
import choiceBack from './choiceBack'
import Gopack from '../'

export default async (prompt: any, answer: Record<string, any>, callback: any): Promise<void> => {
	let gopack = new Gopack()
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
		if (readData().length > 0) {
			choiceBack(prompt, (answer) => {
				if (answer.confirms === true) {
					cleanup()
					gopack.checkGomod()
					gopack.checkGolangPackage()
				} else {
					cleanup()
					deleteData()
					consola.error(chalk.bold.white('Installed go package rejected'))
					process.exit(0)
				}
			})
		} else {
			cleanup()
			deleteData()
			consola.error(chalk.bold.white('go package unavailable'))
			process.exit(0)
		}
	}
}
