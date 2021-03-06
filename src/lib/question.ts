/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { Spinner } from 'cli-spinner'
import { existData } from '../utils/fileSystem'

export default (prompt: any, callback: any): void => {
	if (!existData('gocheck.txt')) {
		prompt([
			{
				type: 'input',
				name: 'package',
				message: 'Search go package name ?',
				validate: function (input: string) {
					let done = this.async()
					setTimeout(function () {
						const validate = /^[a-zA-Z.-]+$/gi.test(input.trim())
						if (!validate) {
							done('Go package name must be string format')
							return
						}
						done(null, true)
					}, 2000)
				}
			},
			{
				type: 'input',
				name: 'limit',
				message: 'Limit result go package ?',
				validate: function (input: string) {
					let done = this.async()
					setTimeout(function () {
						const validate = /^[\d.-]+$/gi.test(input)
						if (!validate) {
							done('Limit must be number format')
							return
						}
						done(null, true)
					}, 2000)
				}
			}
		]).then((answer: Record<string, any>) => {
			let increment = 0
			let spinner = new Spinner('Processing... %s')
			spinner.setSpinnerString('|/-\\')
			spinner.start()
			let handlerLoading = setInterval(() => {
				increment += 1
				if (increment >= 50) {
					clearInterval(handlerLoading)
					spinner.stop()
					callback(answer)
				}
			}, 200)
		})
	}
}
