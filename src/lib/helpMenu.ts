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
				program.version('gopack v0.0.1', '-v, --version', 'show version cli app')
				program.addHelpText('beforeAll', `${asciiText} \n`)
				program.parse(process.argv)
			}
		}
	)
}
