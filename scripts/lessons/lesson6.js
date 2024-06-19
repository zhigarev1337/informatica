const questions = [
    {
        text: "Как называется минимальная единица измерения информации?",
        options: ["Байт", "Бит", "Символ"],
        correct: 1
    },
    {
        text: "Сколько символов содержится в алфавите, если его информационный вес равен 5 битам?",
        options: ["16 символов", "32 символа", "64 символа"],
        correct: 1
    },
    {
        text: "Сколько битов в одном байте?",
        options: ["8 бит", "16 бит", "4 бита"],
        correct: 0
    },
    {
        text: "Сколько битов нужно, чтобы закодировать алфавит из 256 символов?",
        options: ["8 бит", "16 бит", "32 бита"],
        correct: 0
    },
    {
        text: "Какой объём информации несёт сообщение длиной 100 символов, если каждый символ имеет информационный вес 7 бит?",
        options: ["700 бит", "800 бит", "900 бит"],
        correct: 0
    },
    {
        text: "Сколько байт составляет 1 килобайт (Кб)?",
        options: ["1000 байт", "1024 байта", "1048 байт"],
        correct: 1
    },
    {
        text: "Как называется таблица, которая сопоставляет символы и их двоичные коды?",
        options: ["Таблица ASCII", "Таблица Unicode", "Таблица Брайля"],
        correct: 0
    },
    {
        text: "Какой двоичный код соответствует букве 'A' в таблице ASCII?",
        options: ["01000001", "01100001 ", "00100001"],
        correct: 0
    },
    {
        text: "Какой принцип используется для расположения символов в таблице ASCII?",
        options: ["Случайный порядок", "Последовательное кодирование", "Алфавитный порядок для латинских букв"],
        correct: 1
    },
    {
        text: "Сколько килобайт составляет 1 мегабайт (Мб)?",
        options: ["1000 Кб", "1024 Кб", "2048 Кб"],
        correct: 1
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