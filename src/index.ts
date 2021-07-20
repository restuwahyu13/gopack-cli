/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import shell from 'shelljs'
import consola from 'consola'
import chalk from 'chalk'
import cliProgress from 'cli-progress'
import path from 'path'
import fs from 'fs'
import colors from 'colors'
import { Spinner } from 'cli-spinner'
import { clearScreen } from './utils/clearSchreen'
import { readData, deleteData, writeData } from './utils/fileSystem'
import { throwError } from './utils/customError'

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

	checkGomod(): boolean | any {
		let checkGomodFile = fs.existsSync(path.resolve(process.cwd(), 'go.mod'))
		if (!checkGomodFile) {
			clearScreen()
			throw throwError({ message: 'Installed go package error' })
		}
		return true
	}

	checkGolangPackageNotDownload(): boolean | any {
		const checkGoPackage = shell.exec('go version', { silent: true }).code
		if (checkGoPackage !== 0) {
			writeData('gocheck.txt', ['false'])
			deleteData('gocheck.txt')
			throw throwError({ message: 'Go runtime installed required' })
		} else {
			return true
		}
	}

	downloadGolangPackage(): void {
		const checkGoPackage = shell.exec('go version', { silent: true }).code
		console.log('downloadGolangPackage', checkGoPackage)
		if (checkGoPackage === 0) {
			this.progressBarDownload()
			this.updateProgressBarDownload()
		}
	}

	installedGolangPackage(): void {
		const packages = readData('.gopack')
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
			}
		}, 100)

		this.handlerLoading = setInterval(() => {
			this.percentage += 1
			if (this.increment >= 100 && this.percentage >= 130) {
				clearInterval(this.handlerLoading)
				this.loadingSpinner()
				setTimeout(() => {
					this.spinner.stop()
					this.installedGolangPackage()
				}, 1400)
				setTimeout(() => {
					clearScreen()
					deleteData('.gopack')
					consola.success(chalk.bold.white('Installed go package success'))
					process.exit(0)
				}, 1600)
			}
		}, 100)
	}
}
