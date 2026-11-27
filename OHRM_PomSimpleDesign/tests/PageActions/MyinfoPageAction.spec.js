// import {MyInfoPage} from '../PageObjects/MyinfoPageAction.spec.js';

import { MyInfoPage } from '../PageObjects/MyinfoPageObject.spec.js';

export class MyInfoAction extends MyInfoPage{
   /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').Expect} expect
   */
  constructor(page,expect) {
     super(page,expect);

     
    
  }


    
    async clickmyinfo() {   
    await this.myinfotab.scrollIntoViewIfNeeded();
    await this.myinfotab.click();
    await this.page.waitForTimeout(3000);
  }

   async enterfirstname(firstname) {
    await this.firstname.scrollIntoViewIfNeeded();
    await this.firstname.clear();
    


    await this.firstname.fill(firstname);
    await this.page.waitForTimeout(2000);
  //   await this.firstname.screenshot({ path: 'C:\\Users\\DELL\\Desktop\\screenshots\\firstnameafterfill.png' });
   }

  async entermiddlename(middlename) {
    await this.middlename.scrollIntoViewIfNeeded();
    await this.middlename.fill(middlename);
    await this.page.waitForTimeout(2000);
  }

  async enterlastname(lastname) {
    await this.lastname.scrollIntoViewIfNeeded();
    await this.lastname.fill(lastname);
    await this.page.waitForTimeout(2000);
  }

  async selectnationality() {
    await this.nationalitydropdownarrow.scrollIntoViewIfNeeded();
    await this.nationalitydropdownarrow.click();
    await this.page.waitForTimeout(2000);
    await this.nationalitydropdownvalue.scrollIntoViewIfNeeded();
    await this.nationalitydropdownvalue.click();
    await this.page.waitForTimeout(2000);
  }

  async selectmarriedstatus() {
    await this.marriedstatusdropdownarrow.scrollIntoViewIfNeeded();
    await this.marriedstatusdropdownarrow.click();
    await this.page.waitForTimeout(2000);
    await this.marriedstatusdropdownvalue.scrollIntoViewIfNeeded();
    await this.marriedstatusdropdownvalue.click();
    await this.page.waitForTimeout(2000);
  }

  async clicksavebutton() {
    await this.savebutton.scrollIntoViewIfNeeded();
    await this.savebutton.click();
    await this.page.waitForTimeout(1000);
  }

  async verifyupdatesuccessmessage() {
    await this.successmessage.scrollIntoViewIfNeeded();
    await this.expect(this.successmessage).toBeVisible();
    var message = await this.successmessage.textContent();
    await this.expect(message).toContain("Successfully Updated");
    
  }

  

}

// module.exports = { LoginPage };