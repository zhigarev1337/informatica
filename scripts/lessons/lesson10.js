const questions = [
    {
        text: "Что такое пиксель?",
        options: ["Наименьший элемент дисплея, формирующий изображение", "Единица измерения цвета", "Тип файла изображения"],
        correct: 0
    },
    {
        text: "Что такое пространственное разрешение монитора?",
        options: ["Количество базовых цветов в модели RGB", "Количество пикселей, из которых складывается изображение на экране", "Глубина цвета изображения"],
        correct: 1
    },
    {
        text: "Какие цвета входят в цветовую модель RGB?",
        options: ["Красный, жёлтый, синий", "Красный, зелёный, синий", "Красный, зелёный, белый"],
        correct: 1
    },
    {
        text: "Что называется глубиной цвета?",
        options: ["Количество пикселей на экране", "Количество цветов в палитре", "Длина двоичного кода, который используется для кодирования цвета пикселя"],
        correct: 2
    },
    {
        text: "Сколько цветов может быть в палитре при глубине цвета 8 бит?",
        options: ["16", "256", "1024"],
        correct: 1
    },
    {
        text: "Как рассчитывается информационный объём изображения?",
        options: ["Количество строк умножается на количество столбцов", "Количество пикселей умножается на глубину цвета", "Количество базовых цветов умножается на количество пикселей"],
        correct: 1
    },
    {
        text: "Какое разрешение экрана соответствует 800 на 600?",
        options: ["480000 пикселей", "800 пикселей", "600 пикселей"],
        correct: 0
    },
    {
        text: "Что означает аббревиатура HSB в цветовой модели?",
        options: ["Hue, Saturation, Brightness", "High, Standard, Bright", "Hue, Saturation, Black"],
        correct: 0
    },
    {
        text: "Какая цветовая модель используется для работы с оттенками цветов и насыщенностью?",
        options: ["RGB", "HSB", "CMYK"],
        correct: 1
    },
    {
        text: "Какой объём файла графического изображения с разрешением 1024 на 768 и глубиной цвета 24 бита?",
        options: ["1024 * 768 * 24 бит", "1024 * 768 * 8 бит", "1024 * 768 * 16 бит"],
        correct: 0
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