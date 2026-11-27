import { BaseLibraryClass } from "../baselibrary/BaseLibrary.spec";

export class AddToCartObject extends BaseLibraryClass{
    constructor(page,expect){
        super(page,expect)
        
        
        this.addtocart = this.page.locator("xpath=//button[@name='add-to-cart-sauce-labs-backpack'] ")
        this.shoppingcartobject = this.page.locator("xpath=//a[@class='shopping_cart_link']")
        this.checkoutobj = this.page.locator("xpath=//button[@class='btn btn_action btn_medium checkout_button '] ")
        this.firstnameobj = this.page.locator("xpath=//input[@placeholder='First Name']")
        this.lastnameobj = this.page.locator("xpath=//input[@placeholder='Last Name']")
        this.zipcodeobj = this.page.locator("xpath=//input[@placeholder='Zip/Postal Code']")
        this.continueobj = this.page.locator("xpath=//input[@data-test='continue']")
        this.finishobj = this.page.locator("xpath=//button[@data-test='finish']")
        this.confirmationobj = this.page.locator("xpath=//h2[@class='complete-header']")
    }
}