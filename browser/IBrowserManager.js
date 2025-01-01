class IBrowserManager {
  async getBrowserPage(playwright, browserName, runMode) {
    throw new Error('getBrowserPage() must be implemented');
  }

  async destroyBrowserPage(page) {
    throw new Error('destroyBrowserPage() must be implemented');
  }
  }
  
  module.exports = IBrowserManager;
  