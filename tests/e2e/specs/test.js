// https://docs.cypress.io/api/introduction/api.html

describe("Testing to Vuetiful dog app", () => {
  it("the header tag should be visible", () => {
    cy.visit("/");
    cy.get("body > main > div > div > header").should("be.visible");
  });

  it("the search should be visible", () => {
    cy.get(
      "body > main > div > div > header > div.wrapper-logo-search > div.wrapper-search > input.search"
    ).should("be.visible");
  });

  it("the button to search should be visible", () => {
    cy.get(
      "body > main > div > div > header > div.wrapper-logo-search > div.wrapper-search > input.btn-search"
    ).should("be.visible");
  });

  it("the li tags should be visible", () => {
    cy.get(".icon-list").should("be.visible");
  });

  it("the vuetiful dog's logo should be visible", () => {
    cy.get(".wrapper-icon-title").should("be.visible");
  });

  it("five cards should be visible to default into Random screen", () => {
    cy.get("body > main > div > div > div > div:nth-child(1)").should(
      "be.visible"
    );
    cy.get("body > main > div > div > div > div:nth-child(2)").should(
      "be.visible"
    );
    cy.get("body > main > div > div > div > div:nth-child(3)").should(
      "be.visible"
    );
    cy.get("body > main > div > div > div > div:nth-child(4)").should(
      "be.visible"
    );
    cy.get("body > main > div > div > div > div:nth-child(5)").should(
      "be.visible"
    );
  });

  it("the card should have a img", () => {
    cy.get(
      "body > main > div > div > div > div:nth-child(1) > figure > img"
    ).should("be.visible");
  });

  it("the first card should be visible into favorites path if I do click over the heart icon", () => {
    cy.get(
      "body > main > div > div > div > div:nth-child(1) > div.wrapper-title-heart > div"
    ).click();
    cy.get("#favs").click();
    cy.get("body > main > div > div > div > div:nth-child(1)").should(
      "be.visible"
    );
  });
});
