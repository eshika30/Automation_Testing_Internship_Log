import { expect } from '@playwright/test';
import { RegistrationPageObjects } from "../PageObjects/RegistrationObjects.spec";

export class RgistrationActionclass extends RegistrationPageObjects {
    async clickonsignin() {
        await this.registrationbutton.click();
    }

    async entername(name) {
        await this.name.fill(name);
    }

    async enteremail(email) {
        await this.email.fill(email);
    }

    async clickonsignup() {
        await this.signupbutton.click();
    }

    async setpassword(pass) {
        await this.password.fill(pass);
    }

    async setfname(fname) {
        await this.fname.fill(fname);
    }

    async setlastname(lname) {
        await this.lname.fill(lname);
    }

    async setaddress(add) {
        await this.address.fill(add);
    }

    async setstate(state) {
        await this.state.fill(state);
    }

    async setcity(city) {
        await this.city.fill(city);
    }

    async setzipcode(zipcode) {
        await this.zipcode.fill(zipcode);
    }

    async setmobileno(mno) {
        await this.mobileno.fill(mno);
    }

    async clicktocreate() {
        await this.createaccount.click();
    }

    async registrationverification(expetedtext) {
        await expect(this.registretionconforme).toHaveText(expetedtext);
    }

    async clickcontinue() {
        await this.continuebutton.click();
    }

    async clickdeleteaccount() {
        await this.deleteAccount.click();
    }

    async deleteverification(expetedtext) {
        await expect(this.conformdelete).toHaveText(expetedtext);
    }
}