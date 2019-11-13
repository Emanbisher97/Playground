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

cy.wait(1000)

cy.get('#nav-link-accountList').trigger('mouseover')

//Click on Sign in button

cy.get('#nav-al-signin .nav-action-button').click()

//Fill email field

cy.get('[type="email"]').type(email)

cy.get('#continue').click()

//if apper a screen to enable cookies

if(cy.contains('Password')==""){

cy.contains('Go back to previous page').click()

cy.get('#continue').click()

cy.get('[type="password"]').type(pass)

cy.get('#signInSubmit').click()

cy.contains('Go back to previous page').click()

cy.get('#continue').click()

cy.get('[type="password"]').type(pass)

cy.get('#signInSubmit').click()

cy.get('#continue').click()

cy.get('.a-input-text').click()

}

else{

//fill password

cy.get('[type="password"]').type(pass)

cy.get('#signInSubmit').click()

}

//if Authentication required go to your email and enter the code

if(cy.contains('Authentication required')!="" || cy.contains('Hello')==""){

cy.get('#continue').click()

cy.pause()

cy.get('.a-input-text').click()

cy.get('#a-autoid-0 > .a-button-inner > .a-button-input').click()

}

// Make sure you signed in

cy.get('#nav-link-accountList').should(($p) => {

expect($p).to.contain('Hello')

})

//Search for Samsung Galaxy s10

cy.get('#twotabsearchtextbox').type('Samsung Galaxy s10')

cy.get('.nav-search-submit > .nav-input').click()

//Click on the first result

cy.get('[aria-posinset="2"] > .s-inner-result-item > :nth-child(1)').click()

//Add it to cart

const t=cy.get('#add-to-cart-button-ubb').text

cy.get('#add-to-cart-button-ubb').click()

//Click on cart and make sure your item is added

cy.get('#nav-cart').click()

cy.get('#a-page').should(($p) => {

expect($p).to.contain(t)

})

})

})