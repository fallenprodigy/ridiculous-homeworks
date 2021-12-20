const products = [];

// N1
products.push("Egg", "Potato", "Cucumber", "Pizza", "Fish", "Apple", "Banana");

function N1(product) {
  products.push(product);
}
// N1("SUSHI");

// N2
function N2(products) {
  console.log(products.pop(products));
}
// N2(products);

// N3
function N3(products) {
  console.log(products);
}
// N3(products);

//N 4
function N4(products) {
  if (products.length > 5) {
    console.log(products.slice(0, 4));
  } else {
    console.log("THERE ARE LESS THAN 5 ELEMENTS");
  }
}
// N4(products);

// .................... DAVALEBA 6

let lists = [
  {
    id: 1,
    name: "giorgi",
    company: [
      {
        id: 1,
        address: "kutaisi",
      },
      {
        id: 2,
        address: "wyaltubo",
      },
    ],
  },
  {
    id: 2,
    name: "giorgi",
    company: [
      {
        id: 1,
        address: "batumi",
      },
      {
        id: 2,
        address: "ureki",
      },
    ],
  },
  {
    id: 3,
    name: "giorgi",
    company: [
      {
        id: 1,
        address: "tbilisi",
      },
      {
        id: 2,
        address: "zugdidi",
      },
    ],
  },
];

console.log(lists[1].company[1].address);
