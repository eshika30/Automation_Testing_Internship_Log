import { LoginObject } from "../pageobject/PracticeTestPageObject.spec";

export class LoginAction extends LoginObject {

  

    async enterusername(username) {
        await this.username.fill(username);
    }

    async enterpassword(password) {
        await this.password.fill(password);
    }

    async login() {
        await this.loginbutton.click();
    }
}