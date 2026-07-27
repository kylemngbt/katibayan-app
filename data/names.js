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
  "Analiza", "Rodel", "Fe", "Vergel", "Estelita", "Almira", "Danilo",
  "Carlo", "Carl", "Mark", "John", "John Paul", "Paul", "Paolo", "Patrick",
  "Kevin", "Kenneth", "Bryan", "Brian", "Christian", "Christopher",
  "Joshua", "Jerico", "Jericho", "Nathaniel", "Nathan", "Adrian", "Adrianne",
  "Ryan", "Ryan James", "Ronald", "Rommel", "Ramil", "Ramon", "Renato",
  "Alvin", "Alvin John", "Allen", "Aldrin", "Ariel", "Arnold", "Arthur",
  "Albert", "Alberto", "Ben", "Benjamin", "Benedict", "Bonifacio", "Bong",
  "Cesar", "Cyril", "Clyde", "Clark", "Dominic", "Donald", "Edgar",
  "Edwin", "Efren", "Emmanuel", "Enrico", "Eric", "Francis", "Francisco",
  "Frederick", "Gilbert", "Glenn", "Harold", "Henry", "Ian", "Ivan",
  "Jake", "James", "Jason", "Jay", "Jaypee", "Jeffrey", "Jerwin", "Jessie",
  "Joel", "Jonathan", "Jordan", "Julius", "Justin", "Kennedy", "Kent",
  "Lester", "Leo", "Leonardo", "Louie", "Luis", "Marc", "Marco",
  "Marvin", "Michael", "Miguel", "Nathan", "Noel", "Oliver", "Oscar",
  "Patrick", "Philip", "Ralph", "Randy", "Raphael", "Richard", "Roberto",
  "Romulo", "Samuel", "Sherwin", "Stephen", "Tomas", "Vincent", "Victor",
  "Warren", "William", "Abigail", "Aileen", "Aimee", "Alexandra", "Alexa", "Alice", "Alicia",
  "Amanda", "Angela", "Angelie", "April", "Ara", "Arianne", "Ashley",
  "Bea", "Beatriz", "Belinda", "Bianca", "Camille", "Carla", "Catherine",
  "Charlene", "Cherry", "Christine", "Clarissa", "Cristina", "Daisy",
  "Danica", "Darlene", "Diana", "Donna", "Elaine", "Elena", "Elisa",
  "Elizabeth", "Ella", "Erika", "Eunice", "Evangeline", "Flor", "Glenda",
  "Hannah", "Hazel", "Irene", "Janice", "Jean", "Jenny", "Jessica",
  "Joan", "Joanna", "Joyce", "Judith", "Julia", "Karen", "Kate",
  "Katrina", "Kristel", "Liza", "Lorraine", "Lovely", "Lucille",
  "Luzviminda", "Mae", "Maribel", "Maricel", "Maricris", "Marilou",
  "Marilyn", "Marissa", "May", "Melissa", "Michelle", "Monica",
  "Myra", "Nadine", "Nina", "Patricia", "Pauline", "Princess",
  "Regina", "Rica", "Rosemarie", "Ruby", "Samantha", "Sarah",
  "Shiela", "Sofia", "Sonia", "Theresa", "Trisha", "Vanessa",
  "Veronica", "Victoria", "Yvonne"
];

// Optional "second first name" pool — reflects the common Filipino
// pattern of a compound given name (e.g. "Mary Grace", "Mark Anthony"),
// NOT a middle initial (real slips don't use those).
const SECOND_NAMES = [
  "Grace", "Joy", "Faith", "Rose", "Ann", "Anne", "Anthony", "Angel",
  "Marie", "Louise", "Claire", "Divine", "Justine", "Bernard", "Michael",
  "Gabriel", "Nicole", "Denise", "Kaye", "Mae", "Lynn", "Jane", "Paul",
  "Ray", "Lee", "Mae", "May", "Jean", "Jane", "Joyce", "Hope", "Love", "Pearl",
  "Princess", "Rosemarie", "Rose Ann", "Rose Marie", "Kristine",
  "Christine", "Michelle", "Patricia", "Marie Grace", "Marie Joy",
  "Mae Ann", "Mae Rose", "Jeanette", "Lyn", "Lynne", "Mae Lynn",
  "Mae Joy", "Mae Grace", "Mae Angel", "Angelica", "Lou", "Lou Ann",
  "Louise", "Nicole", "Elaine", "Camille", "Therese", "Kate", "Katrina",
  "Alexis", "John", "John Mark", "John Michael", "John Paul",
  "John Lloyd", "Mark Anthony", "Mark Joseph", "Mark John",
  "Paul John", "Paul Michael", "Carl", "Carl John", "Carl Anthony",
  "James", "James Patrick", "Joshua", "Jerome", "Jericho",
  "Kenneth", "Kevin", "Bryan", "Brian", "Christian", "Vincent",
  "Francis", "Miguel", "Nathaniel", "Dominic", "Ryan", "Sean"
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
  "Espiritu", "Formaran", "Gatchalian", "Hizon", "Isip", "Jaramillo", "Aquino", "Alcantara", "Alvarez", "Andrada", "Aquino", "Atienza",
  "Beltran", "Bernardo", "Borja", "Caballero", "Cabral", "Calderon",
  "Camacho", "Campos", "Canlas", "Capili", "Carreon", "Castro",
  "Chua", "Co", "Concepcion", "Contreras", "David", "De Castro",
  "De Guzman", "De Leon", "De Jesus", "De Vera", "De Mesa",
  "Delos Reyes", "Diaz", "Dumlao", "Evangelista", "Estrella",
  "Fabian", "Francisco", "Galang", "Geronimo", "Go", "Gutierrez",
  "Hipolito", "Javier", "Laurel", "Legaspi", "Lim", "Luna",
  "Macapagal", "Macaraeg", "Magsaysay", "Malonzo", "Mallari",
  "Mangubat", "Marquez", "Martin", "Martinez", "Matias", "Mercado",
  "Miranda", "Morales", "Moreno", "Natividad", "Ortega", "Padilla",
  "Pascual", "Pineda", "Ponce", "Recto", "Robles", "Rodriguez",
  "Roxas", "Samson", "San Diego", "Sandoval", "Santiago", "Soriano",
  "Suarez", "Tiu", "Trinidad", "Tuazon", "Valencia", "Vasquez",
  "Ventura", "Vergara", "Villafuerte", "Villamor", "Yap", "Yu", "Mangubat", "Bermudo", "Antipolo"
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
