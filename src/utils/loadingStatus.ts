import fs from 'fs'
import path from 'path'

export const writeLoadingStatus = (loadingStatus = undefined): void => {
	if (process.platform === 'win32') {
		fs.accessSync(path.resolve(process.env.TMP))
		const filePath = `${process.env.TMP}/`
		fs.writeFileSync(path.resolve(filePath, 'loading.txt'), `${loadingStatus === undefined ? 'false' : loadingStatus}`, { encoding: 'utf8' })
	} else {
		const filePath = '/tmp'
		fs.writeFileSync(path.resolve(filePath, 'loading.txt'), `${loadingStatus === undefined ? 'false' : loadingStatus}`, { encoding: 'utf8' })
	}
}

export const readLoadingStatus = (): string => {
	if (process.platform === 'win32') {
		fs.accessSync(path.resolve(process.env.TMP))
		const filePath = `${process.env.TMP}/`
		const readFile = fs.readFileSync(path.resolve(filePath, 'loading.txt'), { encoding: 'utf-8' })
		return readFile
	} else {
		const filePath = '/tmp'
		const readFile = fs.readFileSync(path.resolve(filePath, 'loading.txt'), { encoding: 'utf-8' })
		return readFile
	}
}
