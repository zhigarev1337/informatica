const questions = [
    {
        text: "Что такое граф?",
        options: ["Математическая структура, состоящая из множества вершин и множества рёбер", "Массив данных", "Тип компьютерной программы"],
        correct: 0
    },
    {
        text: "Какой тип графа не имеет направления рёбер?",
        options: ["Ориентированные графы", "Неориентированные графы", "Взвешенные графы"],
        correct: 1
    },
    {
        text: "Какой тип графа имеет направление рёбер?",
        options: ["Ориентированные графы", "Неориентированные графы", "Деревья"],
        correct: 0
    },
    {
        text: "Какой алгоритм используется для обхода графа, начиная с корневой вершины и углубляясь в каждое направление, пока это возможно?",
        options: ["Алгоритм поиска в ширину (BFS)", "Алгоритм поиска в глубину (DFS)", "Алгоритм Дейкстры"],
        correct: 1
    },
    {
        text: "Какой алгоритм используется для нахождения кратчайшего пути в взвешенном графе?",
        options: ["Алгоритм поиска в ширину (BFS)", "Алгоритм Прима", "Алгоритм Дейкстры"],
        correct: 2
    },
    {
        text: "Какой алгоритм используется для нахождения минимального остовного дерева?",
        options: ["Алгоритм поиска в глубину (DFS)", "Алгоритм Прима", "Алгоритм Дейкстры"],
        correct: 1
    },
    {
        text: "Что представляет собой пример моделирования транспортной сети?",
        options: ["Использование дерева для моделирования сети", "Использование взвешенного графа, где вершины представляют станции, а рёбра представляют пути между ними", "Использование алгоритма поиска в глубину для нахождения кратчайшего пути"],
        correct: 1
    },
    {
        text: "Какой тип графа имеет ровно один путь между любыми двумя вершинами и не содержит циклов?",
        options: ["Ориентированные графы", "Неориентированные графы", "Деревья"],
        correct: 2
    },
    {
        text: "Какой алгоритм используется для обхода графа, начиная с корневой вершины и исследуя соседние вершины перед переходом на следующий уровень?",
        options: ["Алгоритм поиска в ширину (BFS)", "Алгоритм поиска в глубину (DFS)", "Алгоритм Прима"],
        correct: 0
    },
    {
        text: "Какой пример использования алгоритма Дейкстры?",
        options: ["Моделирование роста популяции", "Нахождение кратчайшего пути между двумя городами в транспортной сети", "Моделирование погодных условий"],
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