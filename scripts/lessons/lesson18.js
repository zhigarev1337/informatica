const questions = [
    {
        text: "Что такое объекты алгоритмов?",
        options: ["Данные, с которыми работают алгоритмы", "Шаги алгоритма", "Результаты выполнения алгоритма"],
        correct: 0
    },
    {
        text: "Что такое следование в алгоритмах?",
        options: ["Параллельное выполнение действий", "Последовательное выполнение действий", "Условное выполнение действий"],
        correct: 1
    },
    {
        text: "Каким способом записи алгоритма является следующий пример: 'Прочитать значение переменной a. Прочитать значение переменной b. Вычислить сумму a + b. Вывести сумму на экран'?",
        options: ["Словесный", "Графический", "Программный"],
        correct: 0
    },
    {
        text: "Какое из следующих действий является частью алгоритмической конструкции 'следование'?",
        options: ["Проверка условия", "Выполнение действий одно за другим", "Повторение действий до выполнения условия"],
        correct: 1
    },
    {
        text: "Что означает конечность алгоритма?",
        options: ["Алгоритм состоит из отдельных шагов", "Алгоритм завершается за конечное число шагов", "Алгоритм может быть выполнен разными способами"],
        correct: 1
    },
    {
        text: "Что представляет собой переменная 'sum' в следующем алгоритме: 'Прочитать значение переменной a. Прочитать значение переменной b. Вычислить сумму a + b и сохранить результат в переменную sum. Вывести значение переменной sum на экран'?",
        options: ["Объект алгоритма", "Шаг алгоритма", "Конструкция следования"],
        correct: 0
    },
    {
        text: "Какой из примеров иллюстрирует алгоритм нахождения среднего арифметического двух чисел?",
        options: ["Прочитать значение переменной x. Прочитать значение переменной y. Вычислить x * y. Вывести результат.", "Прочитать значение переменной x. Прочитать значение переменной y. Вычислить сумму x + y. Разделить сумму на 2 и вывести результат.", "Прочитать значение переменной x. Прочитать значение переменной y. Вычесть y из x. Вывести результат."],
        correct: 1
    },
    {
        text: "Какое из следующих утверждений неверно для конструкции 'следование'?",
        options: ["Все действия выполняются последовательно одно за другим", "Каждое действие должно быть выполнено до начала следующего", "Действия могут выполняться в любом порядке"],
        correct: 2
    },
    {
        text: "Что из перечисленного является примером алгоритмической конструкции 'следование'?",
        options: ["Если a > b, то вывести a, иначе вывести b", "Прочитать значение переменной a. Прочитать значение переменной b. Вывести их сумму.", "Выполнять действие, пока значение переменной не станет равным 0"],
        correct: 1
    },
    {
        text: "Какое из следующих свойств не относится к алгоритмам?",
        options: ["Понятность", "Запутанность", "Результативность"],
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