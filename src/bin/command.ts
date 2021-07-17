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
;(async function (): Promise<void> {
	detectKeyboard()
	initializeModule(program)
	searchPackage(program)
	helpMenu(program)
})()
