// Feature B: session flow state machine. No voice, no grading yet —
// those are Features C and D. This just proves the stage-by-stage
// flow works and each stage's data stays consistent through to the
// summary screen.

const STAGES = ["idle", "name", "district", "purok", "summary"];
const STEP_FOR_STAGE = { name: 1, district: 2, purok: 3 };

let session = null;

function showStage(stage) {
  STAGES.forEach((s) => {
    document.getElementById(`stage-${s}`).classList.toggle("hidden", s !== stage);
  });
  updateProgress(stage);
}

function updateProgress(stage) {
  document.querySelectorAll(".progress .tick").forEach((tick) => {
    const step = Number(tick.dataset.step);
    tick.classList.remove("active", "done");
    if (stage === "summary") {
      tick.classList.add("done");
    } else if (STEP_FOR_STAGE[stage] === step) {
      tick.classList.add("active");
    } else if (STEP_FOR_STAGE[stage] > step) {
      tick.classList.add("done");
    }
  });
}

function beginSession() {
  session = { name: getRandomName() };
  document.getElementById("name-display").textContent = session.name.full;
  showStage("name");
}

document.getElementById("start-btn").addEventListener("click", beginSession);

document.getElementById("name-proceed").addEventListener("click", () => {
  const dl = getRandomDistrictAndLocal();
  session.district = dl.district;
  session.local = dl.local;
  document.getElementById("district-display").textContent = dl.district;
  document.getElementById("local-display").textContent = dl.local;
  showStage("district");
});

document.getElementById("district-proceed").addEventListener("click", () => {
  const pg = getRandomPurokGrupo();
  session.purokGrupo = pg.display;
  document.getElementById("purok-display").textContent = pg.display;
  showStage("purok");
});

document.getElementById("purok-proceed").addEventListener("click", () => {
  document.getElementById("summary-name").textContent = session.name.full;
  document.getElementById("summary-district").textContent = session.district;
  document.getElementById("summary-local").textContent = session.local;
  document.getElementById("summary-purok").textContent = session.purokGrupo;
  showStage("summary");
});

document.getElementById("new-session-btn").addEventListener("click", beginSession);
