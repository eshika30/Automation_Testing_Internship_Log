import { test, expect } from '@playwright/test';
import { LoginAction } from "../pageaction/PracticeTestPageAction.spec";
import { AddToCartAction } from '../pageaction/AddToCartAction.spec';
test.describe('Login Test',()=> {
    test('valid login test',async ({page})=>{
            const loginaction = new LoginAction(page);
            const addtocartaction = new AddToCartAction(page);
            await loginaction.launchbrowserandgotourl('https://www.saucedemo.com/')
            await loginaction.waitforsecond(1)
            await loginaction.enterusername('standard_user')
            await loginaction.waitforsecond(2)
            await loginaction.enterpassword('secret_sauce')
            await loginaction.waitforsecond(2)
            await loginaction.login()
            

            await addtocartaction.addtocartmethod();
            await addtocartaction.waitforsecond(1)
            await addtocartaction.shoppingcart()
            await addtocartaction.waitforsecond(1)
            await addtocartaction.checkout()
            await addtocartaction.waitforsecond(1)
            await addtocartaction.firstname('ganesh')
            await addtocartaction.waitforsecond(1)
            await addtocartaction.lastname('ganesh che papa')
            await addtocartaction.waitforsecond(1)
            await addtocartaction.zipcode('45')
            await addtocartaction.waitforsecond(1)
            await addtocartaction.continue()
            await addtocartaction.waitforsecond(1)
            await addtocartaction.finish()
            await addtocartaction.waitforsecond(1)
            await addtocartaction.confirmation('Thank you for your order!');

    });

});
