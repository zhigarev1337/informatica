const questions = [
    {
        text: "Что такое информация?",
        options: ["Данные, которые имеют значение и могут быть использованы для принятия решений", "Программа для обработки данных", "Аппаратное обеспечение компьютера"],
        correct: 0
    },
    {
        text: "Что изучает информатика?",
        options: ["Физические законы", "Методы и средства накопления, обработки, хранения, передачи и использования информации", "Механизмы работы сердца"],
        correct: 1
    },
    {
        text: "Какую роль играет информация в современном обществе?",
        options: ["Используется только в науке", "Является одним из важнейших ресурсов", "Не имеет значительного влияния"],
        correct: 1
    },
    {
        text: "Что включает в себя информационная грамотность?",
        options: ["Умение искать и находить информацию", "Знание иностранных языков", "Умение писать программы"],
        correct: 0
    },
    {
        text: "Что такое информационная культура?",
        options: ["Совокупность знаний, умений и навыков для эффективной работы с информацией", "Способность быстро запоминать информацию", "Умение работать с физическими объектами"],
        correct: 0
    },
    {
        text: "Что является компонентом информационной грамотности?",
        options: ["Умение оценивать достоверность информации", "Умение рисовать", "Умение работать с механикой"],
        correct: 0
    },
    {
        text: "Что включает информационная культура?",
        options: ["Знание химических процессов", "Понимание значимости информации", "Умение готовить еду"],
        correct: 1
    },
    {
        text: "Какое из утверждений верно?",
        options: ["Информатика не связана с технологиями", "Информационная грамотность не важна в современном мире", "Информация используется во всех сферах жизни"],
        correct: 2
    },
    {
        text: "Какой из навыков относится к информационной культуре?",
        options: ["Соблюдение этических норм при работе с информацией", "Умение играть на музыкальном инструменте", "Знание истории"],
        correct: 0
    },
    {
        text: "Почему важна информационная грамотность?",
        options: ["Помогает эффективно использовать информацию и технологии", "Помогает управлять физическими процессами", "Не имеет особого значения"],
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