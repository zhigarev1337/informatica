const questions = [
    {
        text: "Что такое информационные ресурсы Интернета?",
        options: ["Программное обеспечение для работы в интернете", "Данные и материалы, доступные пользователям через сеть Интернет", "Аппаратное обеспечение для подключения к интернету"],
        correct: 1
    },
    {
        text: "Какой вид информационных ресурсов Интернета представляет собой коллекции цифровых книг и статей?",
        options: ["Веб-сайты", "Электронные библиотеки", "Социальные сети"],
        correct: 1
    },
    {
        text: "Какая поисковая система является одной из наиболее популярных?",
        options: ["Yahoo", "Google", "Bing"],
        correct: 1
    },
    {
        text: "Что такое фильтрация результатов поиска?",
        options: ["Использование ключевых слов", "Отображение только тех данных, которые удовлетворяют определенным условиям", "Использование логических операторов"],
        correct: 1
    },
    {
        text: "Какой метод поиска информации включает использование кавычек для точного поиска?",
        options: ["Использование операторов поиска", "Формулирование запроса", "Фильтрация результатов"],
        correct: 0
    },
    {
        text: "Как называется процесс анализа авторитетности и надежности источников информации?",
        options: ["Формулирование запроса", "Критическое мышление", "Проверка источников"],
        correct: 2
    },
    {
        text: "Какой из следующих ресурсов является научной базой данных?",
        options: ["Google Scholar", "Википедия", "YouTube"],
        correct: 0
    },
    {
        text: "Что следует делать для проверки точности информации из разных источников?",
        options: ["Использовать фильтрацию", "Сравнивать информацию", "Использовать ключевые слова"],
        correct: 1
    },
    {
        text: "Что такое критическое мышление в контексте оценки информации?",
        options: ["Использование логических операторов", "Анализ и интерпретация информации", "Формулирование запроса"],
        correct: 1
    },
    {
        text: "Какая стратегия поиска информации включает использование логических операторов AND, OR, NOT?",
        options: ["Фильтрация результатов", "Проверка источников", "Использование операторов поиска"],
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