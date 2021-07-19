/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import cleanup from 'clear'
import notifier from 'node-notifier'

export default async (prompt: any, callback: any): Promise<void> => {
	cleanup()
	notifier.notify(
		{
			title: 'Gopack CLI Notification',
			message: 'Go package unavailable',
			sound: true,
			wait: true,
			timeout: 6
		},
		function (error, response, metadata) {
			if (!error) {
				setTimeout(() => {
					cleanup()
					prompt({
						type: 'confirm',
						name: 'confirms',
						message: 'You want to install package you have selected ?'
					}).then((answer: Record<string, any>) => callback(answer))
				}, 2000)
			}
		}
	)
}
