class CartPage {
    // lokalizatory
    get cartButton() {
        return cy.get("a.cta:nth-child(2)");
    }
    get deliveryButton() {
        return cy.get(".cta").click();
    }




    // metody
    goToCart() {
        this.cartButton.click();
    }
    goToDelivery() {
        this.deliveryButton.click();
    }


}

export default new CartPage();