// Feature A: pure data-picking functions. No DOM, no UI — these should
// be fully testable by calling them directly and checking what comes back.

// In the browser, names.js and districts.js are loaded first via <script>
// tags, so FIRST_NAMES/DISTRICTS etc. are already global. In Node, our
// test script requires those files first too, which sets the same
// globals — so this file can just reference FIRST_NAMES/DISTRICTS etc.
// directly without redeclaring them.

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  // inclusive of both min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random full name.
 * { first, second (string|null), last, full }
 */
function getRandomName() {
  const first = pickRandom(FIRST_NAMES);
  const last = pickRandom(LAST_NAMES);
  const includeSecond = Math.random() < SECOND_NAME_CHANCE;
  const second = includeSecond ? pickRandom(SECOND_NAMES) : null;

  const full = second ? `${first} ${second} ${last}` : `${first} ${last}`;

  return { first, second, last, full };
}

/**
 * Returns a random valid District paired with one of ITS OWN Local
 * Congregations (never a mismatched pairing).
 * { district, local, display }
 */
function getRandomDistrictAndLocal() {
  const entry = pickRandom(DISTRICTS);
  const local = pickRandom(entry.locals);
  return {
    district: entry.district,
    local,
    display: `${entry.district} — ${local}`
  };
}

/**
 * Returns a random Purok (1-13) and Grupo (1-11).
 * { purok, grupo, display }
 */
function getRandomPurokGrupo() {
  const purok = randomInt(1, 13);
  const grupo = randomInt(1, 11);
  return { purok, grupo, display: `${purok}-${grupo}` };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getRandomName, getRandomDistrictAndLocal, getRandomPurokGrupo, pickRandom, randomInt };
}
