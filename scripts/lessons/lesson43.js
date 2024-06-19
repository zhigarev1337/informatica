const questions = [
    {
        text: "Что такое множество?",
        options: ["Совокупность объектов, не обладающих общим свойством", "Совокупность объектов, называемых элементами множества, обладающих некоторым общим свойством", "Произвольный набор чисел"],
        correct: 1
    },
    {
        text: "Что такое объединение множеств?",
        options: ["Операция, при которой создается новое множество, содержащее только общие элементы исходных множеств", "Операция, при которой создается новое множество, содержащее все элементы исходных множеств", "Операция, при которой создается множество, содержащее элементы одного множества, которые не принадлежат другому множеству"],
        correct: 1
    },
    {
        text: "Что такое пересечение множеств?",
        options: ["Операция, при которой создается новое множество, содержащее только те элементы, которые присутствуют во всех исходных множествах", "Операция, при которой создается новое множество, содержащее все элементы исходных множеств", "Операция, при которой создается множество, содержащее элементы одного множества, которые не принадлежат другому множеству"],
        correct: 0
    },
    {
        text: "Что такое разность множеств?",
        options: ["Операция, при которой создается новое множество, содержащее все элементы исходных множеств", "Операция, при которой создается новое множество, содержащее элементы одного множества, которые не принадлежат другому множеству", "Операция, при которой создается новое множество, содержащее только общие элементы исходных множеств"],
        correct: 1
    },
    {
        text: "Что такое дополнение множества?",
        options: ["Операция, при которой создается новое множество, содержащее все элементы универсального множества, не принадлежащие данному множеству", "Операция, при которой создается новое множество, содержащее элементы одного множества, которые не принадлежат другому множеству", "Операция, при которой создается новое множество, содержащее все элементы исходных множеств"],
        correct: 0
    },
    {
        text: "Что означает равенство множеств?",
        options: ["Два множества равны, если они содержат одни и те же элементы", "Одно множество является подмножеством другого", "Два множества пересекаются, если содержат общие элементы"],
        correct: 0
    },
    {
        text: "Что означает подмножество?",
        options: ["Множество A является подмножеством множества B, если все элементы множества A принадлежат множеству B", "Множество A является подмножеством множества B, если все элементы множества B принадлежат множеству A", "Множество A равно множеству B, если они содержат одни и те же элементы"],
        correct: 0
    },
    {
        text: "Что такое собственное подмножество?",
        options: ["Множество A равно множеству B, если они содержат одни и те же элементы", "Множество A является подмножеством множества B, если все элементы множества A принадлежат множеству B, но множество A не равно множеству B", "Множество A и B не пересекаются"],
        correct: 1
    },
    {
        text: "Как теория множеств используется в моделировании баз данных?",
        options: ["Для представления отношений между данными", "Для создания изображений", "Для воспроизведения аудио и видео"],
        correct: 0
    },
    {
        text: "Как операции над множествами используются в поиске данных?",
        options: ["Для сортировки изображений", "Для фильтрации и поиска информации", "Для воспроизведения аудио и видео"],
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