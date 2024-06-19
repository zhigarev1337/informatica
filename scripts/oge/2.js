const questions = [
    {
        question: "<br>В одной из кодировок Unicode каждый символ кодируется 16 битами. Вова написал текст (в нем нет лишних пробелов):<br>«Чиж, грач, стриж, гагара, пингвин, ласточка, жаворонок, свиристель, буревестник, вертиголовка  — птицы».<br>Ученик вычеркнул из списка название одной птицы. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд. При этом размер нового предложения в данной кодировке оказался на 18 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название птицы.<br><br>",
        type: "text",
        answer: "пингвин",
        solutionUrl: "solutions/solution13.html"
    },
    {
        question: "Сообщение было зашифровано кодом. Использовались только буквы, приведенные в таблице:",
        type: "textImageText",
        beforeImageText: "<br>Сообщение было зашифровано кодом. Использовались только буквы, приведенные в таблице: <br><br>",
        afterImageText: "<br><br>Определите, какие буквы в сообщении повторяются, и запишите их в ответе.<br><br>...o..o.oo...o..oooo.o.oo<br><br>",
        image: "../../../images/oge/12.png",
        answer: "ДЕ",
        solutionUrl: "solutions/solution14.html"
    },
    {
        question: "<br>Напишите наименьшее целое число, для которого истинно высказывание: <br><br> <b>НЕ</b>(Число < 100) И <b>НЕ</b> (Число нечетное)?<br><br>",
        type: "text",
        answer: "100",
        solutionUrl: "solutions/solution15.html"
    },
    {
        question: "Учитель Иван Петрович живет на станции Антоновка, а работает на станции Дружба. Чтобы успеть с утра на уроки, он должен ехать по самой короткой дороге. Проанализируйте таблицу и укажите длину кратчайшего пути от станции Антоновка до станции Дружба:",
        type: "textImageText",
        beforeImageText: "<br>",
        afterImageText: "<br>",
        image: "../../../images/oge/13.png",
        answer: "4",
        solutionUrl: "solutions/solution16.html"
    },
    {
        question: "<br>У исполнителя Гамма две команды, которым присвоены номера:<br><b>1. прибавь 5;</b><br><b>2. раздели на b</b><br>(b  — неизвестное натуральное число; b ≥ 2).<br>Выполняя первую из них, Гамма увеличивает число на экране на 5, а выполняя вторую, делит это число на b. Программа для исполнителя Гамма  — это последовательность номеров команд. Известно, что программа 11211 переводит число 40 в число 20. Определите значение b.<br><br>",
        type: "text",
        answer: "5",
        solutionUrl: "solutions/solution17.html"
    },
    {
        question: "<br>Ниже приведена программа, записанная на пяти языках программирования.",
        type: "textImageText",
        beforeImageText: "<br>",
        afterImageText: "<br>Было проведено 9 запусков программы, при которых в качестве значений переменных <i>s</i> и <i>k</i> вводились следующие пары чисел:<br>(2, 2); (5, 9); (7, −12); (5, 5); (2, 12); (—10, —13); (—11, 11); (1, 4); (2, 6).<br>Сколько было запусков, при которых программа напечатала «ДА»? <br><br>",
        image: "../../../images/oge/14.png",
        answer: "5",
        solutionUrl: "solutions/solution18.html"
    },
    {
        question: "<br>Файл <b>btulip.gif</b> был выложен в Интернете по адресу <i>>ttp://box.net/tulip.gif</i>. Потом его переместили в каталог <b>red</b> на сайте <b>flowers.net</b>, доступ к которому осуществляется по протоколу <b>ftp</b>. Имя файла не изменилось.<br>Фрагменты нового и старого адресов файла закодированы цифрами от 1 до 9. Запишите последовательность этих цифр, кодирующую адрес файла в сети Интернет после перемещения.<br>1)  http:/<br>2)  box<br>3)  red<br>4)  tulip<br>5)  .net<br>6)  ftp:/<br>7)  /<br>8).gif<br>9)  flowers<br><br>",
        type: "text",
        answer: "679573748",
        solutionUrl: "solutions/solution19.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для логической операции «И»  — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети. Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br>",
        afterImageText: "<br>Какое количество страниц (в тысячах) будет найдено по запросу <i>Роза</i> | <i>Цветок</i>?<br><br>",
        image: "../../../images/oge/15.png",
        answer: "1050",
        solutionUrl: "solutions/solution20.html"
    },
    {
        question: "",
        type: "textImageText",
        beforeImageText: "<br>На рисунке  — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, З, И, К и Л. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. Сколько существует различных путей из города А в город Л, проходящих через город E?<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/16.png",
        answer: "15",
        solutionUrl: "solutions/solution21.html"
    },
    {
        question: "<br>Среди приведенных ниже трех чисел, записанных в различных системах счисления, найдите наименьшее и запишите его в ответе в десятичной системе счисления. В ответе запишите только число, основание системы счисления указывать не нужно.<br><br>39<sub>16</sub>, 75<sub>8</sub>, 111011<sub>2</sub><br><br>",
        type: "text",
        answer: "57",
        solutionUrl: "solutions/solution22.html"
    },
    {
        question: "<br>В одном из произведений И. С. Тургенева, текст которого приведен в подкаталоге <b>Тургенев</b>, встречается m-lle Boncourt. С помощью поисковых средств операционной системы и текстового редактора выясните, сколько примерно лет m-lle Boncourt. Ответ запишите цифрами.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/11 задание.rar",
        answer: "60",
        solutionUrl: "solutions/solution1.html"
    },
    {
        question: "<br>Сколько файлов с расширением .js содержится в подкаталогах каталога <b>Files</b>? В ответе укажите только число. Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/Files.rar",
        answer: "12",
        solutionUrl: "solutions/solution1.html"
    }     
];

questions.push(
    {
        question: "<br>Создайте в текстовом редакторе документ и напишите в нем следующий текст, точно воспроизведя все оформление текста, имеющееся в образце.<br>Данный текст должен быть набран шрифтом размером 14 пунктов обычного начертания. Отступ первой строки первого абзаца основного текста  — 1 см. Расстояние между строками текста не менее одинарного, но не более полуторного междустрочного интервала.<br>Основной текст выровнен по ширине; в ячейках первого столбца таблицы, кроме первой строки таблицы, применено выравнивание по левому краю, в ячейках второго столбца и первой строки таблицы  — выравнивание по центру. В основном тексте и таблице есть слова, выделенные полужирным, курсивным шрифтом и подчеркиванием. Ширина таблицы меньше ширины основного текста. Таблица выровнена на странице по центру горизонтали. <br> При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размеров страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца. <br> Интервал между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов. <br> Текст сохраните в файле, имя которого Вам сообщат организаторы. Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/6.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
        solutionUrl: "solutions/solution17.html"
    },
    {
        question: "<br>В электронную таблицу занесли информацию численность населения городов разных стран. Ниже представлены пять строк таблицы.<br><br>",
        type: "textImageTextDownload",
        beforeImageText: "В электронную таблицу занесли информацию численность населения городов разных стран. Ниже представлены пять строк таблицы.",
        image: "../../../images/oge/18.png",
        afterImageText: "<br>В столбце A указано название города; в столбце B – численность населения (тыс. чел.); в столбце C – название страны. Всего в электронную таблицу были занесены данные по 1000 городов. Порядок записей в таблице произвольный. Выполните задание<br><br>Откройте файл с данной электронной таблицей. На основании данных, содержащихся в этой таблице, ответьте на два вопроса.<br>1.  Сколько городов Беларуси представлено в таблице? Ответ запишите в ячейку F2.<br>2.  Какова средняя численность населения городов, количество жителей которых не превышает 100 тыс. человек? Ответ на этот вопрос с точностью не менее двух знаков после запятой (в тыс. чел.) запишите в ячейку F3 таблицы.<br>3.  Постройте круговую диаграмму, отображающую соотношение количества городов Беларуси, Египта и Турции, представленных в таблице. Левый верхний угол диаграммы разместите вблизи ячейки G6.<br><br>",
        fileLink: "../../../files/task19.xls",
        infoText: " ",
        solutionUrl: "solutions/solution14.html"
    },
    {
        question: "<br>Напишите программу, которая в последовательности натуральных чисел определяет максимальное число, оканчивающееся на 2.<br>Программа получает на вход количество чисел в последовательности, а затем сами числа. В последовательности всегда имеется число, оканчивающееся на 2.<br>Количество чисел не превышает 1000. Введенные числа не превышают 30 000. Программа должна вывести одно число  — максимальное число, оканчивающееся на 2.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/19.png", 
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
        image: "../../../images/oge/9.png",
        maxScore: 2
    },
    {
        taskNumber: 14,
        image: "../../../images/oge/10.png",
        description: "Решение.<br>   1. В ячейку F2 запишем формулу :=СЧеТЕСЛИ(С2:C1001; 'Беларусь'). Таких 111.<br>2. Для ответа на второй вопрос в ячейку D2 запишем формулу, определяющую суммарную численность населения городов, количество жителей которых не превышает 100 тыс. человек, =СУММЕСЛИ(B2:B1001;'<=100';B2:B1001). В ячейку E2 запишем формулу =СЧеТЕСЛИ(B2:B1001';<=100') , определяющую количество городов, подходящих под условие. Для окончательного ответа на вопроса 2 в ячейку F2 запишем формулу =D2/E2. Получаем: 31,09.<br>3. В ячейку G2 вставим формулу =СЧеТЕСЛИ(С2:C1001; 'Беларусь'), в ячейку G3 вставим формулу =СЧеТЕСЛИ(С2:C1001; 'Египет'), в ячейку G4 вставим формулу =СЧеТЕСЛИ(С2:C1001;'Турция'). Теперь построим по полученным значениям круговую диаграмму, подпишем сектора.<br>Ответ: 1. 111; 2. 31,09.<br><br>",
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
