const questions = [
    {
        text: "Что такое программное обеспечение?",
        options: ["Совокупность всех программ, предназначенных для выполнения на компьютере.", "Оборудование компьютера.", "Только операционные системы."],
        correct: 0
    },
    {
        text: "Что обеспечивает операционная система?",
        options: ["Только работу антивирусных программ.", "Совместное функционирование всех устройств компьютера и доступ к его ресурсам.", "Исключительно взаимодействие с Интернетом."],
        correct: 1
    },
    {
        text: "Какая программа отвечает за работу подключённых к компьютеру устройств?",
        options: ["Антивирус", "Драйвер", "Архиватор"],
        correct: 1
    },
    {
        text: "Что такое прикладное программное обеспечение?",
        options: ["Программы, обеспечивающие работу операционной системы.", "Программы, с помощью которых пользователь может работать с различными видами информации.", "Программы, предназначенные для обслуживания дисков."],
        correct: 1
    },
    {
        text: "Какая из перечисленных программ относится к сервисным программам?",
        options: ["Текстовый редактор", "Антивирус", "Компилятор"],
        correct: 1
    },
    {
        text: "Что такое система программирования?",
        options: ["Комплекс программных средств для разработки компьютерных программ на языке программирования.", "Набор приложений общего назначения.", "Коллекция антивирусных программ."],
        correct: 0
    },
    {
        text: "Что является основным преимуществом операционной системы Linux?",
        options: ["Программа для работы с текстами.", "Она бесплатна и имеет открытый исходный код.", "Это единственная операционная система для серверов."],
        correct: 1
    },
    {
        text: "Как называется процесс загрузки операционной системы в оперативную память компьютера?",
        options: ["Компиляция", "Инсталляция", "Загрузка"],
        correct: 2
    },
    {
        text: "Какие программы относятся к прикладным программам общего назначения?",
        options: ["Программы для работы с базами данных", "Программы-драйверы", "Системы проектирования"],
        correct: 0
    },
    {
        text: "Что происходит при загрузке BIOS?",
        options: ["Загрузка текстового редактора", "Тестирование и настройка всех аппаратных средств компьютера", "Запуск антивирусной программы"],
        correct: 1
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