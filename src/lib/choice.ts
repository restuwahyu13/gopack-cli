/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import axios from 'axios'
import notifier from 'node-notifier'
import { clearScreen } from '../utils/clearSchreen'
import { deleteData, readData, existData } from '../utils/fileSystem'
import choiceBack from './choiceBack'
import Gopack from '../'

export default async (prompt: any, answer: Record<string, any>, callback: any): Promise<void> => {
	let gopack = new Gopack()
	try {
		const res = await axios.get('https://api.godoc.org/search?q=' + answer.package.toLowerCase())
		const newResponse = res.data.results.slice(0, answer.limit).map((val: Record<string, any>): Record<string, any> => {
			return { name: val.path }
		})
		clearScreen()
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
		if (existData('.gopack')) {
			if (readData('.gopack').length > 0) {
				choiceBack(prompt, (answer) => {
					if (answer.confirms === true) {
						gopack.downloadGolangPackage()
					} else {
						clearScreen()
						deleteData('.gopack')
						notifier.notify({
							title: 'Gopack CLI Notification',
							message: 'Installed go package rejected',
							sound: true,
							wait: true,
							timeout: 7
						})
						process.exit(0)
					}
				})
			} else {
				clearScreen()
				deleteData('.gopack')
				notifier.notify({
					title: 'Gopack CLI Notification',
					message: 'Go package unavailable',
					sound: true,
					wait: true,
					timeout: 7
				})
				process.exit(0)
			}
		} else {
			clearScreen()
			notifier.notify({
				title: 'Gopack CLI Notification',
				message: 'Go package unavailable',
				sound: true,
				wait: true,
				timeout: 7
			})
			process.exit(0)
		}
	}
}
