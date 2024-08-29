// Task 1: Variables and Data Types

let customerName = "Cade Cunningham";
const customerID = 2;
var isActive = true;

console.log(customerName, typeof(customerName));
console.log(customerID, typeof(customerID));
console.log(isActive, typeof(isActive));



// Task 2: Compound Data Types

let products = ["Basketball", "Sneakers", "Jerseys"];
const productDetails = {
    name: "Wilson",
    price: 59.00,
    inStock: true,
}
console.log(products, productDetails);



// Task 3: Assignment Operators

let accountBalance = 1765.00;
console.log("Initial Account Balance", accountBalance);

accountBalance += 235;
console.log("Updated Account Balance", accountBalance);

accountBalance -= 500;
console.log("Updated Account Balance", accountBalance);

accountBalance *= 3;
console.log("Updated Account Balance", accountBalance);

accountBalance /= 45;
console.log("Updated Account Balance", accountBalance);

accountBalance %= 24;
console.log("Updated Account Balance", accountBalance);



// Task 4: Comparison Operators

let employeeScore1 = 91;
let employeeScore2 = 61;

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);



// Task 5: Logical Operators

var hasKeyCard = false;
var hasPermission = true;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasPermission);