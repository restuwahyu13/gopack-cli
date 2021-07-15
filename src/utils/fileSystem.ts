import fs from 'fs'
import path from 'path'

function tempStorageWindows(nameFile: string, data: string): string[] {
	fs.accessSync(path.resolve(process.env.TMP))
	let filePath = `${process.env.TMP}/`
	const fileExist = fs.existsSync(path.resolve(filePath, `${nameFile}`))

	if (!fileExist) {
		fs.writeFileSync(path.resolve(filePath, `${nameFile}`), `${data.trim()}`, { encoding: 'utf8' })
		const toArray = fs.readFileSync(path.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ')
		return Array.from(
			new Set([
				...toArray
					.map((val) => val.trim().replace(/[\s]/gi, ','))
					.join('')
					.trim()
					.split(',')
			])
		)
	} else {
		fs.appendFileSync(path.resolve(filePath, `${nameFile}`), `\n${data.trim()}`, { encoding: 'utf-8' })
		const toArray = fs.readFileSync(path.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ')
		return Array.from(
			new Set([
				...toArray
					.map((val) => val.trim().replace(/[\s]/gi, ','))
					.join('')
					.trim()
					.split(',')
			])
		)
	}
}

function tempStorageLinux(nameFile: string, data: string): string[] {
	let filePath = '/tmp'
	const fileExist = fs.existsSync(path.resolve(filePath, `${nameFile}`))

	if (!fileExist) {
		fs.writeFileSync(path.resolve(filePath, `${nameFile}`), `${data.trim()}`, { encoding: 'utf8' })
		const toArray = fs.readFileSync(path.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ')
		return Array.from(
			new Set([
				...toArray
					.map((val) => val.trim().replace(/[\s]/gi, ','))
					.join('')
					.trim()
					.split(',')
			])
		)
	} else {
		fs.appendFileSync(path.resolve(filePath, `${nameFile}`), `\n${data.trim()}`, { encoding: 'utf-8' })
		const toArray = fs.readFileSync(path.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ')
		return Array.from(
			new Set([
				...toArray
					.map((val) => val.trim().replace(/[\s]/gi, ','))
					.join('')
					.trim()
					.split(',')
			])
		)
	}
}

export const writeData = (nameFile: string, data: string[]): string[] => {
	if (process.platform === 'win32') {
		return tempStorageWindows(nameFile, data.join('\n'))
	} else {
		return tempStorageLinux(nameFile, data.join('\n'))
	}
}

export const readData = (): string[] => {
	if (process.platform === 'win32') {
		fs.accessSync(path.resolve(process.env.TMP))
		const filePath = `${process.env.TMP}/`
		const toArray = fs.readFileSync(path.resolve(filePath, 'gopack.txt'), { encoding: 'utf-8' }).split(' ')
		return Array.from(
			new Set([
				...toArray
					.map((val) => val.trim().replace(/[\s]/gi, ','))
					.join('')
					.trim()
					.split(',')
			])
		)
	} else {
		const filePath = '/tmp'
		const toArray = fs.readFileSync(path.resolve(filePath, 'gopack.txt'), { encoding: 'utf-8' }).split(' ')
		return Array.from(
			new Set([
				...toArray
					.map((val) => val.trim().replace(/[\s]/gi, ','))
					.join('')
					.trim()
					.split(',')
			])
		)
	}
}

export const deleteData = (): void => {
	if (process.platform === 'win32') {
		fs.accessSync(path.resolve(process.env.TMP))
		const filePath = `${process.env.TMP}/`
		fs.unlinkSync(path.resolve(filePath, 'gopack.txt'))
	} else {
		const filePath = '/tmp'
		fs.unlinkSync(path.resolve(filePath, 'gopack.txt'))
	}
}
