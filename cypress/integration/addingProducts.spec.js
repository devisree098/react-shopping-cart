//addingProducts.spec.js

describe('Adding Products to the Cart', () => {
  it('should add products to the cart', () => {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');

    // Write test steps to add products to the cart
    cy.get('.product').first().find('.add-button').click(); // Example: Click on the add button of the first product
    // Add assertions to verify the product is added to the cart
    cy.get('.cart-count').should('contain', '1'); // Example: Verify the cart count is updated
  });
});
