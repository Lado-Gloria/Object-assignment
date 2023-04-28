// Given an array of objects, each object
//  representing a person with a name and 
// age property, write a function that returns
//  a new array containing the names of all 
// people who are 18 years old or older.
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];

  function getNamesOlder(people) {
    const adults = people.filter(person => person.age >= 18);
    return adults.map(adult => adult.name);
  }
  
  const adultNames = getNamesOlder(people);
  console.log(adultNames);
  


//   Write a function that takes an array of objects, 
// where each object represents a product with a name,
//  price, and category property. The function should 
// return an object that groups the products by their 
// categories, with the category names as keys and the 
// arrays of products as values.

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
   function Allitems(products) {
    const items = {};
    products.forEach(function(product) {
      if (items[product.category]) {
        items[product.category].push(product);
      } else {
        items[product.category] = [product];
      }
    });
    return items;
  }
 console.log(Allitems(products));


//  Given an array of objects, where each object
//  represents a student with a name and an array 
// of scores, write a function that returns a new
//  array containing the names of all students whose 
// average score is greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];

let bestStudents = (students) => {
    let bestStudent = [];
    students.forEach(student => {
      let { name, scores } = student;
      let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
      if (average >= 85) {
        bestStudent.push(name);
      }
    });
    return bestStudent;
  };
  console.log(bestStudents(students))