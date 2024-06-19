const questions = [
    {
        text: "Что такое программное обеспечение (ПО)?",
        options: ["Совокупность аппаратных средств компьютера", "Совокупность программ, предназначенных для выполнения задач на компьютере и управления его ресурсами", "Совокупность данных, хранящихся на компьютере"],
        correct: 1
    },
    {
        text: "К какому типу программного обеспечения относится операционная система?",
        options: ["Системное программное обеспечение", "Прикладное программное обеспечение", "Инструментальное программное обеспечение"],
        correct: 0
    },
    {
        text: "Какой тип программного обеспечения предназначен для выполнения конкретных задач пользователя?",
        options: ["Системное программное обеспечение", "Прикладное программное обеспечение", "Инструментальное программное обеспечение"],
        correct: 1
    },
    {
        text: "Какой пример прикладного программного обеспечения?",
        options: ["Операционная система", "Текстовый редактор", "Драйвер устройства"],
        correct: 1
    },
    {
        text: "Что включает системное программное обеспечение?",
        options: ["Текстовые редакторы и таблицы", "Операционные системы, драйверы устройств и утилиты", "Средства разработки и отладчики"],
        correct: 1
    },
    {
        text: "Какой пример инструментального программного обеспечения?",
        options: ["Браузер", "Система управления версиями", "Мультимедийное приложение"],
        correct: 1
    },
    {
        text: "Что обеспечивает операционная система?",
        options: ["Управление аппаратными средствами компьютера и выполнение прикладных программ", "Редактирование изображений", "Воспроизведение аудио и видео"],
        correct: 0
    },
    {
        text: "Какое программное обеспечение используется для создания и редактирования изображений?",
        options: ["Офисные приложения", "Графические редакторы", "Системы управления версиями"],
        correct: 1
    },
    {
        text: "Какой тип программного обеспечения включает интегрированные среды разработки (IDE)?",
        options: ["Системное программное обеспечение", "Прикладное программное обеспечение", "Инструментальное программное обеспечение"],
        correct: 2
    },
    {
        text: "Что выполняют драйверы устройств?",
        options: ["Воспроизводят аудио и видео", "Обеспечивают взаимодействие операционной системы с аппаратными средствами компьютера", "Контролируют изменения в исходном коде"],
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