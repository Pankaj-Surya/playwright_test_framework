const { expect } = require("@playwright/test");

class OrdersReviewPage
{
constructor(page)
{
    this.page = page;
this.country = page.locator("[placeholder*='Country']");
this.dropdown = page.locator(".ta-results");
this.emailId = page.locator(".user__name [type='text']").first();
this.submit =  page.locator(".action__submit");
this.orderConfirmationText = page.locator(".hero-primary");
this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

}
async searchCountryAndSelect(countryCode,countryName)
{

    await this.page.locator("[placeholder*='Country']").pressSequentially("ind");
    //await page.pause();
    const dropdown = this. page.locator(".ta-results");
    await dropdown.waitFor({state : "visible"});
    // await dropdown.getByRole("button",{exact : "India"}).click()
    const optionsCount = await dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; ++i) {
       const text = await dropdown.locator("button").nth(i).textContent();
       if (text === " India") {
          await dropdown.locator("button").nth(i).click();
          break;
       }
    }

}

async VerifyEmailId(username)
{
    await expect(this.emailId).toHaveText(username);
}

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}
}
module.exports = {OrdersReviewPage};
   