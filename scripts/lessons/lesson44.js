const questions = [
    {
        text: "Что такое алгебра логики?",
        options: ["Раздел математики, изучающий числа", "Раздел математики, изучающий логические операции и их применение", "Раздел информатики, изучающий алгоритмы"],
        correct: 1
    },
    {
        text: "Какая логическая операция обозначается как AND?",
        options: ["Конъюнкция", "Дизъюнкция", "Отрицание"],
        correct: 0
    },
    {
        text: "Какая логическая операция дает результат истинный, если хотя бы один операнд истинный?",
        options: ["Конъюнкция", "Дизъюнкция", "Отрицание"],
        correct: 1
    },
    {
        text: "Что делает логическая операция NOT?",
        options: ["Меняет значение операнда на противоположное", "Объединяет значения двух операндов", "Находит общие значения двух операндов"],
        correct: 0
    },
    {
        text: "Какой результат логической операции AND для значений A = 1 и B = 0?",
        options: ["0", "1", "Ошибка"],
        correct: 0
    },
    {
        text: "Какой результат логической операции OR для значений A = 0 и B = 1?",
        options: ["0", "1", "Ошибка"],
        correct: 1
    },
    {
        text: "Какой результат логической операции NOT для значения A = 1?",
        options: ["0", "1", "Ошибка"],
        correct: 0
    },
    {
        text: "Для чего используется таблица истинности?",
        options: ["Для выполнения арифметических операций", "Для определения значений логических выражений при всех возможных комбинациях значений операндов", "Для хранения данных"],
        correct: 1
    },
    {
        text: "Какое применение алгебры логики в информатике?",
        options: ["Проектирование цифровых схем", "Создание изображений", "Редактирование видео"],
        correct: 0
    },
    {
        text: "Что изучает алгебра логики?",
        options: ["Логические операции и их применение", "Физические свойства материалов", "Историю вычислительной техники"],
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