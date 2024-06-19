const questions = [
    {
        text: "Что такое информационная безопасность?",
        options: ["Процесс создания программного обеспечения", "Процесс соблюдения доступности, целостности и конфиденциальности информации", "Процесс разработки компьютерных сетей"],
        correct: 1
    },
    {
        text: "Что означает доступность информации в контексте информационной безопасности?",
        options: ["Информация доступна только определённым пользователям", "Информация всегда должна быть доступна для пользователя в безопасном состоянии", "Информация защищена от всех внешних воздействий"],
        correct: 1
    },
    {
        text: "Что такое целостность информации?",
        options: ["Соответствие логической структуры информации определённым правилам", "Возможность изменения информации только пользователем", "Защита информации от вирусов"],
        correct: 0
    },
    {
        text: "Что такое конфиденциальность информации?",
        options: ["Доступ к информации имеет только администратор", "Информация защищена паролем", "Выполнение операций с информацией согласно правилам политики безопасности"],
        correct: 2
    },
    {
        text: "Что такое угроза в информационной безопасности?",
        options: ["Несанкционированное изменение пароля", "Возможность нарушения одного из аспектов информационной безопасности", "Создание новых файлов без разрешения"],
        correct: 1
    },
    {
        text: "Как называется программа, которая распространяется по сети, используя уязвимости в сетевых программах?",
        options: ["Троянский конь", "Компьютерный вирус", "Сетевой червь"],
        correct: 2
    },
    {
        text: "Что такое спам?",
        options: ["Программа для защиты от вирусов", "Массовая несанкционированная рассылка сообщений рекламного или вредоносного характера", "Программа для копирования файлов"],
        correct: 1
    },
    {
        text: "Что такое логин?",
        options: ["Сочетание различных символов, подтверждающих доступ к системе", "Сочетание символов, ассоциирующихся с пользователем; имя пользователя", "Программа для шифрования данных"],
        correct: 1
    },
    {
        text: "Что такое антивирусы?",
        options: ["Программы для создания резервных копий данных", "Специализированные программы для выявления и устранения вирусов", "Программы для защиты паролей"],
        correct: 1
    },
    {
        text: "Какие меры помогут защитить пароль?",
        options: ["Использовать простые пароли и не менять их", "Не разглашать пароль, использовать сложные пароли и периодически их менять", "Хранить пароли в заметках на рабочем столе компьютера"],
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