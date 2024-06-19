const questions = [
    {
        text: "Какое расстояние должно быть между экраном монитора и глазами?",
        options: ["30-40 см", "50-70 см", "70-90 см"],
        correct: 1
    },
    {
        text: "На каком уровне должен находиться монитор?",
        options: ["Ниже уровня глаз", "На уровне глаз", "Выше уровня глаз"],
        correct: 1
    },
    {
        text: "Как часто следует делать перерыв при работе за компьютером?",
        options: ["Каждые 15 минут", "Каждые 45 минут", "Каждый час"],
        correct: 1
    },
    {
        text: "Как нужно работать с клавиатурой?",
        options: ["Чистыми руками", "Грязными руками", "В перчатках"],
        correct: 0
    },
    {
        text: "Что запрещается делать в компьютерном классе?",
        options: ["Включать компьютер без разрешения учителя", "Сидеть за компьютером", "Читать информацию с экрана"],
        correct: 0
    },
    {
        text: "Как часто следует выполнять зарядку для глаз при работе за компьютером?",
        options: ["Каждые 5 минут", "Каждые 15 минут", "Каждые 45 минут"],
        correct: 2
    },
    {
        text: "Что запрещено трогать в компьютерном классе?",
        options: ["Клавиатуру", "Экран", "Мышь"],
        correct: 1
    },
    {
        text: "Что нужно сделать перед началом работы с компьютером?",
        options: ["Выключить компьютер", "Включить компьютер", "Изучить технику безопасности"],
        correct: 2
    },
    {
        text: "Какой термин используется для описания перехода экономики в электронный вид?",
        options: ["Информационная экономика", "Цифровизация экономики", "Электронная экономика"],
        correct: 1
    },
    {
        text: "Что такое информатика?",
        options: ["Наука о компьютерах", "Наука о информации и ее взаимодействиях", "Наука о программировании"],
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