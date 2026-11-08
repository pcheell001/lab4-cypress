
const STORE = 'https://demo.opencart.cn/';

describe('ЛР4 — Завдання 2.3: додатковий функціонал', () => {

  it('Виконує пошук за назвою товару', () => {

    const query = 'MacBook';

    // 1. Открываем магазин
    cy.visit(STORE);

    // 2. Вводим поисковый запрос
    cy.get('#search input[name="search"]')
      .type(query);

    // 3. Нажимаем поиск
    cy.get('#search button').click();

    // 4. Проверяем заголовок страницы
    cy.get('#content h1')
      .should('contain', 'Search');

    // 5. Проверяем введённое название
    cy.get('#input-search')
      .should('have.value', query);

    // 6. Проверяем параметр в адресной строке
    cy.location('search')
      .should('include', `search=${query}`);

  });

  it('Показує порожній кошик', () => {

    // 1. Открываем магазин
    cy.visit(STORE);

    // 2. Переходим в корзину
    cy.get('#top a[title="Shopping Cart"]')
      .click();

    // 3. Проверяем заголовок
    cy.get('#content h1')
      .should('contain', 'Shopping Cart');

    // 4. Проверяем сообщение о пустой корзине
    cy.get('#content')
      .should('contain', 'Your shopping cart is empty!');

  });

});
