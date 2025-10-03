// config
const API_KEY = "92ea01768792462d89fb81be5029dea2";
const favKey = "favRecipes";

// elements
const input = document.getElementById("ingredients-input");
const dietSel = document.getElementById("diet-select");
const searchBtn = document.getElementById("search-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results");
const emptyMsg = document.getElementById("empty");
const status = document.getElementById("status");

const modalBg = document.getElementById("modal-backdrop");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalIngr = document.getElementById("modal-ingredients");
const modalInstr = document.getElementById("modal-instructions");
const closeModal = document.getElementById("close-modal");

const favBtn = document.getElementById("open-favs");

function getFavs() {
  return JSON.parse(localStorage.getItem(favKey) || "[]");
}
function saveFavs(list) {
  localStorage.setItem(favKey, JSON.stringify(list));
}
function toggleFav(id) {
  let favs = getFavs();
  if (favs.includes(id)) {
    favs = favs.filter(x => x !== id);
  } else {
    favs.push(id);
  }
  saveFavs(favs);
}

function showStatus(msg) {
  status.textContent = msg;
}
function renderCards(data) {
  results.innerHTML = "";
  if (!data.length) {
    emptyMsg.style.display = "block";
    return;
  }
  emptyMsg.style.display = "none";

  const favs = getFavs();
  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";
    const favActive = favs.includes(r.id) ? "active" : "";

    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}">
      <div class="card-body">
        <h3>${r.title}</h3>
        <button class="btn small ${favActive}">★</button>
      </div>
    `;

    card.querySelector("img").addEventListener("click", () => loadRecipe(r.id));
    card.querySelector("button").addEventListener("click", () => {
      toggleFav(r.id);
      renderCards(data);
    });

    results.appendChild(card);
  });
}

async function searchRecipes() {
  const ing = input.value.trim();
  if (!ing) return;

  showStatus("Searching...");

  try {
    const diet = dietSel.value;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${encodeURIComponent(ing)}&number=12&diet=${diet}`;
    const res = await fetch(url);
    const json = await res.json();
    renderCards(json.results || []);
    showStatus(`Found ${json.results.length} recipes`);
  } catch (err) {
    console.error(err);
    showStatus("Error fetching recipes");
  }
}

async function loadRecipe(id) {
  try {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
    const r = await res.json();
    modalTitle.textContent = r.title;
    modalSummary.textContent = r.summary.replace(/<[^>]+>/g, "");
    modalIngr.innerHTML = r.extendedIngredients.map(i => `<li>${i.original}</li>`).join("");
    modalInstr.innerHTML = r.instructions || "No instructions available.";
    modalBg.style.display = "flex";
  } catch (err) {
    console.error("error loading recipe", err);
  }
}

searchBtn.addEventListener("click", searchRecipes);
clearBtn.addEventListener("click", () => {
  input.value = "";
  results.innerHTML = "";
  emptyMsg.style.display = "block";
  showStatus("Cleared");
});
closeModal.addEventListener("click", () => modalBg.style.display = "none");
modalBg.addEventListener("click", e => {
  if (e.target === modalBg) modalBg.style.display = "none";
});
favBtn.addEventListener("click", async () => {
  const favs = getFavs();
  if (!favs.length) {
    results.innerHTML = "";
    emptyMsg.style.display = "block";
    showStatus("No favorites yet");
    return;
  }
  try {
    const ids = favs.join(",");
    const url = `https://api.spoonacular.com/recipes/informationBulk?apiKey=${API_KEY}&ids=${ids}`;
    const res = await fetch(url);
    const data = await res.json();
    renderCards(data);
    showStatus(`Showing ${data.length} favorites`);
  } catch (err) {
    console.error(err);
    showStatus("Error loading favorites");
  }
});

// init
showStatus("Ready");
