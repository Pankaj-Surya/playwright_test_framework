const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pages/POManager');
const { email, password } = require('../../config/CredentialConfig.js')
const { getPage } = require('../BaseTest.js'); // Import the page from BaseTest
const AllureUtils = require('../../utils/AllureUtils.js')
test.describe('@Web Client App Add To Cart Suite', async () => {


  // let browserManager, page;

  // test.beforeEach(async () => {
  //     browserManager = new BrowserManager();
  //     page = await browserManager.getBrowserPage('chrome', '');
  // });


  test('Add to Cart', async () => {
    const productName = 'IPHONE 13 PRO';
    const page = await getPage(); // Access the page instance from BaseTest

    AllureUtils.addLabel('feature', 'Cart Feature');
    AllureUtils.addLabel('suite', 'Cart Suite')
    AllureUtils.addLabel('module', 'Cart Module');
    AllureUtils.addEnvironmentDetails({
      Browser: page.context().browser().browserType().name(),
      Environment: process.env.ENV || 'staging',
    });

    if (!email || !password) {
      throw new Error("Email or password is missing");
    }
    // POManageer
    const poManager = new POManager(page);
    await poManager.loginPage.goto()
    await poManager.loginPage.login(email, password)

    await poManager.dashboardPage.searchProductAddCart(productName)
    await poManager.dashboardPage.navigateToCart()

  });


})