//filteringProducts.spec.js

describe('Filtering Products by Available Sizes', () => {
  it('should filter products by available sizes', () => {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');

    // Write test steps to filter products by available sizes
    cy.get('.size-filter').select('Small'); // Example: Select 'Small' size from the filter dropdown
    // Add assertions to verify only products with the selected size are displayed
    cy.get('.product').should('have.length', 1); // Example: Verify only one product is displayed after filtering
  });
});
