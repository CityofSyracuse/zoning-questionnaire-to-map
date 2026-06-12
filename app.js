const state = {
  currentQuestionId: "start",
  history: [],
  selectedAnswers: [],
  warning: ""
};

const wizardCard = document.querySelector("#wizard-card");
const resultCard = document.querySelector("#result-card");
const questionTitle = document.querySelector("#question-title");
const questionHelp = document.querySelector("#question-help");
const answersContainer = document.querySelector("#answers");
const stepLabel = document.querySelector("#step-label");
const backBtn = document.querySelector("#back-btn");
const restartBtn = document.querySelector("#restart-btn");
const resultRestartBtn = document.querySelector("#result-restart-btn");

function renderQuestion(questionId) {
  const node = DECISION_TREE[questionId];

  if (!node) {
    renderError(`Question "${questionId}" was not found in the decision tree.`);
    return;
  }

  state.currentQuestionId = questionId;

  wizardCard.classList.remove("hidden");
  resultCard.classList.add("hidden");

  stepLabel.textContent = `Step ${state.history.length + 1}`;
  questionTitle.textContent = node.question;
  questionHelp.textContent = node.helpText || "";
  answersContainer.innerHTML = "";

  node.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = answer.label;

    button.addEventListener("click", () => {
      state.selectedAnswers.push(answer);
      state.warning = answer.warning || "";

      if (answer.next) {
        state.history.push(questionId);
        renderQuestion(answer.next);
        return;
      }

      if (answer.resultUseType) {
        renderResult(answer.resultUseType);
        return;
      }

      renderError("This answer does not have a next question or result.");
    });

    answersContainer.appendChild(button);
  });

  backBtn.disabled = state.history.length === 0;
}

function renderResult(useType) {
  const lookup = ALLOWED_USES[useType];

  wizardCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  document.querySelector("#result-use-type").textContent = useType;

  if (!lookup) {
    document.querySelector("#result-category").textContent = "This use type was not found in the allowed uses lookup.";
    renderZones("#permitted-zones", []);
    renderZones("#special-use-zones", []);
    return;
  }

  document.querySelector("#result-category").textContent = lookup.category || "Category not listed";

  const warningBox = document.querySelector("#result-warning");
  if (state.warning) {
    warningBox.textContent = state.warning;
    warningBox.classList.remove("hidden");
  } else {
    warningBox.classList.add("hidden");
  }

  renderZones("#permitted-zones", lookup.permitted || []);
  renderZones("#special-use-zones", lookup.specialUse || []);

  const mapUrl = buildMapUrl({
    permitted: lookup.permitted || [],
    specialUse: lookup.specialUse || [],
    useType
  });

  document.querySelector("#map-link").href = mapUrl;
  document.querySelector("#url-preview").textContent = mapUrl;
}

function renderZones(selector, zones) {
  const container = document.querySelector(selector);
  container.innerHTML = "";

  if (!zones.length) {
    container.textContent = "None listed";
    return;
  }

  zones.forEach((zone) => {
    const tag = document.createElement("span");
    tag.className = "zone-tag";
    tag.textContent = zone;
    container.appendChild(tag);
  });
}

function buildMapUrl({ permitted, specialUse, useType }) {
  const allZones = [...new Set([...permitted, ...specialUse])];

  if (!allZones.length) {
    return CONFIG.experienceBuilderUrl;
  }

  const whereClause = allZones
    .map((zone) => `${CONFIG.zoningDistrictField}='${zone}'`)
    .join(" OR ");

  const encodedWhereClause = encodeURIComponent(whereClause);

  return `${CONFIG.experienceBuilderUrl}/?data_filter=${CONFIG.dataSourceId}:${encodedWhereClause}`;
}

function goBack() {
  const previous = state.history.pop();

  if (!previous) {
    startWizard();
    return;
  }

  state.selectedAnswers.pop();
  renderQuestion(previous);
}

function startWizard() {
  state.currentQuestionId = "start";
  state.history = [];
  state.selectedAnswers = [];
  state.warning = "";
  renderQuestion("start");
}

function renderError(message) {
  questionTitle.textContent = "Something needs attention";
  questionHelp.textContent = message;
  answersContainer.innerHTML = "";
}

backBtn.addEventListener("click", goBack);
restartBtn.addEventListener("click", startWizard);
resultRestartBtn.addEventListener("click", startWizard);

startWizard();
