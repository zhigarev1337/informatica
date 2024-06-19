const questions = [
    {
        text: "Что такое ветвление в алгоритмах?",
        options: ["Цикл, который выполняется многократно", "Конструкция, выполняющая действия последовательно", "Конструкция, выполняющая разные действия в зависимости от условий"],
        correct: 2
    },
    {
        text: "Какой оператор используется для ветвления в Паскале?",
        options: ["for", "if...then...else", "while"],
        correct: 1
    },
    {
        text: "Какой оператор используется для множественного выбора в Паскале?",
        options: ["switch", "case", "select"],
        correct: 2
    },
    {
        text: "Что выполняется, если условие в операторе if истинно?",
        options: ["оператор1", "оператор2", "оператор3"],
        correct: 0
    },
    {
        text: "Какой синтаксис правильный для оператора if...then...else?",
        options: ["if условие then оператор1 else оператор2;", "if условие оператор1 then else оператор2;", "if then условие оператор1 else оператор2;"],
        correct: 0
    },
    {
        text: "Что делает следующий код, если переменная num равна 4? <pre><code>if num mod 2 = 0 then writeln('Число четное') else writeln('Число нечетное');</code></pre>",
        options: ["Выводит 'Число четное'", "Выводит 'Число нечетное'", "Выводит 'Число делится на 2'"],
        correct: 0
    },
    {
        text: "Что делает следующий код, если переменная a равна 5, а b равна 3? <pre><code>if a > b then writeln('Максимальное число: ', a) else writeln('Максимальное число: ', b);</code></pre>",
        options: ["Выводит 'Максимальное число: 3'", "Выводит 'Максимальное число: 5'", "Выводит 'Максимальное число: 8'"],
        correct: 1
    },
    {
        text: "Что выведет следующий код, если переменная day равна 3? <pre><code>case day of 1: writeln('Понедельник'); 2: writeln('Вторник'); 3: writeln('Среда'); else writeln('Некорректный ввод'); end;</code></pre>",
        options: ["Понедельник", "Вторник", "Среда"],
        correct: 2
    },
    {
        text: "Что делает оператор else в конструкции if...then...else?",
        options: ["Выполняет действие, если условие истинно", "Выполняет действие, если условие ложно", "Выполняет действие в любом случае"],
        correct: 1
    },
    {
        text: "Что делает следующий код, если переменная day равна 8? <pre><code>case day of 1: writeln('Понедельник'); 2: writeln('Вторник'); 3: writeln('Среда'); else writeln('Некорректный ввод'); end;</code></pre>",
        options: ["Понедельник", "Среда", "Некорректный ввод"],
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