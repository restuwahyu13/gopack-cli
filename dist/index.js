"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
const consola_1 = __importDefault(require("consola"));
const chalk_1 = __importDefault(require("chalk"));
const cli_progress_1 = __importDefault(require("cli-progress"));
const colors_1 = __importDefault(require("colors"));
const cli_spinner_1 = require("cli-spinner");
const clear_1 = __importDefault(require("clear"));
const fileSystem_1 = require("./utils/fileSystem");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class Gopack {
    increment = 0;
    barProgress = undefined;
    handler = undefined;
    handlerLoading = undefined;
    spinner = undefined;
    percentage = 0;
    loadingSpinner() {
        this.spinner = new cli_spinner_1.Spinner('Processing... %s');
        this.spinner.setSpinnerString('|/-\\');
        this.spinner.start();
    }
    checkGomod() {
        let checkGomod = fs_1.default.existsSync(path_1.default.resolve(process.cwd(), 'go.mod'));
        if (!checkGomod) {
            consola_1.default.error(chalk_1.default.bold.white('Installed go package error'));
            process.exit(0);
        }
    }
    checkGolangPackage() {
        const checkGoPackage = shelljs_1.default.exec('go version', { silent: true }).code;
        if (checkGoPackage === 0) {
            this.progressBarDownload();
            this.updateProgressBarDownload();
        }
        else {
            consola_1.default.error(chalk_1.default.bold.white('go runtime installed required'));
        }
    }
    installedGolangPackage() {
        const packages = fileSystem_1.readData();
        packages.forEach((val) => shelljs_1.default.exec(`go get ${val}`, { silent: true }));
    }
    progressBarDownload() {
        this.barProgress = new cli_progress_1.default.SingleBar({
            format: `Downloading | [${colors_1.default.bold.white('{bar}')}] | Percentage {percentage}% | Times ${colors_1.default.bold.white('{duration}')} Ms`,
            hideCursor: true,
            clearOnComplete: true
        }, cli_progress_1.default.Presets.legacy);
        this.barProgress.start(100, 0);
    }
    updateProgressBarDownload() {
        this.handler = setInterval(() => {
            this.increment += 1;
            this.barProgress.update(this.increment);
            if (this.increment >= 100) {
                clearInterval(this.handler);
                this.barProgress.stop();
                this.loadingSpinner();
                setTimeout(() => this.installedGolangPackage(), 1000);
            }
        }, 100);
        this.handlerLoading = setInterval(() => {
            this.percentage += 1;
            if (this.percentage >= 200) {
                clearInterval(this.handlerLoading);
                this.loadingSpinner();
                setTimeout(() => {
                    this.spinner.stop();
                }, 1400);
                setTimeout(() => {
                    clear_1.default();
                    consola_1.default.success(chalk_1.default.bold.white('Installed go package success'));
                    fileSystem_1.deleteData();
                    process.exit(0);
                }, 1600);
            }
        }, 100);
    }
}
exports.default = Gopack;
//# sourceMappingURL=index.js.map