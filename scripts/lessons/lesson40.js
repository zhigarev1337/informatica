const questions = [
    {
        text: "Что такое обработка информации?",
        options: ["Процесс сохранения данных", "Процесс преобразования данных в полезную информацию", "Процесс передачи данных"],
        correct: 1
    },
    {
        text: "Какой метод обработки информации включает упорядочение данных по определенным критериям?",
        options: ["Фильтрация", "Сортировка", "Агрегирование"],
        correct: 1
    },
    {
        text: "Какие средства используются для проводной передачи информации?",
        options: ["Радиосигналы", "Оптические кабели", "Инфракрасное излучение"],
        correct: 1
    },
    {
        text: "Что такое хранение информации?",
        options: ["Процесс сохранения данных в течение определенного времени", "Процесс обмена данными между устройствами", "Процесс преобразования данных"],
        correct: 0
    },
    {
        text: "Какой из перечисленных носителей относится к магнитным носителям?",
        options: ["CD диск", "Жесткий диск", "SSD"],
        correct: 1
    },
    {
        text: "Какой метод обработки информации включает представление данных в графическом виде?",
        options: ["Агрегирование", "Анализ", "Визуализация"],
        correct: 2
    },
    {
        text: "Какие средства используются для беспроводной передачи информации?",
        options: ["Магнитные ленты", "Витая пара", "Радиосигналы"],
        correct: 2
    },
    {
        text: "Что такое агрегирование данных?",
        options: ["Объединение данных для получения сводной информации", "Отбор данных, соответствующих условиям", "Изучение данных для выявления закономерностей"],
        correct: 0
    },
    {
        text: "Какой из перечисленных носителей относится к полупроводниковым носителям?",
        options: ["Магнитная лента", "Blu-ray диск", "Флеш-накопитель"],
        correct: 2
    },
    {
        text: "Какое из перечисленных утверждений верно?",
        options: ["Обработка данных включает только фильтрацию", "Передача информации возможна только по проводам", "Облачные хранилища предоставляют доступ к данным через Интернет"],
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