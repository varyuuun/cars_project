// Власна функція «Діалог з користувачем» (змінні, умови, цикли)
function userDialog() {
    let continueDialog = true;

    while (continueDialog) {
        let age = prompt("Введіть ваш вік для перевірки доступу до преміум-каталогу:", "18");

        if (age === null) {
            alert("Діалог скасовано.");
            break;
        }

        let ageNumber = Number(age);

        if (ageNumber >= 18) {
            alert("Вам є 18. Доступ дозволено!");
        } else if (ageNumber > 0 && ageNumber < 18) {
            alert("Контент для дорослих може бути обмежений.");
        } else {
            alert("Введено некоректні дані.");
        }

        continueDialog = confirm("Бажаєте повторити перевірку віку?");
    }
}

// Функція виводу інформації про розробника 
function showDeveloperInfo(surname, name, position = "Веб-розробник (Студент)") {
    const devFooter = document.createElement("div");
    devFooter.style.backgroundColor = "#1a317d";
    devFooter.style.color = "#f0f4f8";
    devFooter.style.textAlign = "center";
    devFooter.style.padding = "15px";
    devFooter.style.marginTop = "40px";
    devFooter.style.borderTop = "4px solid #ff3f3f";

    devFooter.innerHTML = `👨‍💻 <b>Розробник:</b> ${surname} ${name} | <b>Посада:</b> ${position}`;

    document.body.append(devFooter);
}

// Функція порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: "${str1}" (Довжина: ${str1.length})`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: "${str2}" (Довжина: ${str2.length})`);
    } else {
        alert(`Рядки "${str1}" та "${str2}" однакової довжини.`);
    }
}

// Перенаправлення за допомогою об'єкта location
function redirectToPage(url) {
    location.href = url;
}

function redirectToCatalog() {
    if (confirm("Перейти до сторінки 'Бренди та Характеристики'?")) {
        redirectToPage("brands.html");
    }
}

// Робота з DOM (запускається після завантаження сторінки)
function manipulateDOM() {
    // 1. Пошук та логування (властивості вузла)
    const servicesTitle = document.getElementById("services");
    if (servicesTitle) {
        console.log("textContent вузла:", servicesTitle.textContent);
    }

    // 2. Створення та вставка панелі (append, prepend, after)
    const infoPanel = document.createElement("div");
    infoPanel.style.backgroundColor = "#a7a7ff";
    infoPanel.style.padding = "15px";
    infoPanel.style.margin = "20px 0";
    infoPanel.style.borderRadius = "8px";

    const panelText = document.createTextNode("Цей сайт для любителів швидкості!");
    infoPanel.append(panelText);

    const badge = document.createElement("strong");
    badge.textContent = "Увага: ";
    infoPanel.prepend(badge);

    const mainTitle = document.getElementById("main-title");
    if (mainTitle) {
        mainTitle.after(infoPanel);
    }

    // 3. Динамічна заміна вузла (replaceWith) з таймером (BOM)
    const factBlock = document.getElementById("fact-block");

    if (factBlock) {
        const originalContent = factBlock.innerHTML;

        const newFactBlock = document.createElement("div");
        newFactBlock.style.padding = "15px";
        newFactBlock.style.border = "2px dashed #3498db";
        newFactBlock.style.margin = "10px 0";
        newFactBlock.innerHTML = "<b>Ефект replaceWith:</b> Цей текст з'явився через заміну вузла і зникне через 10 секунд!";

        // Чекаємо 2 секунди і замінюємо
        setTimeout(() => {
            factBlock.replaceWith(newFactBlock);
            console.log("Факт замінено на новий вузол.");

            // Чекаємо ще 10 секунд і повертаємо як було
            setTimeout(() => {
                newFactBlock.replaceWith(factBlock);
                factBlock.innerHTML = originalContent;
                console.log("Початковий факт повернуто.");
            }, 10000);
        }, 2000);
    }
}

// Окремі функції для кнопок
function testDocumentWrite() {
    let agree = confirm("Увага! document.write перезапише всю існуючу сторінку. Продовжити?");
    if (agree) {
        document.write("<h2>Сторінку було перезаписано за допомогою document.write!</h2>");
        document.write("<p><a href='index.html'>Повернутися назад</a></p>");
    }
}

// Головний ініціалізатор подій
document.addEventListener("DOMContentLoaded", () => {
    // 1. Інфо про розробника
    showDeveloperInfo("Гладун", "Варвара");

    // 2. Запуск маніпуляцій з DOM (там тепер і таймер, і заміна)
    manipulateDOM();

    // 3. Обробник для кнопки порівняння рядків
    const compareBtn = document.getElementById("compare-strings-btn");
    if (compareBtn) {
        compareBtn.addEventListener("click", () => {
            let word1 = prompt("Введіть перше слово:", "Volkswagen");
            let word2 = prompt("Введіть друге слово:", "BMW");

            if (word1 !== null && word2 !== null) {
                compareStrings(word1, word2);
            }
        });
    }
});

// Міні-гра "ГАРАЖ"

// Подія миші через АТРИБУТ (в HTML: onmouseenter="inspectCar()")
function inspectCar() {
    const car = document.getElementById("game-car");
    car.style.boxShadow = "0 0 20px #405b8e";
}

document.addEventListener("DOMContentLoaded", () => {
    const car = document.getElementById("game-car");

    if (car) {
        // Подія миші через ВЛАСТИВІСТЬ
        car.onmouseleave = function() {
            this.style.boxShadow = "none";
        };

        // addEventListener: ОДНІЙ події РІЗНІ обробники
        // Обробник 1: Блимання фар (зміна фону)
        function lightsHandler() {
            car.style.backgroundColor = car.style.backgroundColor === "rgb(255, 234, 167)" ? "#e2e8f0" : "#ffeaa7";
        }

        function logHandler() {
            console.log("Дія: Користувач клікнув по авто.");
        }
        car.addEventListener("click", lightsHandler);
        car.addEventListener("click", logHandler);
    }

    // ОБ'ЄКТ як обробник події (Сигналізація)
    const alarmSystem = {
        handleEvent(event) {
            event.currentTarget.style.border = "5px solid red";
            alert(`🚨 ВІУ-ВІУ! Спрацювала сигналізація на елементі: ${event.currentTarget.tagName}!`);
        }
    };

    const lockBtn = document.getElementById("lock-btn");
    const unlockBtn = document.getElementById("unlock-btn");

    if (lockBtn && unlockBtn && car) {
        lockBtn.addEventListener("click", () => {
            car.addEventListener("click", alarmSystem);
            alert("🔒 Сигналізацію активовано! Спробуйте клікнути на машину.");
        });

        unlockBtn.addEventListener("click", () => {
            car.removeEventListener("click", alarmSystem);
            car.style.border = "3px dashed #415a77";
            alert("🔓 Сигналізацію вимкнено. Можете безпечно клікати.");

        });
    }

    // ДЕЛЕГУВАННЯ: Підсвічування списку тюнінгу
    const tuningList = document.getElementById("tuning-list");
    if (tuningList) {
        tuningList.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                event.target.classList.toggle("highlighted-tuning");
            }
        });
    }

    // МЕНЮ: Один обробник + атрибути data-*
    const driveMenu = document.getElementById("drive-menu");
    if (driveMenu && car) {

        const carControls = {
            forward() { car.style.transform = "translateX(50px)"; },
            reverse() { car.style.transform = "translateX(-50px)"; },
            stop() { car.style.transform = "translateX(0)"; }
        };

        driveMenu.addEventListener("click", (event) => {
            const action = event.target.dataset.action;
            if (action && carControls[action]) {
                carControls[action]();
            }
        });
    }

    // 6. ПАТЕРН Behavior
    // Вішаємо глобальний обробник: все, що має data-behavior="clean", буде видалятися по кліку
    document.addEventListener("click", (event) => {
        if (event.target.dataset.behavior === "clean") {
            event.target.style.transform = "scale(0)";
            setTimeout(() => event.target.remove(), 300); // Плавно видаляємо елемент з DOM
        }
    });
});