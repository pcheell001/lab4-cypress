
const STORE = 'https://demo.opencart.cn/';

describe('ЛР4 — Завдання 2.1: навігація OpenCart', () => {

  // Список страниц, которые будем проверять
  const sections = [
    ['Terms & Conditions', 'Terms & Conditions'],
    ['Delivery Information', 'Delivery Information'],
    ['About Us', 'About Us'],
    ['Privacy Policy', 'Privacy Policy'],
    ['Contact Us', 'Contact Us'],
    ['Site Map', 'Site Map'],
    ['Brands', 'Find Your Favorite Brand'],
    ['Specials', 'Special Offers']
  ];

  // Проверяем переходы по восьми страницам
  sections.forEach(([linkText, heading]) => {

    it(`Відкриває розділ: ${linkText}`, () => {

      // Открываем главную страницу
      cy.visit(STORE);

      // Находим ссылку в нижнем меню
      cy.get('footer')
        .contains('a', linkText)
        .click();

      // Проверяем заголовок открытой страницы
      cy.get('#content')
        .contains('h1,h2', heading)
        .should('be.visible');

    });

  });

  // Девятый тест — исправленный переход к категории
  it('Переходить до категорії Laptops & Notebooks', () => {

    // 1. Открываем главную страницу
    cy.visit(STORE);

    // 2. Нажимаем Site Map
    cy.get('footer')
      .contains('a', 'Site Map')
      .click();

    // 3. Проверяем карту сайта
    cy.get('#content')
      .contains('h1,h2', 'Site Map')
      .should('be.visible');

    // 4. Находим категорию Laptops & Notebooks
    cy.get('#content')
      .contains('a', 'Laptops & Notebooks')
      .click();

    // 5. Проверяем правильность адреса
    cy.location('search')
      .should('include', 'path=18');

    // 6. Проверяем заголовок категории
    cy.get('#content')
      .contains('h1,h2', 'Laptops & Notebooks')
      .should('be.visible');

  });

});
