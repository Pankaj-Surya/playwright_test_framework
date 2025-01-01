const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pages/POManager');
const { email, password } = require('../../config/CredentialConfig.js')
const { getPage } = require('../BaseTest.js'); // Import the page from BaseTest
const AllureUtils = require('../../utils/AllureUtils.js')// Import the page from BaseTest
test.describe('Login Test Suite', () => {
  // let browserManager, page;
 
  // test.beforeEach(async () => {
  //   browserManager = new BrowserManager();
  //   page = await browserManager.getBrowserPage('chrome', '');
  // });


  test('Login Test Valid', async () => {

    const page = await getPage(); // Access the page instance from BaseTest
    AllureUtils.addLabel('feature', 'Authentication');
    AllureUtils.addLabel('suite', 'Login Suite')
    AllureUtils.addLabel('module', 'Login');
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
 
  });
});
