// Объявляем объект для хранения идентификаторов уроков
var lessonId = {};

// Функция для перенаправления на страницу урока
function goToLesson(lessonId) {
    window.location.href = `lessons/${lessonId}.html`;
}

// Функция для отображения текста по нажатию на кнопку
function showText(buttonId) {
    var contentDiv = document.getElementById('content');
    var sidebarDiv = document.getElementById('sidebar');
    var classNumber;

    // Убираем выделение у всех кнопок
    var buttons = document.querySelectorAll('#sidebar button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Выделяем текущую кнопку
    var currentButton = document.getElementById(buttonId);
    currentButton.classList.add('active');

    switch (buttonId) {
        case 'button1':
            classNumber = 7;
            break;
        case 'button2':
            classNumber = 8;
            break;
        case 'button3':
            classNumber = 9;
            break;
        case 'button4':
            classNumber = 10;
            break;
        case 'button5':
            classNumber = 11;
            break;
        default:
            contentDiv.innerHTML = "Неопределенная кнопка.";
            return;
    }

    var header = "<span class='program-header'>" + classNumber + " класс</span>";

    var lessons = [];
    switch (classNumber) {
        case 7:
            lessons = [
                { id: "lesson1", title: "Урок 1", topic: "Что изучает информатика. Правила гигиены и техники безопасности при работе на компьютере" },
                { id: "lesson2", title: "Урок 2", topic: "Информация, ее свойства и классификация" },
                { id: "lesson3", title: "Урок 3", topic: "Основные компоненты компьютера и их функции" },
                { id: "lesson4", title: "Урок 4", topic: "Информационные процессы" },
                { id: "lesson5", title: "Урок 5", topic: "Кодирование информации. Двоичный код" },
                { id: "lesson6", title: "Урок 6", topic: "Единицы измерения информации" },
                { id: "lesson7", title: "Урок 7", topic: "Программное обеспечение компьютера" },
                { id: "lesson8", title: "Урок 8", topic: "Файл и файловая система" },
                { id: "lesson9", title: "Урок 9", topic: "Основы информационной безопасности и защиты информации" },
                { id: "lesson10", title: "Урок 10", topic: "Формирование изображения на экране компьютера" },
                { id: "lesson11", title: "Урок 11", topic: "Текстовые документы и оценка их количественных параметров" },
                { id: "lesson12", title: "Урок 12", topic: "Создание текстовых документов на компьютере" }
            ];
            break;
        case 8:
            lessons = [
                { id: "lesson13", title: "Урок 1", topic: "Техника безопасности при работе с компьютером." },
                { id: "lesson14", title: "Урок 2", topic: "Основные сведения о системе счисления" },
                { id: "lesson15", title: "Урок 3", topic: "Двоичная система счисления. Двоичная арифметика" },
                { id: "lesson16", title: "Урок 4", topic: "Высказывания и операции с ними" },
                { id: "lesson17", title: "Урок 5", topic: "Исполнители и алгоритмы. Способы записи алгоритма" },
                { id: "lesson18", title: "Урок 6", topic: "Объекты алгоритмов. Алгоритмическая конструкция «следование»" },
                { id: "lesson19", title: "Урок 7", topic: "Алгоритмическая конструкция «ветвление»" },
                { id: "lesson20", topic: "Урок 8", topic: "Алгоритмическая конструкция «повторение»" },
                { id: "lesson21", title: "Урок 9", topic: "Анализ алгоритмов" },
                { id: "lesson22", title: "Урок 10", topic: "Основные сведения о языке программирования Паскаль." },
                { id: "lesson23", title: "Урок 11", topic: "Запись линейных алгоритмов на языке программирования" },
                { id: "lesson24", title: "Урок 12", topic: "Запись ветвлений на языке Паскаль" }
            ];
            break;
        case 9:
            lessons = [
                { id: "lesson25", title: "Урок 1", topic: "Моделирование как метод познания" },
                { id: "lesson26", title: "Урок 2", topic: "Графы" },
                { id: "lesson27", title: "Урок 3", topic: "Табличные информационные модели" },
                { id: "lesson28", title: "Урок 4", topic: "Решение задач на компьютере" },
                { id: "lesson29", title: "Урок 5", topic: "Одномерные массивы целых чисел" },
                { id: "lesson30", title: "Урок 6", topic: "Анализ алгоритмов для исполнителей" },
                { id: "lesson31", title: "Урок 7", topic: "Базы данных" },
                { id: "lesson32", title: "Урок 8", topic: "Система управления базами данных" },
                { id: "lesson33", title: "Урок 9", topic: "Организация вычислений в электронных таблицах" },
                { id: "lesson34", title: "Урок 10", topic: "Компьютерные сети" },
                { id: "lesson35", title: "Урок 11", topic: "Информационные ресурсы и сервисы Интернета. Поиск информации в сети" },
                { id: "lesson36", title: "Урок 12", topic: "Создание веб-сайта" }
            ];
            break;
        case 10:
            lessons = [
                { id: "lesson37", title: "Урок 1", topic: "Информация и информатика. Информационная грамотность и информационная культура" },
                { id: "lesson38", title: "Урок 2", topic: "Подходы к измерению информации" },
                { id: "lesson39", title: "Урок 3", topic: "Информационные связи в системах различной природы" },
                { id: "lesson40", title: "Урок 4", topic: "Обработка информации. Передача и хранение информации" },
                { id: "lesson41", title: "Урок 5", topic: "История развития вычислительной техники" },
                { id: "lesson42", title: "Урок 6", topic: "Программное обеспечение компьютеров и компьютерных систем" },
                { id: "lesson43", title: "Урок 7", topic: "Некоторые сведения из теории множеств" },
                { id: "lesson44", title: "Урок 8", topic: "Алгебра логики. Таблица истинности" },
                { id: "lesson45", title: "Урок 9", topic: "Преобразование логических выражений" },
                { id: "lesson46", title: "Урок 10", topic: "Логические задачи и способы их решения" },
                { id: "lesson47", title: "Урок 11", topic: "Кодирование текстовой информации" },
                { id: "lesson48", title: "Урок 12", topic: "Обработка текстовой информации" }
            ];
            break;
        case 11:
            lessons = [
                { id: "lesson49", title: "Урок 1", topic: "Основные сведения об алгоритмах" },
                { id: "lesson50", title: "Урок 2", topic: "Базовые алгоритмические структуры" },
                { id: "lesson51", title: "Урок 3", topic: "Запись алгоритмов на языках программирования. Язык программирования Паскаль (Python)" },
                { id: "lesson52", title: "Урок 4", topic: "Вспомогательные алгоритмы" },
                { id: "lesson53", title: "Урок 5", topic: "Массивы" },
                { id: "lesson54", title: "Урок 6", topic: "Модели и моделирование" },
                { id: "lesson55", title: "Урок 7", topic: "Моделирование на графах" },
                { id: "lesson56", title: "Урок 8", topic: "Знакомство с теорией игр" },
                { id: "lesson57", title: "Урок 9", topic: "Компьютерное моделирование" },
                { id: "lesson58", title: "Урок 10", topic: "Математические модели. Стохастические модели" },
                { id: "lesson59", title: "Урок 11", topic: "Компьютерные сети" },
                { id: "lesson60", title: "Урок 12", topic: "Веб-технологии" }
            ];
            break;
        default:
            contentDiv.innerHTML = "Неопределенная кнопка.";
            return;
    }

    var htmlContent = "<h2>" + header + "</h2>";
    for (var i = 0; i < lessons.length; i++) {
        lessonId[classNumber + "-" + (i + 1)] = lessons[i].id;

        htmlContent += "<div id='" + lessons[i].id + "'>";
        htmlContent += "<h3 style='font-weight:normal;'>" + lessons[i].title + "</h3>"; 
        htmlContent += "<p style='font-family: Arial, sans-serif;'>" + lessons[i].topic + "</p>"; 
        htmlContent += "<button onclick='goToLesson(\"" + lessons[i].id + "\")'>Перейти к уроку</button>";
        htmlContent += "</div>"; 
        if (i < lessons.length - 1) {
            htmlContent += "<hr>"; 
        }
    }

    htmlContent += `
    <div style='margin-top: 20px; padding: 10px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 5px;'>
        <p style='margin: 0; font-size: 14px; text-align: center; color: #555;'>
            Источник - 
            <a href='https://resh.edu.ru/subject/19/' target='_blank' style='color: #007bff; text-decoration: none;'>
                Информатика
            </a>
        </p>
    </div>`;

    sidebarDiv.style.display = 'block';

    contentDiv.innerHTML = htmlContent;

    // Плавно прокручиваем скроллбар в начало
    contentDiv.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}


window.addEventListener('DOMContentLoaded', (event) => {
    showText('button1');

    var contentDiv = document.getElementById('content');
    var scrolled = false;

    function isScrolledToBottom() {
        return contentDiv.scrollHeight - contentDiv.scrollTop === contentDiv.clientHeight;
    }

    // Обработчик прокрутки блока
    contentDiv.addEventListener('scroll', function() {
        scrolled = isScrolledToBottom();
    });

    // Обработчик изменения содержимого блока
    contentDiv.addEventListener('DOMSubtreeModified', function() {
        if (scrolled) {
            // Если пользователь был прокручен до конца, возвращаем его туда после изменения содержимого
            contentDiv.scrollTop = contentDiv.scrollHeight;
        }
    });
});
