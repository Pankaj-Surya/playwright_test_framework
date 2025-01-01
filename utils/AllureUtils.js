const { allure } = require('allure-playwright');

class AllureUtils {
  /**
   * Add a test step.
   * @param {string} stepName - The name of the step.
   * @param {Function} stepFunction - The function to execute for the step.
   */
  static async addStep(stepName, stepFunction) {
    await allure.step(stepName, stepFunction);
  }

  /**
   * Add a label to the test.
   * @param {string} name - Label name (e.g., "feature", "story", "module").
   * @param {string} value - Label value.
   */
  static addLabel(name, value) {
    allure.label(name, value);
  }

  /**
   * Add an attachment to the test.
   * @param {string} name - Attachment name.
   * @param {Buffer|string} content - Content of the attachment.
   * @param {string} type - MIME type of the attachment.
   */
  static addAttachment(name, content, type = 'text/plain') {
    allure.attachment(name, content, type);
  }

  /**
   * Add environment details to the test.
   * @param {Object} envData - An object containing environment data.
   */
  static addEnvironmentDetails(envData) {
    Object.entries(envData).forEach(([key, value]) => {
      allure.label(key, value);
    });
  }
}

module.exports = AllureUtils;
