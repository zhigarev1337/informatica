const questions = [
    {
        text: "Что такое дискретизация информации?",
        options: ["Перевод информации из текстовой в звуковую форму", "Преобразование информации из непрерывной в дискретную форму", "Преобразование информации из одного языка на другой"],
        correct: 1
    },
    {
        text: "Что представляет собой алфавит языка?",
        options: ["Бесконечный набор символов", "Конечный набор отличных друг от друга символов", "Случайный набор символов"],
        correct: 1
    },
    {
        text: "Что такое мощность алфавита?",
        options: ["Сложность алфавита", "Количество символов в алфавите", "Количество гласных в алфавите"],
        correct: 1
    },
    {
        text: "Какой алфавит называют двоичным?",
        options: ["Алфавит, содержащий символы всех чисел", "Алфавит, содержащий два символа", "Алфавит, используемый в двух разных языках"],
        correct: 1
    },
    {
        text: "Чем универсально двоичное кодирование?",
        options: ["Оно позволяет передавать только числовую информацию", "С его помощью можно представить любую информацию", "Оно применяется только в телеграфии"],
        correct: 1
    },
    {
        text: "Чем является длина двоичной цепочки?",
        options: ["Разрядностью двоичного кода", "Сложностью двоичного кода", "Количеством возможных комбинаций в алфавите"],
        correct: 0
    },
    {
        text: "Какие коды содержат в кодовых комбинациях одинаковое число символов?",
        options: ["Неравномерные коды", "Равномерные коды", "Коды азбуки Морзе"],
        correct: 1
    },
    {
        text: "Что позволяет неравномерное кодирование?",
        options: ["Увеличение количества ошибок при передаче", "Уменьшение скорости передачи сообщений", "Повышение скорости передачи сообщений"],
        correct: 2
    },
    {
        text: "Сколько символов содержит алфавит, если для его двоичного кодирования используется 4 бита?",
        options: ["16 символов", "8 символов", "4 символа"],
        correct: 0
    },
    {
        text: "Какой вид кодирования используется в азбуке Морзе?",
        options: ["Двоичное кодирование", "Равномерное кодирование", "Неравномерное кодирование"],
        correct: 2
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