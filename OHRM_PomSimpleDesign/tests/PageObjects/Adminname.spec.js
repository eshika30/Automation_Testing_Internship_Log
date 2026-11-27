import { BaseClass } from '../BaseLibrary/BaseClass.spec';

export class Adminname extends BaseClass{
    /**     
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page,expect){
      super(page,expect)
      this.adminbutton = this.page.locator("xpath=//*[@href='/web/index.php/admin/viewAdminModule']")
      this.username = this.page.locator("xpath=//label[text()='Username']//parent::div//following-sibling::div//input")
      this.searchButton = this.page.locator("xpath=//button[@class='oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']")
      

      this.userrow = this.page.locator("xpath=//div[text()='Eshika_Pmis']/parent::div/parent::div/parent::div ")
      this.userCheckbox = this.page.locator("xpath=//div[text()='Eshika_Pmis']/parent::div/parent::div/parent::div//label")
      this.deleteButton = this.page.locator("xpath=//button[@class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-horizontal-margin']")
      
      // this.deleteButton = this.page.locator("xpath=//div[text()='Eshika_Pmis']/parent::div/parent:: div/parent::div//i[@class='oxd-icon bi-trash']/parent::button")
      this.confirmDeleteButton = this.page.locator("xpath=//button[@class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin'] ")

        
          
    }
}