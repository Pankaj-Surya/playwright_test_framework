const { test, expect } = require('@playwright/test');
const BrowserManager = require('../browser/browserManager')
const {POManager} = require('../pages/POManager');

// const { page } = require('./BaseTest.js'); // Import the shared page object
const { getPage } = require('./BaseTest.js'); // Import the page from BaseTest
test.describe('Test with Browser Manager', () => {
  // let browserManager, page;
 

  // test.beforeEach(async () => {
  //   browserManager = new BrowserManager();
  //   page = await browserManager.getBrowserPage('chrome', '');
  // });

//   test.afterEach(async () => {
//     awa;
//   });

  test('Login Test', async () => {
    const email = "pankaj1998@gmail.com";
    const password ="Table@123"
    const page = await getPage(); // Access the page instance from BaseTest
    
    // POManageer
    const poManager = new POManager(page);
    await poManager.loginPage.goto()
    await poManager.loginPage.login(email, password)
 
  });
});
