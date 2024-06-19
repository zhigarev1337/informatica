const questions = [
    {//1
        question: "<br>В кодировке Windows⁠-⁠1251 каждый символ кодируется 8 битами. Вова хотел написать текст (в нем нет лишних пробелов):<br><br>«Мой дядя самых честных правил,<br>Когда не в шутку занемог...»<br><br>Учение вычеркнул из текста одно слово. Заодно он вычеркнул ставший лишним проблем  — два пробела не должны идти подряд. При этом размер нового предложения в данной кодировке оказался на 5 байт меньше, чем размер исходного предложения. Напишите в ответ вычеркнутое слово. <br><br>",
        type: "text",
        answer: "дядя",
        solutionUrl: "solutions/solution61.html"
    },
    {//2
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Вася шифрует русские слова, записывая вместо каждой буквы ее номер в алфавите (без пробелов). Номера букв даны в таблице:<br><br>",
        afterImageText: "<br><br>Некоторые шифровки можно расшифровать не одним способом. Например, 12112 может означать «АБАК», может  — «КАК», а может  — «АБААБ». Даны четыре шифровки:<br><br>112233<br>135793<br>203014<br>412030<br><br>Только одна из них расшифровывается единственным способом. Найдите ее и расшифруйте. То, что получилось, запишите в качестве ответа.<br><br>",
        image: "../../../images/oge/49.png",
        answer: "ГАТЬ",
        solutionUrl: "solutions/solution62.html"
    },
    {//3
        question: "<br>Напишите наименьшее целое число x, для которого истинно высказывание:<br><b>НЕ</b> (X <= 8) <b>И НЕ</b> (X >= 15) И (X четное).<br><br>",
        type: "text",
        answer: "10",
        solutionUrl: "solutions/solution63.html"
    },
    {//4
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Сельская малокомплектная школа находится в поселке Вершки. Петя Орлов живет в деревне Дальнее. Определите, какое минимальное расстояние ему надо пройти, чтобы добраться до школы:<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/50.png",
        answer: "8",
        solutionUrl: "solutions/solution64.html"
    },
    {//5
        question: "<br>У исполнителя Вычислитель две команды, которым присвоены номера:<br>1. вычти 1<br>2. умножь на 3<br>Первая из них уменьшает число на экране на 1, вторая утраивает его.<br>Составьте алгоритм получения из числа 3 числа 53, содержащий не более 5 команд. В ответе запишите только номера команд.<br>(Например, 12121  — это алгоритм<br>вычти 1<br>умножь на 3<br>вычти 1<br>умножь на 3<br>вычти 1,<br>который преобразует число 4 в число 23.)<br>Если таких алгоритмов более одного, то запишите любой из них.<br><br>",
        type: "text",
        answer: "12221",
        solutionUrl: "solutions/solution65.html"
    },
    {//6
        question: "",
        type: "textImageText",
        beforeImageText: "<br>Ниже приведена программа, записанная на пяти языках программирования.<br><br>",
        afterImageText: "<br>Было проведено 9 запусков программы, при которых в качестве значений переменных s и k вводились следующие пары чисел:<br><br>(1, 1); (8, 4); (14, 10); (20, 1); (7, 3); (10, 5); (10, 2); (4, 1); (1, 0).<br><br>Сколько было запусков, при которых программа напечатала «ДА»?<br><br>",
        image: "../../../images/oge/51.png",
        answer: "4",
        solutionUrl: "solutions/solution66.html"
    },
    {//7
        question: "<br>Доступ к файлу net.txt, находящемуся на сервере doc.com, осуществляется по протоколу ftp. В таблице фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.<br><br>А)  /<br>Б)  .com<br>В)  ftp<br>Г)  .txt<br>Д)  doc<br>Е)  net<br>Ж)   ://<br><br>",
        type: "text",
        answer: "ВЖДБАЕГ",
        solutionUrl: "solutions/solution67.html"
    },
    {//8
        question: "",
        type: "textImageText",
        beforeImageText: "<br>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И»  — символ «&».<br>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.<br><br>",
        afterImageText: "<br>Какое количество страниц (в тысячах) будет найдено по запросу<br><br>Рыбка?<br><br>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.<br><br>",
        image: "../../../images/oge/52.png",
        answer: "570",
        solutionUrl: "solutions/solution68.html"
    },
    {//9
        question: "",
        type: "textImageText",
        beforeImageText: "<br>На рисунке  — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, З, И. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. Сколько существует различных путей из города А в город И, проходящих через город Г?<br><br>",
        afterImageText: "<br><br>",
        image: "../../../images/oge/53.png",
        answer: "14",
        solutionUrl: "solutions/solution69.html"
    },
    {//10
        question: "<br>Среди приведенных ниже трех чисел, записанных в десятичной системе счисления, найдите число, сумма цифр которого в восьмеричной записи наименьшая. В ответе запишите сумму цифр в восьмеричной записи этого числа.<br><br>55<sub>10</sub>, 83<sub>10</sub>, 91<sub>10</sub>.<br><br>",
        type: "text",
        answer: "6",
        solutionUrl: "solutions/solution70.html"
    },
    {//11
        question: "<br>В одном из произведений А. П. Чехова, текст которого приведен в каталоге <b>Чехов</b>, присутствует персонаж с фамилией Рагин. С помощью поисковых средств операционной системы и текстового редактора выясните профессию этого персонажа.<br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/DEMO-12.rar",
        answer: "доктор",
        solutionUrl: "solutions/solution71.html"
    },
    {//12
        question: "<br>Сколько файлов с расширением .html содержится в подкаталогах каталога <b>Files</b>? В ответе укажите только число. <br>Выполните задание, распаковав архив на своем компьютере.<br><br>",
        type: "downloadLink",
        fileLink: "../../../files/Task12.rar",
        answer: "5",
        solutionUrl: "solutions/solution72.html"
    }     
];

questions.push(
    {
        question: "<br>Создайте в текстовом редакторе документ и напишите в нем следующий текст, точно воспроизведя все оформление текста, имеющееся в образце.<br>Данный текст должен быть набран шрифтом размером 14 пунктов обычного начертания. Отступ первой строки первого абзаца основного текста  — 1 см. Расстояние между строками текста не менее одинарного, но не более полуторного междустрочного интервала.<br>Основной текст выровнен по ширине; в ячейках первого столбца таблицы применено выравнивание по левому краю, в ячейках второго и третьего столбцов  — по центру. В основном тексте и таблице есть слова, выделенные полужирным, курсивным шрифтом и подчеркиванием. Ширина таблицы меньше ширины основного текста. Таблица выровнена на странице по центру горизонтали. <br>При этом допустимо, чтобы ширина Вашего текста отличалась от ширины текста в примере, поскольку ширина текста зависит от размеров страницы и полей. В этом случае разбиение текста на строки должно соответствовать стандартной ширине абзаца.<br>Интервал между текстом и таблицей не менее 12 пунктов, но не более 24 пунктов.<br>Текст сохраните в файле, имя которого Вам сообщат организаторы. Файл ответа необходимо сохранить в одном из следующих форматов: *.odt, или *.doc, или *.docx.<br><br>",
        type: "textImageText",  
        image: "../../../images/oge/54.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>"
    },
    {
        question: "<br>В электронную таблицу занесли данные о калорийности продуктов. Ниже приведены первые пять строк таблицы.<br><br>",
        type: "textImageTextDownload",
        beforeImageText: "",
        image: "../../../images/oge/55.png",
        afterImageText: "<br>В столбце А записан продукт; в столбце В  — содержание в нем жиров; в столбце С  — содержание белков; в столбце D  — содержание углеводов и в столбце Е  — калорийность этого продукта. Всего в электронную таблицу были занесены данные по 1000 продуктов.<br><br>Выполните задание.<br>Откройте файл с данной электронной таблицей (расположение файла Вам сообщат организаторы экзамена). На основании данных, содержащихся в этой таблице, выполните задания.<br>1.  Сколько продуктов в таблице содержат более 15 г углеводов и имеете калорийностью менее 300 Ккал? Запишите число этих продуктов в ячейку H2 таблицы.<br>2.  Какова общая калорийность продуктов с содержанием менее 10 г углеводов? Ответ на этот вопрос запишите в ячейку H3 таблицы.<br>3.  Постройте круговую диаграмму, отображающую соотношение количества продуктов с содержанием жиров менее 1 г, от 1 г до 15 г включительно и более 15 г. Левый верхний угол диаграммы разместите вблизи ячейки G6. В поле диаграммы должны присутствовать легенда (обозначение, какой сектор диаграммы соответствует каким данным) и числовые значения данных, по которым построена диаграмма.<br><br>Полученную таблицу необходимо сохранить под именем, указанным организаторами экзамена.<br><br>",
        fileLink: "../../../files/task14.xlsx",
        infoText: " "
    },
    {
        question: "<br>Напишите программу, которая в последовательности натуральных чисел определяет количество чисел, кратных 4. Программа получает на вход количество чисел в последовательности, а затем сами числа. В последовательности всегда имеется число, кратное 4. Количество чисел не превышает 1000. Введенные числа не превышают 30 000. Программа должна вывести одно число  — количество чисел, кратных 4.<br><br><b>Пример работы программы</b><br><br>",
        type: "textImageText",  
        image: "../../../images/oge/56.png", 
        infoText: " ",
        afterImageText: "<br>Решения заданий с развернутым ответом не проверяются автоматически. Запишите решение на бумаге. На следующей странице вам будет предложено проверить их самостоятельно.<br>"
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
        description: "Решение.<br>   1.  В ячейку Е2 запишем формулу =И(C2=9;D2>250). Скопируем формулу во все ячейки диапазона Е3:Е1001. В ячейку H2 запишем формулу =СЧеТЕСЛИ(E2:E1001;ИСТИНА). Таких 107.<br>   2.  В ячейку H3 запишем формулу, определяющую отношение суммы баллов учеников школы № 3 к количеству учеников этой школы: =СУММЕСЛИ(B2:B1001;'3';D2:D1001)/СЧеТЕСЛИ(B2:B1001;'3'). Получаем: 225,73.<br>   3.  В ячейку G2 вставим формулу =СЧеТЕСЛИ(B2:B1001; '49'), в ячейку G3 вставим формулу =СЧеТЕСЛИ(B2:B1001; '46'), в ячейку G4 вставим формулу =СЧеТЕСЛИ(B2:B1001; '48'). Теперь построим по полученным значениям круговую диаграмму, подпишем сектора.<br   >Ответ: 1. 107; 2. 225,73.<br><br>",
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
