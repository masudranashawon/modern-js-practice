"use strict";

/* ============================================
          DATA DISTRUCTURING SECTION          !
============================================ */
//Its A Big Restaurant object we work with this.
const openingHours = {
  sat: {
    open: 9,
    close: 21,
  },
  fri: {
    open: 9,
    close: 23,
  },
  wed: {
    open: 9,
    close: 22,
  },
};

const restaurant = {
  name: "Masud Restaurant Hub",
  location: "Keraniganj, Dhaka, Bangladesh.",
  categories: ["Itilian", "Chinese", "Thai", "Vegetarian", "Organic", "Local"],
  starterMenu: [
    "Chicken Cheese Burger",
    "Beef Burger",
    "Garlic Bread",
    "Italian Spicy Pasta",
    "Bagdadi Shahi Biriyani",
    "Mexican Chilli Chicken",
    "Mayonnaise",
  ],
  mainMenu: [
    "Burger",
    "Pizza",
    "Kacchi",
    "Momos",
    "Pasta",
    "Fajita",
    "French Fries",
  ],
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderFood: function ({
    starterIndex = 0,
    mainIndex = 1,
    address = "Unknown",
    time = "10PM",
  }) {
    console.log(
      `${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderBurger: function (ing1, ing2, ing3) {
    console.log(
      `Here is yours delicious burger with: ${ing1}, ${ing2} & ${ing3}.`
    );
  },
};
/////////////////////////////////////////////////////////
// Distruturing of Arrays.
/////////////////////////////////////////////////////////
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const arr2 = [4, 5, 6];
const [a, b, c] = arr2;
console.log(a, b, c);

let [main, , , , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variable
let firstV = 10;
let secondV = 20;
console.log(firstV, secondV);
[firstV, secondV] = [secondV, firstV];
console.log(firstV, secondV);
//Lets switch our array values
[main, secondary] = [secondary, main];
console.log(main, secondary);
//Our array main & secondary manu is switching.

//We Order 2 foods with oder func
const [firstOder, secondOrder] = restaurant.order(3, 2);
console.log(firstOder, secondOrder);

//NESTED DISTRUTURING
const nestedArr = [1, 2, 3, [4, 5, 6]];
const [d, e, f, [g, h, i]] = nestedArr;
console.log(d, e, f, g, h, i);

//Default Values
const arrDefault = [10, 30, 50];
const [j = 0, k = 0, l = 0, m = 0, o = 0] = arrDefault;
console.log(j, k, l, m, o);

//Rest pattern & Perameters
//Spread work after = sign
const arr3 = [10, 20, ...[30, 40]];
console.log(arr3);

//Rest work befor = sign
const [r, s, ...t] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(r, s, t);

// Other Demo
const allfriends = [
  "Apon",
  "Mitu",
  "Antar",
  "Jahid",
  "Riaz",
  "Mala",
  "Smrity",
  "Rajesh",
  "Suman",
  "Rocky",
  "Partha",
  "Kajal",
  "Rakesh",
  "Sakib",
];
const [f1, , , f2, f3, f4, f5, ...fbFriends] = allfriends;
console.log(f1, f2, f3, f4, f5, fbFriends);

//Join Our Restaurant all Foods take two foods separate and other foods in one variable.
const [burger, , kacchi, ...othersFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(burger, kacchi, othersFoods);
/////////////////////////////////////////////////////////
// Distruturing of Objects.
/////////////////////////////////////////////////////////
const { categories, mainMenu, starterMenu } = restaurant;
console.log(categories, mainMenu, starterMenu);
//NOTE:: Object property name and distructuring variable name must be same.

//Let's change object varieble name in destruturing name .

const {
  name: restaurantName,
  location: restaurantLocation,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, restaurantLocation, hours);

// Lest Try other demo
const { sat: saturday, wed: wednesday, fri: friday } = restaurant.openingHours;
console.log(saturday, wednesday, friday);

//DEFAULT VALUES FOR OBJECT
const { mainM = [], starterM = [] } = restaurant;
console.log(mainM, starterM);

//MUTATING VARIABLES
let p = 100;
let q = 300;
const obj = { p: 35, q: 45 };
({ p, q } = obj);
console.log(p, q);

// NESTED OBJECT
const apurba = {
  friends: {
    firstF: "Masud",
    secondF: "Shahin",
  },
};
const {
  friends: { firstF, secondF },
} = apurba;

console.log(firstF, secondF);
//Lets order some food from our restaurant object.
restaurant.orderFood({
  starterIndex: 3,
  mainIndex: 1,
  address: "Keraniganj, Dhaka",
  time: "7PM",
});

// IF someone mistake and dont give all agrument as requirment by object then what we should do? we can handle it by default object peramiter so we declare it on object.

//Lets order food with some mistake
restaurant.orderFood({
  starterIndex: 4,
  address: "Shantiganar",
});
//we give only two index but we not get any undefine error cz we handle it with default perametar😃.

//OBJECT Rest Patterns
const { fri: fridays, ...otherDays } = restaurant.openingHours;
console.log(fridays, otherDays);

// 2. function
// Rest parameter for function's parameter slot
// NOTE: if we add ... in a perameter. then pereameter need arrey for work
let sum = 0;
const add = function (...numberArr) {
  for (let i = 0; i < numberArr.length; i++) {
    sum += numberArr[i];
  }
  console.log(sum);
};

add(1, 2, 3, 4, 5);
add(10, 30, 450, 460, 535, 3);
//If we want to pass an arrey in rest perameter we should use spread oparator in array like this:-
const numberarr2 = [23, 5, 56, 3, 45, 34, 76, 46];
add(...numberarr2);
//we use spraed oparator for array.

/*
============================================
          DATA DISTRUCTURING SECTION END      !
============================================ */

/* ============================================
      ES6,ES Next,2020,2021,2022 Practice     !
============================================ */

//ARROW FUNCTION
const userName = (fName, sName) => console.log(`Hello ${fName} ${sName}👋`);
userName("Masud", "Rana");

//DEFAULT PERAMETERS
const bookedRooms = [];
const createRoomBooking = function (
  roomNum,
  guistNum = 1,
  roomPrice = 500 * guistNum
) {
  const roomBooking = {
    roomNum,
    guistNum,
    roomPrice,
  };
  bookedRooms.push(roomBooking);
  return console.log(
    `Congratulation ${roomNum} is booked sucessfull for ${guistNum} person & room cost is ${roomPrice}`
  );
};
createRoomBooking("M-503");
createRoomBooking("M-504", 3);
createRoomBooking("M-504", 5, 4500);
console.log(bookedRooms);

//ARRAY METHODS START

//SLICE METHODS
const allStudents = [
  "Sagor",
  "Apon",
  "Riaz",
  "Hriday",
  "Bristy",
  "Kaniz",
  "Mitu",
  "Dola",
];
//SLICE FROM GRILS
const onlyGirlStudents = allStudents.slice(4);
//NOTE: Real array does not mutate
console.log(onlyGirlStudents);
//SLICE LAST GIRL
const lastGirlStudent = onlyGirlStudents.slice(-1);
console.log(lastGirlStudent);

//SPLICE METHODS
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
];
//SPLICE FROM D to J
const dTOj = letters.splice(3, 7);
//NOTE:: Real array does muted...
console.log(dTOj);
const getLastLetter = letters.splice(-1, 1);
console.log(getLastLetter);

//REVERSE METHOD
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversNumbers = numbers.reverse();
console.log(reversNumbers);
//NOTE:: Real does mutate...

//CONCATE METHOD
const girlsSection = [
  "Tumpa",
  "Nurjahan",
  "Ratna",
  "Sapna",
  "Aysha",
  "Sultana",
  "Asma",
];
const boysSection = [
  "Nayem",
  "Shohag",
  "Abdullah",
  "Rakesh",
  "Najmul",
  "Mamun",
];
const allStudentsInBatch = boysSection.concat(girlsSection);
console.log(allStudentsInBatch);

// JOIN METHOD
const breakSentence = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
const joinedSentence = breakSentence.join(" ");
console.log(joinedSentence);

//AT METHOD
const years = [1980, 1998, 1945, 1948, 1996, 1998, 2012, 2021];
const lastYear = years.at(-1);
console.log(`The Last Year is: ${lastYear}`);

//forEach (does not produce new array)
const markSheet = [80, 88, 95, 92, 90, 84, 85, 87, 97, 90, 81, 82, 79, 77];
let totalMark = 0;
markSheet.forEach(function (el, i, _) {
  console.log(`${i + 1}: ${el}`);
  totalMark += el;
});
console.log("Total Result: " + totalMark);
// NOTE:: forEach does not support continue and break statements

//MAP

//Maps Create
const newRestu = new Map();
newRestu.set("name", "Al Razzak");
newRestu.set("owner", "Abdul Al Razzak");
newRestu.set(1, "Dhaka");
newRestu.set(2, "Mirpur");
console.log(newRestu.get("name"));
console.log(newRestu);
newRestu
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 10)
  .set("close", 22)
  .set(true, "We are open")
  .set(false, "We are closed");
console.log(newRestu.get(true));
console.log(newRestu.get(1));

const time = 14;
console.log(
  newRestu.get(time > newRestu.get("open") && time < newRestu.get("close"))
);
console.log(newRestu.has("capital"));
newRestu.delete(2);
// newRestu.clear();
const arrN = [1, 2];
newRestu.set(arrN, "Array");
console.log(newRestu.get(arrN));
console.log(newRestu);

const langs = new Map([
  [1, "C"],
  [2, "C++"],
  [3, "Java"],
  [4, "JavaScript"],
  [5, "Python"],
  [6, "C#"],
]);
console.log(langs);

for (const [key, value] of langs) {
  console.log(`${key}--> ${value}`);
}

// object to map
const hoursN = new Map(Object.entries(openingHours));
console.log(hoursN);

// map to array
console.log(...langs);
console.log([...langs.keys()]);
console.log([...langs.values()]);

const friendsMoney = [2000, 5000, 6900, 3040, 8430, 1000, 2500];
const contributeForBirthDay = friendsMoney.map((taka) => {
  return taka - 500;
});
console.log("Friends Have Money: " + friendsMoney);
console.log(
  "After contribute 500tk Friends Remaining Money: " + contributeForBirthDay
);
//Map in an array & Uppercase first latter
const favColors = ["black", "crimson", "tomato", "white", "purple", "pink"];
const favColorsUpperCase = favColors.map(
  (color) => color.at(0).toUpperCase() + color.slice(1)
);
console.log(favColorsUpperCase);

//FILTER
const allTransection = [
  20000, 50000, 30000, -80000, 100000, 300000, -50000, -30000, 40000, -35000,
  95000,
];
let totalDepositBl = 0;
const depositsBalances = allTransection.filter((diposit, i, em) => {
  if (diposit > 0) {
    totalDepositBl += diposit;
    return diposit;
  }
});
console.log("All Deposits: " + depositsBalances);
console.log("Total Deposit: " + totalDepositBl);
//
let totalWithrawBl = 0;
const withdrawalBalance = allTransection.filter((withdraw) => {
  if (withdraw < 0) {
    totalWithrawBl += withdraw;
    return withdraw;
  }
});
console.log("All withraws: " + withdrawalBalance);
console.log("Total Withrawal Balence: " + totalWithrawBl);
console.log(
  `Total Deposit Balance ${totalDepositBl}$ & Total Widthrawal Balence ${totalWithrawBl}$ & Remaing Balance is: ${
    totalDepositBl - totalWithrawBl
  }$`
);
//NOTE: Filter rerun a new arrey

//SET METHOD
const superShopItems = new Set([
  "Fish",
  "Meat",
  "Fish",
  "Apple",
  "Egg",
  "Egg",
  "Egg",
  "vegetables",
  "Chips",
  "Ice Cream",
  "Ice Cream",
]);
console.log(superShopItems);
//Take all element from set with for of loop
for (const item of superShopItems) {
  console.log(item);
}
//Note: Set gives uniqe values

//STARTWITH
const allFriendsName = [
  "Mohammad",
  "Bristy",
  "Apon",
  "Masud",
  "Moushumi",
  "Maysha",
  "Mitu",
  "Rahman",
  "Riyaz",
  "Hriday",
  "Murad",
];
const startLetrWithM = allFriendsName.filter((fName) => fName.startsWith("M"));

console.log(startLetrWithM);

// Strings
function fixName(name) {
  const nameInLowercase = name.toLowerCase();
  const fixedName = nameInLowercase[0].toUpperCase() + nameInLowercase.slice(1);
  return fixedName;
}
console.log(fixName("MaSuD"));
console.log(fixName("rOcKY"));

//Email fix
const normalizeEmail = function (email) {
  const userEmail = email;
  const emailFixed = email.toLowerCase().trim();
  console.log("Submited Email: " + userEmail);
  return emailFixed;
};
console.log(
  "Normalize Email: " + normalizeEmail("   mAsUDranaShawon@GMail.Com\n")
);

//// Split and join
const textWithPlus = "See+You+Not+For+Mind+Have+A+Relux!".split("+");
const joinFrmsplitedText = textWithPlus.join(" ");
console.log(textWithPlus);
console.log(joinFrmsplitedText);
//NOTE:: Split return an array & join for join array.

//REPLACE
const shuePriceUSD = "$500";
const shuePriceBDT = shuePriceUSD.replace("$", "৳");
console.log(shuePriceUSD);
console.log(shuePriceBDT);

//REPLACE ALL
const girlFriendMessege =
  "I Hate You! I Hate You! I Hate You! I Hate You! I Hate You!";
const covertHerText = girlFriendMessege.replaceAll("Hate", "Love");
console.log(covertHerText);

// Repeat
const plane = "✈";
function planeInLine(planePeram) {
  console.log(
    `There are ${planePeram} planes in line: ${plane.repeat(planePeram)} `
  );
}
planeInLine(4);
planeInLine(5);
planeInLine(6);
planeInLine(5);
planeInLine(4);
//String methods close.

//MAP
const allCurrencies = new Map([
  ["BDT", "Bangladeshi Taka"],
  ["USD", "United State Doler"],
  ["EUR", "Euro"],
  ["RS", "Indian Rupice"],
]);
allCurrencies.forEach((value, key, map) => console.log(`${key}: ${value}`));

// Functions returning functions (currying functions)
function greetingUser(uName) {
  return function greet(uGreet) {
    console.log(`Hello ${uName}, ${uGreet}`);
  };
}
greetingUser("Masud")("Good Evening");

//LAMDA EXPRESION
const priceWithVat = (lPrice) => (lVat) =>
  console.log(
    `The Laptop price is :${lPrice} Taka and vat is ${lVat}%, Total Laptop price with vat: ${
      lPrice + (lPrice / 100) * lVat
    } Taka`
  );
priceWithVat(45590)(10);
priceWithVat(78500)(15);

//SPREAD OPARATOR
const fullBatchStudents = [...boysSection, ...girlsSection];
console.log(fullBatchStudents);

// Array copy with spread oparator
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Lets oder burger with spread oparator
const ingredients = ["Beaf", "Cheese", "Latus"];
restaurant.orderBurger(...ingredients);

//TERNARY
const ageCalculator = (birthYear) =>
  2022 - birthYear >= 18 ? "You are Adult ✅" : "You are not Adult 😥";
console.log(ageCalculator(1996));

//Lets copying object with spread oparator
const newRestaurant = { ...restaurant };
console.log(newRestaurant);
newRestaurant.name = "Masud Restaurant Gallery";
console.log(restaurant.name);
console.log(newRestaurant.name);
//We can change now our new restaurant value😎

//SHORT CIRCUTTING
//OR Oparetor ||
console.log(3 || "Masud");
console.log("" || "Apon");
console.log(false || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Maysha" || 23 || null);
console.log(false || true);
console.log(0 || "");

restaurant.guest = 0;
const restaurantGuest = restaurant.guest || 20;
console.log(restaurantGuest);
restaurant.founder = "Masud Rana Shawon";
const restFounder = restaurant.founder || "Apon";
console.log(restFounder);

//AND Oparetor &&
console.log(0 && "Masud");
console.log(7 && "Spiderman");
console.log("Apon" && "Rocky" && null && 0 && "Riaz");
console.log(false && true);
console.log("Bristy" && 12 && " " && 23 && true && undefined);

//Lets check if has order pizza func we go for order pizza..

// its block method
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushrooms", "Cheese", "Tomatoes");
}

//Its short circuiting method
restaurant.orderPizza &&
  restaurant.orderPizza("Mushrooms", "Onions", "Tomatoes");

//Lets order burger in short circuiting method if has burger order func
restaurant.orderBurger &&
  restaurant.orderBurger("Chicken", "Mayonnaise", "Latus");
//Hurray! We get burger in short circuiting method.

// NULLISH COALESCING OR NULL COALESCING OPRATOR
restaurant.guests = 0;
const restGuest = restaurant.guest ?? 20;
console.log(restGuest);
//NOTE:: Nullish values: null, undefined (not 0 and '')

// LOGCIAL ASSIGNMENT OPERATORS
const rest1 = {
  name: "Pizza Hut",
  guest: 10,
};

const rest2 = {
  name: "Foods Island",
  owner: "Masud Rana Shawon",
};

rest1.guest ||= 10;
rest1.guest ??= 0;
console.log(rest1.guest);

rest1.owner &&= "Mamun Khan";
rest2.owner &&= "Mamun Khan";
console.log(rest2.owner);
console.log(rest1.owner);

// Optional chaining
console.log(restaurant?.openingHours?.sat?.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.order?.(0, 1));
console.log(restaurant.orderPasta?.(1, 1));
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "off-day";
  console.log(`On ${day}, opens ${open}`);
}

//Sets
const fastFoods = new Set([
  "Pizza",
  "Burger",
  "Pizza",
  "Pasta",
  "Pizza",
  "Fazita",
  "Noodles",
]);
console.log(fastFoods.size);
console.log(fastFoods.has("Pasta"));
console.log(fastFoods.add("French Fries"));
console.log(fastFoods.delete("Fazita"));
console.log(fastFoods);
for (const food of fastFoods) {
  console.log(food);
}

// Looping objects----------
// Property names (key)
const properties = Object.keys(restaurant.openingHours);
console.log(properties);
for (const day of properties) {
  console.log(day);
}
// Property values
const values = Object.values(restaurant.openingHours);
console.log(values);
for (const day of values) {
  console.log(day.open);
  console.log(day.close);
}
// Property entries (key, value)
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

for (const [key, value] of entries) {
  console.log(
    `On ${key}, we are open at ${value.open} and close at ${value.close}`
  );
}

//Reduce Sum
const movements = [500, 200, -300, -150, 500, 200, -50];

const currentBalance = movements.reduce(function (accumulator, value) {
  return accumulator + value;
}, 0);
console.log(currentBalance);

//Reduce Multiply
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr4Multiply = arr4.reduce((accu, val) => accu * val, 1);
console.log(arr4Multiply);

// Reduse Maximum
const arr5 = [21, 55, 45, 87, 5, 99, 63, 21, 45];
const arr5Maximum = arr5.reduce(
  (acu, elm) => (acu > elm ? acu : elm),
  arr5.at(0)
);
console.log(arr5Maximum);

// Reduse Minimum
const arr5Minimum = arr5.reduce(
  (acu, val) => (acu < val ? acu : val),
  arr5.at(0)
);
console.log(arr5Minimum);

// Data transformation pipeline
const newMovements = [500, 200, -300, -150, 500, 200, -50, 600];
const totoalDeposit = newMovements
  .filter((diposit) => diposit > 0)
  .map((diposit) => diposit * 1.2)
  .reduce((acu, vl) => acu + vl, 0);

console.log(
  "Deposit Balance with (1.2%) interst rate: " + totoalDeposit + " Taka"
);

//Lets Robbe a bank and leader take half from evrey 10k upper balance
const moneyRobbed = [15000, 25000, 35000, 14000, 25000, 7500];

const totalRobbedMony = moneyRobbed
  .filter((money) => money > 10000)
  .map((money) => money / 2)
  .filter((money) => money > 10000)
  .reduce((accu, val) => accu + val, 0);
console.log(totalRobbedMony);

// Find Method

//Lets find our first withdrawal
const allTransectionNew = [5000, 2000, -3000, -1500, 50000, 2000, -5000];
const firstWithdrawal = allTransectionNew.find((firstwidt) => firstwidt < 0);
console.log(firstWithdrawal);

// Find a students from an array of object
const students = [
  { name: "Nibir", id: 19 },
  { name: "Sumaiya", id: 14 },
  { name: "Masud", id: 18 },
  { name: "Sadril", id: 16 },
  { name: "Tumpa", id: 12 },
  { name: "Shohan", id: 11 },
];
const id17 = students.find((student) => student.id === 18);
console.log(id17);
console.log(id17.name);

//Search name with S
const nameWithS = students.filter((student) => student.name.startsWith("S"));
console.log(nameWithS);

// Some and every
const arr6 = [17, 22, 35, 11, 10, 18, 15];
const anyNumberGreater40 = arr6.some((number) => number >= 40);
console.log(anyNumberGreater40);

const everyNumberGreater10 = arr6.every((number) => number >= 10);
console.log(everyNumberGreater10);

// flat and flatmap
const arr7 = [11, 22, [56, 45], 24, [55, [44, 88]], 74];
console.log(arr7.flat(2));

const accounts = [
  {
    owner: "Shohan",
    movements: [500, 200, -300, -150, 500, 200, -50],
  },
  {
    owner: "Nibir",
    movements: [1500, 2100, -300, -150, 500, 2200, -150],
  },
  {
    owner: "Rakib",
    movements: [5000, 1200, -3000, -1500, 500, 200, -500],
  },
];

const overalMovements = accounts.map((account) => account.movements).flat();
console.log(overalMovements);

const overalMovementsFlat = accounts.flatMap((account) => account.movements);
console.log(overalMovementsFlat);

// Sorting (rarely)
const bscStudents = ["Sarah", "Mim", "Rina", "Ayesha", "Tumpa"];
console.log(bscStudents.sort());

const alphabets = ["g", "a", "c", "e", "f", "b", "d"];
console.log(alphabets.sort());
// Sort mutate the original array
console.log(alphabets);
const arr8 = [18, 155, 31, 422, 333, 61, 29];

const sortedArr = arr8.sort((a, b) => (a > b ? 1 : -1)); //ascending
console.log(sortedArr);

const sortedArrNewAsecend = arr8.sort((a, b) => a - b); //Decending
console.log(sortedArrNewAsecend);

const sortedArrNewDecend = arr8.sort((a, b) => b - a); //Decending
console.log(sortedArrNewDecend);

/* ============================================
    ES6,ES Next,2020,2021,2022 Practice END   !
============================================ */
