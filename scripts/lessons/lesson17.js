const questions = [
    {
        text: "Что такое исполнитель?",
        options: ["Объект, способный выполнять заданные команды", "Алгоритм, состоящий из последовательности действий", "Программа, написанная на языке программирования"],
        correct: 0
    },
    {
        text: "Что такое алгоритм?",
        options: ["Последовательность действий для решения задачи", "Программа для компьютера", "Описание задачи"],
        correct: 0
    },
    {
        text: "Какое из свойств алгоритма означает, что алгоритм состоит из отдельных шагов?",
        options: ["Определенность", "Дискретность", "Конечность"],
        correct: 1
    },
    {
        text: "Что означает понятность алгоритма?",
        options: ["Каждое действие должно быть однозначно определено и понятно исполнителю", "Алгоритм должен завершаться за конечное число шагов", "Алгоритм должен приводить к решению задачи"],
        correct: 0
    },
    {
        text: "Какой способ записи алгоритма использует блок-схемы?",
        options: ["Словесный", "Графический", "Программный"],
        correct: 1
    },
    {
        text: "Какой способ записи алгоритма представляет его на языке программирования?",
        options: ["Словесный", "Графический", "Программный"],
        correct: 2
    },
    {
        text: "Как называется последовательность действий для решения конкретной задачи?",
        options: ["Исполнитель", "Программа", "Алгоритм"],
        correct: 2
    },
    {
        text: "Каким способом записи алгоритма является следующая запись: 'Вскипятить воду, залить кипяток в чашку с чаем, добавить сахар по вкусу'?",
        options: ["Словесный", "Графический", "Программный"],
        correct: 0
    },
    {
        text: "Какое из следующих действий является примером алгоритма для робота?",
        options: ["Взять два куска хлеба", "Поднять предмет", "Накрыть вторым куском хлеба"],
        correct: 1
    },
    {
        text: "Что из перечисленного не является свойством алгоритма?",
        options: ["Конечность", "Понятность", "Запутанность"],
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