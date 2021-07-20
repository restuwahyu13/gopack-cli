import fs from 'fs'
import path from 'path'
import { writeData, readData, deleteData } from '../src/utils/fileSystem'
import choice from '../src/lib/choice'
import choiceBack from '../src/lib/choiceBack'
import helpMenu from '../src/lib/helpMenu'
import question from '../src/lib/question'
import searchPackage from '../src/lib/searchPackage'
import Gopack from '../src'
import { detectKeyboard } from '../src/utils/detectKeyboard'

jest.mock('../src/index.ts')

describe('Gopack Testing Group', function () {
	let gopack: any

	beforeAll(function () {
		writeData('.gopack', ['gopack'])
		gopack = new Gopack()
	})

	afterAll(function () {
		deleteData('.gopack')
	})

	it('Should be created file success', function () {
		const fileExist = fs.existsSync(path.resolve('/tmp', '.gopack'))
		expect(fileExist).toBeTruthy()
	})

	it('Should be read file success', function () {
		const readFile = readData('.gopack')
		expect(readFile).toBeInstanceOf(Array)
		expect(readFile).toEqual(['gopack'])
	})

	it('Should be delete file success', function () {
		deleteData('.gopack')
		const fileExist = fs.existsSync(path.resolve('/tmp', '.gopack'))
		expect(fileExist).toBeFalsy()
	})

	it('Should be choice is defined', function () {
		expect(choice).toBeDefined()
		expect(choice).toBeInstanceOf(Function)
	})

	it('Should be choiceBack is defined', function () {
		expect(choiceBack).toBeDefined()
		expect(choiceBack).toBeInstanceOf(Function)
	})

	it('Should be helpMenu is defined', function () {
		expect(helpMenu).toBeDefined()
		expect(helpMenu).toBeInstanceOf(Function)
	})

	it('Should be question is defined', function () {
		expect(question).toBeDefined()
		expect(question).toBeInstanceOf(Function)
	})

	it('Should be searchPackage is defined', function () {
		expect(searchPackage).toBeDefined()
		expect(searchPackage).toBeInstanceOf(Function)
	})

	it('Shoul be detectKeyboard is defined', function () {
		expect(detectKeyboard).toBeDefined()
	})

	it('Shoul be gopack all method is defined', function () {
		expect(gopack.loadingSpinner).toBeDefined()
		expect(gopack.checkGomod).toBeDefined()
		expect(gopack.checkGolangPackageNotDownload).toBeDefined()
		expect(gopack.downloadGolangPackage).toBeDefined()
		expect(gopack.installedGolangPackage).toBeDefined()
		expect(gopack.progressBarDownload).toBeDefined()
		expect(gopack.updateProgressBarDownload).toBeDefined()
	})

	it('Shoul be gopack all method is mock function', function () {
		expect(jest.isMockFunction(gopack.loadingSpinner)).toBeTruthy()
		expect(jest.isMockFunction(gopack.checkGomod)).toBeTruthy()
		expect(jest.isMockFunction(gopack.checkGolangPackageNotDownload)).toBeTruthy()
		expect(jest.isMockFunction(gopack.downloadGolangPackage)).toBeTruthy()
		expect(jest.isMockFunction(gopack.installedGolangPackage)).toBeTruthy()
		expect(jest.isMockFunction(gopack.progressBarDownload)).toBeTruthy()
		expect(jest.isMockFunction(gopack.updateProgressBarDownload)).toBeTruthy()
	})

	it('Shoul be gopack all method is instance of function', function () {
		expect(gopack.loadingSpinner).toBeInstanceOf(Function)
		expect(gopack.checkGomod).toBeInstanceOf(Function)
		expect(gopack.checkGolangPackageNotDownload).toBeInstanceOf(Function)
		expect(gopack.downloadGolangPackage).toBeInstanceOf(Function)
		expect(gopack.installedGolangPackage).toBeInstanceOf(Function)
		expect(gopack.progressBarDownload).toBeInstanceOf(Function)
		expect(gopack.updateProgressBarDownload).toBeInstanceOf(Function)
	})

	it('Shoul be gopack instance of object', function () {
		expect(gopack).toBeInstanceOf(Object)
	})

	it('Shoul be gopack all method is called', function () {
		gopack.loadingSpinner()
		gopack.checkGomod()
		gopack.checkGolangPackageNotDownload()
		gopack.downloadGolangPackage()
		gopack.installedGolangPackage()
		gopack.progressBarDownload()
		gopack.updateProgressBarDownload()

		expect(gopack.loadingSpinner).toBeCalledTimes(1)
		expect(gopack.checkGomod).toBeCalledTimes(1)
		expect(gopack.checkGolangPackageNotDownload).toBeCalledTimes(1)
		expect(gopack.downloadGolangPackage).toBeCalledTimes(1)
		expect(gopack.installedGolangPackage).toBeCalledTimes(1)
		expect(gopack.progressBarDownload).toBeCalledTimes(1)
		expect(gopack.updateProgressBarDownload).toBeCalledTimes(1)
	})

	it('Shoul be gopack all method is returning value', function () {
		gopack.loadingSpinner.mockReturnValue(true)
		gopack.checkGomod.mockReturnValue(true)
		gopack.checkGolangPackageNotDownload.mockReturnValue(true)
		gopack.downloadGolangPackage.mockReturnValue(true)
		gopack.installedGolangPackage.mockReturnValue(true)
		gopack.progressBarDownload.mockReturnValue(true)
		gopack.updateProgressBarDownload.mockReturnValue(true)

		expect(gopack.loadingSpinner()).toEqual(true)
		expect(gopack.checkGomod()).toEqual(true)
		expect(gopack.checkGolangPackageNotDownload()).toEqual(true)
		expect(gopack.downloadGolangPackage()).toEqual(true)
		expect(gopack.installedGolangPackage()).toEqual(true)
		expect(gopack.progressBarDownload()).toEqual(true)
		expect(gopack.updateProgressBarDownload()).toEqual(true)
	})
})
