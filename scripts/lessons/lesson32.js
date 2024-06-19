const questions = [
    {
        text: "Что такое система управления базами данных (СУБД)?",
        options: ["Набор файлов", "Программное обеспечение для создания, управления и обработки баз данных", "Аппаратное обеспечение для хранения данных"],
        correct: 1
    },
    {
        text: "Какая функция СУБД обеспечивает контроль доступа к данным и управление пользователями?",
        options: ["Создание и изменение структуры базы данных", "Обеспечение безопасности данных", "Выполнение запросов и генерация отчетов"],
        correct: 1
    },
    {
        text: "Какой тип СУБД хранит данные в виде документов?",
        options: ["Реляционные СУБД", "Документо-ориентированные СУБД", "Ключ-значение СУБД"],
        correct: 1
    },
    {
        text: "Примером какой СУБД является MySQL?",
        options: ["Реляционные СУБД", "Документо-ориентированные СУБД", "Графовые СУБД"],
        correct: 0
    },
    {
        text: "Какая функция СУБД включает создание резервных копий данных и их восстановление в случае сбоя?",
        options: ["Обеспечение целостности данных", "Резервное копирование и восстановление", "Ввод, изменение и удаление данных"],
        correct: 1
    },
    {
        text: "Какая модель данных организует данные в виде графов?",
        options: ["Иерархическая модель", "Реляционная модель", "Графовая модель"],
        correct: 2
    },
    {
        text: "Какой пример СУБД относится к графовым базам данных?",
        options: ["Redis", "Neo4j", "MongoDB"],
        correct: 1
    },
    {
        text: "Какая функция СУБД обеспечивает возможность добавления новых данных, их обновления и удаления?",
        options: ["Создание и изменение структуры базы данных", "Ввод, изменение и удаление данных", "Обеспечение безопасности данных"],
        correct: 1
    },
    {
        text: "Примером какой СУБД является MongoDB?",
        options: ["Документо-ориентированные СУБД", "Ключ-значение СУБД", "Реляционные СУБД"],
        correct: 0
    },
    {
        text: "Какая функция СУБД поддерживает ограничения и правила, которые гарантируют правильность и согласованность данных?",
        options: ["Выполнение запросов и генерация отчетов", "Обеспечение целостности данных", "Резервное копирование и восстановление"],
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