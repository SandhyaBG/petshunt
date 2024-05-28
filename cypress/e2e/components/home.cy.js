describe("Test home page", () => {
  beforeEach(() => {
    cy.exec("npm run start");
    cy.login("cypressUser", "demoPass");
    cy.url().should("include", "/home");
  });

  it("Should render home page successfully", () => {
    const visiblePets = ["Cat 1", "Cat 2", "Cat 3", "Dog 1", "Dog 2", "Dog 3", "Lion 1", "Lion 2", "Lion 3", "Rabbit 1"];
    visiblePets.forEach(pet => {
      cy.contains(pet).should("be.visible");
    });
  });

  it("Filter pets list", () => {
    cy.contains("Sold").click();
    cy.contains("Dog 2").should("be.visible");

    const notVisiblePets = ["Cat 1", "Cat 2", "Cat 3", "Dog 1", "Dog 3", "Lion 1", "Lion 2", "Lion 3", "Rabbit 1"];
    notVisiblePets.forEach(pet => {
      cy.contains(pet).should("not.exist");
    });
  });
});
