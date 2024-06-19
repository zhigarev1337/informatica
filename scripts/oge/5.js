const questions = [
    {//1
        question: "<br>В одной из кодировок Unicode каждый символ кодируется 16 битами. Вова написал текст (в нем нет лишних пробелов):<br><br>«Алый, синий, фуксия, красный, янтарный, оранжевый, фиолетовый, канареечный, баклажановый  — цвета».<br><br>Ученик вычеркнул из списка название одного цвета. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.<br>При этом размер нового предложения в данной кодировке оказался на 12 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название цвета. <br><br>",
        type: "text",
        answer: "алый",
        solutionUrl: "solutions/solution49.html"
    },
    {//2
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Вася и Петя играли в шпионов и кодировали сообщения собственным шифром. Фрагмент кодовой таблицы приведен ниже:<br><br>",
        afterImageText: "<br><br>Расшифруйте сообщение, если известно, что буквы в нем не повторяются:<br><br>*@@~**~*~<br><br>Запишите в ответе расшифрованное сообщение.<br><br>",
        image: "../../../images/oge/41.png",
        answer: "ЛИМОН",
        solutionUrl: "solutions/solution50.html"
    },
    {//3
        question: "<br>Дано четыре числа: 638, 442, 357, 123. Для какого из приведенных чисел истинно высказывание:<br><br><b>НЕ</b> (Первая цифра четная) <b>И</b> (Сумма цифр четная).<br><br>",
        type: "text",
        answer: "123",
        solutionUrl: "solutions/solution51.html"
    },
    {//4
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Между населенными пунктами A, B, C, D, E построены дороги, протяженность которых (в километрах) приведена в таблице.<br><br>",
        afterImageText: "<br>Определите длину кратчайшего пути между пунктами A и Е, проходящего через пункт С. Передвигаться можно только по дорогам, протяженность которых указана в таблице, два раза посещать один пункт нельзя.<br><br>",
        image: "../../../images/oge/42.png",
        answer: "8",
        solutionUrl: "solutions/solution52.html"
    },
    {//5
        question: "<br>У исполнителя Квадратор две команды, которым присвоены номера:<br><br><b>1. возведи в квадрат</b><br><b>2. зачеркни справа</b><br><br>Первая из них возводит число на экране во вторую степень, вторая  — удаляет крайнюю правую цифру числа. Составьте алгоритм получения из числа 3 числа 6, содержащий не более 5 команд. В ответе запишите только номера команд.<br><br>",
        type: "text",
        answer: "11212",
        solutionUrl: "solutions/solution53.html"
    },
    {//6
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Ниже приведена программа, записанная на пяти языках программирования.<br><br>",
        afterImageText: "<br>Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:<br><br>(1, 2); (11, 2); (1, 12); (11, 12); (–11, –12); (–11, 12); (–12, 11); (10, 10); (10, 5).<br><br>Сколько было запусков, при которых программа напечатала «YES»?<br><br>",
        image: "../../../images/oge/43.png",
        answer: "5",
        solutionUrl: "solutions/solution54.html"
    },
    {//7
        question: "<br>Доступ к файлу img.bmp, находящемуся на сервере pic.kz, осуществляется по протоколу http. Фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.<br><br>A)  img<br>Б)  /<br>B)  kz<br>Г)  ://<br>Д)  http<br>Е)  .bmp<br>Ж)  pic.<br><br>",
        type: "text",
        answer: "ДГЖВБАЕ",
        solutionUrl: "solutions/solution55.html"
    },
    {//8
        question: "",
        type: "textImageText",
        beforeImageText: "<br>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для логической операции «И»  — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.<br><br>",
        afterImageText: "<br>Какое количество страниц (в тысячах) будет найдено по запросу Вега & Арктур ?<br>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br>",
        image: "../../../images/oge/44.png",
        answer: "338",
        solutionUrl: "solutions/solution56.html"
    },
    {//9
        question: "",
        type: "textImageText",
        beforeImageText: "<br>На рисунке  — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, И, К. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. Сколько существует различных путей из пункта А в пункт К, не проходящих через пункт Е?<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/45.png",
        answer: "11",
        solutionUrl: "solutions/solution57.html"
    },
    {//10
        question: "<br>Среди приведенных ниже трех чисел, записанных в различных системах счисления, найдите максимальное и запишите его в ответе в десятичной системе счисления. В ответе запишите только число, основание системы счисления указывать не нужно.<br><br>38<sub>16</sub>, 75<sub>8</sub>, 110100<sub>2</sub>.<br><br>",
        type: "text",
        answer: "61",
        solutionUrl: "solutions/solution58.html"
    },
    {//11
        question: "<br>В одном из произведений А. П. Чехова, текст которого приведен в каталоге <b>Чехов</b>, присутствует персонаж с фамилией Родэ. С помощью поисковых средств операционной системы и текстового редактора выясните звание этого персонажа.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/DEMO-12.rar",
        answer: "подпоручик",
        solutionUrl: "solutions/solution59.html"
    },
    {//12
        question: "<br>Сколько файлов с расширением .odt содержится в подкаталогах каталога DEMO-12? В ответе укажите только число.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/Task12.rar",
        answer: "2",
        solutionUrl: "solutions/solution60.html"
    }     
];

questions.push(
    {
        question: "<br>Создайте в текстовом редакторе документ и напишите в нем следующий текст, точно воспроизведя все оформление текста, имеющееся в образце.<br>Данный текст должен быть набран шрифтом размером 14 пунктов обычного начертания. Отступ первой строки первого абзаца основного текста  — 1 см. Расстояние между строками текста не менее одинарного, но не более полуторного междустрочного интервала.<br>Основной текст выровнен по ширине; в ячейках первого столбца таблицы применено выравнивание по левому краю, в ячейках второго и третьего столбцов  — по центру. В основном тексте и таблице есть слова, выделенные полужирным, курсивным шрифтом и подчеркиванием. Ширина таблицы меньше ширины основного текста. Таблица выровнена на странице по центру горизонтали.<br>При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размеров страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца.<br>Интервал между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов.<br>Текст сохраните в файле, имя которого Вам сообщат организаторы. Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/46.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>",
    },
    {
        question: "В электронную таблицу внесли данные наблюдения за погодой в течение одного года. Ниже приведены первые пять строк таблицы.<br><br>",
        type: "textImageTextDownload",
        beforeImageText: "",
        image: "../../../images/oge/47.png",
        afterImageText: "<br>В столбце A записана дата наблюдения; в столбце B  — среднесуточная температура воздуха для указанной даты; в столбце C  — количество выпавших осадков (в миллиметрах) для указанной даты; в столбце D  — среднесуточное атмосферное давление (в миллиметрах ртутного столба). В столбце E записано направление ветра для указанной даты  — одно из восьми возможных значений: «СЗ», «С», «СВ», «В», «ЮВ», «Ю», «ЮЗ», «З». В столбце F записана среднесуточная скорость ветра (в метрах в секунду). Всего в электронную таблицу были внесены данные по всем 365 дням года в хронологическом порядке.<br><br>Выполните задание.<br>Откройте файл с данной электронной таблицей (расположение файла Вам сообщат организаторы экзамена). На основании данных, содержащихся в этой таблице, выполните задания.<br>1.  Какое среднее количество осадков выпадало за сутки в осенние месяцы (сентябрь, октябрь, ноябрь)? Ответ на этот вопрос запишите в ячейку H2 таблицы.<br>2.  Какая средняя температура была в те дни года, когда дул северный (С) ветер? Ответ на этот вопрос запишите в ячейку H3 таблицы.<br>3.  Постройте круговую диаграмму, отображающую соотношение количества дней, когда дули ветры «В», «СВ» и «ЮВ». Левый верхний угол диаграммы разместите вблизи ячейки G6. В поле диаграммы должны присутствовать легенда (обозначение, какой сектор диаграммы соответствует каким данным) и числовые значения данных, по которым построена диаграмма.<br><br>",
        fileLink: "../../../files/task14.xlsx",
        infoText: " ",
    },
    {
        question: "<br>Введите с клавиатуры 8 положительных целых чисел. Определите, сколько из них делятся на 3 и при этом заканчиваются на 4. Программа должна вывести одно число: количество чисел, кратных 3 и оканчивающихся на 4.<br><b>Пример работы</b><br><br>",
        type: "textImageText",  
        image: "../../../images/oge/48.png", 
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
        description: "Решение.<br>Решение для OpenOffice.org Calc<br>В ячейку H2 необходимо записать формулу<br>=AVERAGE(C245:C335)<br>В ячейку H3 необходимо записать формулу<br>=SUMIF(E2:E366; 'С'; B2:B366)/COUNTIF(E2:E366; 'С')<br>Решение для Microsoft Excel<br>В ячейку H2 необходимо записать формулу<br>=СРЗНАЧ(C245:C335)<br>В ячейку H3 необходимо записать формулу<br>=СУММЕСЛИ(E2:E366; 'С'; B2:B366)/СЧеТЕСЛИ(E2:E366; 'С')<br>Возможны и другие варианты решения, например сортировка результатов наблюдений по значению столбца E с последующим заданием правильных блоков для функций. Если задание выполнено правильно и при выполнении задания использовались файлы, специально подготовленные для проверки выполнения данного задания, то должны получиться следующие ответы:<br>на первый вопрос: 1,58;<br>на второй вопрос: 6,33;<br>на третье задание:<br>Сектора диаграммы должны визуально соответствовать соотношению 48 : 31 : 43. Порядок следования секторов может быть любым.<br>Ответ: 1) 1,58; 2) 6,33.<br><br>",
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
