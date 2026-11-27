export class BaseLibraryClass{
/**
     * @param {import('@playwright/test').Page} page 
     * @param {import('@playwright/test').Expect} expect
     */
    constructor(page,expect){
       this.page = page
       this.expect = expect
    }
    async waitforsecond(second){
        await this.page.waitForTimeout(second*1000)
    }

    async launchbrowserandgotourl(url){
        await this.page.goto(url);

    }
    async closebrowser(){

        await this.page.close();
    }
}
     
