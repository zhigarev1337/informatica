const questions = [
    {
        text: "Что такое логическая задача?",
        options: ["Задача, решение которой требует применения логического мышления и использования логических операций", "Задача, требующая математических расчетов", "Задача, основанная на анализе данных"],
        correct: 0
    },
    {
        text: "Какие задачи требуют анализа логических выражений и определения их истинности или ложности?",
        options: ["Задачи на поиск закономерностей", "Задачи на составление и разбор логических выражений", "Задачи на определение истинности высказываний"],
        correct: 2
    },
    {
        text: "Какой метод решения логических задач заключается в проверке всех возможных вариантов?",
        options: ["Метод исключения", "Метод перебора", "Метод построения таблиц истинности"],
        correct: 1
    },
    {
        text: "Что представляет собой метод исключения?",
        options: ["Проверку всех возможных вариантов для нахождения решения", "Последовательное исключение неверных вариантов для нахождения правильного решения", "Использование таблиц истинности для анализа логических выражений"],
        correct: 1
    },
    {
        text: "Какой метод решения логических задач использует таблицы истинности?",
        options: ["Метод исключения", "Метод перебора", "Метод построения таблиц истинности"],
        correct: 2
    },
    {
        text: "Что необходимо для решения логических задач на поиск закономерностей?",
        options: ["Анализ последовательностей или наборов данных", "Проверка всех возможных вариантов", "Использование таблиц истинности"],
        correct: 0
    },
    {
        text: "Какое значение будет у выражения (A AND B) OR (NOT A) при A = 0 и B = 1?",
        options: ["0", "1", "Ошибка"],
        correct: 1
    },
    {
        text: "Какое значение будет у выражения (A AND B) OR (NOT A) при A = 1 и B = 0?",
        options: ["0", "1", "Ошибка"],
        correct: 1
    },
    {
        text: "Как найти закономерность в последовательности чисел 2, 4, 8, 16, ...?",
        options: ["Каждый следующий элемент равен предыдущему, умноженному на 2", "Каждый следующий элемент равен предыдущему, разделенному на 2", "Каждый следующий элемент равен предыдущему, прибавленному на 2"],
        correct: 0
    },
    {
        text: "Для чего используются логические задачи?",
        options: ["Для развития аналитического мышления и навыков решения проблем", "Для выполнения математических расчетов", "Для анализа данных"],
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