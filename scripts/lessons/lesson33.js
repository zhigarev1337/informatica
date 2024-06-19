const questions = [
    {
        text: "Что такое электронная таблица?",
        options: ["Программное средство для редактирования текста", "Программное средство для организации, хранения и обработки данных в табличной форме", "Программное средство для создания графиков"],
        correct: 1
    },
    {
        text: "Как называются основные элементы электронной таблицы, в которых хранятся данные?",
        options: ["Строки", "Столбцы", "Ячейки"],
        correct: 2
    },
    {
        text: "Какие типы данных могут храниться в электронных таблицах?",
        options: ["Числовые, текстовые, дата и время, логические", "Только числовые", "Только текстовые"],
        correct: 0
    },
    {
        text: "Что такое формула в электронной таблице?",
        options: ["Группа ячеек", "Отдельная страница внутри документа", "Выражение, выполняющее вычисления на основе данных в ячейках"],
        correct: 2
    },
    {
        text: "Что делает функция <code>=SUM(A1:A10)</code>?",
        options: ["Суммирует значения в диапазоне ячеек A1:A10", "Находит среднее значение в диапазоне ячеек A1:A10", "Считает количество ячеек в диапазоне A1:A10"],
        correct: 0
    },
    {
        text: "Как называется процесс упорядочения данных по возрастанию или убыванию в электронной таблице?",
        options: ["Фильтрация", "Сортировка", "Консолидация"],
        correct: 1
    },
    {
        text: "Какая функция используется для отображения только тех данных, которые удовлетворяют определенным условиям?",
        options: ["Сортировка", "Фильтрация", "Построение диаграмм"],
        correct: 1
    },
    {
        text: "Что такое диапазоны в электронной таблице?",
        options: ["Отдельные страницы внутри документа", "Группы ячеек, используемые для выполнения операций над несколькими ячейками одновременно", "Числовые данные"],
        correct: 1
    },
    {
        text: "Что позволяет делать консолидация данных в электронной таблице?",
        options: ["Упорядочивать данные", "Объединять данные из нескольких диапазонов или листов", "Визуализировать данные в виде графиков и диаграмм"],
        correct: 1
    },
    {
        text: "Что такое логические данные в электронной таблице?",
        options: ["Строки символов", "Булевы значения (TRUE или FALSE)", "Значения дат и времени"],
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