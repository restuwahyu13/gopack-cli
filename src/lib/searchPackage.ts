/**
 * Gopack CLI
 * @author Copyright(c) 2021 by Restu wahyu saputra
 * MIT Licensed
 */

import { prompt } from 'inquirer'
import { clearScreen } from '../utils/clearSchreen'
import question from './question'
import choice from './choice'
import Gopack from '../'
import { writeData, existData } from '../utils/fileSystem'

export default (program: Record<string, any>): void => {
	let gopack = new Gopack()
	if (!existData('gocheck.txt')) {
		program
			.command('search')
			.description('search go package library')
			.action(() => {
				clearScreen()
				question(prompt, (answer1) => {
					choice(prompt, answer1, async (data1, response1) => {
						if (data1.confirms === true) {
							clearScreen()
							writeData('.gopack', response1)
							question(prompt, (answer2) => {
								choice(prompt, answer2, async (data2, response2) => {
									if (data2.confirms === true) {
										clearScreen()
										writeData('.gopack', response2)
										question(prompt, (answer3) => {
											choice(prompt, answer3, async (data3, response3) => {
												if (data3.confirms === true) {
													clearScreen()
													writeData('.gopack', response3)
													question(prompt, (answer4) => {
														choice(prompt, answer4, async (data4, response4) => {
															if (data4.confirms === true) {
																clearScreen()
																writeData('.gopack', response4)
																question(prompt, (answer5) => {
																	choice(prompt, answer5, async (data5, response5) => {
																		if (data5.confirms === true) {
																			clearScreen()
																			writeData('.gopack', response5)
																			question(prompt, (answer6) => {
																				choice(prompt, answer6, async (data6, response6) => {
																					if (data6.confirms === true) {
																						clearScreen()
																						writeData('.gopack', response6)
																						question(prompt, (answer7) => {
																							choice(prompt, answer7, async (data7, response7) => {
																								if (data7.confirms === true) {
																									clearScreen()
																									writeData('.gopack', response7)
																									question(prompt, (answer8) => {
																										choice(prompt, answer8, async (data8, response8) => {
																											if (data8.confirms === true) {
																												clearScreen()
																												writeData('.gopack', response8)
																												question(prompt, (answer9) => {
																													choice(prompt, answer9, async (data9, response9) => {
																														if (data9.confirms === true) {
																															clearScreen()
																															writeData('.gopack', response9)
																															question(prompt, (answer10) => {
																																choice(prompt, answer10, async (data10, response10) => {
																																	if (data10.confirms === true) {
																																		clearScreen()
																																		writeData('.gopack', response10)
																																		question(prompt, (answer11) => {
																																			choice(prompt, answer11, async (data11, response11) => {
																																				if (data11.confirms === true) {
																																					clearScreen()
																																					writeData('.gopack', response11)
																																					question(prompt, (answer11) => {
																																						choice(prompt, answer11, async (data12, response12) => {
																																							if (data12.confirms === true) {
																																								clearScreen()
																																								writeData('.gopack', response12)
																																								question(prompt, (answer11) => {
																																									choice(prompt, answer11, async (data13, response13) => {
																																										if (data13.confirms === true) {
																																											clearScreen()
																																											writeData('.gopack', response9)
																																											question(prompt, (answer14) => {
																																												choice(prompt, answer14, async (data14, response14) => {
																																													if (data14.confirms === true) {
																																														clearScreen()
																																														writeData('.gopack', response14)
																																														question(prompt, (answer15) => {
																																															choice(prompt, answer15, async (_, response15) => {
																																																const res = gopack.checkGomod()
																																																if (res === true) {
																																																	writeData('.gopack', response15)
																																																	gopack.downloadGolangPackage()
																																																} else {
																																																	gopack.checkGomod()
																																																}
																																															})
																																														})
																																													} else {
																																														const res = gopack.checkGomod()
																																														if (res === true) {
																																															writeData('.gopack', response14)
																																															gopack.downloadGolangPackage()
																																														} else {
																																															gopack.checkGomod()
																																														}
																																													}
																																												})
																																											})
																																										} else {
																																											const res = gopack.checkGomod()
																																											if (res === true) {
																																												writeData('.gopack', response13)
																																												gopack.downloadGolangPackage()
																																											} else {
																																												gopack.checkGomod()
																																											}
																																										}
																																									})
																																								})
																																							} else {
																																								const res = gopack.checkGomod()
																																								if (res === true) {
																																									writeData('.gopack', response12)
																																									gopack.downloadGolangPackage()
																																								} else {
																																									gopack.checkGomod()
																																								}
																																							}
																																						})
																																					})
																																				} else {
																																					const res = gopack.checkGomod()
																																					if (res === true) {
																																						writeData('.gopack', response11)
																																						gopack.downloadGolangPackage()
																																					} else {
																																						gopack.checkGomod()
																																					}
																																				}
																																			})
																																		})
																																	} else {
																																		const res = gopack.checkGomod()
																																		if (res === true) {
																																			writeData('.gopack', response10)
																																			gopack.downloadGolangPackage()
																																		} else {
																																			gopack.checkGomod()
																																		}
																																	}
																																})
																															})
																														} else {
																															const res = gopack.checkGomod()
																															if (res === true) {
																																writeData('.gopack', response9)
																																gopack.downloadGolangPackage()
																															} else {
																																gopack.checkGomod()
																															}
																														}
																													})
																												})
																											} else {
																												const res = gopack.checkGomod()
																												if (res === true) {
																													writeData('.gopack', response8)
																													gopack.downloadGolangPackage()
																												} else {
																													gopack.checkGomod()
																												}
																											}
																										})
																									})
																								} else {
																									const res = gopack.checkGomod()
																									if (res === true) {
																										writeData('.gopack', response7)
																										gopack.downloadGolangPackage()
																									} else {
																										gopack.checkGomod()
																									}
																								}
																							})
																						})
																					} else {
																						const res = gopack.checkGomod()
																						if (res === true) {
																							writeData('.gopack', response6)
																							gopack.downloadGolangPackage()
																						} else {
																							gopack.checkGomod()
																						}
																					}
																				})
																			})
																		} else {
																			const res = gopack.checkGomod()
																			if (res === true) {
																				writeData('.gopack', response5)
																				gopack.downloadGolangPackage()
																			} else {
																				gopack.checkGomod()
																			}
																		}
																	})
																})
															} else {
																const res = gopack.checkGomod()
																if (res === true) {
																	writeData('.gopack', response4)
																	gopack.downloadGolangPackage()
																} else {
																	gopack.checkGomod()
																}
															}
														})
													})
												} else {
													const res = gopack.checkGomod()
													if (res === true) {
														writeData('.gopack', response3)
														gopack.downloadGolangPackage()
													} else {
														gopack.checkGomod()
													}
												}
											})
										})
									} else {
										const res = gopack.checkGomod()
										if (res === true) {
											writeData('.gopack', response2)
											gopack.downloadGolangPackage()
										} else {
											gopack.checkGomod()
										}
									}
								})
							})
						} else {
							const res = gopack.checkGomod()
							if (res === true) {
								writeData('.gopack', response1)
								gopack.downloadGolangPackage()
							} else {
								gopack.checkGomod()
							}
						}
					})
				})
			})
	}
}
