const { test, expect } = require('@playwright/test');
const BrowserManager = require('../browser/browserManager')
const {POManager} = require('../pages/POManager');
const {email, password} = require('../resources/CredentialConfig.js')

const { getPage } = require('./BaseTest.js'); // Import the page from BaseTest
test.describe('Login Test Suite', () => {
  // let browserManager, page;
 
  // test.beforeEach(async () => {
  //   browserManager = new BrowserManager();
  //   page = await browserManager.getBrowserPage('chrome', '');
  // });


  test('Login Test', async () => {

    const page = await getPage(); // Access the page instance from BaseTest
  
    if (!email || !password) {
      throw new Error("Email or password is missing");
    }
    
    // POManageer
    const poManager = new POManager(page);
    await poManager.loginPage.goto()
    await poManager.loginPage.login(email, password)
 
  });
});
