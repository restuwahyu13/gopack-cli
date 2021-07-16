"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const clear_1 = __importDefault(require("clear"));
const question_1 = __importDefault(require("./question"));
const choice_1 = __importDefault(require("./choice"));
const gopack_1 = __importDefault(require("./gopack"));
const fileSystem_1 = require("../utils/fileSystem");
exports.default = (program) => {
    let gopack = new gopack_1.default();
    program
        .command('search')
        .description('search go package library')
        .action(() => {
        clear_1.default();
        question_1.default(inquirer_1.prompt, (answer1) => {
            choice_1.default(inquirer_1.prompt, answer1, async (data1, response1) => {
                if (data1.confirms === true) {
                    clear_1.default();
                    fileSystem_1.writeData('.gopackrc', response1);
                    question_1.default(inquirer_1.prompt, (answer2) => {
                        choice_1.default(inquirer_1.prompt, answer2, async (data2, response2) => {
                            if (data2.confirms === true) {
                                clear_1.default();
                                console.log('response2 if', response2);
                                fileSystem_1.writeData('.gopackrc', response2);
                                question_1.default(inquirer_1.prompt, (answer3) => {
                                    choice_1.default(inquirer_1.prompt, answer3, async (data3, response3) => {
                                        if (data3.confirms === true) {
                                            clear_1.default();
                                            fileSystem_1.writeData('.gopackrc', response3);
                                            question_1.default(inquirer_1.prompt, (answer4) => {
                                                choice_1.default(inquirer_1.prompt, answer4, async (data4, response4) => {
                                                    if (data4.confirms === true) {
                                                        clear_1.default();
                                                        fileSystem_1.writeData('.gopackrc', response4);
                                                        question_1.default(inquirer_1.prompt, (answer5) => {
                                                            choice_1.default(inquirer_1.prompt, answer5, async (data5, response5) => {
                                                                if (data5.confirms === true) {
                                                                    clear_1.default();
                                                                    fileSystem_1.writeData('.gopackrc', response5);
                                                                    question_1.default(inquirer_1.prompt, (answer6) => {
                                                                        choice_1.default(inquirer_1.prompt, answer6, async (data6, response6) => {
                                                                            if (data6.confirms === true) {
                                                                                clear_1.default();
                                                                                fileSystem_1.writeData('.gopackrc', response6);
                                                                                question_1.default(inquirer_1.prompt, (answer7) => {
                                                                                    choice_1.default(inquirer_1.prompt, answer7, async (data7, response7) => {
                                                                                        if (data7.confirms === true) {
                                                                                            clear_1.default();
                                                                                            fileSystem_1.writeData('.gopackrc', response7);
                                                                                            question_1.default(inquirer_1.prompt, (answer8) => {
                                                                                                choice_1.default(inquirer_1.prompt, answer8, async (data8, response8) => {
                                                                                                    if (data8.confirms === true) {
                                                                                                        clear_1.default();
                                                                                                        fileSystem_1.writeData('.gopackrc', response8);
                                                                                                        question_1.default(inquirer_1.prompt, (answer9) => {
                                                                                                            choice_1.default(inquirer_1.prompt, answer9, async (data9, response9) => {
                                                                                                                if (data9.confirms === true) {
                                                                                                                    clear_1.default();
                                                                                                                    fileSystem_1.writeData('.gopackrc', response9);
                                                                                                                    question_1.default(inquirer_1.prompt, (answer10) => {
                                                                                                                        choice_1.default(inquirer_1.prompt, answer10, async (data10, response10) => {
                                                                                                                            if (data10.confirms === true) {
                                                                                                                                clear_1.default();
                                                                                                                                fileSystem_1.writeData('.gopackrc', response10);
                                                                                                                                question_1.default(inquirer_1.prompt, (answer11) => {
                                                                                                                                    choice_1.default(inquirer_1.prompt, answer11, async (data11, response11) => {
                                                                                                                                        if (data11.confirms === true) {
                                                                                                                                            clear_1.default();
                                                                                                                                            fileSystem_1.writeData('.gopackrc', response11);
                                                                                                                                            question_1.default(inquirer_1.prompt, (answer11) => {
                                                                                                                                                choice_1.default(inquirer_1.prompt, answer11, async (data12, response12) => {
                                                                                                                                                    if (data12.confirms === true) {
                                                                                                                                                        clear_1.default();
                                                                                                                                                        fileSystem_1.writeData('.gopackrc', response12);
                                                                                                                                                        question_1.default(inquirer_1.prompt, (answer11) => {
                                                                                                                                                            choice_1.default(inquirer_1.prompt, answer11, async (data13, response13) => {
                                                                                                                                                                if (data13.confirms === true) {
                                                                                                                                                                    clear_1.default();
                                                                                                                                                                    fileSystem_1.writeData('.gopackrc', response9);
                                                                                                                                                                    question_1.default(inquirer_1.prompt, (answer14) => {
                                                                                                                                                                        choice_1.default(inquirer_1.prompt, answer14, async (data14, response14) => {
                                                                                                                                                                            if (data14.confirms === true) {
                                                                                                                                                                                clear_1.default();
                                                                                                                                                                                fileSystem_1.writeData('.gopackrc', response14);
                                                                                                                                                                                question_1.default(inquirer_1.prompt, (answer15) => {
                                                                                                                                                                                    choice_1.default(inquirer_1.prompt, answer15, async (_, response15) => {
                                                                                                                                                                                        fileSystem_1.writeData('.gopackrc', response15);
                                                                                                                                                                                        gopack.checkGomod();
                                                                                                                                                                                        gopack.checkGolangPackage();
                                                                                                                                                                                    });
                                                                                                                                                                                });
                                                                                                                                                                            }
                                                                                                                                                                            else {
                                                                                                                                                                                fileSystem_1.writeData('.gopackrc', response14);
                                                                                                                                                                                gopack.checkGomod();
                                                                                                                                                                                gopack.checkGolangPackage();
                                                                                                                                                                            }
                                                                                                                                                                        });
                                                                                                                                                                    });
                                                                                                                                                                }
                                                                                                                                                                else {
                                                                                                                                                                    fileSystem_1.writeData('.gopackrc', response13);
                                                                                                                                                                    gopack.checkGomod();
                                                                                                                                                                    gopack.checkGolangPackage();
                                                                                                                                                                }
                                                                                                                                                            });
                                                                                                                                                        });
                                                                                                                                                    }
                                                                                                                                                    else {
                                                                                                                                                        fileSystem_1.writeData('.gopackrc', response12);
                                                                                                                                                        gopack.checkGomod();
                                                                                                                                                        gopack.checkGolangPackage();
                                                                                                                                                    }
                                                                                                                                                });
                                                                                                                                            });
                                                                                                                                        }
                                                                                                                                        else {
                                                                                                                                            fileSystem_1.writeData('.gopackrc', response11);
                                                                                                                                            gopack.checkGomod();
                                                                                                                                            gopack.checkGolangPackage();
                                                                                                                                        }
                                                                                                                                    });
                                                                                                                                });
                                                                                                                            }
                                                                                                                            else {
                                                                                                                                fileSystem_1.writeData('.gopackrc', response10);
                                                                                                                                gopack.checkGomod();
                                                                                                                                gopack.checkGolangPackage();
                                                                                                                            }
                                                                                                                        });
                                                                                                                    });
                                                                                                                }
                                                                                                                else {
                                                                                                                    fileSystem_1.writeData('.gopackrc', response9);
                                                                                                                    gopack.checkGomod();
                                                                                                                    gopack.checkGolangPackage();
                                                                                                                }
                                                                                                            });
                                                                                                        });
                                                                                                    }
                                                                                                    else {
                                                                                                        fileSystem_1.writeData('.gopackrc', response8);
                                                                                                        gopack.checkGomod();
                                                                                                        gopack.checkGolangPackage();
                                                                                                    }
                                                                                                });
                                                                                            });
                                                                                        }
                                                                                        else {
                                                                                            fileSystem_1.writeData('.gopackrc', response7);
                                                                                            gopack.checkGomod();
                                                                                            gopack.checkGolangPackage();
                                                                                        }
                                                                                    });
                                                                                });
                                                                            }
                                                                            else {
                                                                                fileSystem_1.writeData('.gopackrc', response6);
                                                                                gopack.checkGomod();
                                                                                gopack.checkGolangPackage();
                                                                            }
                                                                        });
                                                                    });
                                                                }
                                                                else {
                                                                    fileSystem_1.writeData('.gopackrc', response5);
                                                                    gopack.checkGomod();
                                                                    gopack.checkGolangPackage();
                                                                }
                                                            });
                                                        });
                                                    }
                                                    else {
                                                        fileSystem_1.writeData('.gopackrc', response4);
                                                        gopack.checkGomod();
                                                        gopack.checkGolangPackage();
                                                    }
                                                });
                                            });
                                        }
                                        else {
                                            fileSystem_1.writeData('.gopackrc', response3);
                                            gopack.checkGomod();
                                            gopack.checkGolangPackage();
                                        }
                                    });
                                });
                            }
                            else {
                                fileSystem_1.writeData('.gopackrc', response2);
                                gopack.checkGomod();
                                gopack.checkGolangPackage();
                            }
                        });
                    });
                }
                else {
                    fileSystem_1.writeData('.gopackrc', response1);
                    gopack.checkGomod();
                    gopack.checkGolangPackage();
                }
            });
        });
    });
};
