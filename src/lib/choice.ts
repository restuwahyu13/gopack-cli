/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import axios from 'axios'
import cleanup from 'clear'
import notifier from 'node-notifier'
import { deleteData, readData, existData } from '../utils/fileSystem'
import choiceBack from './choiceBack'
import Gopack from '../'
import { throwError } from '../utils/customError'

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
		if (existData()) {
			if (readData().length > 0) {
				choiceBack(prompt, (answer) => {
					if (answer.confirms === true) {
						gopack.checkGomod()
						gopack.checkGolangPackage()
					} else {
						cleanup()
						deleteData()
						throw throwError({ message: 'Installed go package rejected' })
					}
				})
			} else {
				cleanup()
				deleteData()
				throw throwError({ message: 'Go package unavailable' })
			}
		} else {
			cleanup()
			notifier.notify({
				title: 'Gopack CLI Notification',
				message: 'Go package unavailable',
				sound: true,
				wait: true,
				timeout: 6
			})
		}
	}
}
