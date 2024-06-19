const questions = [
    {
        text: "Что такое повторение в алгоритмах?",
        options: ["Выполнение действия один раз", "Выполнение одного и того же действия многократно", "Выполнение действия в зависимости от условия"],
        correct: 1
    },
    {
        text: "Какой тип цикла выполняется, пока условие истинно?",
        options: ["Цикл с предусловием", "Цикл с постусловием", "Цикл с заданным числом повторений"],
        correct: 0
    },
    {
        text: "Какой цикл выполняет действия хотя бы один раз, а затем до тех пор, пока условие истинно?",
        options: ["Цикл с предусловием", "Цикл с постусловием", "Цикл с заданным числом повторений"],
        correct: 1
    },
    {
        text: "Какой цикл выполняет действия заданное количество раз?",
        options: ["Цикл с предусловием", "Цикл с постусловием", "Цикл с заданным числом повторений"],
        correct: 2
    },
    {
        text: "Какой из следующих примеров является циклом с предусловием?",
        options: ["for (int i = 1; i <= 5; i++) { print(i); }", "int i = 1; while (i <= 5) { print(i); i++; }", "int i = 1; do { print(i); i++; } while (i <= 5);"],
        correct: 1
    },
    {
        text: "Какой из следующих примеров является циклом с постусловием?",
        options: ["for (int i = 1; i <= 5; i++) { print(i); }", "int i = 1; while (i <= 5) { print(i); i++; }", "int i = 1; do { print(i); i++; } while (i <= 5);"],
        correct: 2
    },
    {
        text: "Какой из следующих примеров является циклом с заданным числом повторений?",
        options: ["for (int i = 1; i <= 5; i++) { print(i); }", "int i = 1; while (i <= 5) { print(i); i++; }", "int i = 1; do { print(i); i++; } while (i <= 5);"],
        correct: 0
    },
    {
        text: "Что делает цикл с предусловием?",
        options: ["Выполняет действие до тех пор, пока условие истинно", "Выполняет действие один раз", "Выполняет действие заданное количество раз"],
        correct: 0
    },
    {
        text: "Что делает цикл с постусловием?",
        options: ["Выполняет действие один раз, а затем до тех пор, пока условие истинно", "Выполняет действие до тех пор, пока условие истинно", "Выполняет действие заданное количество раз"],
        correct: 0
    },
    {
        text: "Что делает цикл с заданным числом повторений?",
        options: ["Выполняет действие один раз", "Выполняет действие до тех пор, пока условие истинно", "Выполняет действие заданное количество раз"],
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