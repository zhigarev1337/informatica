const questions = [
    {
        text: "Что такое одномерный массив?",
        options: ["Структура данных, представляющая собой упорядоченный набор элементов разных типов", "Структура данных, представляющая собой упорядоченный набор элементов одного типа", "Структура данных, представляющая собой неупорядоченный набор элементов одного типа"],
        correct: 1
    },
    {
        text: "С какого индекса обычно начинается индексация в массивах?",
        options: ["1", "0", "2"],
        correct: 1
    },
    {
        text: "Какой метод инициализации массива используется в следующем примере: <code>int arr[5] = {1, 2, 3, 4, 5};</code>?",
        options: ["Явная инициализация при объявлении", "Инициализация с помощью цикла", "Инициализация по умолчанию"],
        correct: 0
    },
    {
        text: "Какой цикл используется для инициализации массива в следующем примере: <code>for (int i = 0; i < 5; i++) { arr[i] = i + 1; }</code>?",
        options: ["while", "do-while", "for"],
        correct: 2
    },
    {
        text: "Как получить доступ к третьему элементу массива <code>arr</code>?",
        options: ["arr[3]", "arr[2]", "arr[1]"],
        correct: 1
    },
    {
        text: "Как изменить значение третьего элемента массива <code>arr</code> на 10?",
        options: ["arr[3] = 10;", "arr[2] = 10;", "arr[1] = 10;"],
        correct: 1
    },
    {
        text: "Какой метод сортировки используется в следующем примере: <code>for (int i = 0; i < 5-1; i++) { for (int j = 0; j < 5-i-1; j++) { if (arr[j] > arr[j+1]) { int temp = arr[j]; arr[j] = arr[j+1]; arr[j+1] = temp; } } }</code>?",
        options: ["Сортировка вставками", "Сортировка пузырьком", "Сортировка выбором"],
        correct: 1
    },
    {
        text: "Что возвращает следующий код: <code>int min = arr[0]; for (int i = 1; i < 5; i++) { if (arr[i] < min) { min = arr[i]; } }</code>?",
        options: ["Максимальный элемент массива", "Минимальный элемент массива", "Сумму элементов массива"],
        correct: 1
    },
    {
        text: "Какова сумма элементов массива в следующем примере: <code>int sum = 0; for (int i = 0; i < 5; i++) { sum += arr[i]; }</code>?",
        options: ["Сумма всех элементов массива", "Произведение всех элементов массива", "Разность всех элементов массива"],
        correct: 0
    },
    {
        text: "Как вывести элементы массива на экран?",
        options: ["Используя цикл", "Используя функцию sort()", "Используя функцию search()"],
        correct: 0
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