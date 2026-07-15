const plants = [
  {
    name: "Монстера делікатесна",
    latin: "Monstera deliciosa",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Розсіяне",
    watering: "Помірний",
    image: "https://images.unsplash.com/photo-1614594575810-3e2f83a9196b?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Сансевієрія",
    latin: "Dracaena trifasciata",
    difficulty: "easy",
    conditions: ["shade", "sun", "dry"],
    safety: "toxic",
    light: "Будь-яке",
    watering: "Рідкий",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7f?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Хлорофітум чубатий",
    latin: "Chlorophytum comosum",
    difficulty: "easy",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "Розсіяне",
    watering: "Помірний",
    image: "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Калатея орбіфолія",
    latin: "Goeppertia orbifolia",
    difficulty: "hard",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "М’яке",
    watering: "Регулярний",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Фікус еластика",
    latin: "Ficus elastica",
    difficulty: "beginner",
    conditions: ["sun"],
    safety: "toxic",
    light: "Яскраве",
    watering: "Помірний",
    image: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Хамедорея витончена",
    latin: "Chamaedorea elegans",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "Розсіяне",
    watering: "Помірний",
    image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Заміокулькас",
    latin: "Zamioculcas zamiifolia",
    difficulty: "easy",
    conditions: ["shade", "dry"],
    safety: "toxic",
    light: "Від тіні до яскравого",
    watering: "Рідкий",
    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Пеперомія туполиста",
    latin: "Peperomia obtusifolia",
    difficulty: "easy",
    conditions: ["shade", "dry"],
    safety: "safe",
    light: "Розсіяне",
    watering: "Помірний",
    image: "https://images.unsplash.com/photo-1585664811087-47f65abbad64?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Алое вера",
    latin: "Aloe barbadensis miller",
    difficulty: "easy",
    conditions: ["sun", "dry"],
    safety: "toxic",
    light: "Сонячне",
    watering: "Рідкий",
    image: "https://images.unsplash.com/photo-1596547610208-9e56b043b674?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Маранта біложилкова",
    latin: "Maranta leuconeura",
    difficulty: "hard",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "М’яке",
    watering: "Регулярний",
    image: "https://images.unsplash.com/photo-1610630878872-4a230aa3499a?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Ехеверія",
    latin: "Echeveria elegans",
    difficulty: "beginner",
    conditions: ["sun", "dry"],
    safety: "safe",
    light: "Сонячне",
    watering: "Рідкий",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Антуріум Андре",
    latin: "Anthurium andraeanum",
    difficulty: "hard",
    conditions: ["bathroom"],
    safety: "toxic",
    light: "Яскраве розсіяне",
    watering: "Регулярний",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=85"
  }
];

const difficultyNames = {
  easy: "Легка",
  beginner: "Для початківців",
  hard: "Потребує досвіду"
};

const plantGrid = document.querySelector("#plant-grid");
const catalogCount = document.querySelector("#catalog-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#plant-search");
const difficultyFilter = document.querySelector("#difficulty-filter");
const conditionFilter = document.querySelector("#condition-filter");
const safetyFilter = document.querySelector("#safety-filter");
const resetFilters = document.querySelector("#reset-filters");

function plantCardTemplate(plant) {
  const isSafe = plant.safety === "safe";
  return `
    <article class="plant-card">
      <div class="plant-card-image">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy" />
        <span class="plant-safety ${isSafe ? "" : "toxic"}">${isSafe ? "Безпечна" : "Отруйна"}</span>
      </div>
      <div class="plant-card-body">
        <h3>${plant.name}</h3>
        <p class="latin-name">${plant.latin}</p>
        <div class="plant-details">
          <div class="plant-detail"><span>Складність</span><strong>${difficultyNames[plant.difficulty]}</strong></div>
          <div class="plant-detail"><span>Освітлення</span><strong>${plant.light}</strong></div>
          <div class="plant-detail"><span>Полив</span><strong>${plant.watering}</strong></div>
          <div class="plant-detail"><span>Для тварин</span><strong>${isSafe ? "Так" : "Ні"}</strong></div>
        </div>
      </div>
    </article>
  `;
}

function renderPlants() {
  const query = searchInput.value.trim().toLocaleLowerCase("uk");
  const difficulty = difficultyFilter.value;
  const condition = conditionFilter.value;
  const safety = safetyFilter.value;

  const filtered = plants.filter((plant) => {
    const matchesQuery = `${plant.name} ${plant.latin}`.toLocaleLowerCase("uk").includes(query);
    const matchesDifficulty = difficulty === "all" || plant.difficulty === difficulty;
    const matchesCondition = condition === "all" || plant.conditions.includes(condition);
    const matchesSafety = safety === "all" || plant.safety === safety;
    return matchesQuery && matchesDifficulty && matchesCondition && matchesSafety;
  });

  plantGrid.innerHTML = filtered.map(plantCardTemplate).join("");
  catalogCount.textContent = `Знайдено: ${filtered.length} із ${plants.length}`;
  emptyState.hidden = filtered.length !== 0;
}

[searchInput, difficultyFilter, conditionFilter, safetyFilter].forEach((element) => {
  element.addEventListener("input", renderPlants);
  element.addEventListener("change", renderPlants);
});

resetFilters.addEventListener("click", () => {
  searchInput.value = "";
  difficultyFilter.value = "all";
  conditionFilter.value = "all";
  safetyFilter.value = "all";
  renderPlants();
});

renderPlants();

// Mobile navigation and sticky header
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Accordions
function initializeAccordion(container) {
  if (!container) return;
  container.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const icon = trigger.querySelector("i");
      const isOpen = item.classList.contains("is-open");

      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      icon.textContent = isOpen ? "+" : "−";
    });
  });
}

document.querySelectorAll(".accordion").forEach(initializeAccordion);

// Toast
const toast = document.querySelector("#toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

// Watering reminders with localStorage
const wateringForm = document.querySelector("#watering-form");
const reminderList = document.querySelector("#reminder-list");
const reminderDateInput = document.querySelector("#reminder-date");
const clearRemindersButton = document.querySelector("#clear-reminders");
const storageKey = "green-room-watering-reminders";

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
reminderDateInput.min = localToday;
reminderDateInput.value = localToday;

function getReminders() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } catch {
    return [];
  }
}

function saveReminders(reminders) {
  localStorage.setItem(storageKey, JSON.stringify(reminders));
}

function formatReminderDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return {
    day: new Intl.DateTimeFormat("uk-UA", { day: "2-digit" }).format(date),
    month: new Intl.DateTimeFormat("uk-UA", { month: "short" }).format(date).replace(".", "")
  };
}

function renderReminders() {
  const reminders = getReminders().sort((a, b) => a.date.localeCompare(b.date));
  clearRemindersButton.hidden = reminders.length === 0;

  if (!reminders.length) {
    reminderList.innerHTML = '<p class="reminder-empty">Поки що немає жодного нагадування.</p>';
    return;
  }

  reminderList.innerHTML = reminders.map((item) => {
    const date = formatReminderDate(item.date);
    return `
      <article class="reminder-item">
        <div class="reminder-date"><strong>${date.day}</strong><span>${date.month}</span></div>
        <div class="reminder-copy"><strong>${escapeHTML(item.plant)}</strong><span>${escapeHTML(item.note || "Перевірити вологість ґрунту")}</span></div>
        <button class="reminder-delete" type="button" data-reminder-id="${item.id}" aria-label="Видалити нагадування">×</button>
      </article>
    `;
  }).join("");
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

wateringForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const plant = document.querySelector("#reminder-plant").value.trim();
  const date = reminderDateInput.value;
  const note = document.querySelector("#reminder-note").value.trim();

  if (!plant || !date) return;

  const reminders = getReminders();
  reminders.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), plant, date, note });
  saveReminders(reminders);
  wateringForm.reset();
  reminderDateInput.value = localToday;
  renderReminders();
  showToast("Нагадування додано");
});

reminderList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-reminder-id]");
  if (!button) return;
  const nextReminders = getReminders().filter((item) => item.id !== button.dataset.reminderId);
  saveReminders(nextReminders);
  renderReminders();
  showToast("Нагадування видалено");
});

clearRemindersButton.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderReminders();
  showToast("Усі нагадування очищено");
});

renderReminders();

// Quiz modal
const quizModal = document.querySelector("#quiz-modal");
const quizForm = document.querySelector("#quiz-form");
const quizSteps = [...document.querySelectorAll(".quiz-step")];
const quizNext = document.querySelector("#quiz-next");
const quizPrev = document.querySelector("#quiz-prev");
const quizProgress = document.querySelector("#quiz-progress-bar");
const quizResultTitle = document.querySelector("#quiz-result-title");
const quizResultText = document.querySelector("#quiz-result-text");
let currentQuizStep = 1;
let lastFocusedElement = null;

function openQuiz() {
  lastFocusedElement = document.activeElement;
  quizModal.hidden = false;
  document.body.classList.add("modal-open");
  resetQuiz();
  window.setTimeout(() => quizModal.querySelector(".modal-close").focus(), 0);
}

function closeQuiz() {
  quizModal.hidden = true;
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

function resetQuiz() {
  currentQuizStep = 1;
  quizForm.reset();
  showQuizStep();
}

function showQuizStep() {
  quizSteps.forEach((step) => {
    step.hidden = Number(step.dataset.step) !== currentQuizStep;
  });

  quizProgress.style.width = `${currentQuizStep * 25}%`;
  quizPrev.hidden = currentQuizStep === 1 || currentQuizStep === 4;
  quizNext.hidden = currentQuizStep === 4;
  quizNext.textContent = currentQuizStep === 3 ? "Показати результат" : "Далі";
  document.querySelector(".quiz-controls").hidden = currentQuizStep === 4;
}

function getQuizResult() {
  const data = new FormData(quizForm);
  const light = data.get("light");
  const care = data.get("care");
  const pets = data.get("pets");

  if (pets === "yes" && light === "shade") {
    return ["Хлорофітум або хамедорея", "Обидві рослини безпечні для тварин, добре почуваються при розсіяному світлі й підходять людям без великого досвіду."];
  }
  if (pets === "yes" && light === "sun") {
    return ["Ехеверія", "Компактний безпечний сукулент для сонячного місця. Полив потрібен нечасто, а головний ризик — надлишок води."];
  }
  if (care === "low") {
    return ["Сансевієрія або заміокулькас", "Ці рослини витримують сухе повітря, нерегулярний полив і різні рівні освітлення. Важливо не заливати ґрунт."];
  }
  if (care === "high" && (light === "shade" || light === "bright")) {
    return ["Калатея або маранта", "Вам підійдуть декоративно-листяні рослини, які люблять стабільну вологість, м’яке світло й уважний догляд."];
  }
  if (light === "sun") {
    return ["Фікус еластика або алое", "У світлому місці ці рослини ростимуть активно. Фікус потребує рівномірнішого догляду, алое — значно рідшого поливу."];
  }
  return ["Монстера делікатесна", "Ви готові до помірного регулярного догляду, а монстера добре адаптується до домашніх умов і швидко створює виразний зелений акцент."];
}

document.querySelectorAll("[data-open-quiz]").forEach((button) => button.addEventListener("click", openQuiz));
document.querySelectorAll("[data-close-quiz]").forEach((button) => button.addEventListener("click", closeQuiz));

quizNext.addEventListener("click", () => {
  const currentStepElement = quizSteps.find((step) => Number(step.dataset.step) === currentQuizStep);
  const requiredInput = currentStepElement.querySelector("input[required]");
  const groupName = requiredInput?.name;
  const selected = groupName ? quizForm.querySelector(`input[name="${groupName}"]:checked`) : true;

  if (!selected) {
    showToast("Оберіть один із варіантів відповіді");
    return;
  }

  if (currentQuizStep < 3) {
    currentQuizStep += 1;
  } else {
    const [title, text] = getQuizResult();
    quizResultTitle.textContent = title;
    quizResultText.textContent = text;
    currentQuizStep = 4;
  }
  showQuizStep();
});

quizPrev.addEventListener("click", () => {
  if (currentQuizStep > 1) {
    currentQuizStep -= 1;
    showQuizStep();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !quizModal.hidden) closeQuiz();
});

// Contact demo form
const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  contactStatus.textContent = "Дякуємо! Це демонстраційна форма — для реального надсилання підключіть сервіс обробки форм.";
  contactForm.reset();
});
