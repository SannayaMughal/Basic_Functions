"use strict";
function Numpercentage(obt, total) {

    var Numpercentage = obt / total * 100;
    console.log("percentage is ", Numpercentage);
    return;
}
// Numpercentage(9, 10);


function calculateDiscount(price) {
    if (price > 100) {
      return price * 0.1;
    } else {
      return price * 0.05;
    }
  }

//   const discount = calculateDiscount(150);
//   console.log(`Product price: 150 & Discount: ${discount}`);

function getAgeCategory(age) 
{
    if (age >= 0 && age <= 12) {
      return "Child";
    } else if (age >= 13 && age <= 19) {
      return "Teenager";
    } else {
      return "Adult";
    }
  }

//   const category = getAgeCategory(15);
//   console.log(`Your age category is: ${category}`);

//Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function suggestClothing(temperature) {
    if (temperature < 10) {
        return "It's very cold! Wear a warm jacket, hat, gloves, and scarf.";
    } else if (temperature < 15) {
        return "It's cold! Wear a sweater or jacket and long pants.";
    } else if (temperature < 20) {
        return "It's cool! Wear a light jacket or long-sleeved shirt.";
    } else if (temperature < 25) {
        return "It's pleasant! Wear comfortable clothes like a t-shirt and jeans.";
    } else if (temperature < 30) {
        return "It's warm! Wear shorts or a light dress.";
    } else {
        return "It's very hot! Wear light, breathable clothing and stay hydrated.";
    }
}

// Example usage
const temperature = 18;
// const clothingSuggestion = suggestClothing(temperature);
// console.log(`The temperature is ${temperature}°C. You should wear ${clothingSuggestion}.`);


function checkDivisibility(number)
 {
    if (number % 3 === 0 && number % 5 === 0) {
        return `${number} is divisible by both 3 and 5.`;
    } else if (number % 3 === 0) {
        return `${number} is divisible by 3.`;
    } else if (number % 5 === 0) {
        return `${number} is divisible by 5.`;
    } else {
        return `${number} is not divisible by 3 or 5.`;
    }
}

// Example usage
// const number = 15;
// const result = checkDivisibility(number);
// console.log(result);

function isLeapYear(year)
 {
    if (year % 4 === 0) {
      // Check for divisibility by 100
      if (year % 100 === 0) {
        // Check for divisibility by 400 to avoid false positives
        return year % 400 === 0;
      } else {
        return true; // Any year divisible by 4 but not by 100 is a leap year
      }
    } else {
      return false; // Any year not divisible by 4 is not a leap year
    }
  }
  // Example usage
//   const year = 2024;
//   const isLeap = isLeapYear(year);
//   if (isLeap) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   } 
  /////////
  
  function calculateTax(units)
   {
    const baseCostPerUnit = 10;
    var cost = units * baseCostPerUnit;

    if (units > 100 && units <= 200) {
        cost += cost * 0.1; // Add 10% tax if units > 100
    } else if (units > 200 && units <= 500) {
        cost += cost * 0.15; // Add 15% tax if units > 200
    } else if (units > 500) {
        cost += cost * 0.25; // Add 25% tax if units > 500
    }

    return cost;
}

// Example usage
// const units = 350;
// const totalCost = calculateTax(units);
// console.log(`For ${units} units, the total cost is: $${totalCost.toFixed(2)}`);

function checkPassFail(attendance, practicalMarks, theoryMarks)
 {
    if (attendance >= 75 && practicalMarks >= 50 && theoryMarks >= 45) {
      return "Pass";
    } else {
      return "Fail";
    }
  }
  // Example usage
  const student1Attendance = 80;
  const student1PracticalMarks = 65;
  const student1TheoryMarks = 50;
  const student2Attendance = 60;
  const student2PracticalMarks = 40;
  const student2TheoryMarks = 70;
  console.log(`Student 1: ${checkPassFail(student1Attendance, student1PracticalMarks, student1TheoryMarks)}`);
  console.log(`Student 2: ${checkPassFail(student2Attendance, student2PracticalMarks, student2TheoryMarks)}`);