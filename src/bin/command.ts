#!/usr/bin/env node
'use strict'

/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { program } from 'commander'
import initializeModule from '../lib/initModule'
import searchPackage from '../lib/searchPackage'
import helpMenu from '../lib/helpMenu'
import { detectKeyboard } from '../utils/detectKeyboard'
import Gopack from '../'
let gopack = new Gopack()
;(async function (): Promise<void> {
	const checkGolangPackageNotDownload = gopack.checkGolangPackageNotDownload()
	if (checkGolangPackageNotDownload === true) {
		detectKeyboard()
		initializeModule(program)
		searchPackage(program)
		helpMenu(program)
	} else {
		gopack.checkGolangPackageNotDownload()
	}
})()
