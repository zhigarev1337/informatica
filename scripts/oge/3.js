const questions = [
    {   //1
        question: "<br>В одной из кодировок UTF-16 каждый символ кодируется 16 битами. Гриша написал текст (в нем нет лишних пробелов):<br>«Лось, хомяк, косуля, кенгуру, капибара, бинтуронг, гиппопотам — животные».<br>Ученик вычеркнул из списка название одного из животных. Заодно он вычеркнул ставшие лишними запятые и пробелы — два пробела не должны идти подряд.<br>При этом размер нового предложения в данной кодировке оказался на 22 байта меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название животного.</b><br><br>",
        type: "text",
        answer: "бинтуронг",
        solutionUrl: "solutions/solution25.html"
    },
    {   //2
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Вася и Петя играли в шпионов и кодировали сообщения собственным шифром. Фрагмент кодовой таблицы приведен ниже:<br><br>",
        afterImageText: "<br>Расшифруйте сообщение, если известно, что буквы в нем не повторяются: <br>#++^##^#^<br>Запишите в ответе расшифрованное сообщение.<br><br>",
        image: "../../../images/oge/22.png",
        answer: "ЛЕСКА",
        solutionUrl: "solutions/solution26.html"
    },
    {   //3
        question: "<br>Напишите наибольшее целое число x, для которого истинно высказывание: <b>НЕ</b> (X <= 13) <b>И НЕ</b> (X >= 19).<br><br>",
        type: "text",
        answer: "18",
        solutionUrl: "solutions/solution27.html"
    },
    {   //4
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Между населенными пунктами А, В, С, D, Е построены дороги, протяженность которых (в километрах) приведена в таблице:<br><br>",
        afterImageText: "<br>Определите длину кратчайшего пути между пунктами А и E. Передвигаться можно только по дорогам, протяженность которых указана в таблице.<br><br>",
        image: "../../../images/oge/23.png",
        answer: "6",
        solutionUrl: "solutions/solution28.html"
    },
    {   //5
        question: "<br>У исполнителя Омега две команды, которым присвоены номера:<br><b>1. прибавь 2;</b><br><b>2. умножь на b</b/><br>(b — неизвестное натуральное число; b ≥ 2).<br>Выполняя первую из них, Омега увеличивает число на экране на 2, а выполняя вторую, умножает это число на b. Программа для исполнителя Омега — это последовательность номеров команд. Известно, что программа 11121 переводит число 4 в число 202. Определите значение b.<br><br>",
        type: "text",
        answer: "20",
        solutionUrl: "solutions/solution29.html"
    },
    {   //6
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Ниже приведена программа, записанная на трех языках программирования.<br><br>",
        afterImageText: "<br>Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:<br>(13, 2); (11, 12); (−12, 12); (2, −2); (–10, –10); (6, −5); (2, 8); (9, 10); (1, 13).<br>Укажите наименьшее целое значение параметра A, при котором для указанных входных данных программа напечатает «YES» четыре раза.<br><br>",
        image: "../../../images/oge/24.png",
        answer: "6",
        solutionUrl: "solutions/solution30.html"
    },
    {   //7
        question: "<br>Доступ к файлу txt.net, находящемуся на сервере gov.org, осуществляется по протоколу http. Фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.А)  .net<br>Б)  txt<br>В)  ://<br>Г)  http<br>Д)  /<br>Е)  gov<br>Ж)   .org<br><br>",
        type: "text",
        answer: "ГВЕЖДБА",
        solutionUrl: "solutions/solution31.html"
    },
    {   //8
        question: "",
        type: "textImageText",
        beforeImageText: "<br>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.<br><br>",
        afterImageText: "<br>Какое количество страниц (в тысячах) будет найдено по запросу Валькирия  &  Ника?<br>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br>",
        image: "../../../images/oge/25.png",
        answer: "19",
        solutionUrl: "solutions/solution32.html"
    },
    {   //9
        question: "",
        type: "textImageText",
        beforeImageText: "<br>На рисунке — схема дорог, связывающих населенные пункты A, B, C, D, E, F, G. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. Сколько существует различных путей из населенного пункта A в населенный пункт G?<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/26.png",
        answer: "12",
        solutionUrl: "solutions/solution33.html"
    },
    {   //10
        question: "<br>Среди приведенных ниже трех чисел, записанных в различных системах счисления, найдите минимальное и запишите его в ответе в десятичной системе счисления. В ответе запишите только число, основание системы счисления указывать не нужно.<br><br>47<sub>16</sub>, 120<sub>8</sub>, 1001011<sub>2</sub>.<br><br>",
        type: "text",
        answer: "71",
        solutionUrl: "solutions/solution34.html"
    },
    {   //11
        question: "<br>В одном из произведений А. П. Чехова, текст которого приведен в подкаталоге <b>Чехов</b> каталога <b>Проза</b>, присутствует персонаж Лопахин. С помощью поисковых средств операционной системы и текстового редактора выясните профессию этого персонажа.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/DEMO-12.rar",
        answer: "купец",
        solutionUrl: "solutions/solution35.html"
    },
    {   //12
        question: "<br>Сколько файлов с расширением pdf содержится в подкаталогах каталога <b>DEMO-12</b>? В ответе укажите только число.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/Task12.rar",
        answer: "10",
        solutionUrl: "solutions/solution36.html"
    }     
];

questions.push(
    {   //13
        question: "<br>Создайте в текстовом редакторе документ и напишите в нем следующий текст, точно воспроизведя все оформление текста, имеющееся в образце.<br>Данный текст должен быть набран шрифтом размером 14 пунктов обычного начертания. Отступ первой строки первого абзаца основного текста — 1 см. Расстояние между строками текста не менее одинарного, но не более полуторного междустрочного интервала.Основной текст выровнен по ширине; в ячейках первого столбца таблицы применено выравнивание по левому краю, в ячейках второго и третьего столбцов — по центру. В основном тексте и таблице есть слова, выделенные полужирным, курсивным шрифтом и подчеркиванием. Ширина таблицы меньше ширины основного текста. Таблица выровнена на странице по центру горизонтали. <br> При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размеров страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца. <br>Интервал между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов.<br>Текст сохраните в файле, имя которого Вам сообщат организаторы. Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/27.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
        solutionUrl: "solutions/solution13.html"
    },
    {   //14
        question: "<br>В электронную таблицу занесли данные наблюдения за погодой в течение одного года. Ниже приведены первые пять строк таблицы.<br><br>",
        type: "textImageTextDownload",
        beforeImageText: "",
        image: "../../../images/oge/28.png",
        afterImageText: "<br>В столбце A записана дата наблюдения, в столбце B — среднесуточная температура воздуха для указанной даты, в столбце C  — количество выпавших осадков (в миллиметрах) для указанной даты, в столбце D  — среднесуточное атмосферное давление (в миллиметрах ртутного столба). В столбце E записано направление ветра для указанной даты  — одно из восьми возможных значений «СЗ», «С», «СВ», «В», «ЮВ», «Ю», «ЮЗ», «З». В столбце F записана среднесуточная скорость ветра (в метрах в секунду). Всего в электронную таблицу были занесены данные по всем 365 дням года в хронологическом порядке. <br><br><b>Выполните задание.</b><br><br>Откройте файл с данной электронной таблицей. На основании данных, содержащихся в этой таблице, ответьте на два вопроса и постройте круговую диаграмму.<br><br>1.  Какое среднее количество осадков выпадало за сутки в весенние месяцы (март, апрель, май)? Ответ на этот вопрос запишите в ячейку H2 таблицы.<br><br>2.  Какая средняя скорость ветра была в те дни года, когда дул юго-западный (ЮЗ) ветер? Ответ на этот вопрос запишите в ячейку H3 таблицы.<br><br>Ответы должны быть вычислены с точностью не менее двух знаков после запятой.<br><br>3.  Постройте круговую диаграмму, отображающую соотношение направлений ветров «СЗ», «Ю», «В». Левый верхний угол диаграммы разместите вблизи ячейки G6.<br><br>",
        fileLink: "../../../files/task14.xlsx",
        infoText: " ",
        solutionUrl: "solutions/solution14.html"
    },
    {   //15
        question: "<br>Напишите программу для решения следующей задачи. Девятиклассники участвовали в викторине по математике. Необходимо было ответить на 20 вопросов. Победителем викторины считается участник, правильно ответивший на наибольшее количество вопросов. На сколько вопросов победитель ответил правильно? Если есть участники викторины, которые не смогли дать правильный ответ ни на один из вопросов, выведите YES, иначе выведите NO. Гарантируется, что есть участники, правильно ответившие хотя бы на один из вопросов. Программа получает на вход число участников викторины N (1 ≤ N ≤ 50), затем для каждого участника вводится количество вопросов, на которые получен правильный ответ.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/8.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
        solutionUrl: "solutions/solution13.html"
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
        image: "../../../images/oge/30.png",
        maxScore: 2
    },
    {
        taskNumber: 14,
        image: "../../../images/oge/32.png",
        description: "Решение. <br><br>1.  Поскольку весенние месяцы идут в файле подряд, необходимости использовать формулу «СЧеТЕСЛИ» нет, поэтому в ячейку H2 запишем формулу:<br><br>=СРЗНАЧ(C61:C152)<br><br>Таким образом, ответ на первый вопрос 0,90.<br><br>2.  В ячейку H2 запишем формулу:<br><br>=СУММЕСЛИ(E2:E366;'ЮЗ';F2:F366)/СЧеТЕСЛИ(E2:E366;'ЮЗ')<br><br>Можно использовать формулу<br><br>=СРЗНАЧЕСЛИ(E2:E366;'ЮЗ';F2:F366)Ответ на второй вопрос: 5,13.<br><br>3.  В ячейку J2 вставим формулу =СЧеТЕСЛИ(E2:E366; 'СЗ'), в ячейку J3 вставим формулу =СЧеТЕСЛИ(E2:E366; 'Ю'), в ячейку J4 вставим формулу =СЧеТЕСЛИ(E2:E366; 'В'). Теперь построим по полученным значениям круговую диаграмму, подпишем сектора.<br><br>Ответ: 1) 0,90; 2) 5,13.<br><br>",
        maxScore: 3
    },
    {
        taskNumber: 15,
        description: " ",
        image: "../../../images/oge/31.png",
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
