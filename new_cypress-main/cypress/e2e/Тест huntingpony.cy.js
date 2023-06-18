describe('Тестирование huntingpony', function () {
    
    it('Оформление заказа', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="3"] > .header__collections-controls > .header__collections-link').click();
        cy.get('[data-product-id="338933807"] > .product-preview__content > .product-preview__area-title > .product-preview__title > a').click();
        cy.wait(2000);
        cy.get('.add-cart-counter__btn').click();
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.wait(1000);
        cy.get('.cart-controls > .button').click();
        cy.get('.co-checkout-block > .co-button').should('be.enabled');
        cy.get('#client_surname').type('Иванов');
        cy.get('#client_contact_name').type('Игорь');
        cy.get('#client_phone').type('+79114562128');
        cy.get('#client_email').type('Iivan@mail.ru');
        cy.get('#shipping_address_street').type('Уральская');
        cy.get('#shipping_address_house').type('45');
        cy.get('#shipping_address_flat').type('4');
        cy.get('#order_comment').type('Тестовый заказ');
        cy.get('.co-delivery_method-list > .co-input--captcha > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.get('#create_order').click();

    })
})
