class SelectPage {
    // lokalizatory
    get select() {
        return cy.get("#search_form_input_homepage ")
    }
    // metody
    exampleSearchOption() {
        this.select.click();
        this.select.type('dupa'); 


    }
}

export default new SelectPage();