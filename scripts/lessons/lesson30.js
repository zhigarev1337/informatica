const questions = [
    {
        text: "Что такое алгоритм?",
        options: ["Математическая формула", "Упорядоченная последовательность шагов для выполнения задачи", "Программа на языке программирования"],
        correct: 1
    },
    {
        text: "Что такое исполнитель?",
        options: ["Объект, выполняющий команды алгоритма", "Часть компьютера", "Тип данных в программировании"],
        correct: 0
    },
    {
        text: "Какая характеристика алгоритма оценивает количество времени, необходимое для его выполнения?",
        options: ["Корректность", "Временная сложность", "Простота"],
        correct: 1
    },
    {
        text: "Как называется метод анализа, который оценивает максимальное время выполнения или используемую память?",
        options: ["Анализ в худшем случае", "Анализ в среднем случае", "Анализ в лучшем случае"],
        correct: 0
    },
    {
        text: "Какая временная сложность у алгоритма линейного поиска в худшем случае?",
        options: ["O(1)", "O(log n)", "O(n)"],
        correct: 2
    },
    {
        text: "Какая стратегия используется в алгоритме быстрой сортировки?",
        options: ["Разделяй и властвуй", "Динамическое программирование", "Жадный алгоритм"],
        correct: 0
    },
    {
        text: "Какая временная сложность быстрой сортировки в среднем случае?",
        options: ["O(n)", "O(n log n)", "O(n^2)"],
        correct: 1
    },
    {
        text: "Какая характеристика алгоритма определяет объем памяти, необходимый для его выполнения?",
        options: ["Корректность", "Временная сложность", "Пространственная сложность"],
        correct: 2
    },
    {
        text: "Что такое корректность алгоритма?",
        options: ["Алгоритм правильно решает поставленную задачу", "Алгоритм использует минимальную память", "Алгоритм выполняется за минимальное время"],
        correct: 0
    },
    {
        text: "Что включает в себя процесс анализа алгоритмов?",
        options: ["Только тестирование", "Только написание кода", "Оценка эффективности алгоритмов на основе различных характеристик"],
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