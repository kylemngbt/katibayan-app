// Feature C: Web Speech API integration.
// Provides speak(...texts) for "Repeat" and spellOut(...texts) for
// "Spell It Out", plus voice detection/selection so you can pick
// whichever installed voice sounds most natural on your machine.

let availableVoices = [];
let selectedVoice = null;

function pickDefaultVoice(list) {
  return (
    list.find((v) => /^fil|tl[-_]ph/i.test(v.lang)) ||
    list.find((v) => /filipino/i.test(v.name)) ||
    list.find((v) => /en[-_]ph/i.test(v.lang)) ||
    list[0] ||
    null
  );
}

function populateVoiceSelect() {
  const select = document.getElementById("voice-select");
  const status = document.getElementById("voice-status");
  if (!select) return;

  select.innerHTML = "";
  availableVoices.forEach((v, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${v.name} (${v.lang})`;
    select.appendChild(opt);
  });

  selectedVoice = pickDefaultVoice(availableVoices);
  if (selectedVoice) {
    select.value = availableVoices.indexOf(selectedVoice);
  }

  if (status) {
    const foundFilipino = /^fil|tl[-_]ph/i.test(selectedVoice?.lang || "") || /filipino/i.test(selectedVoice?.name || "");
    status.textContent = availableVoices.length
      ? foundFilipino
        ? `Using ${selectedVoice.name} (${selectedVoice.lang})`
        : `No Filipino voice found on this device — using ${selectedVoice?.name || "default"}. Pick a different one if you like.`
      : "No voices available in this browser.";
  }

  select.onchange = () => {
    selectedVoice = availableVoices[Number(select.value)];
  };
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  availableVoices = window.speechSynthesis.getVoices();
  if (availableVoices.length) populateVoiceSelect();
}

if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function cancelSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

function makeUtterance(text, rate) {
  const u = new SpeechSynthesisUtterance(text);
  if (selectedVoice) u.voice = selectedVoice;
  u.rate = rate;
  return u;
}

// "Repeat" — reads each given string naturally, in order.
function speak(...texts) {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported in this browser.");
    return;
  }
  cancelSpeech();
  texts.filter(Boolean).forEach((t) => window.speechSynthesis.speak(makeUtterance(t, 0.95)));
}

// "Spell It Out" — reads each string letter by letter, with a short
// pause between words.
function spellOut(...texts) {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech synthesis not supported in this browser.");
    return;
  }
  cancelSpeech();
  texts.filter(Boolean).forEach((t) => {
    const spelled = t
      .split(" ")
      .filter(Boolean)
      .map((word) => word.split("").join(", "))
      .join(",  ,  ");
    window.speechSynthesis.speak(makeUtterance(spelled, 0.75));
  });
}
