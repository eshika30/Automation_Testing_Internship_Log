import { test, expect } from '@playwright/test';
import { LoginAction } from "../pageaction/PracticeTestPageAction.spec";
test.describe('Login Test',()=> {
    test('valid login test',async ({page})=>{
            const loginaction = new LoginAction(page);
            await loginaction.launchbrowserandgotourl('https://www.saucedemo.com/')
            await loginaction.enterusername('standard_user')
            await loginaction.waitforsecond(2)
            await loginaction.enterpassword('secret_sauce')
            await loginaction.waitforsecond(2)
            await loginaction.login()
    });

});
