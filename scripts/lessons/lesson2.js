const questions = [
    {
        text: "Что изучает информатика?",
        options: ["Историю развития компьютеров", "Законы и методы обработки данных", "Биологические процессы"],
        correct: 1
    },
    {
        text: "Как называется информация, понятная и нужная только узкой группе специалистов?",
        options: ["Массовая информация", "Специальная информация", "Личная информация"],
        correct: 1
    },
    {
        text: "Какой тип информации расширяет знания человека об окружающем мире?",
        options: ["Графическая", "Текстовая", "Массовая"],
        correct: 2
    },
    {
        text: "Что является источником информации?",
        options: ["Только компьютеры", "Только учебники", "Радио, телевидение, другие люди, книги"],
        correct: 2
    },
    {
        text: "Какой сигнал может принимать бесконечное множество значений?",
        options: ["Дискретный", "Непрерывный", "Световой"],
        correct: 1
    },
    {
        text: "Как называется информация, передаваемая устно или в виде записи?",
        options: ["Графическая", "Текстовая", "Звуковая"],
        correct: 2
    },
    {
        text: "Что является примером необъективной информации?",
        options: ["Гора низкая", "Земля вращается вокруг Солнца", "Сумма углов треугольника равна 180 градусов"],
        correct: 0
    },
    {
        text: "Какое свойство информации подразумевает её актуальность?",
        options: ["Достоверность", "Полнота", "Актуальность"],
        correct: 2
    },
    {
        text: "Какой вид информации предназначен для большей части населения?",
        options: ["Специальная информация", "Массовая информация", "Секретная информация"],
        correct: 1
    },
    {
        text: "Что означает полнота информации?",
        options: ["Информация должна быть правдивой", "Информация не должна искажаться", "Неполная информация может ввести в заблуждение"],
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