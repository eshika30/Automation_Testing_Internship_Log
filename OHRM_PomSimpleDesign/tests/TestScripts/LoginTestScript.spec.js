const { test,expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageAction.spec.js');

test.describe('Login Tests', () => {
test('Valid login test', async ({ page }) => {

    const loginActionRef = new LoginAction(page,expect);
    

    await loginActionRef.launchbrowserandgotourl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginActionRef.enterusername('admin');
    await loginActionRef.waitforsometime(3000);
    await loginActionRef.enterpassword('admin123');
    await loginActionRef.waitforsometime(3000);
    await loginActionRef.clickloginbutton()
    await loginActionRef.waitforsometime(3000);

    await loginActionRef.closebrowser();
  });

  
});