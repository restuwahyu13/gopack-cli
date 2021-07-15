import { Spinner } from 'cli-spinner'

export default (prompt: any, callback: any): void => {
	prompt([
		{
			type: 'input',
			name: 'package',
			message: 'Search go package name ?',
			validate: function (input: string) {
				let done = this.async()
				setTimeout(function () {
					const validate = /^[a-zA-Z]$/gi.test(input)
					if (!validate) {
						done('go package name must be string format')
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
					const validate = /[\d]/gi.test(input)
					if (!validate) {
						done('limit must be number format')
						return
					}
					done(null, true)
				}, 2000)
			}
		}
	]).then((answer: Record<string, any>) => {
		let spinner = new Spinner('Processing... %s')
		spinner.setSpinnerString('|/-\\')
		spinner.start()
		setTimeout(() => {
			callback(answer)
			spinner.stop()
		}, 10000)
	})
}
