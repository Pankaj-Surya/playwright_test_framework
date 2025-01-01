const { test, expect } = require('@playwright/test');
const { POManager } = require('../../pages/POManager');
const { email, password } = require('../../config/CredentialConfig.js')
const { getPage } = require('../BaseTest.js'); // Import the page from BaseTest
const AllureUtils = require('../../utils/AllureUtils.js')

test.describe('Login Test Suite', () => {
  // let browserManager, page;
 
  // test.beforeEach(async () => {
  //   browserManager = new BrowserManager();
  //   page = await browserManager.getBrowserPage('chrome', '');
  // });


  test('Login Test-1', async () => {
    const page = await getPage(); // Access the page instance from BaseTest
    
    AllureUtils.addLabel('feature', 'Authentication');
    AllureUtils.addLabel('suite', 'Login Suite')
    AllureUtils.addLabel('module', 'Login');
    AllureUtils.addEnvironmentDetails({
      Browser: page.context().browser().browserType().name(),
      Environment: process.env.ENV || 'staging',
    });

    // POManageer
    const poManager = new POManager(page);
   
  
    if (!email || !password) {
      throw new Error("Email or password is missing");
    }
    
    await AllureUtils.addStep('Navigate to Login Page', async () => {
      await poManager.loginPage.goto()
    });

    await AllureUtils.addStep('Login with valid credentials', async () => {
      await poManager.loginPage.login(email, password);
    });

    
    await AllureUtils.addStep('Validate success message', async () => {
      expect(page).toHaveURL('https://rahulshettyacademy.com/client/dashboard/dash');
    });

    // Add a screenshot to the report
    const screenshot = await page.screenshot();
    AllureUtils.addAttachment('Login Test Screenshot', screenshot, 'image/png'); 
  });
});
