document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('questionModal');
    const closeBtn = document.querySelector('.close-button');
    const questionForm = document.getElementById('questionForm');
    const askQuestionBtn = document.getElementById('askQuestionBtn');
    const responseMessage = document.createElement('div');
    responseMessage.style.display = 'none';
    document.body.appendChild(responseMessage);

    // Функция для открытия модального окна
    askQuestionBtn.onclick = function() {
        modal.classList.remove('hidden');
        modal.style.display = 'block';
        document.body.classList.add('body-no-scroll'); // Отключаем прокрутку
    };

    // Закрытие модального окна при нажатии на кнопку закрытия
    closeBtn.onclick = function() {
        modal.classList.add('hidden');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('body-no-scroll'); // Включаем прокрутку обратно
        }, 500); // Время должно совпадать с transition
    };

    // Закрытие модального окна при нажатии вне его области
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.classList.remove('body-no-scroll'); // Включаем прокрутку обратно
            }, 500); // Время должно совпадать с transition
        }
    };

    // Обработка отправки формы
    questionForm.onsubmit = function(event) {
        event.preventDefault(); // Предотвратить стандартную отправку формы
        // Здесь код для отправки данных формы, например, через Fetch API
        console.log("Форма отправлена. Преподаватель: ", questionForm.teacherName.value, ", Email: ", questionForm.userEmail.value, ", Вопрос: ", questionForm.userQuestion.value);

        // Показать сообщение об успешной отправке
        responseMessage.textContent = 'Ваш вопрос успешно отправлен!';
        responseMessage.style.display = 'block';
        responseMessage.style.color = 'green';
        responseMessage.style.position = 'fixed';
        responseMessage.style.bottom = '20px';
        responseMessage.style.right = '20px';
        responseMessage.style.padding = '20px';
        responseMessage.style.backgroundColor = '#ddffdd';
        responseMessage.style.border = '1px solid #00aa00';
        responseMessage.style.borderRadius = '5px';

        // Очищаем форму
        questionForm.reset();

        // Плавное закрытие модального окна
        modal.classList.add('hidden');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.classList.remove('body-no-scroll');
        }, 800); // Время должно совпадать с transition
        
        // Скрываем сообщение об отправке через 3 секунды
        setTimeout(function() {
            responseMessage.style.display = 'none';
        }, 3000);
    };

    // Обработка клика на карточки преподавателей
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            window.location.href = link;
        });
    });
});
