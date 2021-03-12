
describe('My test phase 1', () => {
  it('test from - to', () => {
    cy.visit("https://google.com")
    //cy.get('a[target=_top]').should('contain', 'Iniciar')

    //due the ip server :)
    cy.get('div').should('contain', 'United Kingdom')
  })
})