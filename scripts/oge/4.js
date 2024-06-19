const questions = [
    {//1
        question: "<br>В одной из кодировок UTF-32 каждый символ кодируется 32 битами. Петя написал текст (в нем нет лишних пробелов):<br>«Ель, кедр, сосна, кипарис, лиственница, можжевельник  — хвойные растения».<br>Ученик вычеркнул из списка название одного из растений. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.<br>При этом размер нового предложения в данной кодировке оказался на 20 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название хвойного растения. <br><br>",
        type: "text",
        answer: "ель",
        solutionUrl: "solutions/solution37.html"
    },
    {//2
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Вася шифрует русские слова, записывая вместо каждой буквы ее номер в алфавите (без пробелов). Номера букв даны в таблице: <br><br>",
        afterImageText: "<br>Некоторые шифровки можно расшифровать несколькими способами. Например, 12112 может означать «АБАК», может  — «КАК», а может  — «АБААБ». Даны четыре шифровки:<br><br>20335<br>21120<br>31321<br>51201<br><br>Только одна из них расшифровывается единственным способом. Найдите ее и расшифруйте. То, что получилось, запишите в качестве ответа. <br><br>",
        image: "../../../images/oge/33.png",
        answer: "ДАТА",
        solutionUrl: "solutions/solution38.html"
    },
    {//3
        question: "<br>Напишите количество натуральных чисел, для которых истинно высказывание:<b>НЕ</b> (Число > 15) <b>И НЕ</b> (Число четное).<br><br>",
        type: "text",
        answer: "8",
        solutionUrl: "solutions/solution39.html"
    },
    {//4
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Учительница Марья Петровна живет на станции Васильки, а работает на станции Дружба. Чтобы успеть с утра на уроки, она должна ехать по самой короткой дороге. Проанализируйте таблицу и укажите длину кратчайшего пути от станции Васильки до станции Дружба:<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/34.png",
        answer: "6",
        solutionUrl: "solutions/solution40.html"
    },
    {//5
        question: "<br>У исполнителя Альфа две команды, которым присвоены номера:<br>1. прибавь 1;<br>2. умножь на b<br>(b  — неизвестное натуральное число; b ≥ 2).<br>Первая из них увеличивает число на экране на 1, вторая умножает его на b. Алгоритм для исполнителя Альфа  — это последовательность номеров команд. Найдите значение числа b, при котором из числа 6 по алгоритму 11211 будет получено число 82.<br><br>",
        type: "text",
        answer: "10",
        solutionUrl: "solutions/solution41.html"
    },
    {//6
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Ниже приведена программа, записанная на пяти языках программирования.<br><br>",
        afterImageText: "<br>Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:<br><br>(1, 2); (11, 2); (1, 12); (11, 12); (−11, −12); (−11, 12); (−12, 11); (10, 10); (10, 5).<br><br>Укажите количество целых значений параметра A, при которых для указанных входных данных программа напечатает «NO» три раза.<br><br>",
        image: "../../../images/oge/35.png",
        answer: "5",
        solutionUrl: "solutions/solution42.html"
    },
    {//7
        question: "<br>Доступ к файлу book.txt, находящемуся на сервере bibl.ru, осуществляется по протоколу http. Фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.<br><br>A)  ://<br>Б)  book.<br>B)  bibl<br>Г)  txt<br>Д)  .ru<br>Е)  http<br>Ж)/<br><br>",
        type: "text",
        answer: "ЕАВДЖБГ",
        solutionUrl: "solutions/solution43.html"
    },
    {//8
        question: "",
        type: "textImageText",
        beforeImageText: "<br>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для логической операции «И»  — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.<br><br>",
        afterImageText: "<br>Какое количество страниц (в тысячах) будет найдено по запросу Математика & Информатика & Физика? Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br>",
        image: "../../../images/oge/36.png",
        answer: "80",
        solutionUrl: "solutions/solution44.html"
    },
    {//9
        question: "",
        type: "textImageText",
        beforeImageText: "<br>На рисунке  — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, И, К. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой.<br>Сколько существует различных путей из города А в город К, не проходящих через пункт В?<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/37.png",
        answer: "12",
        solutionUrl: "solutions/solution45.html"
    },
    {//10
        question: "<br>Переведите двоичное число 101111 в десятичную систему счисления.<br><br>",
        type: "text",
        answer: "47",
        solutionUrl: "solutions/solution46.html"
    },
    {//11
        question: "<br>В одном из произведений А. П. Чехова, текст которого приведен в каталоге Чехов, присутствует персонаж с фамилией Тригорин. С помощью поисковых средств операционной системы и текстового редактора выясните профессию этого персонажа.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/DEMO-12.rar",
        answer: "беллетрист",
        solutionUrl: "solutions/solution47.html"
    },
    {//12
        question: "<br>Сколько файлов с расширением .py содержится в подкаталогах каталога Files? В ответе укажите только число.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/Task12.rar",
        answer: "4",
        solutionUrl: "solutions/solution48.html"
    }     
];

questions.push(
    {
        question: "<br>Создайте в текстовом редакторе документ и напишите в нем следующий текст, точно воспроизведя все оформление текста, имеющееся в образце.<br>Данный текст должен быть набран шрифтом размером 14 пунктов. В тексте и таблице есть слова, выделенные полужирным шрифтом и курсивом. Отступ первой строки первого абзаца 1 см. Расстояние между строками текста не менее высоты одинарного, но не более полуторного междустрочного интервала. Основной текст выровнен по ширине. В ячейках первой строки таблицы применено выравнивание по центру горизонтали и вертикали, в ячейках первого столбца таблицы  — по центру. Ширина таблицы равна ширине основного текста.<br>При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размера страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца. <br>Интервал между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов.<br>Текст сохраните в файле, имя которого Вам сообщат организаторы. Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/38.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
    },
    {
        question: "<br>В электронную таблицу занесли данные о тестировании учеников. Ниже приведены первые пять строк таблицы.<br><br>",
        type: "textImageTextDownload",
        beforeImageText: " ",
        image: "../../../images/oge/40.png",
        afterImageText: "<br>В столбце A записан округ, в котором учится ученик; в столбце B  — фамилия; в столбце C  — любимый предмет; в столбце D  — тестовый балл. Всего в электронную таблицу были внесены данные по одной тысяче учеников.<br><br>Выполните задание.<br>1.  Сколько учеников в Южном округе (Ю) выбрали в качестве любимого предмета английский язык? Ответ на этот вопрос запишите в ячейку H2 таблицы.<br>2.  Каков средний тестовый балл у учеников Юго-Восточного округа (ЮВ)? Ответ на этот вопрос запишите в ячейку H3 таблицы с точностью не менее двух знаков после запятой.<br>3.  Постройте круговую диаграмму, отображающую соотношение учеников из округов «С», «В», «Ю». Левый верхний угол диаграммы разместите вблизи ячейки G6.<br><br>",
        fileLink: "../../../files/task14.xlsx",
        infoText: " ",
    },
    {
        question: "<br>Напишите программу для решения следующей задачи. Камера наблюдения регистрирует в автоматическом режиме скорость проезжающих мимо нее автомобилей, округляя значения скорости до целых чисел. Необходимо определить среднюю зарегистрированную скорость всех автомобилей. Если скорость хотя бы одного автомобиля была не меньше 60 км/ч, выведите «YES», иначе выведите «NO».<br>Программа получает на вход число проехавших автомобилей N (1 ≤ N ≤ 30), затем указываются их скорости. Значение скорости не может быть меньше 1 и больше 300. Программа должна сначала вывести среднюю скорость с точностью до одного знака после запятой, затем «YES» или «NO».<br><b>Пример работы программы</b><br><br>",
        type: "textImageText",  
        image: "../../../images/oge/39.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
    }
);

function displayQuestions() {
    const container = document.getElementById('quiz-container');
    questions.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = "question-block";
        let questionContent = `<h3>Задание ${index + 1}</h3><p>${item.question}</p>`;

        // Проверяем, есть ли специальный информационный текст (для заданий 13-15 или других специальных случаев)
        if (item.infoText) {
            questionContent += `<p>${item.infoText}</p>`;
            if (item.type === "textImageText" || item.type === "textImageTextDownload") {
                questionContent += `<img src="${item.image}" alt="Image for question ${index + 1}">`;
                questionContent += `<p>${item.afterImageText}</p>`;
                if (item.type === "textImageTextDownload" && item.fileLink) {
                    questionContent += `<a href="${item.fileLink}" download>Скачать дополнительные материалы</a>`;
                }
            }
        } else {
            // Стандартная обработка вопросов
            switch (item.type) {
                case "text":
                    questionContent += `<div><label for='answer${index}'>Введите ответ:</label><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'></div><br>`;
                    break;
                case "textImageText":
                case "textImageTextDownload":
                    questionContent += `<p>${item.beforeImageText}</p><img src="${item.image}" alt="Image for question ${index + 1}"><p>${item.afterImageText}</p>`;
                    if (item.type === "textImageTextDownload" && item.fileLink) {
                        questionContent += `<a href="${item.fileLink}" download>Скачать дополнительные материалы</a>`;
                    }
                    questionContent += `<div><label for='answer${index}'>Введите ответ:</label><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'></div><br>`;
                    break;
                case "downloadLink":
                    questionContent += `<a href="${item.fileLink}" download>Скачать архив</a><div><label for='answer${index}'>Введите ответ:</label><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'></div><br>`;
                    break;
            }
        }

        div.innerHTML = questionContent;
        container.appendChild(div);
    });
}

function calculateFinalScore() {
    let totalScore = 0;

    // Считаем баллы за обычные вопросы
    questions.forEach((item, index) => {
        const inputElement = document.getElementById(`answer${index}`);
        if (inputElement && inputElement.value.trim().toLowerCase() === item.answer.toLowerCase()) {
            totalScore++; // Предположим, что каждый вопрос стоит 1 балл
        }
    });

    // Добавляем баллы из самопроверки
    Object.values(selfCheckScores).forEach(score => {
        totalScore += score;
    });

    return totalScore;
}

// Обновление функции checkAnswers для включения расчёта итоговой оценки
function checkAnswers() {
    saveSelfCheckScores();
    closeSelfCheckModal();

    let results = [];
    questions.forEach((item, index) => {
        const inputElement = document.getElementById(`answer${index}`);
        if (!inputElement) return;

        const userAnswer = inputElement.value.trim();
        results.push({
            question: index + 1,
            givenAnswer: userAnswer,
            correctAnswer: item.answer
        });
    });

    const totalScore = calculateFinalScore();
    const grade = calculateGrade(totalScore); // Убедитесь, что grade корректно рассчитывается здесь
    displayResults(results, totalScore, grade);
}

function calculateGrade(score) {
    if (score >= 11) return '4';
    if (score >= 5) return '3';
    return '2';
}

function displayResults(results, score, grade) {
    const modal = document.getElementById('resultsModal');
    const resultsDiv = document.getElementById('resultsTable');
    
    let tableHtml = "<table><tr><th>Номер вопроса</th><th>Данный ответ</th><th>Правильный ответ</th><th>Решение</th></tr>";

    results.forEach(result => {
        const solutionLink = questions[result.question - 1].solutionUrl; // Получаем URL решения для каждого вопроса
        const answerClass = result.givenAnswer.toLowerCase() === result.correctAnswer.toLowerCase() ? "correct-answer" : "incorrect-answer"; // Определяем класс в зависимости от правильности ответа
        tableHtml += `<tr><td>${result.question}</td><td class="${answerClass}">${result.givenAnswer}</td><td>${result.correctAnswer}</td><td><a href="${solutionLink}" target="_blank">Посмотреть</a></td></tr>`;
    });
    tableHtml += "</table>";
    resultsDiv.innerHTML = tableHtml;
    modal.style.display = "block";

    document.querySelector('.modal-content h1').textContent = `Ваша оценка: ${grade}`;
    document.querySelector('.modal-content p').textContent = `Вы ответили правильно на ${score} из ${questions.length} вопросов. Максимальный балл: 19.`;

    document.querySelector('.close-button').onclick = function() {
        modal.style.display = "none";
    };
}

window.onload = displayQuestions;

document.querySelector('.close-button').onclick = function() {
    document.getElementById('resultsModal').style.display = 'none';
};

// Данные заданий для самопроверки
const selfCheckTasks = [
    {
        taskNumber: 13,
        description: " ",
        image: "../../../images/oge/9.png",
        maxScore: 2
    },
    {
        taskNumber: 14,
        image: "../../../images/oge/10.png",
        description: "Решение.<br>1.  Первая формула используется для русскоязычной записи функций, вторая  — для англоязычной.<br>В ячейку Е2 запишем формулу:<br>=ЕСЛИ(A2='Ю';C2;0)<br>=IF(A2='Ю';C2;0)<br>Скопируем формулу во все ячейки диапазона Е3:Е1001. В ячейку H2 запишем формулу<br>=СЧеТЕСЛИ(E2:E1001;'английский язык')<br>=COUNTIF(E2:E1001;'английский язык')<br>2.  В ячейку H3 запишем формулу<br>=СУММЕСЛИ(A2:A1001;'ЮВ';D2:D1001)/СЧеТЕСЛИ(A2:A1001;'ЮВ')<br>=SUMIF(A2:A1001;'ЮВ';D2:D1001)/COUNTIF(A2:A1001;'ЮВ')<br>Можно использовать формулу<br>=СРЗНАЧЕСЛИ(A2:A1001;'ЮВ';D2:D1001)<br>3.  В ячейку J2 вставим формулу =СЧеТЕСЛИ(A2:A1001; 'С'), в ячейку J3 вставим формулу =СЧеТЕСЛИ(A2:A1001; 'В'), в ячейку J4 вставим формулу =СЧеТЕСЛИ(A2:A1001; 'Ю'). Теперь построим по полученным значениям круговую диаграмму, подпишем сектора.<br>Ответ: 1) 12; 2) 516,30.<br><br>",
        maxScore: 3
    },
    {
        taskNumber: 15,
        description: " ",
        image: "../../../images/oge/11.png",
        maxScore: 2
    }
];

// Функция для отображения модального окна самопроверки
function showSelfCheckModal() {
    const modal = document.getElementById('selfCheckModal');
    const table = document.getElementById('selfCheckResultsTable');
    table.innerHTML = ''; // Очистка предыдущего содержимого

    selfCheckTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task-container'; // Добавление класса для стилизации, если необходимо

        let innerHTML = `
            <h3>Задание ${task.taskNumber}</h3>
            <p>${task.description}</p>
        `;

        if (task.image) {
            innerHTML += `<img src="${task.image}" alt="Image for task ${task.taskNumber}" style="width:100%;max-width:600px;">`;
        }

        innerHTML += `
            <br><br>
            <label for="score-${task.taskNumber}">Ваш балл (из ${task.maxScore}): </label>
            <select id="score-${task.taskNumber}">
        `;

        for (let i = 0; i <= task.maxScore; i++) {
            innerHTML += `<option value="${i}">${i}</option>`;
        }

        innerHTML += `</select><hr>`;

        taskElement.innerHTML = innerHTML;
        table.appendChild(taskElement);
    });

    modal.style.display = 'flex'; // Показать модальное окно
}


let selfCheckScores = {};

function saveSelfCheckScores() {
    selfCheckTasks.forEach(task => {
        const selectedScore = parseInt(document.getElementById(`score-${task.taskNumber}`).value);
        selfCheckScores[task.taskNumber] = selectedScore;
    });
}

// Обновите функцию closeSelfCheckModal, чтобы она сохраняла баллы перед закрытием модального окна
function closeSelfCheckModal() {
    saveSelfCheckScores(); // Сохранение баллов перед закрытием
    document.getElementById('selfCheckModal').style.display = 'none';
}

// Добавление кнопки для открытия модального окна самопроверки
document.getElementById('checkSelfButton').addEventListener('click', showSelfCheckModal);
