// ВСЕ ВОПРОСЫ ТЕСТА

const questions = [
    // ЧАСТЬ I. КАК ПОЛЬЗОВАТЬСЯ КОМПЬЮТЕРОМ
    {
        part: 1,
        text: "Вы скопировали большой файл на флешку, но при открытии на другом компьютере его нет, хотя место занято. Самая вероятная причина:",
        answers: [
            "вирус удалил файл",
            "файл больше 4 ГБ, а флешка отформатирована в FAT32",
            "флешка физически сломана",
            "файл помечен как «скрытый»"
        ],
        correct: [1],
        explanation: "Файловая система FAT32 имеет ограничение на размер одного файла — не более 4 ГБ."
    },
    {
        part: 1,
        text: "Одна вкладка браузера «зависла», остальные работают. Наименее рискованный для данных шаг:",
        answers: [
            "выключить компьютер кнопкой питания",
            "завершить процесс браузера через диспетчер задач",
            "закрыть именно зависшую вкладку",
            "перезагрузить компьютер"
        ],
        correct: [2],
        explanation: "Закрытие одной вкладки не затронет данные в других вкладках."
    },
    {
        part: 1,
        text: "Файл занимает 24 КБ. Сколько примерно таких файлов поместится на диск объёмом 4 ГБ (1 ГБ = 1024 МБ)?",
        answers: [
            "~170 000",
            "~17 000",
            "~1 700 000",
            "~1 700"
        ],
        correct: [0],
        explanation: "4 ГБ = 4096 МБ = 4 194 304 КБ. 4 194 304 / 24 ≈ 174 762 (около 170 000)."
    },
    {
        part: 1,
        multi: true,
        text: "Что реально повышает безопасность аккаунта?",
        answers: [
            "одинаковый сложный пароль на всех сайтах",
            "двухфакторная аутентификация",
            "менеджер паролей с мастер-паролем",
            "хранение паролей в заметках на рабочем столе",
            "проверка адреса сайта перед вводом данных"
        ],
        correct: [1, 2, 4],
        explanation: "Двухфакторка, менеджер паролей и проверка адресов — базовые правила безопасности."
    },
    {
        part: 1,
        multi: true,
        text: "Признаки фишингового письма:",
        answers: [
            "срочность и угроза блокировки",
            "адрес отправителя с опечаткой в домене",
            "ссылка ведёт не на тот домен, что указан в тексте",
            "наличие логотипа компании",
            "просьба ввести пароль по ссылке"
        ],
        correct: [0, 1, 2, 4],
        explanation: "Наличие логотипа ничего не значит, его легко подделать. Остальное — явные признаки обмана."
    },
    {
        part: 1,
        text: "Почему не рекомендуется выдёргивать флешку без «безопасного извлечения», даже если файлы уже скопированы?",
        answers: [
            "это не имеет значения",
            "из-за кэширования записи данные могут быть ещё не записаны на носитель",
            "флешка сгорит",
            "изменится файловая система"
        ],
        correct: [1],
        explanation: "Компьютер может кэшировать (откладывать) запись данных для ускорения работы."
    },
    {
        part: 1,
        text: "Друг прислал архив photos.zip, внутри — photos.exe. Разумнее всего:",
        answers: [
            "запустить, это же фото",
            "не запускать и уточнить у друга, что это",
            "переименовать в .jpg",
            "открыть в браузере"
        ],
        correct: [1],
        explanation: ".exe — это исполняемый файл (программа), а не картинка. Скорее всего, это вирус."
    },
    {
        part: 1,
        text: "Компьютер стал медленно работать, вентилятор шумит, в автозагрузке появились незнакомые программы. Наиболее грамотная последовательность:",
        answers: [
            "сразу переустановить Windows",
            "проверить автозагрузку и процессы, просканировать антивирусом, удалить лишнее",
            "увеличить файл подкачки",
            "отключить антивирус, чтобы не тормозил"
        ],
        correct: [1],
        explanation: "Сначала нужно найти причину (вирусы или лишние программы), а потом уже действовать."
    },
    {
        part: 1,
        text: "Что произойдёт, если два человека одновременно откроют один документ в облачном редакторе с совместной работой?",
        answers: [
            "второй получит ошибку доступа",
            "изменения видны обоим в реальном времени, возможны конфликты при правке одного фрагмента",
            "документ заблокируется навсегда",
            "каждый увидит свою версию, синхронизации не будет"
        ],
        correct: [1],
        explanation: "Это основная функция онлайн-редакторов (Google Docs, Word Online)."
    },
    {
        part: 1,
        text: "Вы получили письмо от «банка» с просьбой срочно подтвердить карту по ссылке. Самый правильный шаг:",
        answers: [
            "перейти по ссылке и ввести данные, если сайт выглядит как банковский",
            "позвонить в банк по номеру с официального сайта и уточнить",
            "ответить на письмо и попросить подробности",
            "переслать письмо друзьям, чтобы предупредить"
        ],
        correct: [1],
        explanation: "Никогда не переходите по ссылкам из подозрительных писем. Звоните только по официальным номерам."
    },

    // ЧАСТЬ II. ТЕОРИЯ 10–11 КЛАСС
    {
        part: 2,
        text: "Число 101101₂ в десятичной системе равно:",
        answers: [
            "43",
            "45",
            "47",
            "53"
        ],
        correct: [1],
        explanation: "32 + 8 + 4 + 1 = 45."
    },
    {
        part: 2,
        text: "Число 45₁₀ в двоичной системе равно:",
        answers: [
            "101101₂",
            "110101₂",
            "101011₂",
            "111001₂"
        ],
        correct: [0],
        explanation: "45 = 32 + 8 + 4 + 1 = 101101."
    },
    {
        part: 2,
        text: "Сколько единиц в двоичной записи числа 238?",
        answers: [
            "4",
            "5",
            "6",
            "7"
        ],
        correct: [2],
        explanation: "238 = 128 + 64 + 32 + 8 + 4 + 2 = 11101110 (6 единиц)."
    },
    {
        part: 2,
        text: "Логическая функция F = ¬(A ∧ B) ∨ (A ∧ ¬C). При каком наборе A, B, C функция равна 0?",
        answers: [
            "A=1, B=1, C=0",
            "A=1, B=1, C=1",
            "A=0, B=1, C=1",
            "A=1, B=0, C=1"
        ],
        correct: [1],
        explanation: "При A=1, B=1, C=1: ¬(1∧1) = 0. (1∧0) = 0. 0 ∨ 0 = 0."
    },
    {
        part: 2,
        text: "Дан фрагмент программы. Что будет выведено?",
        code: `s = 0\nfor i in range(1, 100):\n    if i % 3 == 0 and i % 5 != 0:\n        s += i\nprint(s)`,
        answers: [
            "1368",
            "1683",
            "315",
            "1053"
        ],
        correct: [0],
        explanation: "Сумма чисел от 1 до 99, кратных 3, но не кратных 5."
    },
    {
        part: 2,
        text: "Скорость передачи данных — 512 Кбит/с. Файл передаётся 2 минуты 8 секунд. Размер файла равен:",
        answers: [
            "4 МБ",
            "8 МБ",
            "16 МБ",
            "64 МБ"
        ],
        correct: [1],
        explanation: "128 секунд * 512 Кбит/с = 65536 Кбит = 8 МБ."
    },
    {
        part: 2,
        text: "Что такое файловая система?",
        answers: [
            "программа для просмотра файлов",
            "способ организации хранения файлов на носителе (имена, каталоги, атрибуты)",
            "антивирусный модуль",
            "тип оперативной памяти"
        ],
        correct: [1],
        explanation: "Это порядок, определяющий, как и где хранятся файлы."
    },
    {
        part: 2,
        text: "Таблица истинности — это:",
        answers: [
            "таблица всех возможных наборов входных переменных и соответствующих значений функции",
            "таблица умножения",
            "список команд алгоритма",
            "таблица кодировки символов"
        ],
        correct: [0],
        explanation: "В ней перебираются все возможные комбинации 0 и 1."
    },
    {
        part: 2,
        text: "Дизъюнкция истинна, когда:",
        answers: [
            "оба высказывания истинны",
            "хотя бы одно высказывание истинно",
            "оба высказывания ложны",
            "первое истинно, второе ложно"
        ],
        correct: [1],
        explanation: "Логическое ИЛИ (дизъюнкция) истинно, если хотя бы одно из высказываний истинно."
    },
    {
        part: 2,
        text: "Чем оперативная память (ОЗУ) отличается от постоянной (SSD/ПЗУ)?",
        answers: [
            "ОЗУ энергонезависима и медленнее SSD",
            "ОЗУ энергозависима и быстрее SSD, хранит данные только во время работы",
            "ОЗУ и SSD ничем не отличаются",
            "SSD энергозависима, а ОЗУ — нет"
        ],
        correct: [1],
        explanation: "При выключении питания данные в ОЗУ стираются, а на SSD остаются."
    }
];

// ПЕРЕМЕННЫЕ
let currentQuestion = 0;
let userAnswers = questions.map(() => []);
const letters = ["а", "б", "в", "г", "д"];

// ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });
    document.getElementById(screenId).classList.remove("hidden");
}

// НАЧАЛО ТЕСТА
function startTest() {
    currentQuestion = 0;
    userAnswers = questions.map(() => []);
    showScreen("quiz-screen");
    renderQuestion();
}

// ОТОБРАЖЕНИЕ ВОПРОСА
function renderQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Вопрос ${currentQuestion + 1} из ${questions.length}`;

    document.getElementById("progress-bar").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    document.querySelector(".part").textContent =
        q.part === 1 ? "Часть I" : "Часть II";

    document.getElementById("question-category").textContent =
        q.part === 1
        ? "ЧАСТЬ I · КАК ПОЛЬЗОВАТЬСЯ КОМПЬЮТЕРОМ"
        : "ЧАСТЬ II · ТЕОРИЯ 10–11 КЛАСС";

    document.getElementById("question").textContent =
        `${currentQuestion + 1}. ${q.text}`;

    const code = document.getElementById("question-code");

    code.textContent = q.code || "";

    code.classList.toggle("hidden", !q.code);

    document.getElementById("multiple-hint")
        .classList.toggle("hidden", !q.multi);

    // ВАРИАНТЫ ОТВЕТОВ

    const answersContainer = document.getElementById("answers");

    answersContainer.innerHTML = "";

    q.answers.forEach((answer, index) => {

        const selected = userAnswers[currentQuestion].includes(index);

        const answerElement = document.createElement("div");

        answerElement.className =
            "answer" + (selected ? " selected" : "");

        answerElement.innerHTML = `
            <div class="circle">${selected ? "✓" : ""}</div>
            <div class="answer-text">
                <span class="answer-letter">${letters[index]})</span>
                ${escapeHTML(answer)}
            </div>
        `;

        answerElement.addEventListener("click", () => {

            if (q.multi) {
                if (selected) {
                    userAnswers[currentQuestion] =
                        userAnswers[currentQuestion].filter(
                            item => item !== index
                        );
                } else {
                    userAnswers[currentQuestion].push(index);
                }
            } else {
                userAnswers[currentQuestion] = [index];
            }

            renderQuestion();
        });

        answersContainer.appendChild(answerElement);
    });

    // КНОПКИ

    const backButton = document.getElementById("back-button");

    backButton.disabled = currentQuestion === 0;

    backButton.style.opacity =
        currentQuestion === 0 ? "0.4" : "1";

    const nextButton = document.getElementById("next-button");

    nextButton.disabled =
        userAnswers[currentQuestion].length === 0;

    nextButton.textContent =
        currentQuestion === questions.length - 1
        ? "Завершить ✓"
        : "Далее →";

    document.getElementById("hint").textContent =
        q.multi
        ? "Выбери один или несколько вариантов"
        : "Выбери один вариант ответа";
}

// БЕЗОПАСНОЕ ОТОБРАЖЕНИЕ ТЕКСТА
function escapeHTML(text) {
    return String(text).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// ПЕРЕХОД К СЛЕДУЮЩЕМУ ВОПРОСУ
function nextQuestion() {
    if (userAnswers[currentQuestion].length === 0) {
        return;
    }
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        finishTest();
    }
}

// ВОЗВРАТ К ПРЕДЫДУЩЕМУ ВОПРОСУ
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// ПРОВЕРКА ОТВЕТОВ
function checkAnswer(user, correct) {
    if (user.length !== correct.length) {
        return false;
    }
    return correct.every(answer => user.includes(answer));
}

// ЗАВЕРШЕНИЕ ТЕСТА
function finishTest() {
    let score = 0;

    questions.forEach((question, index) => {
        if (checkAnswer(userAnswers[index], question.correct)) {
            score++;
        }
    });

    document.getElementById("score").textContent = score;

    const message = document.getElementById("result-message");

    if (score >= 17) {
        message.textContent =
            "Отличный результат! Ты прекрасно знаешь информатику!";
    } else if (score >= 12) {
        message.textContent =
            "Хорошая работа! Но есть темы, которые стоит повторить.";
    } else if (score >= 8) {
        message.textContent =
            "Неплохой результат! Продолжай изучать информатику.";
    } else {
        message.textContent =
            "Есть над чем поработать! Попробуй пройти тест ещё раз.";
    }

    showScreen("result-screen");
}

// ПРОСМОТР ПРАВИЛЬНЫХ ОТВЕТОВ
function showReview() {
    const reviewList = document.getElementById("review-list");

    reviewList.innerHTML = "";

    questions.forEach((question, index) => {

        const isCorrect = checkAnswer(
            userAnswers[index],
            question.correct
        );

        const userAnswer = userAnswers[index].length
            ? userAnswers[index].map(i =>
                `${letters[i]}) ${question.answers[i]}`
            ).join("; ")
            : "Нет ответа";

        const correctAnswer = question.correct.map(i =>
            `${letters[i]}) ${question.answers[i]}`
        ).join("; ");

        const item = document.createElement("div");

        item.className = "review-item";

        item.innerHTML = `
            <h3>${index + 1}. ${escapeHTML(question.text)}</h3>
            <p class="${isCorrect ? "correct" : "wrong"}">
                ${isCorrect ? "✓ Правильно" : "✗ Неправильно"}
            </p>
            <p>Ваш ответ: ${escapeHTML(userAnswer)}</p>
            <p>Правильный ответ: <strong>${escapeHTML(correctAnswer)}</strong></p>
            <p>Пояснение: ${question.explanation ? escapeHTML(question.explanation) : "—"}</p>
        `;

        reviewList.appendChild(item);
    });

    showScreen("review-screen");
}

// ВОЗВРАТ К РЕЗУЛЬТАТУ
function showResult() {
    showScreen("result-screen");
}

// ПОВТОРНОЕ ПРОХОЖДЕНИЕ
function restartTest() {
    currentQuestion = 0;
    userAnswers = questions.map(() => []);
    showScreen("start-screen");
}
