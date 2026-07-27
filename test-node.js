require("./data/names.js");
const { DISTRICTS } = require("./data/districts.js");
const { getRandomName, getRandomDistrictAndLocal, getRandomPurokGrupo } = require("./js/random-pickers.js");

console.log("=== 5 random names ===");
for (let i = 0; i < 5; i++) console.log(getRandomName().full);

console.log("\n=== 5 random District/Local pairs (checking they're valid pairs) ===");
let allValid = true;
for (let i = 0; i < 20; i++) {
  const { district, local } = getRandomDistrictAndLocal();
  const districtEntry = DISTRICTS.find(d => d.district === district);
  const isValidPair = districtEntry && districtEntry.locals.includes(local);
  if (!isValidPair) allValid = false;
  if (i < 5) console.log(`${district} — ${local}`);
}
console.log(allValid ? "✅ All 20 pairs were valid District/Local combos" : "❌ Found a mismatched pair!");

console.log("\n=== 5 random Purok-Grupo ===");
let rangeOk = true;
for (let i = 0; i < 100; i++) {
  const { purok, grupo, display } = getRandomPurokGrupo();
  if (purok < 1 || purok > 13 || grupo < 1 || grupo > 11) rangeOk = false;
  if (i < 5) console.log(display);
}
console.log(rangeOk ? "✅ All 100 samples stayed within Purok 1-13 / Grupo 1-11" : "❌ Out-of-range value found!");
