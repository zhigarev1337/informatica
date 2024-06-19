// Массив вопросов
const questions = [
    {
        text: "Что является центральным объектом изучения в информатике?",
        options: ["Энергия", "Информация", "Материя"],
        correct: 1
    },
    {
        text: "Какое общество характеризуется значительным влиянием информационных технологий?",
        options: ["Постиндустриальное", "Аграрное", "Информационное"],
        correct: 2
    },
    {
        text: "Что является одной из основных составляющих 'информационного общества'?",
        options: ["Средства коммуникации", "Сельскохозяйственные инструменты", "Промышленные машины"],
        correct: 0
    },
    {
        text: "Как называется процесс перехода экономики в электронный вид?",
        options: ["Цифровизация", "Индустриализация", "Механизация"],
        correct: 0
    },
    {
        text: "Кто считается автором термина 'информационное общество'?",
        options: ["Билл Гейтс", "Юдзиро Хаяши", "Тим Бернерс-Ли"],
        correct: 1
    },
    {
        text: "Что позволяет цифровизация в экономике?",
        options: ["Использование банковских карт вместо наличных", "Замену работников на роботов", "Уменьшение объема данных для анализа"],
        correct: 0
    },
    {
        text: "Что изменилось в государственной сфере с развитием информационного общества?",
        options: ["Увеличилось количество бумажных документов", "Появилась возможность электронного взаимодействия", "Уменьшилась роль государства"],
        correct: 1
    },
    {
        text: "Как информационные технологии повлияли на образование?",
        options: ["Образование стало менее доступным", "Появились онлайн-курсы", "Уменьшилось количество школ"],
        correct: 1
    },
    {
        text: "Как информационные технологии влияют на медицину?",
        options: ["Появление телемедицины", "Ухудшение качества лечения", "Исчезновение лекарств"],
        correct: 0
    },
    {
        text: "Какой раздел информатики занимается разработкой программного обеспечения?",
        options: ["Социальная информатика", "Теоретическая информатика", "Информационные технологии"],
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