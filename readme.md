npx playwright test  --reporter=allure-playwright

allure generate ./allure-results -o ./allure-report --clean
allure open ./allure-report


Run Suite-Specific Tests
Playwright CLI lets you specify projects (suites) to execute:

Run Smoke Tests:

bash
Copy code
npx playwright test --project=smoke
Run Regression Tests:

bash
Copy code
npx playwright test --project=regression
Run All Suites:

bash
Copy code
npx playwright test