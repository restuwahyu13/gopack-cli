import { prompt } from 'inquirer'
import cleanup from 'clear'
import question from './question'
import choice from './choice'
import Gopack from './gopack'
import { writeData } from '../utils/fileSystem'

export default (program: Record<string, any>): void => {
	let gopack = new Gopack()
	program
		.command('search')
		.description('search go package library')
		.action(() => {
			cleanup()
			question(prompt, (answer1) => {
				choice(prompt, answer1, async (data1, response1) => {
					if (data1.confirms === true) {
						cleanup()
						writeData('.gopackrc', response1)
						question(prompt, (answer2) => {
							choice(prompt, answer2, async (data2, response2) => {
								if (data2.confirms === true) {
									cleanup()
									console.log('response2 if', response2)
									writeData('.gopackrc', response2)
									question(prompt, (answer3) => {
										choice(prompt, answer3, async (data3, response3) => {
											if (data3.confirms === true) {
												cleanup()
												writeData('.gopackrc', response3)
												question(prompt, (answer4) => {
													choice(prompt, answer4, async (data4, response4) => {
														if (data4.confirms === true) {
															cleanup()
															writeData('.gopackrc', response4)
															question(prompt, (answer5) => {
																choice(prompt, answer5, async (data5, response5) => {
																	if (data5.confirms === true) {
																		cleanup()
																		writeData('.gopackrc', response5)
																		question(prompt, (answer6) => {
																			choice(prompt, answer6, async (data6, response6) => {
																				if (data6.confirms === true) {
																					cleanup()
																					writeData('.gopackrc', response6)
																					question(prompt, (answer7) => {
																						choice(prompt, answer7, async (data7, response7) => {
																							if (data7.confirms === true) {
																								cleanup()
																								writeData('.gopackrc', response7)
																								question(prompt, (answer8) => {
																									choice(prompt, answer8, async (data8, response8) => {
																										if (data8.confirms === true) {
																											cleanup()
																											writeData('.gopackrc', response8)
																											question(prompt, (answer9) => {
																												choice(prompt, answer9, async (data9, response9) => {
																													if (data9.confirms === true) {
																														cleanup()
																														writeData('.gopackrc', response9)
																														question(prompt, (answer10) => {
																															choice(prompt, answer10, async (data10, response10) => {
																																if (data10.confirms === true) {
																																	cleanup()
																																	writeData('.gopackrc', response10)
																																	question(prompt, (answer11) => {
																																		choice(prompt, answer11, async (data11, response11) => {
																																			if (data11.confirms === true) {
																																				cleanup()
																																				writeData('.gopackrc', response11)
																																				question(prompt, (answer11) => {
																																					choice(prompt, answer11, async (data12, response12) => {
																																						if (data12.confirms === true) {
																																							cleanup()
																																							writeData('.gopackrc', response12)
																																							question(prompt, (answer11) => {
																																								choice(prompt, answer11, async (data13, response13) => {
																																									if (data13.confirms === true) {
																																										cleanup()
																																										writeData('.gopackrc', response9)
																																										question(prompt, (answer14) => {
																																											choice(prompt, answer14, async (data14, response14) => {
																																												if (data14.confirms === true) {
																																													cleanup()
																																													writeData('.gopackrc', response14)
																																													question(prompt, (answer15) => {
																																														choice(prompt, answer15, async (_, response15) => {
																																															writeData('.gopackrc', response15)
																																															gopack.checkGomod()
																																															gopack.checkGolangPackage()
																																														})
																																													})
																																												} else {
																																													writeData('.gopackrc', response14)
																																													gopack.checkGomod()
																																													gopack.checkGolangPackage()
																																												}
																																											})
																																										})
																																									} else {
																																										writeData('.gopackrc', response13)
																																										gopack.checkGomod()
																																										gopack.checkGolangPackage()
																																									}
																																								})
																																							})
																																						} else {
																																							writeData('.gopackrc', response12)
																																							gopack.checkGomod()
																																							gopack.checkGolangPackage()
																																						}
																																					})
																																				})
																																			} else {
																																				writeData('.gopackrc', response11)
																																				gopack.checkGomod()
																																				gopack.checkGolangPackage()
																																			}
																																		})
																																	})
																																} else {
																																	writeData('.gopackrc', response10)
																																	gopack.checkGomod()
																																	gopack.checkGolangPackage()
																																}
																															})
																														})
																													} else {
																														writeData('.gopackrc', response9)
																														gopack.checkGomod()
																														gopack.checkGolangPackage()
																													}
																												})
																											})
																										} else {
																											writeData('.gopackrc', response8)
																											gopack.checkGomod()
																											gopack.checkGolangPackage()
																										}
																									})
																								})
																							} else {
																								writeData('.gopackrc', response7)
																								gopack.checkGomod()
																								gopack.checkGolangPackage()
																							}
																						})
																					})
																				} else {
																					writeData('.gopackrc', response6)
																					gopack.checkGomod()
																					gopack.checkGolangPackage()
																				}
																			})
																		})
																	} else {
																		writeData('.gopackrc', response5)
																		gopack.checkGomod()
																		gopack.checkGolangPackage()
																	}
																})
															})
														} else {
															writeData('.gopackrc', response4)
															gopack.checkGomod()
															gopack.checkGolangPackage()
														}
													})
												})
											} else {
												writeData('.gopackrc', response3)
												gopack.checkGomod()
												gopack.checkGolangPackage()
											}
										})
									})
								} else {
									writeData('.gopackrc', response2)
									gopack.checkGomod()
									gopack.checkGolangPackage()
								}
							})
						})
					} else {
						writeData('.gopackrc', response1)
						gopack.checkGomod()
						gopack.checkGolangPackage()
					}
				})
			})
		})
}
