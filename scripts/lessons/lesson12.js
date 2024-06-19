const questions = [
    {
        text: "Что нужно сделать, чтобы начать новый абзац при вводе текста?",
        options: ["Нажать на клавишу Tab", "Нажать на клавишу Enter", "Нажать на клавишу Shift"],
        correct: 1
    },
    {
        text: "Какой символ используется для отделения соседних слов?",
        options: ["Пробел", "Запятая", "Табуляция"],
        correct: 0
    },
    {
        text: "Как следует писать знаки препинания в тексте?",
        options: ["Слитно с предшествующим словом и отделять пробелом от следующего слова", "С пробелами с обеих сторон", "Слитно с предшествующим и следующим словом"],
        correct: 0
    },
    {
        text: "Как выделить фрагмент текста для редактирования?",
        options: ["Дважды щёлкнуть по тексту", "Зажать левую кнопку мыши и протянуть курсор по нужному тексту", "Нажать клавишу Delete"],
        correct: 1
    },
    {
        text: "Что происходит при нажатии клавиши Insert?",
        options: ["Открывается новое окно", "Переключается режим вставки и замены", "Выделяется весь текст"],
        correct: 1
    },
    {
        text: "Какая клавиша используется для переключения между прописными и строчными буквами?",
        options: ["Caps Lock", "Tab", "Enter"],
        correct: 0
    },
    {
        text: "Как удалить выделенный фрагмент текста?",
        options: ["Нажать клавишу F1", "Нажать клавишу Backspace", "Нажать клавишу Delete"],
        correct: 2
    },
    {
        text: "Что такое форматирование текста?",
        options: ["Процесс печати текста", "Процесс его оформления", "Процесс копирования текста"],
        correct: 1
    },
    {
        text: "Какие виды списков существуют в текстовых документах?",
        options: ["Только маркированные", "Только нумерованные", "Нумерованные и маркированные"],
        correct: 2
    },
    {
        text: "Как можно вставить таблицу в текстовый документ?",
        options: ["Через меню: 'Файл – Новый'", "Через меню: 'Правка – Копировать'", "Через меню: 'Вставка – Таблица'"],
        correct: 2
    }
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