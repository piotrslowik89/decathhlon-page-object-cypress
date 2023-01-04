/// <reference types = "cypress" />

import SelectPage from "../../support/page-object/selectPage";

describe("E2E - Home Page", () => {
    it("Opis pierwszego testu", () => {
        cy.visit("/")
        SelectPage.exampleSearchOption()
    })
})