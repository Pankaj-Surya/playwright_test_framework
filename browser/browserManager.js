const { chromium, firefox, webkit } = require('playwright');
const IBrowserManager = require('./IBrowserManager');
const BrowserFactory = require('./BrowserFactory');

class BrowserManager extends IBrowserManager {
    async getBrowserPage(browserName, runMode) {
        const browserFactory = new BrowserFactory(browserName);
        if (runMode.toLowerCase() === 'headless') {
          return await browserFactory.createHeadlessBrowserSession();
        }
        return await browserFactory.createLocalBrowserSession();
      }
    
      async destroyBrowserPage(page) {
        if (!page) {
          throw new Error('Playwright Browser Page is null!');
        }
        await page.close();
      }
    
}

module.exports = BrowserManager;
