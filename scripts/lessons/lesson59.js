const questions = [
    {
        text: "Что такое компьютерная сеть?",
        options: ["Система программного обеспечения для анализа данных", "Система соединенных между собой компьютеров и других устройств, позволяющая обмениваться данными и ресурсами", "Набор файлов и папок на одном компьютере"],
        correct: 1
    },
    {
        text: "Какой тип сети охватывает небольшую территорию, обычно внутри одного здания или группы зданий?",
        options: ["Глобальная сеть (WAN)", "Локальная сеть (LAN)", "Персональная сеть (PAN)"],
        correct: 1
    },
    {
        text: "Какой тип сети охватывает большие географические территории, такие как города, страны или континенты?",
        options: ["Локальная сеть (LAN)", "Корпоративная сеть (CAN)", "Глобальная сеть (WAN)"],
        correct: 2
    },
    {
        text: "Какой протокол используется для передачи гипертекста в интернете?",
        options: ["FTP", "HTTP", "SMTP"],
        correct: 1
    },
    {
        text: "Какой протокол используется для обмена файлами между компьютерами?",
        options: ["SMTP", "FTP", "TCP/IP"],
        correct: 1
    },
    {
        text: "Какой протокол является основным набором протоколов интернета, обеспечивающим надежную передачу данных?",
        options: ["HTTP", "FTP", "TCP/IP"],
        correct: 2
    },
    {
        text: "Какой пример использования компьютерных сетей связан с хранением данных и запуском приложений на удаленных серверах?",
        options: ["Веб-сайты и онлайн-сервисы", "Облачные вычисления", "Персональные сети"],
        correct: 1
    },
    {
        text: "Какой тип сети используется для передачи данных между личными устройствами, такими как смартфоны, планшеты и ноутбуки?",
        options: ["Локальная сеть (LAN)", "Глобальная сеть (WAN)", "Персональная сеть (PAN)"],
        correct: 2
    },
    {
        text: "Какой пример использования компьютерных сетей позволяет пользователям получать доступ к веб-сайтам, онлайн-магазинам и социальным сетям?",
        options: ["Облачные вычисления", "Корпоративные сети", "Веб-сайты и онлайн-сервисы"],
        correct: 2
    },
    {
        text: "Какой протокол используется для отправки электронных писем?",
        options: ["HTTP", "SMTP", "TCP/IP"],
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