describe('empty spec', () => {
  it('should add items to cart', () => {
    cy.visit('https://demo.vercel.store/');
    cy.get('[aria-label="Special Edition T-Shirt"]').first().click();
    cy.get('[role="option"][aria-label="size l"]').click();
    // cy.get('[role="option"][name="size l"]').type('{tab}');
    cy.get('button[aria-label="Add to Cart"]').click();
    // cy.get('header').get('[role="button"][name="Cart items: 1"]').click();
   
    cy.get('li').should("contain", "Special Edition T-Shirt");
  });

  it('search', () => {
    cy.visit('https://demo.vercel.store/');
    cy.get('input[placeholder*="Search"]').filter(':visible').click();
    cy.get('input[placeholder*="Search"]').filter(':visible').type('shirt');
    cy.get('input[placeholder*="Search"]').filter(':visible').type('{enter}');
    cy.get('h3').then(searchResults => {
      expect(searchResults.length).to.be.at.least(1);
    });
  });
})