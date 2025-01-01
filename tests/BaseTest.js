const { test, expect } = require('@playwright/test');
const BrowserManager = require('../browser/browserManager');

// Store references to browserManager and page
let browserManager, page;

test.beforeEach(async () => {
  browserManager = new BrowserManager();
  page = await browserManager.getBrowserPage('chrome', ''); // Update 'chrome' as needed
});

test.afterEach(async () => {
  if (page) {
    await browserManager.destroyBrowserPage(page);
  }
});

// Export the browserManager and page for use in other files
module.exports = {getPage: () => page, getBrowserManager: () => browserManager };