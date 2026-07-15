const plants = [
  {
    name: "Калатея Зебрина",
    latin: "Calathea zebrina",
    category: "Марантові",
    difficulty: "hard",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "Розсіяне / півтінь",
    watering: "Регулярний",
    size: "Ø19 см · висота 70 см",
    price: "1 593 грн",
    description: "Ефектна тропічна рослина з великими оксамитовими листками та контрастним «зебровим» візерунком.",
    image: "https://dflora.com.ua/content/images/14/600x600l80mc0/29632904843585.webp",
    source: "https://dflora.com.ua/kalateia-zebryna/"
  },
  {
    name: "Калатея Аргентина",
    latin: "Calathea picturata ‘Argentea’",
    category: "Марантові",
    difficulty: "hard",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "М’яке розсіяне",
    watering: "Регулярний",
    size: "Ø12 см · висота 50 см",
    price: "441 грн",
    description: "Сорт зі сріблястою центральною частиною листка, зеленим краєм і пурпуровим забарвленням зі звороту.",
    image: "https://dflora.com.ua/content/images/15/600x600l80mc0/88111312899132.webp",
    source: "https://dflora.com.ua/kalateia-arhentyna/"
  },
  {
    name: "Калатея Леопардина",
    latin: "Calathea leopardina",
    category: "Марантові",
    difficulty: "hard",
    conditions: ["shade", "bathroom"],
    safety: "safe",
    light: "Розсіяне",
    watering: "Регулярний",
    size: "Ø12 см · висота 50 см",
    price: "486 грн",
    description: "Молитовна рослина з видовженими світло-зеленими листками та темними смугами, схожими на леопардовий візерунок.",
    image: "https://dflora.com.ua/content/images/16/600x600l80mc0/89444523196397.webp",
    source: "https://dflora.com.ua/kalateia-leopardyna/"
  },
  {
    name: "Сингоніум Батерфляй",
    latin: "Syngonium ‘White Butterfly’",
    category: "Плетучі",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Розсіяне",
    watering: "Помірний",
    size: "Ø12 см · висота 35 см",
    price: "434 грн",
    description: "Компактний сингоніум зі світлими стрілоподібними листками, придатний для полиць, опор і вертикального озеленення.",
    image: "https://dflora.com.ua/content/images/24/600x600l80mc0/99921659301130.webp",
    source: "https://dflora.com.ua/synhonium-baterfliai/"
  },
  {
    name: "Сингоніум Ред Ароу",
    latin: "Syngonium ‘Red Arrow’",
    category: "Плетучі",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Яскраве розсіяне",
    watering: "Помірний",
    size: "Ø12 см · висота 30 см",
    price: "684 грн",
    description: "Декоративний сорт із контрастним темно-зеленим і бордово-червоним листям, що створює виразний акцент.",
    image: "https://dflora.com.ua/content/images/27/600x600l80mc0/23374671296656.webp",
    source: "https://dflora.com.ua/synhonium-red-arrou/"
  },
  {
    name: "Філодендрон Біллітає",
    latin: "Philodendron billietiae",
    category: "Плетучі",
    difficulty: "hard",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Яскраве розсіяне",
    watering: "Помірний",
    size: "Ø12 см · висота 40 см",
    price: "576 грн",
    description: "Колекційний філодендрон із довгими блискучими листками та виразними теплими черешками.",
    image: "https://dflora.com.ua/content/images/30/574x600l80mc0/77704277759275.webp",
    source: "https://dflora.com.ua/filodendron-billitaia-billietiae/"
  },
  {
    name: "Філодендрон Біркін",
    latin: "Philodendron ‘Birkin’",
    category: "Плетучі",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Яскраве розсіяне",
    watering: "Помірний",
    size: "Ø12 см · висота 30 см",
    price: "585 грн",
    description: "Гібридний філодендрон із темно-зеленими листками, вкритими тонкими білими або кремовими смугами.",
    image: "https://dflora.com.ua/content/images/34/591x600l80mc0/92415158443920.webp",
    source: "https://dflora.com.ua/filodendron-birkin-/533/"
  },
  {
    name: "Філодендрон Бразіл",
    latin: "Philodendron hederaceum ‘Brasil’",
    category: "Плетучі",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Розсіяне",
    watering: "Помірний",
    size: "Ø12 см · висота 30 см",
    price: "765 грн",
    description: "Ампельна рослина з серцеподібним строкатим листям і яскравою жовто-зеленою смугою вздовж середини.",
    image: "https://dflora.com.ua/content/images/38/600x600l80mc0/filodendron-brazil-90461888898372.webp",
    source: "https://dflora.com.ua/filodendron-brazil/"
  },
  {
    name: "Спатифіллум Алана",
    latin: "Spathiphyllum ‘Alana’",
    category: "Квітучі",
    difficulty: "beginner",
    conditions: ["shade", "bathroom"],
    safety: "toxic",
    light: "Розсіяне / півтінь",
    watering: "Регулярний",
    size: "Ø12 см · висота 40 см",
    price: "306 грн",
    description: "Квітуча кімнатна рослина з темно-зеленим листям і білими покривалами суцвіть, відома як «жіноче щастя».",
    image: "https://dflora.com.ua/content/images/47/597x600l80mc0/59141232481009.webp",
    source: "https://dflora.com.ua/spatyfillum-alana-d12/"
  },
  {
    name: "Пеперомія Хеппі",
    latin: "Peperomia ‘Happy’",
    category: "Сукуленти",
    difficulty: "easy",
    conditions: ["shade", "dry"],
    safety: "safe",
    light: "Розсіяне",
    watering: "Після підсихання",
    size: "Ø7 см · висота 5 см",
    price: "207 грн",
    description: "Мініатюрна пеперомія з м’ясистими блискучими листками — компактний варіант для робочого столу або полиці.",
    image: "https://dflora.com.ua/content/images/3/600x600l80mc0/sukulent-89716230805785.webp",
    source: "https://dflora.com.ua/sukulent/"
  },
  {
    name: "Крассула Перфората",
    latin: "Crassula perforata",
    category: "Сукуленти",
    difficulty: "easy",
    conditions: ["sun", "dry"],
    safety: "toxic",
    light: "Яскраве розсіяне",
    watering: "Рідкий",
    size: "Ø5,5 см · висота 10 см",
    price: "153 грн",
    description: "Сукулент із соковитими листками, що розміщуються парами один над одним і утворюють характерні геометричні стебла.",
    image: "https://dflora.com.ua/content/images/7/600x600l80mc0/krassula-perforata-crassula-perforata-d5.5-39614722954933.webp",
    source: "https://dflora.com.ua/krassula-perforata-crassula-perforata-d5.5/"
  },
  {
    name: "Каланхое Томеноза",
    latin: "Kalanchoe tomentosa",
    category: "Сукуленти",
    difficulty: "easy",
    conditions: ["sun", "dry"],
    safety: "toxic",
    light: "Яскраве",
    watering: "Рідкий",
    size: "Ø5,5 см · висота 5 см",
    price: "144 грн",
    description: "Оксамитовий сукулент із сіро-зеленим опушеним листям і темними краями — декоративний та невибагливий.",
    image: "https://dflora.com.ua/content/images/11/600x600l80mc0/sukulent560-44646796256052.webp",
    source: "https://dflora.com.ua/sukulent/560/"
  },
  {
    name: "Алоказія Лоу Райд",
    latin: "Alocasia ‘Low Rider’",
    category: "Алоказії",
    difficulty: "hard",
    conditions: ["bathroom"],
    safety: "toxic",
    light: "Яскраве розсіяне",
    watering: "Регулярний",
    size: "Ø12 см · висота 45 см",
    price: "504 грн",
    description: "Компактна алоказія з великими хвилястими темно-зеленими листками та виразною архітектурною формою.",
    image: "https://dflora.com.ua/content/images/16/600x600l80mc0/alokaziia565-38715183725727.webp",
    source: "https://dflora.com.ua/alokaziia/565/"
  },
  {
    name: "Аглаонема Марія",
    latin: "Aglaonema ‘Maria’",
    category: "Аглаонеми",
    difficulty: "easy",
    conditions: ["shade"],
    safety: "toxic",
    light: "Півтінь / розсіяне",
    watering: "Помірний",
    size: "Ø12 см · висота 35 см",
    price: "639 грн",
    description: "Популярна декоративно-листяна рослина з темно-зеленими листками й сріблястим мармуровим візерунком.",
    image: "https://dflora.com.ua/content/images/24/600x600l80mc0/13377519902443.webp",
    source: "https://dflora.com.ua/ahlaonema-mariia/"
  },
  {
    name: "Алое Космос",
    latin: "Aloe ‘Cosmos’",
    category: "Сукуленти",
    difficulty: "easy",
    conditions: ["sun", "dry"],
    safety: "toxic",
    light: "Яскраве / сонячне",
    watering: "Рідкий",
    size: "Ø9 см · висота 15 см",
    price: "273 грн",
    description: "Декоративний сорт алое з компактною розеткою, зубчастими листками й світлими цятками.",
    image: "https://dflora.com.ua/content/images/28/600x600l80mc0/aloe-kosmos-94067466089724.webp",
    source: "https://dflora.com.ua/aloe-kosmos/"
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
      <a class="plant-card-image" href="${plant.source}" target="_blank" rel="noopener noreferrer" aria-label="Переглянути ${plant.name} на dflora.com.ua">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy" />
        <span class="plant-category">${plant.category}</span>
        <span class="plant-safety ${isSafe ? "" : "toxic"}">${isSafe ? "Безпечна" : "Тримати подалі"}</span>
      </a>
      <div class="plant-card-body">
        <h3>${plant.name}</h3>
        <p class="latin-name">${plant.latin}</p>
        <p class="plant-description">${plant.description}</p>
        <div class="plant-details">
          <div class="plant-detail"><span>Складність</span><strong>${difficultyNames[plant.difficulty]}</strong></div>
          <div class="plant-detail"><span>Освітлення</span><strong>${plant.light}</strong></div>
          <div class="plant-detail"><span>Полив</span><strong>${plant.watering}</strong></div>
          <div class="plant-detail"><span>Розмір у каталозі</span><strong>${plant.size}</strong></div>
        </div>
        <div class="plant-card-footer">
          <span class="plant-price">${plant.price}</span>
          <a class="plant-source-link" href="${plant.source}" target="_blank" rel="noopener noreferrer">Джерело: Dflora ↗</a>
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
