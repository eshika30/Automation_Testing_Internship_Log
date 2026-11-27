// import {BaseLibraryClass} from '../baselibrary/BaseLibraryClass.spec.js';

import { BaseClass } from '../BaseLibrary/BaseClass.spec';

export class MyInfoPage extends BaseClass{
  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').Expect} expect
   */
  constructor(page,expect) {
    super(page,expect);
    this.myinfotab = this.page.locator("xpath=//span[text()='My Info']//parent::a");
    this.firstname = this.page.locator("xpath=//input[@name='firstName']")
    this.middlename = this.page.locator("xpath=//input[@name='middleName']")
    this.lastname = this.page.locator("xpath=//input[@name='lastName']")
    this.nationalitydropdownarrow = this.page.locator("xpath=//label[text()='Nationality']//parent::div//following-sibling::div//i[contains(@class,'arrow')]")
    this.nationalitydropdownvalue = this.page.locator("xpath=//span[text()='Afghan']//parent::div[@role='option']")
    this.marriedstatusdropdownarrow = this.page.locator("xpath=//label[text()='Marital Status']//parent::div//following-sibling::div//i[contains(@class,'arrow')]")
    this.marriedstatusdropdownvalue = this.page.locator("xpath=//span[text()='Single']//parent::div[@role='option']")
    this.savebutton = this.page.locator("xpath=//p[contains(normalize-space(),'Required')]//following-sibling::button[@type='submit']")  
    this.successmessage = this.page.locator("xpath=//div[@class='oxd-toast-content oxd-toast-content--success']//p[contains(@class,'message')]")  
    
    

  }
 

}

// module.exports = { LoginPage };