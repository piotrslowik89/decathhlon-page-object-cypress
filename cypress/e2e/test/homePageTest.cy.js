/// <reference types = "cypress" />

import CartPage from "../../support/page-object/cartPage";
import HomePage from "../../support/page-object/homePage"
import ShoppingPage from "../../support/page-object/shoppingPage";


// dodać before Each
describe("E2E - Home Page", () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            // expect(err.message).to.include('of undefined')
            // done()
            return false
        });
        cy.visit("https://www.decathlon.pl/")
    });

    it("test page load", () => {

        // SelectPage.exampleSearchOption()
        HomePage.acceptPrivacyPolicy();
        HomePage.openLeftMenu()
        HomePage.closeLeftMenu()
        HomePage.navBarOvervew()
    })
    it.only('shopping page tests', () => {
        HomePage.acceptPrivacyPolicy();
        ShoppingPage.womensChoice()
        ShoppingPage.mensChoice()
        ShoppingPage.childsChoice()
        CartPage.goToCart()
        CartPage.goToDelivery()

    });
})