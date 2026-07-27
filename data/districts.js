// PLACEHOLDER DATA — replace this with your real list of Districts and
// their Local Congregations. Keep the same shape: each entry has a
// "district" name and a "locals" array of Local Congregation names that
// actually belong to that district. This matters because the app should
// never pair a District with a Local that isn't really under it.
//
// Example of the shape to follow when you swap in real data:
// { district: "District of <Name>", locals: ["Local of <Name>", "Local of <Name>"] }

const DISTRICTS = [
  {
    district: "District of Urdaneta",
    locals: [
      "Local of Urdaneta I",
      "Local of Urdaneta II",
      "Local of Nancamaliran"
    ]
  },
  {
    district: "District of Pangasinan",
    locals: [
      "Local of Dagupan",
      "Local of Binmaley",
      "Local of Calasiao",
      "Local of Mangaldan"
    ]
  },
  {
    district: "District of La Union",
    locals: [
      "Local of San Fernando",
      "Local of Bauang",
      "Local of Agoo"
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { DISTRICTS };
  Object.assign(global, module.exports);
}
