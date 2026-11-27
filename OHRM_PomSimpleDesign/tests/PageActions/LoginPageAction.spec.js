import { LoginPage } from '../PageObjects/LoginPageObject.spec';

export class LoginAction extends LoginPage{
    /**     
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page,expect){
        super(page,expect)

    }
    async enterusername(username){
        await this.username.scrollIntoViewIfNeeded()
        //await this.page.fill(this.username,username)
        await this.username.fill(username)

    }
    async enterpassword(password){
        await this.password.scrollIntoViewIfNeeded()
        await this.password.fill(password)
        //await this.page.fill(this.password,password)
    }
    async clickloginbutton(){
        await this.loginbutton.scrollIntoViewIfNeeded()
        await this.loginbutton.click()
        //await this.page.click(this.loginbutton)
    }
    async waitforsometime(seconds){
        await this.page.waitForTimeout(seconds)

    }





}