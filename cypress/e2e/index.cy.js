it('titles are correct', () => {
  const page = cy.visit('/')

  page.get('title').should('have.text', 'Welcome to Astro')
  page.get('h1').should('have.text', 'Welcome to Astro')
})
