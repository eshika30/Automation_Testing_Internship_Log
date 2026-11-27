export class CommonMethods {
    constructor(page) {
        this.page = page;
    }

    async waitforseconds(seconds) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}