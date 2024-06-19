const questions = [
    {
        text: "Что такое язык программирования?",
        options: ["Инструмент для создания графики", "Формальный язык для описания алгоритмов и структур данных", "Метод хранения данных"],
        correct: 1
    },
    {
        text: "Какой язык программирования известен своей простотой и читаемостью кода?",
        options: ["Java", "C++", "Python"],
        correct: 2
    },
    {
        text: "Какой язык программирования широко используется в веб-разработке для создания интерактивных веб-страниц?",
        options: ["Java", "JavaScript", "Python"],
        correct: 1
    },
    {
        text: "Что определяет синтаксис языка программирования?",
        options: ["Поведение кода", "Значение команд", "Правила написания кода"],
        correct: 2
    },
    {
        text: "Что описывает семантика языка программирования?",
        options: ["Структуру операторов", "Значение и поведение кода", "Структуру данных"],
        correct: 1
    },
    {
        text: "Какой пример записи алгоритма нахождения суммы двух чисел на языке Python?",
        options: ["sum = a + b; print(sum);", "a = input('Введите число: '); b = input('Введите число: '); sum = a + b; print(sum);", "a = int(input('Введите первое число: ')); b = int(input('Введите второе число: ')); sum = a + b; print('Сумма:', sum);"],
        correct: 2
    },
    {
        text: "Какой язык программирования используется для разработки Android приложений?",
        options: ["C++", "Java", "Python"],
        correct: 1
    },
    {
        text: "Какой язык программирования является расширением языка C?",
        options: ["Java", "JavaScript", "C++"],
        correct: 2
    },
    {
        text: "Какой язык программирования используется для создания высокопроизводительных приложений?",
        options: ["Python", "C++", "Java"],
        correct: 1
    },
    {
        text: "Какой язык программирования используется для записи алгоритма нахождения суммы двух чисел в следующем примере? \n#include <iostream> \nusing namespace std; \nint main() { int a, b; cout << 'Введите первое число: '; cin >> a; cout << 'Введите второе число: '; cin >> b; int sum = a + b; cout << 'Сумма: ' << sum << endl; return 0; }",
        options: ["Python", "Java", "C++"],
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