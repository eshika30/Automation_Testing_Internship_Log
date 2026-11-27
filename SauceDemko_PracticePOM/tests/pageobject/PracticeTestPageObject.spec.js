import { BaseLibraryClass } from "../baselibrary/BaseLibrary.spec";

export class LoginObject extends BaseLibraryClass{
    constructor(page,expect){
        super (page,expect)

        
        this.username = this.page.locator("xpath=//input[@placeholder='Username']")
        this.password = this.page.locator("xpath=//input[@placeholder='Password']")
        this.loginbutton = this.page.locator("xpath=//input[@class='submit-button btn_action']")
    }
}