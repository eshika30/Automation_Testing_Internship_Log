import { BaseLibraryClass } from '../baselibrary/BaseLibrary.spec.js';


export class CommonActions extends BaseLibraryClass {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {import('@playwright/test').Expect} expect
   */
  constructor(page,expect) {
    super(page,expect);


  }

  async clickOnElement(locator,nameoflocator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
    // Console.log(Clicked on ${nameoflocator});
  }
 

}

// module.exports = { LoginPage };