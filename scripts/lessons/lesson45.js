const questions = [
    {
        text: "Что такое логическое выражение?",
        options: ["Математическое выражение, состоящее из чисел", "Математическое выражение, состоящее из логических переменных и операций", "Математическое выражение, состоящее из букв"],
        correct: 1
    },
    {
        text: "Какой результат логической операции A AND 1?",
        options: ["0", "A", "1"],
        correct: 1
    },
    {
        text: "Какой результат логической операции A OR 0?",
        options: ["0", "A", "1"],
        correct: 1
    },
    {
        text: "Какой закон алгебры логики выражается формулой NOT (NOT A) = A?",
        options: ["Закон двойного отрицания", "Закон де Моргана", "Закон нуля"],
        correct: 0
    },
    {
        text: "Что выражает закон коммутативности?",
        options: ["A AND B = B AND A", "A AND B = A OR B", "A OR B = A AND B"],
        correct: 0
    },
    {
        text: "Что выражает закон ассоциативности?",
        options: ["(A AND B) AND C = A AND (B AND C)", "A AND B = B AND A", "A AND B = A OR B"],
        correct: 0
    },
    {
        text: "Что выражает закон дистрибутивности?",
        options: ["A AND (B OR C) = (A AND B) OR (A AND C)", "A AND B = B AND A", "A OR B = A AND B"],
        correct: 0
    },
    {
        text: "Как преобразуется выражение NOT (A OR B) по закону де Моргана?",
        options: ["NOT A AND NOT B", "NOT A OR NOT B", "A AND B"],
        correct: 0
    },
    {
        text: "Какое выражение упрощается до A по законам алгебры логики?",
        options: ["A AND (A OR B)", "A OR (A AND B)", "A AND (A AND B)"],
        correct: 0
    },
    {
        text: "Что дает преобразование выражения NOT (A OR B)?",
        options: ["NOT A AND NOT B", "A AND B", "A OR B"],
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