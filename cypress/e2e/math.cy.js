
describe('ЛР4 — Завдання 1: математична форма', () => {

  it('Обчислює функцію і відправляє правильну відповідь', () => {

    // Перехватываем сообщения браузера
    const alertSpy = cy.stub();

    cy.on('window:alert', alertSpy);

    // 1. Открываем страницу
    cy.visit('https://suninjuly.github.io/math.html');

    // 2. Получаем значение x
    cy.get('#input_value')
      .invoke('text')
      .then((text) => {

        const x = Number(text.trim());

        expect(Number.isFinite(x)).to.eq(true);

        // 3. Вычисляем формулу
        const answer = Math.log(
          Math.abs(12 * Math.sin(x))
        );

        // 4. Вводим ответ
        cy.get('#answer')
          .type(String(answer), { delay: 0 });
      });

    // 5. Отмечаем checkbox
    cy.get('#robotCheckbox')
      .check()
      .should('be.checked');

    // 6. Выбираем Robots rule!
    cy.get('#robotsRule')
      .check()
      .should('be.checked');

    // 7. Нажимаем Submit
    cy.get('button[type="submit"]').click();

    // 8. Проверяем сообщение об успехе
    cy.then(() => {
      expect(alertSpy).to.have.been.called;

      expect(alertSpy.firstCall.args[0])
        .to.include('Congrats');
    });

  });

});
