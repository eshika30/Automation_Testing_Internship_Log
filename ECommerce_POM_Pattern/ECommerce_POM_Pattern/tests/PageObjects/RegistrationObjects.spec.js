import { BaseClass } from "../BaseLibrary/BaseClass.spec";

export class RegistrationPageObjects extends BaseClass {
    constructor(page) {
        super(page);
        this.registrationbutton = this.page.locator("//a[@href='/login']");
        this.name = this.page.locator("//form[@action='/signup']/input[@placeholder='Name']");
        this.email = this.page.locator("//form[@action='/signup']/input[@placeholder='Email Address']");
        this.signupbutton = this.page.locator("//form[@action='/signup']/button[@type='submit']");
        this.password = this.page.locator("//div[@class='required form-group']/input[@type='password']");
        this.fname = this.page.locator("//input[@name='first_name']");
        this.lname = this.page.locator("//input[@name='last_name']");
        this.address = this.page.locator("//input[@name='address1']");
        this.state = this.page.locator("//input[@name='state']");
        this.city = this.page.locator("//input[@name='city']");
        this.zipcode = this.page.locator("//input[@name='zipcode']");
        this.mobileno = this.page.locator("//input[@name='mobile_number']");
        this.createaccount = this.page.locator("//form[@action='/signup']/button[@type='submit']");
        this.registretionconforme = this.page.locator("//h2[@class='title text-center']/b[contains(text(),'Account Created!')]");
        this.continuebutton = this.page.locator("//a[@class='btn btn-primary']");
        this.deleteAccount = this.page.locator("//a[@href='/delete_account']");
        this.conformdelete = this.page.locator("//h2[@class='title text-center']/b[contains(text(),'Account Deleted!')]");
    }
}