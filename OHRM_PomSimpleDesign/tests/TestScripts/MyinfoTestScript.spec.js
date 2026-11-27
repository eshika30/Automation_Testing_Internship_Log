const { test,expect } = require('@playwright/test');
const { LoginAction } = require('../PageActions/LoginPageAction.spec.js');
const { MyInfoAction } = require('../PageActions/MyinfoPageAction.spec.js');


test.describe('Login Tests', () => {
  test('Enter data in my info page fields', async ({ page }) => {

    const loginActionRef = new LoginAction(page,expect);
    const myInfoActionRef = new MyInfoAction(page,expect);

    try {

    await loginActionRef.launchbrowserandgotourl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await loginActionRef.enterusername('admin');
    await loginActionRef.enterpassword('admin123');
    await loginActionRef.clickloginbutton();
    await myInfoActionRef.clickmyinfo();
    await myInfoActionRef.enterfirstname('John');
    await myInfoActionRef.entermiddlename('M');
    await myInfoActionRef.enterlastname('Doe');
    await myInfoActionRef.selectnationality();
    await myInfoActionRef.selectmarriedstatus();
    await myInfoActionRef.clicksavebutton();
    await myInfoActionRef.verifyupdatesuccessmessage();
    }
    catch (error) {
      console.error('Error occurred:', error);
    }finally {
      await loginActionRef.closebrowser();
    }

   


    
  });

  
});