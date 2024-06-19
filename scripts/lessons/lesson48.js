const questions = [
    {
        text: "Что такое обработка текстовой информации?",
        options: ["Процесс создания текстов", "Процесс преобразования текстовых данных для удобства их хранения, передачи и анализа", "Процесс копирования текстов"],
        correct: 1
    },
    {
        text: "Какой метод обработки текста позволяет находить и заменять определенные фрагменты текста?",
        options: ["Анализ текста", "Форматирование текста", "Поиск и замена"],
        correct: 2
    },
    {
        text: "Что включает форматирование текста?",
        options: ["Изменение шрифта, размера, цвета и других характеристик текста", "Извлечение ключевых слов", "Сжатие текстовых данных"],
        correct: 0
    },
    {
        text: "Какой инструмент используется для создания и редактирования текста?",
        options: ["Текстовые редакторы", "Инструменты командной строки", "Программные библиотеки"],
        correct: 0
    },
    {
        text: "Какой пример программной библиотеки для обработки текста на Python?",
        options: ["StringUtils", "grep", "NLTK"],
        correct: 2
    },
    {
        text: "Что позволяет сделать сжатие текста?",
        options: ["Изменить шрифт текста", "Уменьшить объем текстовых данных", "Извлечь ключевые слова"],
        correct: 1
    },
    {
        text: "Какой метод обработки текста включает определение частоты слов?",
        options: ["Форматирование текста", "Поиск и замена", "Анализ текста"],
        correct: 2
    },
    {
        text: "Какой инструмент используется для обработки текста в командной строке?",
        options: ["Microsoft Word", "Google Docs", "grep"],
        correct: 2
    },
    {
        text: "Какой метод обработки текста позволяет экономить место хранения?",
        options: ["Поиск и замена", "Анализ текста", "Сжатие текста"],
        correct: 2
    },
    {
        text: "Какой пример утилиты командной строки для сжатия текстового файла?",
        options: ["grep", "gzip", "sed"],
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