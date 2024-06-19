const questions = [
    {
        text: "Что такое массив?",
        options: ["Структура данных, которая хранит набор элементов одного типа, упорядоченных по их индексам", "Структура данных для хранения строк", "Метод сортировки данных"],
        correct: 0
    },
    {
        text: "Какой тип массива имеет элементы, расположенные в одномерной последовательности?",
        options: ["Двумерный массив", "Одномерный массив", "Многомерный массив"],
        correct: 1
    },
    {
        text: "Какой тип массива имеет элементы, расположенные в виде таблицы с строками и столбцами?",
        options: ["Одномерный массив", "Многомерный массив", "Двумерный массив"],
        correct: 2
    },
    {
        text: "Что включает инициализация массива?",
        options: ["Удаление массива", "Создание массива и задание его начальных значений", "Изменение значений элементов массива"],
        correct: 1
    },
    {
        text: "Как называется операция доступа к элементам массива с использованием их индексов?",
        options: ["Перебор элементов", "Инициализация", "Обращение по индексу"],
        correct: 2
    },
    {
        text: "Как называется процесс итерации по элементам массива с целью выполнения различных операций?",
        options: ["Обращение по индексу", "Перебор элементов", "Изменение значений"],
        correct: 1
    },
    {
        text: "Какой пример инициализации одномерного массива в Python?",
        options: ["arr = [1, 2, 3, 4, 5]", "matrix = [[1, 2], [3, 4]]", "arr = {'a': 1, 'b': 2}"],
        correct: 0
    },
    {
        text: "Какой пример обращения к элементам массива в Python?",
        options: ["print(arr[0])", "print(arr['a'])", "print(arr[0][0])"],
        correct: 0
    },
    {
        text: "Какой пример перебора элементов двумерного массива в Python?",
        options: ["for element in arr: print(element)", "for row in matrix: for element in row: print(element)", "for element in dict: print(element)"],
        correct: 1
    },
    {
        text: "Как называется массив, элементы которого расположены в более чем двух измерениях?",
        options: ["Одномерный массив", "Двумерный массив", "Многомерный массив"],
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