const questions = [
    {
        text: "Что такое теория игр?",
        options: ["Раздел математики, изучающий математические модели принятия оптимальных решений в условиях конфликта и сотрудничества", "Раздел информатики, изучающий программирование", "Раздел физики, изучающий движение тел"],
        correct: 0
    },
    {
        text: "Что такое кооперативные игры?",
        options: ["Игры, в которых каждый игрок действует в своих собственных интересах", "Игры, в которых игроки могут заключать соглашения и коалиции для достижения общей цели", "Игры, в которых выигрыш одного игрока равен проигрышу другого игрока"],
        correct: 1
    },
    {
        text: "Что такое игры с нулевой суммой?",
        options: ["Игры, в которых выигрыш одного игрока равен проигрышу другого игрока", "Игры, в которых все игроки могут выиграть", "Игры, в которых нет проигравших"],
        correct: 0
    },
    {
        text: "Что такое чистая стратегия?",
        options: ["Стратегия, в которой игрок делает однозначный выбор действия", "Стратегия, в которой игрок выбирает действие на основе распределения вероятностей", "Стратегия, в которой игрок не принимает решений"],
        correct: 0
    },
    {
        text: "Что такое смешанная стратегия?",
        options: ["Стратегия, в которой игрок делает однозначный выбор действия", "Стратегия, в которой игрок выбирает действие на основе распределения вероятностей", "Стратегия, в которой игрок не принимает решений"],
        correct: 1
    },
    {
        text: "Что описывает задача о пленных (Dilemma)?",
        options: ["Ситуацию, в которой два преступника принимают решение молчать или свидетельствовать против другого", "Ситуацию, в которой компании решают снижать ли цену на продукцию", "Ситуацию, в которой два игрока играют в шахматы"],
        correct: 0
    },
    {
        text: "Что происходит, если оба преступника в задаче о пленных молчат?",
        options: ["Они получают минимальное наказание", "Они получают максимальное наказание", "Один из них получает освобождение"],
        correct: 0
    },
    {
        text: "Какой результат, если обе компании снижают цену на продукцию?",
        options: ["Их прибыли увеличиваются", "Их прибыли уменьшаются", "Одна компания получает большую долю рынка"],
        correct: 1
    },
    {
        text: "Что представляет собой игра с ненулевой суммой?",
        options: ["Игры, в которых выигрыш одного игрока равен проигрышу другого игрока", "Игры, в которых выигрыши всех игроков могут быть как положительными, так и отрицательными", "Игры, в которых нет проигравших"],
        correct: 1
    },
    {
        text: "Что изучает теория игр?",
        options: ["Программирование", "Оптимальные решения в условиях конфликта и сотрудничества", "Движение тел"],
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