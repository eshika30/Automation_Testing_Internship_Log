import { Adminname } from '../PageObjects/Adminname.spec';

export class AdminnameAction extends Adminname {
    /**     
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page, expect) {
        super(page, expect);
        // Renamed property so it doesn't clash with the method name
    }

    async clickadmin() {
        await this.adminbutton.click();
    }

    async enterusername(uname) {
        await this.username.fill(uname);
    }

    async clicksearchbutton() {
        // Call .click() on the renamed locator property
        await this.searchButton.click();
    }
    async selectuser() {
    await this.userCheckbox.click();
}

    async clickdeletebutton() {
    await this.deleteButton.click();
}

    async confirmdelete() {
    await this.confirmDeleteButton.click();
}
}