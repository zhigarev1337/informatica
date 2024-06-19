const questions = [
    {
        text: "Что такое модель?",
        options: ["Материальный объект, представляющий реальный объект", "Упрощенное представление объекта, процесса или явления", "Метод анализа данных"],
        correct: 1
    },
    {
        text: "Что такое моделирование?",
        options: ["Процесс анализа данных", "Процесс создания и использования моделей для изучения реальных объектов, процессов или явлений", "Процесс разработки программного обеспечения"],
        correct: 1
    },
    {
        text: "Какой тип модели описывает объекты и процессы с помощью математических уравнений?",
        options: ["Физические модели", "Математические модели", "Компьютерные модели"],
        correct: 1
    },
    {
        text: "Какой этап моделирования включает исследование поведения модели и проверку ее адекватности?",
        options: ["Построение модели", "Анализ модели", "Интерпретация результатов"],
        correct: 1
    },
    {
        text: "Что включает в себя этап построения модели?",
        options: ["Определение цели и задач моделирования", "Создание модели, описывающей объект или процесс", "Анализ полученных данных"],
        correct: 1
    },
    {
        text: "Какой тип модели создается и используется на компьютерах для имитации реальных систем?",
        options: ["Логические модели", "Компьютерные модели", "Математические модели"],
        correct: 1
    },
    {
        text: "Какой пример представляет собой математическую модель?",
        options: ["dN/dt = rN(1 - N/K)", "Модель роста растений", "Компьютерная модель погоды"],
        correct: 0
    },
    {
        text: "Какой пример представляет собой компьютерную модель?",
        options: ["dN/dt = rN(1 - N/K)", "Компьютерная программа для прогнозирования погоды", "Модель роста популяции"],
        correct: 1
    },
    {
        text: "Что позволяет делать моделирование?",
        options: ["Изучать и понимать сложные системы", "Только анализировать данные", "Только прогнозировать погоду"],
        correct: 0
    },
    {
        text: "Что является одним из типов моделей?",
        options: ["Экономические модели", "Физические модели", "Технические модели"],
        correct: 1
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