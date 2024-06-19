const questions = [
    {
        text: "Что такое информационная связь?",
        options: ["Процесс передачи сигналов в биологических системах", "Процесс обмена информацией между элементами системы", "Процесс передачи энергии между элементами системы"],
        correct: 1
    },
    {
        text: "Какие бывают типы информационных связей?",
        options: ["Прямые и косвенные", "Обратные и непрямые", "Прямые и обратные"],
        correct: 2
    },
    {
        text: "Какую роль играют информационные связи в биологических системах?",
        options: ["Регулируют физиологические процессы через гормоны", "Передают электрические сигналы между устройствами", "Обеспечивают координацию работы машин"],
        correct: 0
    },
    {
        text: "Какая система в биологических организмах передает сигналы между различными частями тела?",
        options: ["Кровеносная система", "Нервная система", "Лимфатическая система"],
        correct: 1
    },
    {
        text: "Что используется в технических системах для регулирования процессов?",
        options: ["Гормоны", "Социальные сети", "Системы автоматического управления"],
        correct: 2
    },
    {
        text: "Какую роль играют компьютерные сети в технических системах?",
        options: ["Обеспечивают координацию работы машин", "Передают генетическую информацию", "Обеспечивают обмен данными между устройствами и пользователями"],
        correct: 2
    },
    {
        text: "Какие средства массовой информации играют важную роль в социальных системах?",
        options: ["Газеты и журналы", "Телекоммуникационные сети", "Интернет-провайдеры"],
        correct: 0
    },
    {
        text: "Что позволяет людям общаться и обмениваться информацией в реальном времени в социальных системах?",
        options: ["Электронная почта", "Социальные сети", "Телевизионные программы"],
        correct: 1
    },
    {
        text: "Что используется для координации работы сотрудников и управления процессами в организациях?",
        options: ["Внешние сети", "Локальные сети", "Внутренние информационные системы"],
        correct: 2
    },
    {
        text: "Какую роль играют информационные связи в различных системах?",
        options: ["Обеспечивают эффективное функционирование и взаимодействие элементов системы", "Управляют физическими процессами в системах", "Регулируют температуру в системах"],
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