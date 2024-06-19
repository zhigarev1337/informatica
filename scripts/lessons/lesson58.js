const questions = [
    {
        text: "Что такое математическая модель?",
        options: ["Реальная система, представленная в виде математических уравнений", "Абстрактное представление реальной системы с использованием математических понятий и языков", "Компьютерная программа для анализа данных"],
        correct: 1
    },
    {
        text: "Что такое стохастическая модель?",
        options: ["Модель, которая учитывает случайные процессы и переменные", "Модель, в которой все параметры точно определены", "Модель, описывающая систему в определенный момент времени"],
        correct: 0
    },
    {
        text: "Какой тип модели описывает изменения системы во времени?",
        options: ["Динамические модели", "Статические модели", "Стохастические модели"],
        correct: 0
    },
    {
        text: "Какой тип модели учитывает случайные процессы и неопределенности?",
        options: ["Детерминированные модели", "Статические модели", "Стохастические модели"],
        correct: 2
    },
    {
        text: "Какой пример математической модели описывает популяционный рост?",
        options: ["F = ma", "E = mc^2", "dN/dt = rN(1 - N/K)"],
        correct: 2
    },
    {
        text: "Какое уравнение описывает модель движения тела под действием силы?",
        options: ["E = mc^2", "F = ma", "dN/dt = rN(1 - N/K)"],
        correct: 1
    },
    {
        text: "Какой пример стохастической модели?",
        options: ["Модель случайного блуждания", "Модель популяционного роста", "Модель движения тела под действием силы"],
        correct: 0
    },
    {
        text: "Какой тип модели описывает систему в определенный момент времени, не учитывая её изменения?",
        options: ["Динамические модели", "Статические модели", "Стохастические модели"],
        correct: 1
    },
    {
        text: "Что описывает уравнение x(t+1) = x(t) + ξ?",
        options: ["Модель движения тела под действием силы", "Модель случайного блуждания", "Модель популяционного роста"],
        correct: 1
    },
    {
        text: "Какое преимущество имеют математические модели?",
        options: ["Позволяют исследовать сложные процессы и делать их более понятными и предсказуемыми", "Гарантируют точные результаты в любых условиях", "Не требуют значительных ресурсов для разработки"],
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