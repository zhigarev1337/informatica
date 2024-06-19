const questions = [
    {
        text: "Что такое компьютерная сеть?",
        options: ["Совокупность компьютеров и других устройств, соединенных друг с другом для обмена данными и ресурсами", "Один компьютер, подключенный к интернету", "Система для хранения данных"],
        correct: 0
    },
    {
        text: "Какие типы сетей охватывают большие территории, например, страны или континенты?",
        options: ["Локальные сети (LAN)", "Городские сети (MAN)", "Глобальные сети (WAN)"],
        correct: 2
    },
    {
        text: "Какие сети используют радиосигналы для передачи данных?",
        options: ["Проводные сети", "Беспроводные сети", "Оптоволоконные сети"],
        correct: 1
    },
    {
        text: "Что включает в себя компоненты компьютерных сетей?",
        options: ["Клиенты и серверы, коммуникационные устройства, передающие среды, программное обеспечение", "Только клиенты и серверы", "Только программное обеспечение"],
        correct: 0
    },
    {
        text: "Что такое маршрутизация в компьютерных сетях?",
        options: ["Присвоение уникальных адресов устройствам в сети", "Определение пути для передачи данных от источника к получателю", "Набор правил и стандартов для обмена данными"],
        correct: 1
    },
    {
        text: "Какой из перечисленных протоколов используется для передачи данных в интернет?",
        options: ["HTTP", "FTP", "TCP/IP"],
        correct: 2
    },
    {
        text: "Какое преимущество предоставляет компьютерная сеть?",
        options: ["Совместное использование ресурсов", "Затраты на установку сети", "Проблемы безопасности"],
        correct: 0
    },
    {
        text: "Что такое адресация в компьютерных сетях?",
        options: ["Процесс передачи данных", "Присвоение уникальных адресов устройствам в сети", "Система управления данными"],
        correct: 1
    },
    {
        text: "Какой из перечисленных компонентов относится к коммуникационным устройствам?",
        options: ["Операционная система", "Маршрутизатор", "Текстовый редактор"],
        correct: 1
    },
    {
        text: "Какой недостаток может иметь использование компьютерной сети?",
        options: ["Эффективная коммуникация", "Централизованное управление данными", "Возможность несанкционированного доступа и атак"],
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