const questions = [
    {
        question: "<br>На рисунке схема дорог изображена в виде графа, в таблице содержатся сведения о длине этих дорог в километрах. Так как таблицу и схему рисовали независимо друг от друга, нумерация населённых пунктов в таблице никак не связана с буквенными обозначениями на графе. Известно, что дорога АБ длиннее дороги БГ. Определите длину дороги ДЖ.",
        type: "textImageText",
        images: ["../../../images/ege/5.png", "../../../images/ege/6.png"],
        afterImagesText: "<br>",
        answer: "17"
    },
    {
        question: "Логическая функция F задаётся выражением (w → x) ∧ ((y → z) ≡ (x → y)). На рисунке приведён частично заполненный фрагмент таблицы истинности функции F, содержащий неповторяющиеся строки. Определите, какому столбцу таблицы истинности функции F соответствует каждая из переменных x, y, z, w.    ",
        type: "textImageTextImageText",
        images: ["../../../images/ege/17.png", "../../../images/ege/18.png"],
        afterImagesText: "В ответе напишите буквы x, y, z, w в том порядке, в котором идут соответствующие им столбцы (сначала  — буква, соответствующая первому столбцу; затем  — буква, соответствующая второму столбцу, и т. д.). Буквы в ответе пишите подряд, никаких разделителей между буквами ставить не нужно.<br>Пример. Пусть задано выражение x → y, зависящее от двух переменных x и y, и фрагмент таблицы истинности:<br>Тогда первому столбцу соответствует переменная y, а второму столбцу соответствует переменная x. В ответе нужно написать: yx.",
        answer: "xzyw"
    },
    {
        question: "В файле приведён фрагмент базы данных «Продукты», содержащей информацию о поставках товаров и их продаже. База данных состоит из трёх таблиц.<br>Таблица «Торговля» содержит записи о поставках и продажах товаров в магазинах города в июне 2021 г. Таблица «Товар» содержит данные о товарах. Таблица «Магазин» содержит данные о магазинах.<br>На рисунке приведена схема базы данных, содержащая все поля каждой таблицы и связи между ними.",
        type: "textImageTextDownload",
        images: ["../../../images/ege/23.png"],
        afterImagesText: "Используя информацию из приведённой базы данных, определите, магазины какого района в период с 14 по 18 июня получили наибольшую выручку от продажи товаров отдела «Бакалея».<br>В ответе запишите число  — найденное значение наибольшей выручки в рублях.",
        fileLink: "file3.zip",
        answer: "12010766"
    },
    {
        question: "Для кодирования некоторой последовательности, состоящей из букв И, К, Л, М, Н, решили использовать неравномерный двоичный код, удовлетворяющий условию Фано. Для буквы Н использовали кодовое слово 0, для буквы К – кодовое слово 10. Какова наименьшая возможная суммарная длина всех пяти кодовых слов?<br><b>Примечание.</b> Условие Фано означает, что никакое кодовое слово не является началом другого кодового слова. Это обеспечивает возможность однозначной расшифровки закодированных сообщений.",
        type: "text",
        answer: "14"
    },
    {
        question: "Автомат получает на вход трёхзначное число. По этому числу строится новое число по следующим правилам.<br>1.  Складываются первая и вторая, а также вторая и третья цифры исходного числа.<br>2.  Полученные два числа записываются друг за другом в порядке убывания (без разделителей).<br>Пример. Исходное число: 348. Суммы: 3 + 4 = 7; 4 + 8 = 12. Результат: 127. Укажите наименьшее число, в результате обработки которого автомат выдаст число 1412.",
        type: "text",
        answer: "395"
    },
    {
        question: "Исполнитель Черепаха действует на плоскости с декартовой системой координат. В начальный момент Черепаха находится в начале координат, её голова направлена вдоль положительного направления оси ординат, хвост опущен. При опущенном хвосте Черепаха оставляет на поле след в виде линии. В каждый конкретный момент известно положение исполнителя и направление его движения. У исполнителя существует две команды: Вперёд n (где n  — целое число), вызывающая передвижение Черепахи на n единиц в том направлении, куда указывает её голова, и Направо m (где m  — целое число), вызывающая изменение направления движения на m градусов по часовой стрелке. Запись<br>Повтори k [Команда1 Команда2 … КомандаS]<br>означает, что последовательность из S команд повторится k раз. Черепахе был дан для исполнения следующий алгоритм:<br>Повтори 4 [Вперёд 10 Направо 90]<br>Определите, сколько точек с целочисленными координатами будут находиться внутри области, ограниченной линией, заданной данным алгоритмом. Точки на линии учитывать не следует.",
        type: "text",
        answer: "81"
    },
    {
        question: "Запись о документе в информационной системе содержит его текст и отсканированную копию, полученную сканированием с разрешением 200 dpi и сжатием полученного изображения на 40%. При этом текст документа занимает 50% всего объёма записи. Сколько процентов объёма записи будет занимать текст документа, если заменить отсканированную копию на новую, сделанную с разрешением 300 dpi и сжатием изображения на 60%?<br>В ответе запишите только число (количество процентов), без знака %.",
        type: "text",
        answer: "40"
    },
    {
        question: "Светлана составляет коды из букв слова РОСОМАХА. Код должен состоять из 8 букв, и каждая буква в нём должна встречаться столько же раз, сколько в заданном слове. Кроме того, в коде не должны стоять рядом две гласные и две согласные буквы. Сколько кодов может составить Светлана?",
        type: "text",
        answer: "288"
    },
    {
        question: "В каждой строке электронной таблицы записаны шесть натуральных чисел.<br>Назовём ячейку таблицы хорошей, если для неё выполняются следующие условия:<br>— число в данной ячейке не встречается в других ячейках этой же строки;<br>— число в данной ячейке ровно 45 раз встречается в других строках таблицы.<br>Определите количество строк таблицы, содержащих хотя бы одну хорошую ячейку.",
        type: "textDownload",
        fileLink: "file9.zip",
        answer: "445"
    },
    {
        question: "Определите, сколько раз в тексте произведения А. С. Пушкина «Капитанская дочка» встречается слово «дочка» или «Дочка». Другие формы этого слова («дочку», «дочки» и т. д.) учитывать не надо.",
        type: "textDownload",
        fileLink: "file10.zip",
        answer: "1"
    },
    {
        question: "Каждый сотрудник предприятия получает электронный пропуск, на котором записаны личный код сотрудника, номер подразделения и некоторая дополнительная информация. Личный код состоит из 13 символов, каждый из которых может быть русской буквой (используется 30 различных букв, каждая буква может быть заглавной или строчной) или одной из цифр от 1 до 9 (ноль для записи кодов не используется). Для записи кода на пропуске отведено минимально возможное целое число байт. При этом используют посимвольное кодирование, все символы кодируют одинаковым минимально возможным количеством бит. Номер подразделения – целое число от 1 до 500, он записан на пропуске как двоичное число и занимает минимально возможное целое число байт. Всего на пропуске хранится 40 байт данных. Сколько байт выделено для хранения дополнительных сведений об одном сотруднике? В ответе запишите только целое число  — количество байт.",
        type: "text",
        answer: "26"
    },
    {
        question: "Исполнитель Редактор получает на вход строку цифр и преобразовывает её. Редактор может выполнять две команды, в обеих командах v и w обозначают цепочки цифр.<br>А)  заменить (v, w).<br>Эта команда заменяет в строке первое слева вхождение цепочки v на цепочку w. Например, выполнение команды<br>заменить (111, 27)<br>преобразует строку 05111150 в строку 0527150.<br>Если в строке нет вхождений цепочки v, то выполнение команды заменить (v, w) не меняет эту строку.<br>Б)  нашлось (v).<br>Эта команда проверяет, встречается ли цепочка v в строке исполнителя Редактор. Если она встречается, то команда возвращает логическое значение «истина», в противном случае возвращает значение «ложь». Строка<br>исполнителя при этом не изменяется.<br>Цикл<br>    ПОКА условие<br>        последовательность команд<br>    КОНЕЦ ПОКА<br>выполняется, пока условие истинно.<br>В конструкции<br>    ЕСЛИ условие<br>        ТО команда1<br>    КОНЕЦ ЕСЛИ<br>выполняется команда1 (если условие истинно).<br>В конструкции<br>    ЕСЛИ условие<br>        ТО команда1<br>        ИНАЧЕ команда2<br>    КОНЕЦ ЕСЛИ<br>выполняется команда1 (если условие истинно) или команда2 (если условие ложно).<br>На вход приведённой ниже программе поступает строка, начинающаяся с символа «>», а затем содержащая 11 цифр 1, 12 цифр 2 и 30 цифр 3, расположенных в произвольном порядке.<br>Определите сумму числовых значений цифр строки, получившейся в результате выполнения программы.<br>Так, например, если результат работы программы представлял бы собой строку, состоящую из 50 цифр 4, то верным ответом было бы число 200.<br>НАЧАЛО<br>ПОКА нашлось (>1) ИЛИ нашлось (>2) ИЛИ нашлось (>3)<br>    ЕСЛИ нашлось (>1)<br>        ТО заменить (>1, 22>)<br>    КОНЕЦ ЕСЛИ    ЕСЛИ нашлось (>2)<br>        ТО заменить (>2, 2>)<br>    КОНЕЦ ЕСЛИ<br>    ЕСЛИ нашлось (>3)<br>        ТО заменить (>3, 1>)<br>    КОНЕЦ ЕСЛИ<br>КОНЕЦ ПОКА<br>КОНЕЦ",
        type: "text",
        answer: "98"
    },
    {
        question: "В терминологии сетей TCP/IP маской подсети называется 32-разрядное двоичное число, определяющее, какие именно разряды IP-адреса компьютера являются общими для всей подсети - в этих разрядах маски стоит 1. Обычно маски записываются в виде четверки десятичных чисел - по тем же правилам, что и IP-адреса. Для некоторой подсети используется маска 255.255.255.224. Сколько различных адресов компьютеров теоретически допускает эта маска, если два адреса (адрес сети и широковещательный) не используют?",
        type: "text",
        answer: "30"
    },
    {
        question: "Операнды арифметического выражения записаны в системах счисления с основаниями 12 и 14:<br>yAAx12 + x02y14<br>В записи чисел переменными x и y обозначены допустимые в данных системах счисления неизвестные цифры. Определите значения x и y, при которых значение данного арифметического выражения будет наименьшим и кратно 80. Для найденных значений x и y вычислите частное от деления значения арифметического выражения на 80 и укажите его в ответе в десятичной системе счисления. Основание системы счисления в ответе указывать не нужно.",
        type: "text",
        answer: "119"
    },
    {
        question: "Для какого наибольшего целого неотрицательного числа A выражение<br>тождественно истинно, т. е. принимает значение 1 при любых целых неотрицательных x и y?",
        type: "text",
        answer: "15"
    },
    {
        question: "Алгоритм вычисления значения функции F(n), где n – натуральное число, задан следующими рекуррентными соотношениями:<br>F(n) = 1 при n = 1;<br>F(n) = F(n − 1) · n при n ≥ 2.<br>Чему равно значение функции F(6)?<br>В ответе запишите только натуральное число.",
        type: "text",
        answer: "720"
    },
    {
        question: "В файле содержится последовательность из 10 000 целых положительных чисел. Каждое число не превышает 10 000. Определите и запишите в ответе сначала количество пар элементов последовательности, у которых разность элементов кратна 60, затем максимальную из разностей элементов таких пар. В данной задаче под парой подразумевается два различных элемента последовательности. Порядок элементов в паре не важен.",
        type: "textDownloadDoubleInput",
        fileLink: "file17.zip",
        answers: ["832722", "9960"]
    },
    {
        question: "Квадрат разлинован на N×N клеток (1 < N < 17). Исполнитель Робот может перемещаться по клеткам, выполняя за одно перемещение одну из двух команд: вправо или вверх. По команде вправо Робот перемещается в соседнюю правую клетку, по команде вверх  — в соседнюю верхнюю. При попытке выхода за границу квадрата Робот разрушается. Перед каждым запуском Робота в каждой клетке квадрата лежит монета достоинством от 1 до 100. Посетив клетку, Робот забирает монету с собой; это также относится к начальной и конечной клетке маршрута Робота.<br>Откройте файл. Определите максимальную и минимальную денежную сумму, которую может собрать Робот, пройдя из левой нижней клетки в правую верхнюю. В ответ запишите два числа друг за другом без разделительных знаков  — сначала максимальную сумму, затем минимальную.<br>Исходные данные представляют собой электронную таблицу размером N×N, каждая ячейка которой соответствует клетке квадрата.<br>Пример входных данных:",
        type: "textImageTextDownload",
        images: ["../../../images/ege/27.png"],
        afterImagesText: "Для указанных входных данных ответом должна быть пара чисел 35 и 15.",
        fileLink: "file18.zip",
        answer: "1114440"
    },
    {
        question: "Два игрока, Петя и Ваня, играют в следующую игру. Перед игроками лежит куча камней. Игроки ходят по очереди, первый ход делает Петя. За один ход игрок может добавить в кучу один камень, увеличить количество камней в куче в два раза, если оно нечётное, или в полтора раза, если оно чётное.<br>Например, если в куче 5 камней, то за один ход можно получить 6 или 10 камней, а если в куче 6 камней, то за один ход можно получить 7 или 9 камней. Игра завершается, когда количество камней в куче достигает 84.<br>Победителем считается игрок, сделавший последний ход, то есть первым получивший кучу, в которой будет 84 или больше камней.<br>В начале игры в куче было S камней, 1 ≤ S ≤ 83.<br>Укажите максимальное значение S, при котором Петя не может выиграть первым ходом, но при любом первом ходе Пети Ваня может выиграть своим первым ходом.",
        type: "text",
        answer: "54"
    },
    {
        question: "Два игрока, Петя и Ваня, играют в следующую игру. Перед игроками лежит куча камней. Игроки ходят по очереди, первый ход делает Петя. За один ход игрок может добавить в кучу один камень или увеличить количество камней в куче в пять раз. Например, имея кучу из 10 камней, за один ход можно получить кучу из 11 или 50 камней. У каждого игрока, чтобы делать ходы, есть неограниченное количество камней.<br>Игра завершается в тот момент, когда количество камней в куче становится более 100. Победителем считается игрок, сделавший последний ход, то есть первым получивший кучу, в которой будет 101 или больше камней.<br>В начальный момент в куче было S камней, 1 ≤ S ≤ 100.<br>Говорят, что игрок имеет выигрышную стратегию, если он может выиграть при любых ходах противника. Описать стратегию игрока  — значит, описать, какой ход он должен сделать в любой ситуации, которая ему может встретиться при различной игре противника.<br>Найдите два таких значения S, при которых у Пети есть выигрышная стратегия, причём одновременно выполняются два условия:<br>— Петя не может выиграть за один ход;<br>— Петя может выиграть своим вторым ходом независимо от того, как будет ходить Ваня.<br>Найденные значения запишите в ответе в порядке возрастания без разделительных знаков.",
        type: "text",
        answer: "419"
    },
    {
        question: "В игре, описанной в задании 19, в начальный момент в первой куче было 4 камня, а во второй  — S камней, 1 ≤ S ≤ 35.<br>Найдите минимальное из таких значений S, при котором у Вани есть стратегия, позволяющая ему выиграть вторым ходом при любой игре Пети, но у Вани нет стратегии, которая позволяла бы ему гарантированно выиграть первым ходом.",
        type: "text",
        answer: "18"
    },
    {
        question: "В файле 22_3.xlsx содержится информация о совокупности N вычислительных процессов, которые могут выполняться параллельно или последовательно. Будем говорить, что процесс B зависит от процесса A, если для выполнения процесса B необходимы результаты выполнения процесса A. В этом случае процессы могут выполняться только последовательно.<br>Информация о процессах представлена в файле в виде таблицы. В первой строке таблицы указан идентификатор процесса (ID), во второй строке таблицы  — время его выполнения в миллисекундах, в третьей строке перечислены с разделителем «;» ID процессов, от которых зависит данный процесс. Если процесс является независимым, то в таблице указано значение 0.<br>Определите минимальное время, через которое завершится выполнение всей совокупности процессов, при условии, что все независимые друг от друга процессы могут выполняться параллельно.<br>Типовой пример организации данных в файле:",
        type: "textImageTextDownload",
        images: ["../../../images/ege/34.png"],
        afterImagesText: "В данном случае независимые процессы 1 и 2 могут выполняться параллельно, при этом процесс 1 завершится через 4 мс, а процесс 2  — через 3 мс с момента старта. Процесс 3 может начаться только после завершения обоих процессов 1 и 2, то есть, через 4 мс после старта. Он длится 1 мс и закончится через 4 + 1 = 5 мс после старта. Выполнение процесса 4 может начаться только после завершения процесса 3, то есть, через 5 мс. Он длится 7 мс, так что минимальное время завершения всех процессов равно 5 + 7 = 12 мс.",
        fileLink: "file22.zip",
        answer: "25"
    },
    {
        question: "Исполнитель Вычислитель преобразует число на экране.<br>У исполнителя есть три команды, которым присвоены номера:<br>1.  Прибавить 1<br>2.  Умножить на 3<br>3.  Прибавить 2<br>Первая команда увеличивает число на экране на 1, вторая умножает его на 3, третье увеличивает его на 2.<br>Программа для исполнителя Вычислитель  — это последовательность команд.<br>Сколько существует программ, которые преобразуют исходное число 2 в число 12 и при этом траектория вычислений содержит числа 9 и 11?<br>Траектория вычислений программы  — это последовательность результатов выполнения всех команд программы. Например, для программы 132 при исходном числе 7 траектория будет состоять из чисел 8, 10, 30.",
        type: "text",
        answer: "50"
    },
    {
        question: "Текстовый файл состоит не более чем из 106 символов латинского алфавита. Определите минимальную подстроку, содержащую 210 символов 'T'. Для выполнения этого задания следует написать программу.<br>Для выполнения этого задания следует написать программу",
        type: "textDownload",
        fileLink: "file24.zip",
        answer: "3844"
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
