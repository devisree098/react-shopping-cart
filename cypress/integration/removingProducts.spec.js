//removingProducts.spec.js

describe('Removing Products from the Cart', () => {
  it('should remove products from the cart', () => {
    cy.visit('https://react-shopping-cart-67954.firebaseapp.com/');

    // Write test steps to add products to the cart
    // Assuming some products are already added to the cart
    // Write test steps to remove products from the cart
    cy.get('.cart-item').first().find('.remove-button').click(); // Example: Click on the remove button of the first product in the cart
    // Add assertions to verify the product is removed from the cart
    cy.get('.cart-count').should('not.contain', '1'); // Example: Verify the cart count is updated
  });
});
