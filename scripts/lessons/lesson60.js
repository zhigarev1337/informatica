const questions = [
    {
        text: "Что такое веб-технологии?",
        options: ["Набор инструментов и методов для создания и управления веб-сайтами и веб-приложениями", "Язык программирования для создания мобильных приложений", "Система управления базами данных"],
        correct: 0
    },
    {
        text: "Какой язык разметки используется для создания структуры веб-страниц?",
        options: ["CSS", "JavaScript", "HTML"],
        correct: 2
    },
    {
        text: "Какой язык стилей используется для описания внешнего вида веб-страниц?",
        options: ["HTML", "CSS", "JavaScript"],
        correct: 1
    },
    {
        text: "Какой язык программирования используется для создания интерактивных элементов на веб-страницах?",
        options: ["HTML", "CSS", "JavaScript"],
        correct: 2
    },
    {
        text: "Что такое веб-серверы?",
        options: ["Серверы, на которых хранятся веб-сайты и обрабатываются запросы пользователей", "Программы для создания веб-страниц", "Системы хранения данных"],
        correct: 0
    },
    {
        text: "Какой протокол используется для передачи данных между веб-браузером и веб-сервером?",
        options: ["HTTPS", "HTTP", "FTP"],
        correct: 1
    },
    {
        text: "Какая защищенная версия HTTP использует шифрование для защиты данных?",
        options: ["FTP", "HTTP", "HTTPS"],
        correct: 2
    },
    {
        text: "Что такое REST?",
        options: ["Протокол передачи файлов", "Архитектурный стиль для создания веб-сервисов, использующих HTTP", "Протокол для отправки электронных писем"],
        correct: 1
    },
    {
        text: "Какой пример использования веб-технологий включает создание корпоративного веб-сайта с использованием HTML, CSS и JavaScript?",
        options: ["Облачные вычисления", "Создание интернет-магазина", "Создание корпоративного веб-сайта"],
        correct: 2
    },
    {
        text: "Что включает разработка веб-приложения для интернет-магазина?",
        options: ["Использование баз данных для хранения информации о товарах и заказах", "Создание мобильного приложения", "Разработка операционной системы"],
        correct: 0
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