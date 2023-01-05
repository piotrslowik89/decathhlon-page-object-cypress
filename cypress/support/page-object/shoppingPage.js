class ShoppingPage {
    // lokalizatory
    get privacyPolicy() {
        return cy.get("#didomi-notice-agree-button")
    }
    get navBarWomen() {
        return cy.get("button.svelte-o3ex4e:nth-child(2)")
    }
    get skirts() {
        return cy.contains('Spódniczki damskie')
    }
    get slaviSmokeShadow() {
        return cy.get('div.dpb-holder:nth-child(22) > div:nth-child(4) > a:nth-child(1) > span:nth-child(2)')

    }

    get sizeL() {
        return cy.get('button.sizes__size:nth-child(4)')

    }
    get addToCartButton() {
        return cy.get('#fitAnalytics-pdp-add-to-cart')
    }
    get continueButton() {
        return cy.get('.cta--alt')
    }

    // Men

    get navBarMan() {
        return cy.get('button.svelte-o3ex4e:nth-child(3)')
    }
    get mensVests() {
        return cy.contains('Kamizelki męskie')
    }
    get choseOfVest() {
        return cy.get('#app > main > div.list-body.svelte-5yifbg > div.listing-main.svelte-5yifbg > section > div > div:nth-child(15) > div.dpb-informations.svelte-y5q9xg > a')
    }
    get choseOfColor() {
        return cy.get('button.svelte-1bgo2ih:nth-child(2)')

    }
    get sizeXL() {
        return cy.get('button.sizes__size:nth-child(5)')
    }
    // child
    get navBarChild() {
        return cy.get('button.svelte-o3ex4e:nth-child(4)')
    }
    get childsSkateboard() {
        return cy.contains('Deskorolki')
    }

    get choseOfSkateboard() {
        return cy.get('div.dpb-holder:nth-child(5) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1)')
    }



    // metody
    acceptPrivacyPolicy() {
        this.privacyPolicy.click();
    }
    womensChoice() {
        this.navBarWomen.click();
        this.skirts.click();
        this.slaviSmokeShadow.scrollIntoView();
        this.slaviSmokeShadow.click();
        this.sizeL.click();
        this.addToCartButton.click();
        this.continueButton.click();
    }

    mensChoice() {
        this.navBarMan.click();
        this.mensVests.click();
        this.choseOfVest.scrollIntoView();
        this.choseOfVest.click();
        this.choseOfColor.click();
        this.sizeXL.click();
        this.addToCartButton.click();
        this.continueButton.click();
    }
    childsChoice() {
        this.navBarChild.click();
        this.childsSkateboard.click();
        this.choseOfSkateboard.scrollIntoView();
        this.choseOfSkateboard.click();
        this.addToCartButton.click();
    }
}

export default new ShoppingPage();