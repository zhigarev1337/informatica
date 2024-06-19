const questions = [
    {
        text: "Что такое алгоритм?",
        options: ["Процесс преобразования данных", "Точное предписание, определяющее последовательность действий, необходимых для решения задачи", "Метод хранения данных"],
        correct: 1
    },
    {
        text: "Какое свойство алгоритма означает, что он состоит из последовательности шагов?",
        options: ["Определенность", "Дискретность", "Массовость"],
        correct: 1
    },
    {
        text: "Какое свойство алгоритма означает, что каждый шаг алгоритма точно определен?",
        options: ["Определенность", "Конечность", "Результативность"],
        correct: 0
    },
    {
        text: "Какое свойство алгоритма означает, что алгоритм должен завершаться после конечного числа шагов?",
        options: ["Определенность", "Конечность", "Дискретность"],
        correct: 1
    },
    {
        text: "Какой вид алгоритмов включает линейные, разветвляющиеся и циклические алгоритмы?",
        options: ["По области применения", "По способу представления", "По структуре"],
        correct: 2
    },
    {
        text: "Какой пример алгоритма использует метод Евклида?",
        options: ["Алгоритм сортировки", "Алгоритм нахождения НОД", "Алгоритм поиска"],
        correct: 1
    },
    {
        text: "Какой шаг алгоритма Евклида выполняется, если b = 0?",
        options: ["Заменить a на b", "Заменить b на a % b", "НОД(a, b) = a"],
        correct: 2
    },
    {
        text: "Какой тип алгоритмов используется для нахождения суммы элементов массива?",
        options: ["Линейный алгоритм", "Циклический алгоритм", "Разветвляющийся алгоритм"],
        correct: 0
    },
    {
        text: "Какой алгоритм описывает процесс прохождения по всем элементам массива и добавления каждого элемента к сумме?",
        options: ["Алгоритм поиска", "Алгоритм сортировки", "Линейный алгоритм нахождения суммы"],
        correct: 2
    },
    {
        text: "Какое свойство алгоритма означает, что выполнение алгоритма должно приводить к решению задачи?",
        options: ["Дискретность", "Массовость", "Результативность"],
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