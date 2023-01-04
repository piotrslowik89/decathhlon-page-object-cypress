class HomePage {
    // lokalizatory
    get privacyPolicy() {
        return cy.get("#didomi-notice-agree-button")
    }
    get leftMenu() {
        return cy.get(".menu-button")
    }

    get closingCross() {
        return cy.get(".close")
    }
    get navbarElement1() {
        return cy.get("button.svelte-o3ex4e:nth-child(1)")
    }
    get navbarElement2() {
        return cy.get("button.svelte-o3ex4e:nth-child(2)")
    }
    get navbarElement3() {
        return cy.get("button.svelte-o3ex4e:nth-child(3)")
    }
    get navbarElement4() {
        return cy.get("button.svelte-o3ex4e:nth-child(4)")
    }
    get navbarElement5() {
        return cy.get("button.svelte-o3ex4e:nth-child(5)")
    }
    get navbarElement6() {
        return cy.get("button.svelte-o3ex4e:nth-child(6)")
    }
    get navbarElement7() {
        return cy.get("button.svelte-o3ex4e:nth-child(7)")
    }
    get navbarElement8() {
        return cy.get("button.svelte-o3ex4e:nth-child(8)")
    }




    // metody
    acceptPrivacyPolicy() {
        this.privacyPolicy.click();
    }
    openLeftMenu() {
        this.leftMenu.click()

    }
    closeLeftMenu() {
        this.closingCross.click()
    }
    // Sprawdzić czy są lepsze opcje od focus bo coś się nie rozwija
    navBarOvervew() {
        this.navbarElement1.trigger("focus")
        this.navbarElement2.trigger("focus")
        this.navbarElement3.trigger("focus")
        this.navbarElement4.trigger("focus")
        this.navbarElement5.trigger("focus")
        this.navbarElement6.trigger("focus")
        this.navbarElement7.trigger("focus")
        this.navbarElement8.trigger("focus")
    }

}

export default new HomePage();