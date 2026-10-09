// ===== Уровень A — Условные операторы =====

// Задание 66. Проверка интернет-соединения
console.log("--- Задание 66 ---");
{
  function connectionStatus(speed) {
    if (speed < 0) {
      return "Ошибка: скорость не может быть отрицательной";
    } else if (speed === 0) {
      return "Нет подключения";
    } else if (speed <= 10) {
      return "Медленный интернет";
    } else if (speed <= 50) {
      return "Средняя скорость";
    } else {
      return "Быстрый интернет";
    }
  }
  let speed = 25;
  console.log(speed + " Мбит/с: " + connectionStatus(speed)); // Средняя скорость
  [0, 5, 100, -3].forEach(function (s) {
    console.log(s + " Мбит/с: " + connectionStatus(s));
  });
}

// Задание 67. Проверка пароля и логина
console.log("--- Задание 67 ---");
{
  function authorize(login, password) {
    let correctLogin = "admin";
    let correctPassword = "12345";
    if (login === correctLogin && password === correctPassword) {
      return "Вход выполнен";
    } else if (login === correctLogin) {
      return "Ошибка авторизации: неверный пароль";
    } else {
      return "Ошибка авторизации";
    }
  }
  let login = "admin";
  let password = "12345";
  console.log(login + " / " + password + ": " + authorize(login, password)); // Вход выполнен
  console.log("admin / 0000: " + authorize("admin", "0000"));                // неверный пароль
  console.log("user / 12345: " + authorize("user", "12345"));                // Ошибка авторизации
}

// Задание 68. Проверка рабочего времени
console.log("--- Задание 68 ---");
{
  function roomStatus(hour) {
    if (hour < 0 || hour > 23) {
      return "Ошибка: час должен быть от 0 до 23";
    } else if (hour >= 8 && hour < 18) {
      return "Кабинет работает";
    } else {
      return "Кабинет закрыт";
    }
  }
  let hour = 14;
  console.log(hour + ":00 — " + roomStatus(hour)); // Кабинет работает
  [7, 8, 17, 18, 25].forEach(function (h) {
    console.log(h + ":00 — " + roomStatus(h));
  });
}

// Задание 69. Проверка температуры процессора
console.log("--- Задание 69 ---");
{
  function cpuState(temperature) {
    if (temperature < 40) {
      return "Низкая";
    } else if (temperature < 70) {
      return "Нормальная";
    } else if (temperature < 90) {
      return "Высокая";
    } else {
      return "Критическая";
    }
  }
  function checkCpu(temperature) {
    let state = cpuState(temperature);
    console.log(temperature + "°C: " + state);
    if (state === "Критическая") {
      console.log("ВНИМАНИЕ! Критическая температура процессора!");
    }
  }
  let cpuTemperature = 75;
  checkCpu(cpuTemperature); // Высокая
  [35, 55, 80, 95].forEach(checkCpu);
}

// Задание 70. Проверка доступа к экзамену
console.log("--- Задание 70 ---");
{
  function examAccess(attendance, averageScore) {
    let reasons = [];
    if (attendance < 80) {
      reasons.push("посещаемость ниже 80%");
    }
    if (averageScore < 50) {
      reasons.push("средний балл ниже 50");
    }
    if (reasons.length === 0) {
      return "Допущен к экзамену";
    } else {
      return "Не допущен: " + reasons.join(", ");
    }
  }
  let attendance = 85;
  let averageScore = 70;
  console.log(attendance + "% и " + averageScore + ": " + examAccess(attendance, averageScore)); // Допущен
  console.log("70% и 70: " + examAccess(70, 70));
  console.log("90% и 40: " + examAccess(90, 40));
  console.log("60% и 30: " + examAccess(60, 30));
}

// ===== Уровень B — Циклы и массивы =====

// Задание 71. Подсчёт стоимости оборудования
console.log("--- Задание 71 ---");
{
  let equipment = [250000, 180000, 320000, 150000, 200000];
  let total = 0;
  for (let i = 0; i < equipment.length; i++) {
    total += equipment[i];
  }
  console.log("Общая стоимость: " + total + " ₸");                       // 1100000 ₸
  console.log("Средняя стоимость устройства: " + total / equipment.length + " ₸"); // 220000 ₸
}

// Задание 72. Поиск самого низкого балла
console.log("--- Задание 72 ---");
{
  let scores = [78, 95, 43, 67, 88, 50, 91];
  let minScore = scores[0];
  let below50 = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
      minScore = scores[i];
    }
    if (scores[i] < 50) {
      below50++;
    }
  }
  console.log("Минимальный балл: " + minScore);                 // 43
  console.log("Набрали менее 50 баллов: " + below50);           // 1
}

// Задание 73. Генерация таблицы квадратов
console.log("--- Задание 73 ---");
for (let i = 1; i <= 20; i++) {
  console.log(i + " → " + i * i);
}

// Задание 74. Анализ количества студентов
console.log("--- Задание 74 ---");
{
  let groups = [24, 22, 25, 20, 23, 21];
  let total = 0;
  let maxGroup = groups[0];
  let over22 = 0;
  for (let i = 0; i < groups.length; i++) {
    total += groups[i];
    if (groups[i] > maxGroup) {
      maxGroup = groups[i];
    }
    if (groups[i] > 22) {
      over22++;
    }
  }
  console.log("Всего студентов: " + total);                          // 135
  console.log("Средняя численность группы: " + total / groups.length); // 22.5
  console.log("Самая большая группа: " + maxGroup);                  // 25
  console.log("Групп более чем с 22 студентами: " + over22);        // 3
}

// Задание 75. Разделение чисел
console.log("--- Задание 75 ---");
{
  let numbers = [12, 7, 18, 5, 24, 9, 30, 11];
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
  console.log("Чётные: " + evenNumbers.join(", "));   // 12, 18, 24, 30
  console.log("Нечётные: " + oddNumbers.join(", "));  // 7, 5, 9, 11
}

// ===== Уровень C — Функции и объекты =====

// Задание 76. Расчёт стоимости обучения
console.log("--- Задание 76 ---");
{
  function calculateTuition(monthlyFee, months) {
    if (monthlyFee <= 0 || months <= 0) {
      return null;
    }
    return monthlyFee * months;
  }
  let tuition = calculateTuition(25000, 8);
  console.log("Стоимость обучения: " + tuition + " ₸"); // 200000 ₸
  console.log("Некорректные данные (-5000, 8): " + calculateTuition(-5000, 8)); // null
  console.log("Некорректные данные (25000, 0): " + calculateTuition(25000, 0)); // null
}

// Задание 77. Проверка электронного адреса
console.log("--- Задание 77 ---");
{
  function checkEmail(email) {
    let at = email.indexOf("@");
    // ровно один символ @, перед ним есть символы
    if (at < 1 || email.lastIndexOf("@") !== at) {
      return "Ошибка email";
    }
    // точка после @, между @ и точкой есть символы, после точки тоже
    let dot = email.lastIndexOf(".");
    if (dot <= at + 1 || dot === email.length - 1) {
      return "Ошибка email";
    }
    // пробелов быть не должно
    if (email.includes(" ")) {
      return "Ошибка email";
    }
    return "Формат email корректен";
  }
  let email = "student@gmail.com";
  console.log(email + ": " + checkEmail(email)); // корректен
  ["studentgmail.com", "@gmail.com", "student@.com", "student@gmail", "student@gmail.", "a@b@c.com", "stu dent@gmail.com"]
    .forEach(function (e) {
      console.log(e + ": " + checkEmail(e)); // все — Ошибка email
    });
}

// Задание 78. Учёт компьютеров
console.log("--- Задание 78 ---");
{
  let computer = {
    id: 1,
    processor: "Intel Core i5",
    ram: 16,
    storage: 512,
    working: true
  };
  console.log("ID: " + computer.id);
  console.log("Процессор: " + computer.processor);
  console.log("ОЗУ: " + computer.ram + " ГБ");
  console.log("Накопитель: " + computer.storage + " ГБ");
  console.log(computer.working ? "Исправен" : "Требуется ремонт");
  computer.room = 21;
  computer.ram = 32;
  console.log("После изменений: кабинет " + computer.room + ", ОЗУ " + computer.ram + " ГБ");
  console.log(computer);
}

// Задание 79. Расчёт премии сотрудника
console.log("--- Задание 79 ---");
{
  function calculateBonus(tasks) {
    if (tasks < 0) {
      return "Ошибка: количество задач не может быть отрицательным";
    } else if (tasks < 5) {
      return 0;
    } else if (tasks < 10) {
      return 10000;
    } else if (tasks < 15) {
      return 20000;
    } else {
      return 35000;
    }
  }
  [3, 7, 12, 18, -2].forEach(function (t) {
    let bonus = calculateBonus(t);
    console.log("Задач: " + t + " → " + (typeof bonus === "number" ? bonus + " ₸" : bonus));
  });
}

// Задание 80. Поиск самого успешного студента
console.log("--- Задание 80 ---");
{
  let students = [
    { name: "Алия", score: 87 },
    { name: "Арман", score: 94 },
    { name: "Данияр", score: 76 },
    { name: "Мадина", score: 98 }
  ];
  let best = students[0];
  let excellent = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > best.score) {
      best = students[i];
    }
    if (students[i].score >= 90) {
      excellent.push(students[i].name);
    }
  }
  console.log("Лучший студент: " + best.name);          // Мадина
  console.log("Результат: " + best.score);              // 98
  console.log("Баллы 90 и выше: " + excellent.join(", ")); // Арман, Мадина
}

// ===== Уровень D — Веб-приложения =====
// (работают только в браузере)
if (typeof document !== "undefined") {

  // Задание 81. Генератор случайных чисел
  {
    let result = document.getElementById("randomResult");
    document.getElementById("generateBtn").addEventListener("click", function () {
      result.textContent = Math.floor(Math.random() * 100) + 1;
    });
  }

  // Задание 82. Светофор с кнопками
  {
    let lights = {
      red: document.getElementById("lightRed"),
      yellow: document.getElementById("lightYellow"),
      green: document.getElementById("lightGreen")
    };
    let texts = { red: "Стой", yellow: "Внимание", green: "Иди" };
    let trafficText = document.getElementById("trafficText");
    let autoBtn = document.getElementById("autoBtn");
    let timer = null;

    function setSignal(color) {
      for (let key in lights) {
        lights[key].classList.toggle("on", key === color);
      }
      trafficText.textContent = texts[color];
    }

    function stopAuto() {
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
        autoBtn.textContent = "Авто-режим: выкл";
      }
    }

    document.getElementById("redBtn").addEventListener("click", function () {
      stopAuto();
      setSignal("red");
    });
    document.getElementById("yellowBtn").addEventListener("click", function () {
      stopAuto();
      setSignal("yellow");
    });
    document.getElementById("greenBtn").addEventListener("click", function () {
      stopAuto();
      setSignal("green");
    });

    autoBtn.addEventListener("click", function () {
      if (timer !== null) {
        stopAuto();
        return;
      }
      let order = ["red", "yellow", "green"];
      let step = 0;
      setSignal(order[step]);
      timer = setInterval(function () {
        step = (step + 1) % order.length;
        setSignal(order[step]);
      }, 2000);
      autoBtn.textContent = "Авто-режим: вкл";
    });
  }

  // Задание 83. Поиск студентов по имени
  {
    let names = ["Алия", "Руслан", "Мадина", "Арман", "Данияр",
                 "Айгерим", "Тимур", "Назира", "Ерлан", "Динара"];
    let input = document.getElementById("searchInput");
    let result = document.getElementById("searchResult");

    function searchStudent() {
      let query = input.value.trim().toLowerCase();
      if (query === "") {
        result.textContent = "Введите имя для поиска";
        return;
      }
      let found = names.filter(function (name) {
        return name.toLowerCase().includes(query);
      });
      if (found.length > 0) {
        result.textContent = "Найден: " + found.join(", ");
      } else {
        result.textContent = "Студент не найден";
      }
    }
    document.getElementById("searchBtn").addEventListener("click", searchStudent);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") searchStudent();
    });
  }

  // Задание 84. Калькулятор стоимости компьютера
  {
    function formatMoney(n) {
      return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸";
    }
    document.getElementById("pcBtn").addEventListener("click", function () {
      let boxes = document.querySelectorAll(".part");
      let total = 0;
      let count = 0;
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
          total += Number(boxes[i].dataset.price);
          count++;
        }
      }
      let result = document.getElementById("pcResult");
      if (count === 0) {
        result.textContent = "Выберите хотя бы одно комплектующее";
      } else {
        result.textContent = "Выбрано комплектующих: " + count + ". Итоговая стоимость: " + formatMoney(total);
      }
    });
  }

  // Задание 85. Электронная библиотека
  {
    let books = [
      { title: "JavaScript Basics", author: "Ivanov", available: true },
      { title: "HTML and CSS", author: "Petrov", available: false },
      { title: "Python Programming", author: "Sidorov", available: true },
      { title: "Database Systems", author: "Akhmetov", available: true }
    ];
    let searchInput = document.getElementById("bookSearch");
    let onlyAvailable = document.getElementById("onlyAvailable");
    let bookList = document.getElementById("bookList");

    function renderBooks() {
      let query = searchInput.value.trim().toLowerCase();
      let shown = books.filter(function (book) {
        let matches = book.title.toLowerCase().includes(query);
        return matches && (!onlyAvailable.checked || book.available);
      });
      bookList.innerHTML = "";
      if (shown.length === 0) {
        bookList.textContent = "Книги не найдены";
        return;
      }
      shown.forEach(function (book) {
        let row = document.createElement("div");
        row.className = "book";

        let info = document.createElement("span");
        info.textContent = book.title + " — " + book.author + " — ";
        let status = document.createElement("strong");
        status.textContent = book.available ? "в наличии" : "нет в наличии";
        status.className = book.available ? "available" : "unavailable";

        let btn = document.createElement("button");
        btn.textContent = "Взять книгу";
        btn.disabled = !book.available;
        btn.addEventListener("click", function () {
          book.available = false;
          renderBooks();
        });

        row.appendChild(info);
        row.appendChild(status);
        row.appendChild(btn);
        bookList.appendChild(row);
      });
    }

    searchInput.addEventListener("input", renderBooks);
    onlyAvailable.addEventListener("change", renderBooks);
    renderBooks();
  }
}