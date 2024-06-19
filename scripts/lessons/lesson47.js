const questions = [
    {
        text: "Что такое кодирование?",
        options: ["Процесс передачи данных", "Процесс преобразования информации в форму, пригодную для хранения, передачи и обработки", "Процесс создания информации"],
        correct: 1
    },
    {
        text: "Какой метод кодирования использует 7-битные или 8-битные коды для представления символов?",
        options: ["ASCII", "Unicode", "UTF-16"],
        correct: 0
    },
    {
        text: "Какой стандарт кодирования охватывает практически все письменные системы мира?",
        options: ["ASCII", "Unicode", "UTF-8"],
        correct: 1
    },
    {
        text: "Сколько бит использует ASCII для представления символов?",
        options: ["7 бит", "8 бит", "7 или 8 бит"],
        correct: 2
    },
    {
        text: "Какой код используется для представления символа 'A' в ASCII?",
        options: ["01000000", "01000001", "01100001"],
        correct: 1
    },
    {
        text: "Какой десятичный код используется для представления символа 'A' в ASCII?",
        options: ["65", "66", "67"],
        correct: 0
    },
    {
        text: "Какая кодировка Unicode использует несколько байтов для представления символов?",
        options: ["UTF-8", "ASCII", "ANSI"],
        correct: 0
    },
    {
        text: "Какая кодировка используется для символа 'А' (кириллица) в Unicode (UTF-8)?",
        options: ["11000010 10100000", "01000001", "11000001 10100000"],
        correct: 0
    },
    {
        text: "Какой десятичный код используется для представления символа 'А' (кириллица) в Unicode?",
        options: ["65", "128", "1040"],
        correct: 2
    },
    {
        text: "Какой метод кодирования был разработан для решения проблемы ограниченного количества символов в ASCII?",
        options: ["ANSI", "UTF-16", "Unicode"],
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