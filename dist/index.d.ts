export default class Gopack {
    increment: number;
    barProgress: any;
    handler: any;
    spinner: any;
    loadingSpinner(): void;
    checkGomod(): void;
    checkGolangPackage(): void;
    installedGolangPackage(): void;
    progressBarDownload(): void;
    updateProgressBarDownload(): void;
}
