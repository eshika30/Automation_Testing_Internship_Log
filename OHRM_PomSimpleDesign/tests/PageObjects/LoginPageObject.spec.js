import { BaseClass } from '../BaseLibrary/BaseClass.spec';

export class LoginPage extends BaseClass{
    /**     
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page,expect){
      super(page,expect)
      this.username = this.page.locator("xpath=//input[@name='username']")
      this.password = this.page.locator("xpath=//input[@name='password']")
      this.loginbutton = this.page.locator("xpath=//button[@type='submit']")

        
          
    }
}