const questions = [
    {
        question: "<br>На рисунке схема дорог изображена в виде графа, в таблице содержатся сведения о длине этих дорог в километрах.",
        type: "textImageText",
        images: ["../../../images/ege/1.png", "../../../images/ege/2.png"],
        afterImagesText: "Так как таблицу и схему рисовали независимо друг от друга, то нумерация населённых пунктов в таблице никак не связана с буквенными обозначениями на графе. Определите длину дороги из пункта Б в пункт Г. В ответе запишите целое число.<br>ВНИМАНИЕ. Длины отрезков на схеме не отражают длины дорог.",
        answer: "28"
    },
    {
        question: "Логическая функция F задаётся выражением (¬a ∧ ¬b) ∨ (b ≡ c) ∨ d. На рисунке приведён частично заполненный фрагмент таблицы истинности функции F, содержащий неповторяющиеся строки. Определите, какому столбцу таблицы истинности функции F соответствует каждая из переменных a, b, c, d.",
        type: "textImageTextImageText",
        images: ["../../../images/ege/15.png", "../../../images/ege/16.png"],
        afterImagesText: "В ответе напишите буквы a, b, c, d в том порядке, в котором идут соответствующие им столбцы (сначала  — буква, соответствующая первому столбцу; затем  — буква, соответствующая второму столбцу, и т. д.). Буквы в ответе пишите подряд, никаких разделителей между буквами ставить не нужно.<br>Пример. Пусть задано выражение x → y, зависящее от двух переменных x и y, и фрагмент таблицы истинности:<br>Тогда первому столбцу соответствует переменная y, а второму столбцу соответствует переменная x. В ответе нужно написать: yx.",
        answer: "cdba"
    },
    {
        question: "В файле приведён фрагмент базы данных «Продукты», содержащей информацию о поставках товаров и их продаже. База данных состоит из трёх таблиц.<br>Таблица «Торговля» содержит записи о поставках и продажах товаров в магазинах города в июне 2021 г. Таблица «Товар» содержит данные о товарах. Таблица «Магазин» содержит данные о магазинах. На рисунке приведена схема базы данных, содержащая все поля каждой таблицы и связи между ними.",
        type: "textImageTextDownload",
        images: ["../../../images/ege/22.png"],
        afterImagesText: "Используя информацию из приведённой базы данных, определите общее количество (в килограммах) всех видов паштета, полученных магазинами Первомайского района с 22 по 28 июня.<br>В ответе запишите число  — найденное количество в килограммах.",
        fileLink: "file3.zip",
        answer: "742"
    },
    {
        question: "По каналу связи передаются сообщения, содержащие только восемь букв: К, Л, М, Н, О, П, Р, С. Для передачи используется двоичный код, удовлетворяющий условию Фано. Кодовые слова для некоторых букв известны: К  — 001, Н  — 100, Р  — 111. Какое наименьшее количество двоичных знаков потребуется для кодирования слова МОЛОКОСОС?<b>Примечание.</b> Условие Фано означает, что ни одно кодовое слово не является началом другого кодового слова.",
        type: "text",
        answer: "24"
    },
    {
        question: "Автомат получает на вход четырёхзначное число. По этому числу строится новое число по следующим правилам.<br>1.  Складываются первая и вторая, а также третья и четвёртая цифры исходного числа.<br>2.  Полученные два числа записываются друг за другом в порядке убывания (без разделителей).<br>Пример. Исходное число: 3165. Суммы: 3 + 1 = 4; 6 + 5 = 11. Результат: 114.<br>Укажите наименьшее число, в результате обработки которого, автомат выдаст число 1311.",
        type: "text",
        answer: "2949"
    },
    {
        question: "Исполнитель Черепаха действует на плоскости с декартовой системой координат. В начальный момент Черепаха находится в начале координат, её голова направлена вдоль положительного направления оси ординат, хвост опущен. При опущенном хвосте Черепаха оставляет на поле след в виде линии. В каждый конкретный момент известно положение исполнителя и направление его движения. У исполнителя существует две команды: Вперёд n (где n  — целое число), вызывающая передвижение Черепахи на n единиц в том направлении, куда указывает её голова, и Направо m (где m  — целое число), вызывающая изменение направления движения на m градусов по часовой стрелке. Запись<br>Повтори k [Команда1 Команда2 … КомандаS]<br>означает, что последовательность из S команд повторится k раз. Черепахе был дан для исполнения следующий алгоритм:<br>Повтори 10 [Вперёд 9 Направо 90 Вперёд 2 Направо 90]<br>Определите количество точек с целочисленными координатами, лежащих внутри и на границе области, которую ограничивает заданная алгоритмом линия.",
        type: "text",
        answer: "30"
    },
    {
        question: "Книгу объёмом 1 Мбайт записали как аудиокнигу. Запись велась в формате стерео (2 канала) с частотой 32 кГц и разрешением 16 бит. За одну минуту записывалось в среднем 1,5 Кбайт текста. Сжатие данных позволило сократить размер полученного звукового файла на 80%. Для удобства использования запись разделили на фрагменты со средним размером 20 Мбайт. Определите количество полученных фрагментов.",
        type: "text",
        answer: "50"
    },
    {
        question: "Игорь составляет пятизначные числа, используя цифры девятеричной системы счисления. Сколько различных чисел может составить Игорь, в которых ровно две цифры 3 и нечётные цифры не стоят рядом с цифрой 2?",
        type: "text",
        answer: "3352"
    },
    {
        question: "Откройте файл электронной таблицы, содержащей в каждой строке четыре натуральных числа. Определите количество строк таблицы, содержащих числа, для которых выполнены оба условия:<br>—  наибольшее из четырёх чисел меньше суммы трёх других;<br>—  четыре числа можно разбить на две пары чисел с равными суммами.<br>В ответе запишите только число.",
        type: "textDownload",
        fileLink: "file9.zip",
        answer: "118"
    },
    {
        question: "Повесть братьев Стругацких «Понедельник начинается в субботу» состоит из трёх историй. Определите, сколько раз в третьей истории, включая заголовки, эпиграфы и сноски, встречается слово «ты» или «Ты». Учитывать следует только эту форму слова, другие формы («тебе», «тебя» и т. д.) включать в подсчёт не нужно.",
        type: "textDownload",
        fileLink: "file10.zip",
        answer: "37"
    },
    {
        question: "При регистрации в компьютерной системе каждому пользователю выдаётся пароль, состоящий из 105 символов. В качестве символов используют 1510 специальных символов и десятичные цифры. В базе данных для хранения сведений о каждом пользователе отведено одинаковое и минимально возможное целое число байт.<br>При этом используют посимвольное кодирование паролей, все символы кодируют одинаковым и минимально возможным количеством бит. В компьютерной системе зарегистрировано 16 930 пользователей. Укажите количество Кбайт, выделенное на хранение всех паролей. В ответе запишите только целое число.",
        type: "text",
        answer: "2398"
    },
    {
        question: "Исполнитель Редактор получает на вход строку цифр и преобразует её. Редактор может выполнять две команды, в обеих командах v и w обозначают цепочки цифр.<br>А)  заменить (v, w).<br>Эта команда заменяет в строке первое слева вхождение цепочки v на цепочку w. Например, выполнение команды<br>заменить (111, 27)<br>преобразует строку 05111150 в строку 0527150.<br>Если в строке нет вхождений цепочки v, то выполнение команды<br>заменить (v, w) не меняет эту строку.<br>Б)  нашлось (v).<br>Эта команда проверяет, встречается ли цепочка v в строке исполнителя Редактор. Если она встречается, то команда возвращает логическое значение «истина», в противном случае возвращает значение «ложь». Строка исполнителя при этом не изменяется.<br>Дана программа для редактора:<br>НАЧАЛО<br>                ПОКА НЕ нашлось (00)<br>                        заменить (033, 1302)<br>                        заменить (03, 120)<br>                        заменить (023, 203)<br>                        заменить (02, 20)<br>                КОНЕЦ ПОКА<br>КОНЕЦ<br>Известно, что в исходной строке A было ровно два нуля  — на первом и на последнем месте, а после выполнения данной программы получилась строка B, содержащая 333 единицы, 819 двоек и 181 тройку. Какое наибольшее количество двоек могло быть в строке A?",
        type: "text",
        answer: "486"
    },
    {
        question: "В терминологии сетей TCP/IP маской сети называется двоичное число, определяющее, какая часть IP-адреса узла сети относится к адресу сети, а какая  — к адресу самого узла в этой сети. Обычно маска записывается по тем же правилам, что и IP-адрес,  — в виде четырёх байтов, причём каждый байт записывается в виде десятичного числа. При этом в маске сначала (в старших разрядах) стоят единицы, а затем с некоторого разряда  — нули. Адрес сети получается в результате применения поразрядной конъюнкции к заданным IP-адресу узла и маске.<br>Например, если IP-адрес узла равен 231.32.255.131, а маска равна 255.255.240.0, то адрес сети равен 231.32.240.0.<br>Для узла с IP-адресом 117.191.37.84 адрес сети равен 117.191.37.80. Чему равно наименьшее возможное значение последнего (самого правого) байта маски? Ответ запишите в виде десятичного числа.",
        type: "text",
        answer: "240"
    },
    {
        question: "Значение выражения 368 + 620 − 12? записали в системе счисления с основанием 6.<br>Сколько цифр 5 содержится в этой записи?",
        type: "text",
        answer: "14"
    },
    {
        question: "Обозначим через ДЕЛ(n, m) утверждение «натуральное число n делится без остатка на натуральное число m».<br>Для какого наименьшего натурального числа А формула<br>(ДЕЛ(x, 3) → ¬ДЕЛ(x, 5)) ∨ (x + A ≥ 90)<br>тождественно истинна (т. е. принимает значение 1) при любом натуральном значении переменной x?",
        type: "text",
        answer: "75"
    },
    {
        question: "Алгоритм вычисления значения функции F(n), где n  — натуральное число, задан следующими соотношениями:<br>F(n) = 2 при n ≤ 2;<br>F(n) = F(n − 1) × F(n − 2) при n> 2.<br>Чему равно значение функции F(5)? В ответе запишите только натуральное число.",
        type: "text",
        answer: "32"
    },
    {
        question: "Файл содержит последовательность неотрицательных целых чисел, не превышающих 10 000. Назовём парой два идущих подряд элемента последовательности. Определите количество пар чисел, произведение которых кратно 15, а их сумма делится на 7. В ответе запишите два числа: сначала количество найденных пар, а затем  — максимальную сумму элементов таких пар.",
        type: "textDownloadDoubleInput",
        fileLink: "file17.zip",
        answers: ["170", "18662"]
    },
    {
        question: "Дан квадрат 15 × 15 клеток, в каждой клетке которого записано целое число. В левом верхнем углу квадрата стоит ладья. За один ход ладья может переместиться в пределах квадрата на любое количество клеток вправо или вниз (влево и вверх ладья ходить не может). Необходимо переместить ладью в правый нижний угол так, чтобы сумма чисел в клетках, в которых ладья останавливалась (включая начальную и конечную), была минимальной. В ответе запишите минимально возможную сумму.<br>Исходные данные записаны в электронной таблице.<br>Пример входных данных (для таблицы размером 4 × 4):",
        type: "textImageTextDownload",
        images: ["../../../images/ege/26.png"],
        afterImagesText: "Для указанных входных данных ответом будет число −10 (ладья проходит через клетки с числами −6, 1, −3, −5, 3).",
        fileLink: "file18.zip",
        answer: "−392"
    },
    {
        question: "Два игрока, Петя и Ваня, играют в следующую игру. Перед игроками лежит куча камней. Игроки ходят по очереди, первый ход делает Петя. За один ход игрок может добавить в кучу один камень или увеличить количество камней в куче в пять раз. Например, имея кучу из 10 камней, за один ход можно получить кучу из 11 или 50 камней. У каждого игрока, чтобы делать ходы, есть неограниченное количество камней.<br>Игра завершается в тот момент, когда количество камней в куче становится более 200. Победителем считается игрок, сделавший последний ход, то есть первым получивший кучу, в которой будет 201 или больше камней. В начальный момент в куче было S камней, 1 ≤ S ≤ 200.<br>Говорят, что игрок имеет выигрышную стратегию, если он может выиграть при любых ходах противника. Описать стратегию игрока  — значит, описать, какой ход он должен сделать в любой ситуации, которая ему может встретиться при различной игре противника.<br>Известно, что Ваня выиграл своим первым ходом после неудачного первого хода Пети. Укажите минимальное значение S, когда такая ситуация возможна.",
        type: "text",
        answer: "9"
    },
    {
        question: "Для игры, описанной в задании 19, найдите два наименьших значения S, при которых у Пети есть выигрышная стратегия, причём одновременно выполняются два условия:<br>—  Петя не может выиграть за один ход;<br>—  Петя может выиграть своим вторым ходом независимо от того, как будет ходить Ваня.<br>Найденные значения запишите в ответе в порядке возрастания.",
        type: "text",
        answer: "2426"
    },
    {
        question: "Два игрока, Петя и Ваня, играют в следующую игру. Перед игроками лежат две кучи камней. Игроки ходят по очереди, первый ход делает Петя. За один ход игрок может добавить в одну из куч один камень или увеличить количество камней в куче в четыре раза. Например, пусть в одной куче 6 камней, а в другой 9 камней; такую позицию мы будем обозначать (6, 9). За один ход из позиции (6, 9) можно получить любую из четырёх позиций: (7, 9), (24, 9), (6, 10), (6, 36). Чтобы делать ходы, у каждого игрока есть неограниченное количество камней.<br>Игра завершается в тот момент, когда суммарное количество камней в кучах становится не менее 82. Победителем считается игрок, сделавший последний ход, то есть первым получивший позицию, в которой в кучах будет 82 или больше камней.<br>В начальный момент в первой куче было 4 камня, во второй куче  — S камней, 1 ≤ S ≤ 77.<br>Будем говорить, что игрок имеет выигрышную стратегию, если он может выиграть при любых ходах противника. Описать стратегию игрока  — значит, описать, какой ход он должен сделать в любой ситуации, которая ему может встретиться при различной игре противника. В описание выигрышной стратегии не следует включать ходы играющего по ней игрока, которые не являются для него безусловно выигрышными, то есть не гарантируют выигрыш независимо от игры противника.<br>Найдите минимальное значение S, при котором одновременно выполняются два условия:<br>— у Вани есть выигрышная стратегия, позволяющая ему выиграть первым или вторым ходом при любой игре Пети;<br>— у Вани нет стратегии, которая позволит ему гарантированно выиграть первым ходом.",
        type: "text",
        answer: "18"
    },
    {
        question: "В файле 22_11.xlsx содержится информация о совокупности N вычислительных процессов, которые могут выполняться параллельно или последовательно. Будем говорить, что процесс B зависит от процесса A, если для выполнения процесса B необходимы результаты выполнения процесса A. В этом случае процессы могут выполняться только последовательно.<br>Информация о процессах представлена в файле в виде таблицы. В первой строке таблицы указан идентификатор процесса (ID), во второй строке таблицы  — время его выполнения в миллисекундах, в третьей строке перечислены с разделителем «;» ID процессов, от которых зависит данный процесс. Если процесс является независимым, то в таблице указано значение 0.<br>Определите минимальное время, через которое завершится выполнение всей совокупности процессов, при условии, что все независимые друг от друга процессы могут выполняться параллельно.<br>Типовой пример организации данных в файле:",
        type: "textImageTextDownload",
        images: ["../../../images/ege/32.png"],
        afterImagesText: "В данном случае независимые процессы 1 и 2 могут выполняться параллельно, при этом процесс 1 завершится через 4 мс, а процесс 2  — через 3 мс с момента старта. Процесс 3 может начаться только после завершения обоих процессов 1 и 2, то есть, через 4 мс после старта. Он длится 1 мс и закончится через 4 + 1 = 5 мс после старта. Выполнение процесса 4 может начаться только после завершения процесса 3, то есть, через 5 мс. Он длится 7 мс, так что минимальное время завершения всех процессов равно 5 + 7 = 12 мс.",
        fileLink: "file22.zip",
        answer: "20"
    },
    {
        question: "У исполнителя Удвоитель две команды, которым присвоены номера:<br>1.  прибавь 1,<br>2.  умножь на 2.<br>Первая из них увеличивает на 1 число на экране, вторая умножает это число на 2.<br>Программа для Удвоителя  — это последовательность команд. Сколько существует программ, которые число 2 преобразуют в число 22?",
        type: "text",
        answer: "37"
    },
    {
        question: "Текстовый файл состоит не более чем из 106 символов арабских цифр (0, 1, ..., 9). Определите максимальное количество идущих подряд цифр, среди которых сумма двух идущих подряд цифр больше числа следующего за ними. Для выполнения этого задания следует написать программу.",
        type: "textDownload",
        fileLink: "file24.zip",
        answer: "32"
    },
    {
        question: "Маска числа  — это последовательность цифр, в которой могут встречаться специальные символы «?» и «*». Символ «?» означает ровно одну произвольную цифру, символ «*» означает произвольную (в том числе пустую) последовательность цифр.<br>Пример<br>Маске 123*4?5 соответствуют числа 123405 и 12376415.<br>Найдите все натуральные числа, не превышающие 1010, которые соответствуют маске 1?2711*0 и при этом без остатка делятся на 4891.<br>В ответе запишите все найденные числа в порядке возрастания.",
        type: "textMultipleInputPairs",
        pairs: 5,
        answers: Array(5).fill("1027110")
    },
    {
        question: "В отделении банка работают два окна для обслуживания клиентов. Некоторые услуги могут быть оказаны только при обращении в определённое окно, некоторые  — при обращении в любое окно. Клиент входит в отделение и встаёт в очередь к тому окну, которое оказывает необходимую ему услугу. Если услуга может быть оказана в любом окне, клиент выбирает то, в очереди к которому в данный момент меньше людей. Если очереди в оба окна одинаковые, клиент выбирает окно с меньшим номером. При этом если в очереди к выбранному окну уже стоит 14 или более человек (включая человека, которого обслуживают в данный момент), пришедший клиент сразу уходит.<br>Если момент завершения обслуживания одного или нескольких клиентов совпадает с моментом прихода нового клиента, то можно считать, что новый клиент пришёл после того, как обслуживание ранее пришедшего клиента завершилось и очередь сократилась.<br>Входные данные<br>Первая строка входного файла содержит целое число N (N ≤ 1000)  — общее количество клиентов, пришедших в отделение за один рабочий день. Каждая из следующих N строк описывает одного клиента и содержит 3 целых числа: время прихода клиента в отделение (количество минут с начала рабочего дня), время, необходимое для обслуживания данного клиента, и номер окна, в которое ему необходимо обратиться (0 означает, что клиент может обратиться в любое окно). Гарантируется, что никакие два клиента не приходят одновременно.<br>Определите, сколько клиентов будет обслужено в течение дня в окне номер 2 и сколько клиентов покинет отделение из-за слишком больших очередей.<br> В ответе запишите два целых числа: сначала количество клиентов, обслуженных в окне номер 2, затем количество необслуженных клиентов.",
        type: "textDownloadDoubleInput",
        fileLink: "file26.zip",
        answers: ["126", "469"]
    },
    {
        question: "Дана последовательность натуральных чисел. Необходимо определить количество её непрерывных подпоследовательностей, сумма элементов которых кратна 1111.<br>Входные данные.<br>Первая строка входного файла содержит целое число N  — общее количество чисел в наборе. Каждая из следующих N строк содержит одно число. Гарантируется, что общая сумма всех чисел и число в ответе не превышают 2 · 109 по абсолютной величине.<br>Вам даны два входных файла (A и B), каждый из которых имеет описанную выше структуру. В ответе укажите два числа: сначала значение искомой суммы для файла A, затем для файла B.",
        type: "textDoubleDownloadDoubleInput",
        fileLinks: ["file27-1.zip", "file27-2.zip"],
        answers: ["344", "1620157920"]
    }
];

function displayQuestions() {
    const container = document.getElementById('quiz-container');
    questions.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = "question-block";
        let questionContent = `<h3>Задание ${index + 1}</h3><p>${item.question}</p>`;

        switch (item.type) {
            case "textImageText":
                questionContent += `<div class="image-container">${item.images.map(img => `<img src="${img}" alt="Image">`).join('')}</div>`;
                questionContent += `<p>${item.afterImagesText}</p>`;
                questionContent += `<br><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'><br>`;
                break;
            case "textImageTextImageText":
                questionContent += `<div class="image-container"><img src="${item.images[0]}" alt="Image"></div>`;
                questionContent += `<p>${item.afterImagesText}</p>`;
                questionContent += `<div class="image-container"><img src="${item.images[1]}" alt="Image"></div>`;
                questionContent += `<br><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'><br>`;
                break;
            case "textImageTextDownload":
                questionContent += `<div class="image-container"><img src="${item.images[0]}" alt="Image"></div><p>${item.afterImagesText}</p>`;
                questionContent += `<a href="${item.fileLink}" download>Скачать файл</a>`;
                questionContent += `<br><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'><br>`;
                break;
            case "text":
                questionContent += `<br><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'><br>`;
                break;
            case "textDownload":
                questionContent += `<a href="${item.fileLink}" download>Скачать файл</a>`;
                questionContent += `<br><input type='text' id='answer${index}' placeholder='Ваш ответ' autocomplete='off'><br>`;
                break;
            case "textMultipleInputPairs":
                for (let i = 0; i < item.pairs; i++) {
                    questionContent += `<br><input type='text' id='answer${index}-${i}' placeholder='Ваш ответ' autocomplete='off'><br>`;
                }
                break;
            case "textDownloadDoubleInput":
                questionContent += `<a href="${item.fileLink}" download>Скачать файл</a>`;
                questionContent += `<div class="input-row">
                                        <input type='text' id='answer${index}-1' placeholder='Ваш ответ 1' autocomplete='off'>
                                        <input type='text' id='answer${index}-2' placeholder='Ваш ответ 2' autocomplete='off'>
                                    </div><br>`;
                break;
            case "textDoubleDownloadDoubleInput":
                item.fileLinks.forEach((link, idx) => {
                    questionContent += `<a href="${link}" download>Скачать файл ${idx + 1}</a><br>`;
                });
                questionContent += `<div class="input-row">
                                        <input type='text' id='answer${index}-1' placeholder='Ваш ответ 1' autocomplete='off'>
                                        <input type='text' id='answer${index}-2' placeholder='Ваш ответ 2' autocomplete='off'>
                                    </div><br>`;
                break;
        }

        div.innerHTML = questionContent;
        container.appendChild(div);
    });
}

function calculateFinalScore() {
    let totalScore = 0;

    questions.forEach((item, index) => {
        if (item.type === "textMultipleInputPairs" || item.type === "textDownloadDoubleInput" || item.type === "textDoubleDownloadDoubleInput") {
            let allCorrect = true;
            for (let i = 0; i < (item.pairs || item.answers.length); i++) {
                const inputElement = document.getElementById(`answer${index}-${i}`);
                if (!inputElement || inputElement.value.trim().toLowerCase() !== item.answers[i].toLowerCase()) {
                    allCorrect = false;
                    break;
                }
            }
            if (allCorrect) {
                if (index >= 25) {
                    totalScore += 2; // Для вопросов 26 и 27
                } else {
                    totalScore++;
                }
            }
        } else {
            const inputElement = document.getElementById(`answer${index}`);
            if (inputElement && inputElement.value.trim().toLowerCase() === item.answer.toLowerCase()) {
                if (index >= 25) {
                    totalScore += 2; // Для вопросов 26 и 27
                } else {
                    totalScore++;
                }
            }
        }
    });

    return totalScore;
}

function calculateGrade(score) {
    if (score >= 22) return '5';
    if (score >= 16) return '4';
    if (score >= 6) return '3';
    return '2';
}

function checkAnswers() {
    const results = [];
    questions.forEach((item, index) => {
        if (item.type === "textMultipleInputPairs") {
            const givenAnswers = [];
            const correctAnswers = [];
            for (let i = 0; i < item.pairs; i++) {
                const inputElement = document.getElementById(`answer${index}-${i}`);
                const userAnswer = inputElement ? inputElement.value.trim() : "";
                givenAnswers.push(userAnswer);
                correctAnswers.push(item.answers[i]);
            }
            results.push({
                question: index + 1,
                givenAnswer: givenAnswers.join(", "),
                correctAnswer: correctAnswers.join(", ")
            });
        } else if (item.type === "textDownloadDoubleInput" || item.type === "textDoubleDownloadDoubleInput") {
            const givenAnswers = [];
            const correctAnswers = [];
            item.answers.forEach((_, i) => {
                const inputElement = document.getElementById(`answer${index}-${i + 1}`);
                const userAnswer = inputElement ? inputElement.value.trim() : "";
                givenAnswers.push(userAnswer);
                correctAnswers.push(item.answers[i]);
            });
            results.push({
                question: index + 1,
                givenAnswer: givenAnswers.join(", "),
                correctAnswer: correctAnswers.join(", ")
            });
        } else {
            const inputElement = document.getElementById(`answer${index}`);
            const userAnswer = inputElement ? inputElement.value.trim() : "";
            results.push({
                question: index + 1,
                givenAnswer: userAnswer,
                correctAnswer: item.answer
            });
        }
    });

    const totalScore = calculateFinalScore();
    const grade = calculateGrade(totalScore);
    displayResults(results, totalScore, grade);
}

function displayResults(results, score, grade) {
    const modal = document.getElementById('resultsModal');
    const resultsDiv = document.getElementById('resultsTable');

    let tableHtml = "<table><tr><th>Номер вопроса</th><th>Данный ответ</th><th>Правильный ответ</th></tr>";
    
    let processedQuestions = new Set();

    results.forEach(result => {
        if (!processedQuestions.has(result.question)) {
            const relatedResults = results.filter(r => r.question === result.question);
            const givenAnswers = relatedResults.map(r => r.givenAnswer).join(", ");
            const correctAnswers = relatedResults.map(r => r.correctAnswer).join(", ");
            const answerClass = givenAnswers.toLowerCase() === correctAnswers.toLowerCase() ? "correct-answer" : "incorrect-answer";
            
            tableHtml += `<tr><td>${result.question}</td><td class="${answerClass}">${givenAnswers}</td><td>${correctAnswers}</td></tr>`;
            processedQuestions.add(result.question);
        }
    });

    tableHtml += "</table>";
    resultsDiv.innerHTML = tableHtml;
    modal.style.display = "block";

    document.querySelector('.modal-content h1').textContent = `Ваша оценка: ${grade}`;
    document.querySelector('.modal-content p').textContent = `Вы ответили правильно на ${score} из ${questions.length} вопросов. Максимальный балл: 29.`;

    document.querySelector('.close-button').onclick = function() {
        modal.style.display = "none";
    };
}

window.onload = displayQuestions;
document.getElementById('checkSelfButton').addEventListener('click', checkAnswers);

document.querySelector('.close-button').onclick = function() {
    document.getElementById('resultsModal').style.display = 'none';
};