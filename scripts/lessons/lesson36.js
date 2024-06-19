const questions = [
    {
        text: "Что такое веб-сайт?",
        options: ["Программное обеспечение для разработки", "Совокупность связанных веб-страниц, доступных в Интернете под единым доменным именем", "Текстовый редактор для написания кода"],
        correct: 1
    },
    {
        text: "Какая часть веб-сайта содержит основную страницу, с которой начинается навигация?",
        options: ["Футер", "Контент", "Домашняя страница"],
        correct: 2
    },
    {
        text: "Какой инструмент используется для создания и редактирования графики?",
        options: ["Текстовые редакторы", "Графические редакторы", "Системы управления контентом (CMS)"],
        correct: 1
    },
    {
        text: "Какой этап разработки веб-сайта включает определение цели сайта, аудитории и структуры?",
        options: ["Дизайн", "Планирование", "Тестирование"],
        correct: 1
    },
    {
        text: "Какой язык используется для создания структуры веб-страниц?",
        options: ["CSS", "JavaScript", "HTML"],
        correct: 2
    },
    {
        text: "Какой инструмент позволяет создавать сайты без необходимости программирования?",
        options: ["Онлайн-конструкторы сайтов", "Графические редакторы", "Текстовые редакторы"],
        correct: 0
    },
    {
        text: "Что такое CSS?",
        options: ["Язык программирования для создания интерактивных элементов", "Язык разметки для создания структуры веб-страниц", "Язык стилей для оформления внешнего вида веб-страниц"],
        correct: 2
    },
    {
        text: "Что включает этап тестирования веб-сайта?",
        options: ["Проверка работы сайта на различных устройствах и в разных браузерах", "Определение цели сайта", "Написание кода"],
        correct: 0
    },
    {
        text: "Какая часть веб-страницы содержит контактную информацию и ссылки на политику конфиденциальности?",
        options: ["Контент", "Навигационное меню", "Футер"],
        correct: 2
    },
    {
        text: "Пример простейшей HTML-страницы включает какой из следующих тегов?",
        options: ["<script>", "<div>", "<title>"],
        correct: 2
    },
];

let currentQuestionIndex = 0;
let score = 0; // Подсчёт правильных ответов

// Функция для отображения вопроса
function showQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    
    // Проверяем, что есть текущий вопрос
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        
        // Очищаем предыдущие вопросы и ответы
        questionContainer.innerHTML = '';
        optionsContainer.innerHTML = '';
        optionsContainer.style.display = '';
        
        // Добавляем заголовок вопроса
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = currentQuestion.text;
        questionContainer.appendChild(questionTitle);
        
        // Добавляем ответы
        currentQuestion.options.forEach((option, index) => {
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'option';
            optionInput.value = index;
            optionInput.id = 'option-' + index;
            optionInput.className = 'option-input';
            
            const optionLabel = document.createElement('label');
            optionLabel.htmlFor = optionInput.id;
            optionLabel.className = 'option-label';
            optionLabel.textContent = option;
            
            // Добавляем радио-кнопку и лейбл в DOM
            optionsContainer.appendChild(optionInput);
            optionsContainer.appendChild(optionLabel);
            optionsContainer.appendChild(document.createElement('br'));
        });
    } else {
        // Если вопросов больше нет, показываем результаты
        showResults();
    }
}

// Функция для показа результатов теста
function showResults() {
    const testModal = document.getElementById('testModal');
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const nextButton = document.getElementById('nextQuestionBtn');
    
    // Скрываем ненужные элементы
    optionsContainer.style.display = 'none'; // Скрываем варианты ответов
    nextButton.style.display = 'none'; // Скрываем кнопку "Следующий вопрос"

    // Отображаем результаты
    questionContainer.innerHTML = `<h3>Ваш результат:</h3><p>Вы ответили правильно на ${score} из ${questions.length} вопросов.</p>`;
    
    // Создаем кнопку для перезапуска теста
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Вернуться к уроку';
    restartButton.className = 'button-style restart-button';
    
    restartButton.addEventListener('click', function() {
        testModal.style.display = 'none';
        restartTest();
    });
    
    // Добавляем кнопку перезапуска в контейнер вопроса
    questionContainer.appendChild(restartButton);
}

function restartTest() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('options').innerHTML = ''; // Очищаем варианты ответов
    document.getElementById('nextQuestionBtn').style.display = 'block'; // Восстанавливаем кнопку "Следующий вопрос"
    showQuestion(); // Начинаем тест снова
}

// Прослушивание событий на кнопках
document.getElementById('startTestBtn').addEventListener('click', function() {
    document.getElementById('testModal').style.display = 'block';
    showQuestion();
});

document.getElementById('nextQuestionBtn').addEventListener('click', function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const errorMessageElement = document.getElementById('errorMessage');
    
    if (!selectedOption) {
        // Показываем сообщение об ошибке, если ответ не выбран
        errorMessageElement.style.display = 'block';
        return;
    } else {
        // Скрываем сообщение об ошибке, если ответ выбран
        errorMessageElement.style.display = 'none';
    }
    
    // Проверяем правильность выбранного ответа
    const answer = parseInt(selectedOption.value);
    if (answer === questions[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
    restartTest();
    document.getElementById('testModal').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
});