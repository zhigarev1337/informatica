const questions = [
    {
        question: "<br>В кодировке КОИ-8 каждый символ кодируется 8 битами. Вова написал текст (в нем нет лишних пробелов): <br><br> «Школьные предметы: ОБЖ, химия, физика, алгебра, биология, география, литература, информатика». <br><br> Ученик удалил из списка название одного предмета, а также лишние запятую и пробел — два пробела не должны идти подряд. При этом размер нового предложения в данной кодировке оказался на 11 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название предмета. <br><br>",
        type: "text",
        answer: "география",
        solutionUrl: "solutions/solution1.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Вася и Петя играли в шпионов и кодировали сообщение собственным шифром. Фрагмент кодовой таблицы приведен ниже: <br><br>",
        afterImageText: "<br><br>Определите, из скольких букв состоит сообщение, если известно, что буквы в нем не повторяются: <br><br> + ~ + ~ + @ @ ~ + <br><br>",
        image: "../../../images/oge/1.png",
        answer: "5",
        solutionUrl: "solutions/solution2.html"
    },
    {
        question: "<br>Напишите наибольшее целое число x, для которого истинно высказывание: <br><br> <b>НЕ</b> (X <= 11) <b>И НЕ</b> (X >= 17).<br><br>",
        type: "text",
        answer: "16",
        solutionUrl: "solutions/solution3.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Между населенными пунктами A, B, C, D, E, F построены дороги, протяженность которых (в километрах) приведена в таблице.<br><br>",
        afterImageText: "<br>Определите длину кратчайшего пути между пунктами B и C. Передвигаться можно только по дорогам, протяженность которых указана в таблице.<br><br>",
        image: "../../../images/oge/2.png",
        answer: "9",
        solutionUrl: "solutions/solution4.html"
    },
    {
        question: "<br>У исполнителя Делитель две команды, которым присвоены номера: <br> <b>1. раздели на 2</b><br> <b>2. вычти 1</b><br> Первая из них уменьшает число на экране в 2 раза, вторая уменьшает его на 1. Исполнитель работает только с натуральными числами. Составьте алгоритм получения <b>из чиcла 65 числа 4</b>, содержащий не более 5 команд. В ответе запишите только номера команд.<br>(Например, 12112 – это алгоритм:<br>раздели на 2<br>вычти 1<br>раздели на 2<br>раздели на 2<br>вычти 1,<br>который преобразует число 42 в число 4.)<br>Если таких алгоритмов более одного, то запишите любой из них.<br><br>",
        type: "text",
        answer: "21111",
        solutionUrl: "solutions/solution5.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Ниже приведена программа, записанная на пяти языках программирования.<br><br>",
        afterImageText: "<br>Было проведено 9 запусков программы, при которых в качестве значений переменных <i>s</i> и <i>t</i> вводились следующие пары чисел:<br><br>(6, 8); (3, 5); (–7, 2); (7, 7); (9, 8); (–1, 3); (–4, 5); (6, 9); (2, –1).<br><br>Сколько было запусков, при которых программа напечатала «YES»?<br><br>",
        image: "../../../images/oge/3.png",
        answer: "0",
        solutionUrl: "solutions/solution6.html"
    },
    {
        question: "<br>Файл <b>rose.gif</b> был выложен в Интернете по адресу <i>http://color.net/red/rose.gif</i>. Потом его переместили в корневой каталог на сайте <b>box.net</b>, доступ к которому осуществляется по протоколу <b>ftp</b>. Имя файла не изменилось.<br>Фрагменты нового и старого адресов файла закодированы цифрами от 1 до 9. Запишите последовательность этих цифр, кодирующую адрес файла в сети Интернет после перемещения.<br>1) http:/<br>2) box<br>3) red<br>4) rose<br>5) .net<br>6) ftp:/<br>7) /<br>8).gif<br>9) color<br><br>",
        type: "text",
        answer: "6725748",
        solutionUrl: "solutions/solution7.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для логической операции «И» — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети. Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br>",
        afterImageText: "<br>Какое количество страниц (в тысячах) будет найдено по запросу <i>Евгений & Онегин</i>?<br><br>",
        image: "../../../images/oge/4.png",
        answer: "1100",
        solutionUrl: "solutions/solution8.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>На рисунке — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, И, К. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой.<br>Сколько существует различных путей из города А в город К, не проходящих через пункт В?<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/5.png",
        answer: "5",
        solutionUrl: "solutions/solution9.html"
    },
    {
        question: "<br>Среди приведенных ниже трех чисел, записанных в десятичной системе счисления, найдите число, сумма цифр которого в восьмеричной записи наименьшая. В ответе запишите сумму цифр в восьмеричной записи этого числа.<br><br>86<sub>10</sub>, 99<sub>10</sub>, 105<sub>10</sub>.<br><br>",
        type: "text",
        answer: "7",
        solutionUrl: "solutions/solution10.html"
    },
    {
        question: "<br>В одном из произведений Н. В. Гоголя, текст которого приведен в подкаталоге <b>Гоголь</b> каталога <b>Проза</b>, присутствует персонаж Остап. С помощью поисковых средств операционной системы и текстового редактора выясните имя брата этого персонажа.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/DEMO-12.rar",
        answer: "Андрий",
        solutionUrl: "solutions/solution11.html"
    },
    {
        question: "<br>Сколько файлов с расширением .rtf содержится в подкаталогах каталога <b>Task12</b>? В ответе укажите только число.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/Task12.rar",
        answer: "10",
        solutionUrl: "solutions/solution12.html"
    }     
];

questions.push(
    {
        question: "<br>Создайте в текстовом редакторе документ и напишите в нем следующий текст, точно воспроизведя все оформление текста, имеющееся в образце.<br><br>Данный текст должен быть набран шрифтом размером 14 пунктов обычного начертания. Отступ первой строки первого абзаца основного текста  — 1 см. Расстояние между строками текста не менее одинарного, но не более полуторного междустрочного интервала.<br>Основной текст выровнен по ширине; в ячейках таблицы применено выравнивание по центру. В основном тексте и таблице есть слова, выделенные полужирным, курсивным шрифтом и подчеркиванием. Ширина таблицы меньше ширины основного текста. Таблица выровнена на странице<br>по центру горизонтали.<br>При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размеров страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца.<br>Интервал между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов.<br>Текст сохраните в файле, имя которого Вам сообщат организаторы. Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/6.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
    },
    {
        question: "В электронную таблицу занесли данные олимпиады по математике. Ниже приведены первые пять строк таблицы:<br><br>",
        type: "textImageTextDownload",
        beforeImageText: "Обсудите последствия экологических изменений, приведя конкретные примеры из вашего региона:",
        image: "../../../images/oge/7.png",
        afterImageText: "<br>В столбце A записан номер участника; в столбце B — номер школы; в столбце C — класс; в столбце D — набранные баллы. Всего в электронную таблицу были занесены данные по 1000 участникам.<br>Выполните задание<br>Откройте файл с данной электронной таблицей. На основании данных, содержащихся в этой таблице, ответьте на два вопроса:<br>Выполните задание<br>Откройте файл с данной электронной таблицей . На основании данных, содержащихся в этой таблице, ответьте на два вопроса:<br>1.  Сколько девятиклассников набрали более 250 баллов? Ответ на этот вопрос запишите в ячейку H2 таблицы.<br>2.  Каков средний балл, полученный учениками школы № 3? Ответ на этот вопрос запишите в ячейку H3 таблицы с точностью не менее двух знаков после запятой.<br>3.  Постройте круговую диаграмму, отображающую соотношение количества участников из 49, 46 и 48 школ. Левый верхний угол диаграммы разместите вблизи ячейки G6.<br><br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br><br>",
        fileLink: "../../../files/task14.xlsx",
        infoText: " ",
    },
    {
        question: "<br>Напишите программу для решения следующей задачи. Ученики 4 класса вели дневники наблюдения за погодой и ежедневно записывали дневную температуру. Найдите среднюю температуру за время наблюдения. Если количество дней, когда температура поднималась выше нуля градусов, не менее 5, выведите YES, иначе выведите NO. Программа получает на вход количество дней, в течение которых проводилось наблюдение N (1 ≤ N ≤ 31), затем для каждого дня вводится температура.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/8.png", 
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
        description: "Решение.<br>   1. В ячейку Е2 запишем формулу =И(C2=9;D2>250). Скопируем формулу во все ячейки диапазона Е3:Е1001. В ячейку H2 запишем формулу =СЧеТЕСЛИ(E2:E1001;ИСТИНА). Таких 107.<br>   2. В ячейку H3 запишем формулу, определяющую отношение суммы баллов учеников школы № 3 к количеству учеников этой школы: =СУММЕСЛИ(B2:B1001;'3';D2:D1001)/СЧеТЕСЛИ(B2:B1001;'3'). Получаем: 225,73.<br>   3. В ячейку G2 вставим формулу =СЧеТЕСЛИ(B2:B1001; '49'), в ячейку G3 вставим формулу =СЧеТЕСЛИ(B2:B1001; '46'), в ячейку G4 вставим формулу =СЧеТЕСЛИ(B2:B1001; '48'). Теперь построим по полученным значениям круговую диаграмму, подпишем сектора.<br   >Ответ: 1. 107; 2. 225,73.<br><br>",
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
