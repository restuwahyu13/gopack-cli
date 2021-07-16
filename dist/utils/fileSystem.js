"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.readData = exports.writeData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function tempStorageWindows(nameFile, data) {
    fs_1.default.accessSync(path_1.default.resolve(process.env.TMP));
    let filePath = `${process.env.TMP}/`;
    const fileExist = fs_1.default.existsSync(path_1.default.resolve(filePath, `${nameFile}`));
    if (!fileExist) {
        fs_1.default.writeFileSync(path_1.default.resolve(filePath, `${nameFile}`), `${data.trim()}`, { encoding: 'utf8' });
        const toArray = fs_1.default.readFileSync(path_1.default.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ');
        return Array.from(new Set([
            ...toArray
                .map((val) => val.trim().replace(/[\s]/gi, ','))
                .join('')
                .trim()
                .split(',')
        ]));
    }
    else {
        fs_1.default.appendFileSync(path_1.default.resolve(filePath, `${nameFile}`), `\n${data.trim()}`, { encoding: 'utf-8' });
        const toArray = fs_1.default.readFileSync(path_1.default.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ');
        return Array.from(new Set([
            ...toArray
                .map((val) => val.trim().replace(/[\s]/gi, ','))
                .join('')
                .trim()
                .split(',')
        ]));
    }
}
function tempStorageLinux(nameFile, data) {
    let filePath = '/tmp';
    const fileExist = fs_1.default.existsSync(path_1.default.resolve(filePath, `${nameFile}`));
    if (!fileExist) {
        fs_1.default.writeFileSync(path_1.default.resolve(filePath, `${nameFile}`), `${data.trim()}`, { encoding: 'utf8' });
        const toArray = fs_1.default.readFileSync(path_1.default.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ');
        return Array.from(new Set([
            ...toArray
                .map((val) => val.trim().replace(/[\s]/gi, ','))
                .join('')
                .trim()
                .split(',')
        ]));
    }
    else {
        fs_1.default.appendFileSync(path_1.default.resolve(filePath, `${nameFile}`), `\n${data.trim()}`, { encoding: 'utf-8' });
        const toArray = fs_1.default.readFileSync(path_1.default.resolve(filePath, `${nameFile}`), { encoding: 'utf-8' }).split(' ');
        return Array.from(new Set([
            ...toArray
                .map((val) => val.trim().replace(/[\s]/gi, ','))
                .join('')
                .trim()
                .split(',')
        ]));
    }
}
const writeData = (nameFile, data) => {
    if (process.platform === 'win32') {
        return tempStorageWindows(nameFile, data.join('\n'));
    }
    else {
        return tempStorageLinux(nameFile, data.join('\n'));
    }
};
exports.writeData = writeData;
const readData = () => {
    if (process.platform === 'win32') {
        fs_1.default.accessSync(path_1.default.resolve(process.env.TMP));
        const filePath = `${process.env.TMP}/`;
        const toArray = fs_1.default.readFileSync(path_1.default.resolve(filePath, '.gopackrc'), { encoding: 'utf-8' }).split(' ');
        return Array.from(new Set([
            ...toArray
                .map((val) => val.trim().replace(/[\s]/gi, ','))
                .join('')
                .trim()
                .split(',')
        ]));
    }
    else {
        const filePath = '/tmp';
        const toArray = fs_1.default.readFileSync(path_1.default.resolve(filePath, '.gopackrc'), { encoding: 'utf-8' }).split(' ');
        return Array.from(new Set([
            ...toArray
                .map((val) => val.trim().replace(/[\s]/gi, ','))
                .join('')
                .trim()
                .split(',')
        ]));
    }
};
exports.readData = readData;
const deleteData = () => {
    if (process.platform === 'win32') {
        fs_1.default.accessSync(path_1.default.resolve(process.env.TMP));
        const filePath = `${process.env.TMP}/`;
        fs_1.default.unlinkSync(path_1.default.resolve(filePath, '.gopackrc'));
    }
    else {
        const filePath = '/tmp';
        fs_1.default.unlinkSync(path_1.default.resolve(filePath, '.gopackrc'));
    }
};
exports.deleteData = deleteData;
