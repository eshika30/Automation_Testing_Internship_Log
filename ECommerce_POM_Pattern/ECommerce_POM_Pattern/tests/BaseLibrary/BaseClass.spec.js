import { CommonMethods } from "../CommonMethods/CommonMethods.spec";

export class BaseClass extends CommonMethods {
    constructor(page) {
        super(page);
        this.page = page;
    }

    async loginintobrowser(url) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async closebrowser() {
        await this.page.close();
    }
}