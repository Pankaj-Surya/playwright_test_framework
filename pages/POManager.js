const { CartPage } = require("./CartPage");
const { DashboardPage } = require("./DashboardPage");
const { LoginPage } = require("./LoginPage");
const { OrdersHistoryPage } = require("./OrdersHistoryPage");
const { OrdersReviewPage } = require("./OrdersReviewPage");


class POManager{
 
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.ordersReviewPage = new OrdersReviewPage(this.page)
        this.ordersHistoryPage = new OrdersHistoryPage(this.page)
    }


    getLoginPage(){
        return this.loginPage
    }

    getDashBoardPage(){
        return this.dashboardPage()
    }

    getCartPage(){
       return this.cartPage()
    }

    getOrdersReviewPage(){
        return this.ordersReviewPage
    }

    getOrdersHistoryPage(){
        return this.ordersHistoryPage
    }


}

module.exports = {POManager};