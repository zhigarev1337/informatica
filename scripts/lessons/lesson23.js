const questions = [
    {
        text: "Что такое линейный алгоритм?",
        options: ["Алгоритм, в котором все команды выполняются последовательно", "Алгоритм с ветвлениями", "Алгоритм с циклами"],
        correct: 0
    },
    {
        text: "С какого ключевого слова начинается программа на языке Паскаль?",
        options: ["begin", "start", "program"],
        correct: 2
    },
    {
        text: "Как объявляются переменные в Паскале?",
        options: ["var", "let", "const"],
        correct: 0
    },
    {
        text: "Какими ключевыми словами обозначаются начало и конец программы в Паскале?",
        options: ["start...finish", "begin...end", "open...close"],
        correct: 1
    },
    {
        text: "Какой оператор используется для присваивания значения переменной в Паскале?",
        options: ["=", "==", ":="],
        correct: 2
    },
    {
        text: "Какая процедура используется для ввода данных в Паскале?",
        options: ["print", "input", "readln"],
        correct: 2
    },
    {
        text: "Какая процедура используется для вывода данных в Паскале?",
        options: ["print", "writeln", "output"],
        correct: 1
    },
    {
        text: "Что делает следующая программа: <pre><code>program Sum;\nvar\n    a, b, sum: integer;\nbegin\n    writeln('Введите два числа:');\n    readln(a, b);\n    sum := a + b;\n    writeln('Сумма: ', sum);\nend.</code></pre>",
        options: ["Вычисляет разность двух чисел", "Вычисляет сумму двух чисел", "Вычисляет произведение двух чисел"],
        correct: 1
    },
    {
        text: "Что делает следующая программа: <pre><code>program Average;\nvar\n    a, b: integer;\n    avg: real;\nbegin\n    writeln('Введите два числа:');\n    readln(a, b);\n    avg := (a + b) / 2;\n    writeln('Среднее арифметическое: ', avg:0:2);\nend.</code></pre>",
        options: ["Вычисляет сумму двух чисел", "Вычисляет разность двух чисел", "Вычисляет среднее арифметическое двух чисел"],
        correct: 2
    },
    {
        text: "Что делает следующая программа: <pre><code>program RectangleArea;\nvar\n    length, width, area: integer;\nbegin\n    writeln('Введите длину и ширину прямоугольника:');\n    readln(length, width);\n    area := length * width;\n    writeln('Площадь прямоугольника: ', area);\nend.</code></pre>",
        options: ["Вычисляет периметр прямоугольника", "Вычисляет площадь прямоугольника", "Вычисляет диагональ прямоугольника"],
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