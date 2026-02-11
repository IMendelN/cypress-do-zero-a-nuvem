describe("Página da Política de Privacidade", () => {
  beforeEach(() => {
    cy.visit("./src/privacy.html");
  });

  it("Verifica o título da página", () => {
    cy.title().should(
      "be.equal",
      "Central de Atendimento ao Cliente TAT - Política de Privacidade",
    );
  });

  it("Testa a página da política de privacidade independente", () => {
    cy.contains("h1", "CAC TAT - Política de Privacidade")
      .should("be.visible")
      .and("contain", "CAC TAT - Política de Privacidade");
  });
});
