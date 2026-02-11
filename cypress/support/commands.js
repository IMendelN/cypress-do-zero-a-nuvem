Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (
    data = {
      firstName: "Iago",
      lastName: "Nogueira",
      email: "iago.nogueira@example.com",
      textArea: "Teste",
    },
  ) => {
    cy.visit("./src/index.html");
    cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#email").type(data.email);
    cy.get("#open-text-area").type(data.textArea);
    cy.contains("button", "Enviar").click();
  },
);
