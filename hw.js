let guests = [
  // 1st Guest
  {
    firstName: "Carmen",
    lastName: "Rios",
    species: "Human",
  },
  // 2nd Guest
  {
    firstName: "Ivy",
    lastName: "Rios",
    species: "Dog",
  },
  // 3rd Guest
  { firstName: "Sophia", lastName: "Garcia", species: "Human" },
  // 4th Guest
  {
    firstName: "Guadalupe",
    lastName: "Valdivia",
    species: "Human",
  },
  //5th Guest
  { firstName: "Midnight", lastName: " Valdivia", species: "Dog" },

  //6th Guest
  { firstName: "Yvonne", lastName: "Valdivia", species: "Human" },

  //7th Guest
  { firstName: "Greg", lastName: "Valdivia", species: "Human" },
  //8th guest
  { firstName: "Jeus", lastName: "Valdivia", species: "Human" },
  //9th Guest
  { firstName: "Lucy", lastName: "Berry", species: "Cat" },
  //10th Guest
  {
    firstName: "Iraida ",
    lastName: "Martin",
    species: "Human",
  },
];

let teaPartyTable = {};

for (let i = 0; i < guests.length; i++) {
  let guest = guests[i];

  smallDessertOptions = [
    "Blue Moon Ice Cream ",
    "Brownie",
    "Cake Pop",
    "M&M Cookie",
    "Vanilla Ice Cream",
    "Apple Pie",
    "Banana Bread",
    "Vanilla Bean Frappe",
    "Cheesecake",
  ];

  smallDessert =
    smallDessertOptions[Math.floor(smallDessertOptions.length * Math.random())];

  teaGuest = {};
  teaGuest.firstName = guest.firstName;
  teaGuest.lastName = guest.lastName;
  teaGuest.species = guest.species;
  teaGuest.teaCup = true;
  teaGuest.teaPlate = true;
  teaGuest.smallDessert = `${smallDessert}`;
  teaPartyTable[guest.firstName] = teaGuest;
}

for (let guest in teaPartyTable) {
  console.log(`First Name: ${teaPartyTable[guest].firstName}`);
  console.log(`Last Name: ${teaPartyTable[guest].lastName}`);
  console.log(`Species: ${teaPartyTable[guest].species}`);
  console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);
  console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);
  console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);
}
