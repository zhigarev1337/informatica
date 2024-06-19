const questions = [
    {
        text: "Что такое табличная информационная модель?",
        options: ["Способ представления данных в виде графов", "Способ представления данных в виде таблицы", "Способ представления данных в виде текста"],
        correct: 1
    },
    {
        text: "Какая часть табличной модели представляет один объект или запись?",
        options: ["Столбец", "Заголовок", "Строка"],
        correct: 2
    },
    {
        text: "Что представляет один атрибут или характеристику объекта в табличной модели?",
        options: ["Столбец", "Ячейка", "Строка"],
        correct: 0
    },
    {
        text: "Что содержат ячейки в табличной модели?",
        options: ["Названия атрибутов", "Конкретные значения атрибутов для объектов", "Описание таблицы"],
        correct: 1
    },
    {
        text: "Для чего используются заголовки в табличных моделях?",
        options: ["Для обозначения названий атрибутов и объектов", "Для подсчета итогов", "Для выделения важных данных"],
        correct: 0
    },
    {
        text: "Какие базы данных используют табличные модели для хранения данных?",
        options: ["Объектно-ориентированные базы данных", "Реляционные базы данных", "Иерархические базы данных"],
        correct: 1
    },
    {
        text: "Какой инструмент позволяет создавать, редактировать и анализировать табличные данные?",
        options: ["Microsoft Word", "Microsoft Excel", "Adobe Photoshop"],
        correct: 1
    },
    {
        text: "Какая библиотека в Python предоставляет инструменты для работы с табличными данными?",
        options: ["NumPy", "Pandas", "Matplotlib"],
        correct: 1
    },
    {
        text: "Что представляет собой таблица в табличной информационной модели?",
        options: ["Графическое изображение данных", "Текстовое описание данных", "Структура, состоящая из строк и столбцов"],
        correct: 2
    },
    {
        text: "Какой элемент табличной модели используется для обозначения атрибутов объекта?",
        options: ["Заголовок", "Столбец", "Строка"],
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