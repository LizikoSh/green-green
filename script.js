"use strict";

const plants = [
  {
    "name": "Агава королеви Вікторії",
    "latin": "Agave victoriae-reginae",
    "difficulty": "beginner",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "toxic",
    "light": "Яскраве, пряме",
    "watering": "Рідкий",
    "description": "Компактний сукулент із щільною геометричною розеткою листків.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Queen_Victoria_Agave_%28Agave_victoriae-reginae%29.jpg/330px-Queen_Victoria_Agave_%28Agave_victoriae-reginae%29.jpg",
    "source": "https://uk.wikipedia.org/wiki/Агава_королеви_Вікторії"
  },
  {
    "name": "Алое деревоподібне",
    "latin": "Aloe arborescens",
    "difficulty": "easy",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "toxic",
    "light": "Яскраве",
    "watering": "Рідкий",
    "description": "Невибагливий багаторічний сукулент, відомий також як столітник.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Aloe_arborescens.jpg/330px-Aloe_arborescens.jpg",
    "source": "https://uk.wikipedia.org/wiki/Алое_деревоподібне"
  },
  {
    "name": "Алое вера",
    "latin": "Aloe vera",
    "difficulty": "easy",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "toxic",
    "light": "Сонячне",
    "watering": "Рідкий",
    "description": "Розетковий сукулент із м’ясистими листками, що накопичують вологу.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Aloe_vera386868234.jpg/330px-Aloe_vera386868234.jpg",
    "source": "https://uk.wikipedia.org/wiki/Aloe_vera"
  },
  {
    "name": "Антуріум",
    "latin": "Anthurium",
    "difficulty": "hard",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "toxic",
    "light": "Яскраве розсіяне",
    "watering": "Регулярний",
    "description": "Тропічний вічнозелений рід, популярний завдяки виразним покривалам суцвіть.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Anthurium_andraeanum2.jpg/330px-Anthurium_andraeanum2.jpg",
    "source": "https://uk.wikipedia.org/wiki/Антуріум"
  },
  {
    "name": "Аспідистра",
    "latin": "Aspidistra",
    "difficulty": "easy",
    "conditions": [
      "shade",
      "dry"
    ],
    "safety": "safe",
    "light": "Тінь або півтінь",
    "watering": "Помірний",
    "description": "Безстебельна декоративно-листяна рослина, витривала до нестачі світла.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Addisonia_-_colored_illustrations_and_popular_descriptions_of_plants_%281916-%281964%29%29_%2816585308008%29.jpg/330px-Addisonia_-_colored_illustrations_and_popular_descriptions_of_plants_%281916-%281964%29%29_%2816585308008%29.jpg",
    "source": "https://uk.wikipedia.org/wiki/Аспідистра"
  },
  {
    "name": "Афеляндра",
    "latin": "Aphelandra",
    "difficulty": "hard",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Яскраве розсіяне",
    "watering": "Регулярний",
    "description": "Тропічна рослина з контрастним листям, яка потребує стабільної вологості.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flore_des_serres_v17_053a.jpg/330px-Flore_des_serres_v17_053a.jpg",
    "source": "https://uk.wikipedia.org/wiki/Афеляндра"
  },
  {
    "name": "Аспленій гніздовий",
    "latin": "Asplenium nidus",
    "difficulty": "hard",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "М’яке розсіяне",
    "watering": "Регулярний",
    "description": "Тропічна папороть із широкими листками, зібраними у гніздову розетку.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Asplenium_nidus_Blanco2.395.jpg/330px-Asplenium_nidus_Blanco2.395.jpg",
    "source": "https://uk.wikipedia.org/wiki/Asplenium_nidus"
  },
  {
    "name": "Бегонія",
    "latin": "Begonia",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "toxic",
    "light": "Яскраве розсіяне",
    "watering": "Помірний",
    "description": "Великий рід тропічних декоративних рослин із різноманітним листям і квітами.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BegoniaPendula3-Asio.JPG/330px-BegoniaPendula3-Asio.JPG",
    "source": "https://uk.wikipedia.org/wiki/Бегонія"
  },
  {
    "name": "Бокарнея відігнута",
    "latin": "Beaucarnea recurvata",
    "difficulty": "easy",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "safe",
    "light": "Яскраве",
    "watering": "Рідкий",
    "description": "Рослина з потовщеною основою стовбура та довгими дугоподібними листками.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gardenology.org-IMG_0453_hunt07mar.jpg/330px-Gardenology.org-IMG_0453_hunt07mar.jpg",
    "source": "https://uk.wikipedia.org/wiki/Бокарнея_відігнута"
  },
  {
    "name": "Венерина мухоловка",
    "latin": "Dionaea muscipula",
    "difficulty": "hard",
    "conditions": [
      "sun",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Пряме сонце",
    "watering": "Постійна волога",
    "description": "Хижа рослина з двостулковими листковими пастками для дрібних комах.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Venus_Flytrap_showing_trigger_hairs.jpg/330px-Venus_Flytrap_showing_trigger_hairs.jpg",
    "source": "https://uk.wikipedia.org/wiki/Венерина_мухоловка"
  },
  {
    "name": "Гібіск китайська рожа",
    "latin": "Hibiscus rosa-sinensis",
    "difficulty": "beginner",
    "conditions": [
      "sun",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Яскраве",
    "watering": "Регулярний",
    "description": "Багаторічна декоративна культура з великими яскравими квітами.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hibiscus_Brilliant.jpg/330px-Hibiscus_Brilliant.jpg",
    "source": "https://uk.wikipedia.org/wiki/Гібіск_китайська_рожа"
  },
  {
    "name": "Гіпеаструм",
    "latin": "Hippeastrum",
    "difficulty": "hard",
    "conditions": [
      "sun"
    ],
    "safety": "toxic",
    "light": "Яскраве",
    "watering": "Помірний",
    "description": "Цибулинна рослина родини амарилісових із великими лійкоподібними квітами.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Hippeastrum_reginae.jpg/330px-Hippeastrum_reginae.jpg",
    "source": "https://uk.wikipedia.org/wiki/Гіпеаструм"
  },
  {
    "name": "Драцена облямована",
    "latin": "Dracaena marginata",
    "difficulty": "easy",
    "conditions": [
      "shade",
      "dry"
    ],
    "safety": "toxic",
    "light": "Розсіяне",
    "watering": "Помірний",
    "description": "Деревоподібна драцена з вузьким листям і виразним облямуванням.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Starr-110330-3699-Dracaena_angustifolia-habit-Garden_of_Eden_Keanae-Maui_%2824987337521%29.jpg/330px-Starr-110330-3699-Dracaena_angustifolia-habit-Garden_of_Eden_Keanae-Maui_%2824987337521%29.jpg",
    "source": "https://uk.wikipedia.org/wiki/Драцена_облямована"
  },
  {
    "name": "Каланхое",
    "latin": "Kalanchoe",
    "difficulty": "easy",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "toxic",
    "light": "Яскраве",
    "watering": "Рідкий",
    "description": "Рід трав’янистих сукулентів із м’ясистими листками та декоративним цвітінням.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Kalanchoe_daigremontiana%2C_Universiteit_van_Pretoria.jpg/330px-Kalanchoe_daigremontiana%2C_Universiteit_van_Pretoria.jpg",
    "source": "https://uk.wikipedia.org/wiki/Каланхое"
  },
  {
    "name": "Калатея",
    "latin": "Calathea",
    "difficulty": "hard",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "М’яке розсіяне",
    "watering": "Регулярний",
    "description": "Декоративно-листяний тропічний рід, відомий складними візерунками листків.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Flore_des_serres_v16_127a.jpg/330px-Flore_des_serres_v16_127a.jpg",
    "source": "https://uk.wikipedia.org/wiki/Калатея"
  },
  {
    "name": "Літопс",
    "latin": "Lithops",
    "difficulty": "hard",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "safe",
    "light": "Сонячне",
    "watering": "Дуже рідкий",
    "description": "Мініатюрний суперсукулент, зовні схожий на камінь із мармуровим рисунком.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lithops_by_Dornenwolf.jpg/330px-Lithops_by_Dornenwolf.jpg",
    "source": "https://uk.wikipedia.org/wiki/Літопс"
  },
  {
    "name": "Маранта",
    "latin": "Maranta",
    "difficulty": "hard",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "М’яке розсіяне",
    "watering": "Регулярний",
    "description": "Тропічна «молитовна рослина», листки якої змінюють положення протягом дня.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Maranta_leuconeura3.jpg/330px-Maranta_leuconeura3.jpg",
    "source": "https://uk.wikipedia.org/wiki/Маранта"
  },
  {
    "name": "Монстера",
    "latin": "Monstera",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "toxic",
    "light": "Розсіяне",
    "watering": "Помірний",
    "description": "Тропічна ліана з великими листками, що з віком утворюють характерні прорізи.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Monstera_deliciosa2.jpg/330px-Monstera_deliciosa2.jpg",
    "source": "https://uk.wikipedia.org/wiki/Монстера"
  },
  {
    "name": "Пахіра",
    "latin": "Pachira",
    "difficulty": "beginner",
    "conditions": [
      "sun",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Яскраве розсіяне",
    "watering": "Помірний",
    "description": "Тропічне дерево, яке в кімнатній культурі часто формують із переплетеними стовбурами.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pachira_aquatica_%28inflorescense%29.jpg/330px-Pachira_aquatica_%28inflorescense%29.jpg",
    "source": "https://uk.wikipedia.org/wiki/Пахіра"
  },
  {
    "name": "Пеперомія",
    "latin": "Peperomia",
    "difficulty": "easy",
    "conditions": [
      "shade",
      "dry"
    ],
    "safety": "safe",
    "light": "Розсіяне",
    "watering": "Помірний",
    "description": "Різноманітний рід компактних вічнозелених рослин із декоративним листям.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Peperomia-sp.jpg/330px-Peperomia-sp.jpg",
    "source": "https://uk.wikipedia.org/wiki/Пеперомія"
  },
  {
    "name": "Сансев’єрія",
    "latin": "Sansevieria",
    "difficulty": "easy",
    "conditions": [
      "shade",
      "sun",
      "dry"
    ],
    "safety": "toxic",
    "light": "Від тіні до яскравого",
    "watering": "Рідкий",
    "description": "Витривала рослина з довгими жорсткими листками та високою посухостійкістю.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sansevieria_trifasciata_Closeup_2448px.jpg/330px-Sansevieria_trifasciata_Closeup_2448px.jpg",
    "source": "https://uk.wikipedia.org/wiki/Сансев'єрія"
  },
  {
    "name": "Спатифілум",
    "latin": "Spathiphyllum",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "toxic",
    "light": "Півтінь",
    "watering": "Регулярний",
    "description": "Вічнозелена рослина з темним листям і характерними білими покривалами суцвіть.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/330px-Spathiphyllum_cochlearispathum_RTBG.jpg",
    "source": "https://uk.wikipedia.org/wiki/Спатифілум"
  },
  {
    "name": "Товстолист яйцеподібний",
    "latin": "Crassula ovata",
    "difficulty": "easy",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "toxic",
    "light": "Сонячне",
    "watering": "Рідкий",
    "description": "Популярний сукулент, відомий як грошове або нефритове дерево.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Crassula_ovata_%28hun%29.jpg/330px-Crassula_ovata_%28hun%29.jpg",
    "source": "https://uk.wikipedia.org/wiki/Товстолист_яйцеподібний"
  },
  {
    "name": "Традесканція",
    "latin": "Tradescantia",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "sun"
    ],
    "safety": "toxic",
    "light": "Яскраве розсіяне",
    "watering": "Помірний",
    "description": "Рід багаторічних вічнозелених трав’янистих рослин, багато з яких вирощують у кімнатах.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Tradescantia_virginiana_ies.jpg/330px-Tradescantia_virginiana_ies.jpg",
    "source": "https://uk.wikipedia.org/wiki/Традесканція"
  },
  {
    "name": "Фаленопсис",
    "latin": "Phalaenopsis",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Яскраве розсіяне",
    "watering": "Після просихання",
    "description": "Епіфітна орхідея з тривалим цвітінням, природно захищена від прямого сонця.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Phalaenopsis_philippinensis_NationalOrchidGarden-Singapore.jpg/330px-Phalaenopsis_philippinensis_NationalOrchidGarden-Singapore.jpg",
    "source": "https://uk.wikipedia.org/wiki/Фаленопсис"
  },
  {
    "name": "Фікус Бенджаміна",
    "latin": "Ficus benjamina",
    "difficulty": "beginner",
    "conditions": [
      "sun"
    ],
    "safety": "toxic",
    "light": "Яскраве розсіяне",
    "watering": "Помірний",
    "description": "Вічнозелене дерево або кущ із дрібним блискучим листям і розлогою кроною.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Ficus_benjamina.jpg/330px-Ficus_benjamina.jpg",
    "source": "https://uk.wikipedia.org/wiki/Фікус_бенджаміна"
  },
  {
    "name": "Фіттонія",
    "latin": "Fittonia",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "М’яке розсіяне",
    "watering": "Регулярний",
    "description": "Низькоросла декоративна рослина з контрастною сіткою жилок на листках.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Colpfl25.jpg/330px-Colpfl25.jpg",
    "source": "https://uk.wikipedia.org/wiki/Фіттонія"
  },
  {
    "name": "Хамедорея",
    "latin": "Chamaedorea",
    "difficulty": "easy",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Півтінь",
    "watering": "Помірний",
    "description": "Низькоросла бамбукова пальма, придатна для вирощування у житлових приміщеннях.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flore_des_serres_v13_133a.jpg/330px-Flore_des_serres_v13_133a.jpg",
    "source": "https://uk.wikipedia.org/wiki/Хамедорея"
  },
  {
    "name": "Хойя",
    "latin": "Hoya",
    "difficulty": "beginner",
    "conditions": [
      "sun",
      "dry"
    ],
    "safety": "safe",
    "light": "Яскраве розсіяне",
    "watering": "Після просихання",
    "description": "Вічнозелена тропічна ліана з восковими листками й ароматними суцвіттями.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Hoya_australis_tonga.jpg/330px-Hoya_australis_tonga.jpg",
    "source": "https://uk.wikipedia.org/wiki/Хойя"
  },
  {
    "name": "Шефлера",
    "latin": "Schefflera",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "sun"
    ],
    "safety": "toxic",
    "light": "Яскраве розсіяне",
    "watering": "Помірний",
    "description": "Тропічна декоративно-листяна рослина з пальчасто складеними листками.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Schefflera_digitata_258334362.jpg/330px-Schefflera_digitata_258334362.jpg",
    "source": "https://uk.wikipedia.org/wiki/Шефлера"
  },
  {
    "name": "Шлюмбергера",
    "latin": "Schlumbergera",
    "difficulty": "beginner",
    "conditions": [
      "shade",
      "bathroom"
    ],
    "safety": "safe",
    "light": "Розсіяне",
    "watering": "Помірний",
    "description": "Епіфітний тропічний кактус, відомий зимовим цвітінням і пласкими сегментами пагонів.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hatiora_gaertneri.jpg/330px-Hatiora_gaertneri.jpg",
    "source": "https://uk.wikipedia.org/wiki/Шлюмбергера"
  }
];

const difficultyNames = {
  easy: "Легка",
  beginner: "Для початківців",
  hard: "Потребує досвіду"
};

function largerWikiImage(url) {
  return url.replace(/\/330px-/, "/900px-");
}

function initializePlantCatalog() {
  const plantGrid = document.querySelector("#plant-grid");
  if (!plantGrid) return;

  const catalogCount = document.querySelector("#catalog-count");
  const emptyState = document.querySelector("#empty-state");
  const searchInput = document.querySelector("#plant-search");
  const difficultyFilter = document.querySelector("#difficulty-filter");
  const conditionFilter = document.querySelector("#condition-filter");
  const safetyFilter = document.querySelector("#safety-filter");
  const resetFilters = document.querySelector("#reset-filters");

  function plantCardTemplate(plant) {
    const isSafer = plant.safety === "safe";
    return `
      <article class="plant-card">
        <a class="plant-card-image" href="${plant.source}" target="_blank" rel="noopener noreferrer" aria-label="Відкрити статтю про ${plant.name} у Вікіпедії">
          <img src="${largerWikiImage(plant.image)}" alt="${plant.name}" loading="lazy" referrerpolicy="no-referrer" />
          <span class="plant-safety ${isSafer ? "" : "toxic"}">${isSafer ? "Безпечніша" : "Обережно"}</span>
        </a>
        <div class="plant-card-body">
          <h2>${plant.name}</h2>
          <p class="latin-name">${plant.latin}</p>
          <p class="plant-description">${plant.description}</p>
          <div class="plant-details">
            <div class="plant-detail"><span>Складність</span><strong>${difficultyNames[plant.difficulty]}</strong></div>
            <div class="plant-detail"><span>Освітлення</span><strong>${plant.light}</strong></div>
            <div class="plant-detail"><span>Полив</span><strong>${plant.watering}</strong></div>
            <div class="plant-detail"><span>Тварини й діти</span><strong>${isSafer ? "Менший ризик" : "Поза доступом"}</strong></div>
          </div>
          <a class="plant-source" href="${plant.source}" target="_blank" rel="noopener noreferrer">Стаття у Вікіпедії <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    `;
  }

  function renderPlants() {
    const query = searchInput.value.trim().toLocaleLowerCase("uk-UA");
    const difficulty = difficultyFilter.value;
    const condition = conditionFilter.value;
    const safety = safetyFilter.value;

    const filtered = plants.filter((plant) => {
      const haystack = `${plant.name} ${plant.latin} ${plant.description}`.toLocaleLowerCase("uk-UA");
      return haystack.includes(query)
        && (difficulty === "all" || plant.difficulty === difficulty)
        && (condition === "all" || plant.conditions.includes(condition))
        && (safety === "all" || plant.safety === safety);
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
}

function initializeNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".inner-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".inner-nav a").forEach((link) => {
    if (link.getAttribute("href") === currentFile) link.setAttribute("aria-current", "page");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializePlantCatalog();
  initializeNavigation();
});
