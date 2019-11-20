//enter your amazon account email and password
const email="" //enter your email here
const pass="" //enter your password
//************************
describe('My First Test', function() {
it('to Visit amazon.com', function() {
//first visit amazon.com before all test
cy.visit('https://www.amazon.com/')
})
})
describe('login in amazon and add to cart',()=>{
it('to login and add to cart',function(){
//Hover over sign in menu
cy.wait(1500)
cy.get('#nav-link-accountList').trigger('mouseover')
//Click on Sign in button
cy.get('#nav-al-signin .nav-action-button').click()
//Fill email field
cy.get('[type="email"]').type(email)
cy.get('#continue').click()
//if apper a screen to enable cookies
cy.get('#a-page').then(($a) => {
if ($a.text().includes('Password')) {
//fill password
cy.get('[type="password"]').type(pass);
cy.get("#signInSubmit").click();
}
else{
cy.contains("Go back to previous page").click();
cy.get("#continue").click();
cy.get('[type="password"]').type(pass);
cy.get("#signInSubmit").click();
cy.contains("Go back to previous page").click();
cy.get("#continue").click();
cy.get('[type="password"]').type(pass);
cy.get("#signInSubmit").click();
cy.get("#continue").click();
cy.get(".a-input-text").click();
}
})
//if Authentication required go to your email and enter the code
cy.get('#a-page').then(($a) => {
if ($a.text().includes('Authentication required')) {
cy.get('#continue').click()
cy.pause()
cy.get('.a-input-text').click()
cy.get('#a-autoid-0 > .a-button-inner > .a-button-input').click()
}
})
// Make sure you signed in
cy.get('#nav-link-accountList').contains('Hello').should('exist')
//Search for Samsung Galaxy s10
cy.get('#twotabsearchtextbox').type('Samsung Galaxy s10')
cy.get('.nav-search-submit > .nav-input').click()
//Click on the first result

cy.get('[data-index="1"] > :nth-child(1) > .celwidget > .s-include-content-margin > .s-shopping-adviser > [data-component-type="s-searchgrid-carousel"] > .a-begin > .a-carousel-controls > .a-carousel-row-inner > .a-carousel-col > .a-carousel-viewport > .a-carousel > :nth-child(2) > .s-inner-result-item > :nth-child(1)').find('img').invoke('attr', 'alt').then((firstalt) => {
    var alt1 = firstalt
    cy.get('[data-index="1"] > :nth-child(1)').first().click()
    //Add it to cart
    cy.get('#add-to-cart-button-ubb').click()
    //Click on cart and make sure your item is added
    cy.get('#nav-cart').click()

    cy.contains(alt1).should('exist')
})

})
})
