

test('@Web Client App login', async ({ page }) => {


    let browserManager, page;

    test.beforeEach(async () => {
        browserManager = new BrowserManager();
        page = await browserManager.getBrowserPage('chrome', '');
    });


    test('Login Test', async () => {
        const email = "pankaj1998@gmail.com";
        const password = "Table@123"

        // POManageer
        const poManager = new POManager(page);
        await poManager.loginPage.goto()
        await poManager.loginPage.login(email, password)

        await poManager.dashboardPage.searchProductAddCart(productName)
        await poManager.dashboardPage.navigateToCart()

    });


})