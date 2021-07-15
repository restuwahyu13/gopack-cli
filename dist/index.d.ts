export default class Gopack {
    increment: number;
    barProgress: any;
    handler: any;
    handlerLoading: any;
    spinner: any;
    percentage: number;
    loadingSpinner(): void;
    checkGomod(): void;
    checkGolangPackage(): void;
    installedGolangPackage(): void;
    progressBarDownload(): void;
    updateProgressBarDownload(): void;
}
