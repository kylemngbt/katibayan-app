// Curated Filipino name pools for the katibayan practice app.
// Feel free to add/remove names as you discover ones that trip you up
// during real duty.

const FIRST_NAMES = [
  "Juan", "Maria", "Jose", "Ana", "Pedro", "Rosario", "Antonio", "Carmela",
  "Ricardo", "Ligaya", "Bayani", "Corazon", "Ferdinand", "Imelda", "Rodrigo",
  "Manuel", "Josefina", "Eduardo", "Remedios", "Teodoro", "Consolacion",
  "Rogelio", "Bernadette", "Reynaldo", "Marites", "Arnel", "Divina", "Jerome",
  "Angelica", "Kristine", "Jhoanna", "Rhea", "Kimberly", "Jasmine",
  "Precious", "Angel", "Rowena", "Rowella", "Gemma", "Dexter", "Xander",
  "Zaldy", "Wilfredo", "Bienvenido", "Purificacion", "Epifanio", "Ederlina",
  "Herminia", "Salvador", "Crisanto", "Feliciano", "Perpetua",
  "Presentacion", "Encarnacion", "Asuncion", "Milagros", "Concepcion",
  "Guadalupe", "Cristopher", "Genevieve", "Ederson", "Marjorie", "Lourdes",
  "Nestor", "Erlinda", "Cielo", "Rustom", "Jonalyn", "Jhun", "Erwin",
  "Analiza", "Rodel", "Fe", "Vergel", "Estelita", "Almira", "Danilo"
];

// Optional "second first name" pool — reflects the common Filipino
// pattern of a compound given name (e.g. "Mary Grace", "Mark Anthony"),
// NOT a middle initial (real slips don't use those).
const SECOND_NAMES = [
  "Grace", "Joy", "Faith", "Rose", "Ann", "Anne", "Anthony", "Angel",
  "Marie", "Louise", "Claire", "Divine", "Justine", "Bernard", "Michael",
  "Gabriel", "Nicole", "Denise", "Kaye", "Mae", "Lynn", "Jane", "Paul",
  "Ray", "Lee"
];

const LAST_NAMES = [
  "Santos", "Reyes", "Cruz", "Bautista", "Ocampo", "Garcia", "Mendoza",
  "Torres", "Ramos", "Gonzales", "Villanueva", "Fernandez", "Flores",
  "Castillo", "Aguilar", "Navarro", "Domingo", "Tolentino", "Rivera",
  "Panganiban", "Guevarra", "Manalo", "Marasigan", "Buenaventura",
  "Del Rosario", "Dela Cruz", "Dizon", "Salonga", "Lacson", "Abad",
  "Aranda", "Barrios", "Cabrera", "Dimaculangan", "Escobar", "Fajardo",
  "Galang", "Hernandez", "Ilagan", "Jimenez", "Katigbak", "Lopez",
  "Nepomuceno", "Olivar", "Perez", "Quiambao", "Rosales", "Sarmiento",
  "Tan", "Uy", "Valdez", "Ynares", "Zamora", "Bagsic", "Corpuz",
  "Espiritu", "Formaran", "Gatchalian", "Hizon", "Isip", "Jaramillo"
];

// Probability (0-1) that a generated name includes a second first name.
const SECOND_NAME_CHANCE = 0.3;

// Expose to the browser (plain <script> tag) and to Node (for our
// test script), without requiring a bundler or ES modules.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { FIRST_NAMES, SECOND_NAMES, LAST_NAMES, SECOND_NAME_CHANCE };
  // Also set as real globals (like a <script> tag would in the browser)
  // so random-pickers.js can reference these names the same way in both places.
  Object.assign(global, module.exports);
}
