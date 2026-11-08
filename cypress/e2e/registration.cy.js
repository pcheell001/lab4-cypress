
const STORE = 'https://demo.opencart.cn/';

describe('ЛР4 — Завдання 2.2: реєстрація', () => {

  it('Реєструє нового тестового користувача', () => {

    // Генерируем уникальный тестовый email
    const email =
      `lab4test${Date.now()}${Math.floor(Math.random() * 10000)}@example.com`;

    // 1. Открываем страницу регистрации
    cy.visit(
      `${STORE}index.php?route=account/register&language=en-gb`
    );

    // 2. Проверяем, что форма открылась
    cy.get('#content h1')
      .should('contain', 'Register Account');

    // 3. Вводим имя
    cy.get('#input-firstname').type('Test');

    // 4. Вводим фамилию
    cy.get('#input-lastname').type('Student');

    // 5. Вводим тестовый email
    cy.get('#input-email').type(email);

    // 6. Вводим пароль
    cy.get('#input-password').type('Lab4Test2026!');

    // 7. Подтверждаем согласие с Privacy Policy
    cy.get('input[name="agree"]')
      .check()
      .should('be.checked');

    // 8. Нажимаем Continue
    cy.get('#form-register button[type="submit"]')
      .click();

    // 9. Проверяем успешную регистрацию
    cy.get('#content h1')
      .should('contain', 'Your Account Has Been Created');

  });

});
