import {expect} from '@playwright/test';

import { AddToCartObject } from "../pageobject/AddToCart.spec";

export class AddToCartAction extends AddToCartObject{
    
    async addtocartmethod() {
        await this.addtocart.click();
    }
    async shoppingcart(){
        await this.shoppingcartobject.click();
    }
    async checkout(){
        await this.checkoutobj.click();
    }
    async firstname(firstnameobj){
        await this.firstnameobj.fill(firstnameobj);
    }
   async lastname(lastnameobj){
    await this.lastnameobj.fill(lastnameobj);
   }
   async zipcode(zipcodeobj){
    await this.zipcodeobj.fill(zipcodeobj);
   }
   async continue(){
    await this.continueobj.click();
   }
   async finish(){
    await this.finishobj.click()
   }
   async confirmation(expetedtext) {
        await expect(this.confirmationobj).toHaveText(expetedtext);
    }
}