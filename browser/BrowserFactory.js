const { chromium, firefox, webkit } = require('playwright');

class BrowserFactory {
  constructor(browserName) {
    this.BROWSER = this.getBrowserType(browserName);
    this.MAXIMIZE_WINDOW = '--start-maximized';
  }

  getBrowserType(browserName) {
    switch (browserName.toLowerCase()) {
      case 'firefox':
        return firefox;
      case 'webkit':
        return webkit;
      case 'chromium':
      default:
        return chromium;
    }
  }

  async createLocalBrowserSession() {
    const browser = await this.BROWSER.launch({
      headless: false,
      args: [this.MAXIMIZE_WINDOW],
    });
    const context = await browser.newContext();
    return context.newPage();
  }

  async createHeadlessBrowserSession() {
    const browser = await this.BROWSER.launch({
      headless: true,
      args: [this.MAXIMIZE_WINDOW],
    });
    const context = await browser.newContext();
    return context.newPage();
  }
}

module.exports = BrowserFactory;
