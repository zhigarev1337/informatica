const questions = [
    {
        text: "Что такое текстовый документ?",
        options: ["Программа для редактирования текста", "Информация в текстовой форме, представленная на материальном носителе", "Файл, содержащий изображения"],
        correct: 1
    },
    {
        text: "Что такое текстовый редактор?",
        options: ["Программа для обработки изображений", "Прикладная программа для создания и обработки текстовых документов", "Операционная система"],
        correct: 1
    },
    {
        text: "Что такое текстовый процессор?",
        options: ["Программа для рисования", "Текстовый редактор с расширенными возможностями", "Программа для создания музыки"],
        correct: 1
    },
    {
        text: "Какая кодовая таблица используется для соответствия между изображениями и кодами символов в тексте?",
        options: ["RGB", "HSB", "ASCII"],
        correct: 2
    },
    {
        text: "Чему равен информационный вес символа в восьмиразрядной кодировке?",
        options: ["8 битам (1 байт)", "16 битам (2 байта)", "32 битам (4 байта)"],
        correct: 0
    },
    {
        text: "Чему равен информационный вес символа в шестнадцатиразрядной кодировке?",
        options: ["8 битам (1 байт)", "16 битам (2 байта)", "32 битам (4 байта)"],
        correct: 1
    },
    {
        text: "Как вычисляется информационный объём текстового сообщения?",
        options: ["Количество символов умножается на размер файла", "Количество символов умножается на информационный вес одного символа", "Количество символов делится на информационный вес одного символа"],
        correct: 1
    },
    {
        text: "Какой кодовой таблицей пользуются для кодирования символов большинства современных языков?",
        options: ["ASCII", "Unicode", "EBCDIC"],
        correct: 1
    },
    {
        text: "Сколько символов можно закодировать с помощью шестнадцатиразрядного двоичного кода?",
        options: ["256", "1024", "65536"],
        correct: 2
    },
    {
        text: "Какой объём текста из 50 символов в восьмиразрядной кодировке?",
        options: ["50 байт", "100 байт", "200 байт"],
        correct: 0
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