const { test, expect } = require('@playwright/test');
const loginData = require('../../resources/loginData.json');
const AllureUtils = require('../../utils/AllureUtils');
const {getPage} = require('../BaseTest');
const {POManager} = require('../../pages/POManager')

test.describe('Data-Driven Tests using JSON', () => {



    for (const data of loginData) {
        test(`Login with username: ${data.username}`, async () => {


            const page = await getPage();

            // Access the page instance from BaseTest
            AllureUtils.addLabel('feature', 'Authentication');
            AllureUtils.addLabel('suite', 'Login Suite')
            AllureUtils.addLabel('module', 'Login');
            AllureUtils.addEnvironmentDetails({
                Browser: page.context().browser().browserType().name(),
                Environment: process.env.ENV || 'staging',
            });
            // POManageer
            const poManager = new POManager(page);
            await poManager.loginPage.goto()
            await poManager.loginPage.login(data.username, data.password)
        });
    }
});
