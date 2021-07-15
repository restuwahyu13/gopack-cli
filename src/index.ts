import shell from 'shelljs'
import consola from 'consola'
import chalk from 'chalk'
import cliProgress from 'cli-progress'
import colors from 'colors'
import { Spinner } from 'cli-spinner'
import clearScreen from 'clear'
import { readData, deleteData } from './utils/fileSystem'
import path from 'path'
import fs from 'fs'

export default class Gopack {
	increment = 0
	barProgress = undefined
	handler = undefined
	handlerLoading = undefined
	spinner = undefined
	percentage = 0

	loadingSpinner(): void {
		this.spinner = new Spinner('Processing... %s')
		this.spinner.setSpinnerString('|/-\\')
		this.spinner.start()
	}

	checkGomod(): void {
		let checkGomod = fs.existsSync(path.resolve(process.cwd(), 'go.mod'))
		if (!checkGomod) {
			consola.error(chalk.bold.white('Installed go package error'))
			process.exit(0)
		}
	}

	checkGolangPackage(): void {
		const checkGoPackage = shell.exec('go version', { silent: true }).code
		if (checkGoPackage === 0) {
			this.progressBarDownload()
			this.updateProgressBarDownload()
		} else {
			consola.error(chalk.bold.white('go runtime installed required'))
		}
	}

	installedGolangPackage(): void {
		const packages = readData()
		packages.forEach((val) => shell.exec(`go get ${val}`, { silent: true }))
	}

	progressBarDownload(): void {
		this.barProgress = new cliProgress.SingleBar(
			{
				format: `Downloading | [${colors.bold.white('{bar}')}] | Percentage {percentage}% | Times ${colors.bold.white('{duration}')} Ms`,
				hideCursor: true,
				clearOnComplete: true
			},
			cliProgress.Presets.legacy
		)
		this.barProgress.start(100, 0)
	}

	updateProgressBarDownload(): void {
		this.handler = setInterval(() => {
			this.increment += 1
			this.barProgress.update(this.increment)

			if (this.increment >= 100) {
				clearInterval(this.handler)
				this.barProgress.stop()
				this.loadingSpinner()
				setTimeout(() => this.installedGolangPackage(), 1000)
			}
		}, 100)

		this.handlerLoading = setInterval(() => {
			this.percentage += 1
			if (this.percentage >= 200) {
				clearInterval(this.handlerLoading)
				this.loadingSpinner()
				setTimeout(() => {
					this.spinner.stop()
				}, 1400)
				setTimeout(() => {
					clearScreen()
					consola.success(chalk.bold.white('Installed go package success'))
					deleteData()
					process.exit(0)
				}, 1600)
			}
		}, 100)
	}
}
