/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import figlet from 'figlet'

export default (program: Record<string, any>): void => {
	figlet(
		'Gopack',
		{
			font: 'Nancyj-Improved',
			width: 100,
			whitespaceBreak: true
		},
		(err: any, asciiText: string) => {
			if (!err) {
				program.version('gopack v0.0.1-beta', '-v, --version', 'show version cli app')
				program.addHelpText('beforeAll', `${asciiText} \n`)
				program.parse(process.argv)
			}
		}
	)
}
