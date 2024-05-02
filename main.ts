#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourful welcome message
console.log(chalk.bold.cyanBright("\n \t\t Amashta Rehmani - Student Management Program "));
console.log("=" .repeat(60));

const randomNumber: number = Math.floor(10000 + Math.random() * 90000)

let myBalance: number = 15000
let answer = await inquirer.prompt(
    [
        {
            name: "students",
            type: "input",
            message: "Enter student name:",
            validate: function (value) {
                if (value.trim() !== "") {
                    return true;
                }
            }
        },
        {
            name: "courses",
            type: "list",
            message: "select the course to enrolled",
            choices: ["MS.Office", "HTML", "Javascript", "Typescript", "Python"]
        }
    ]
);

const tutionFee: {[key: string]: number} = {
    "MS.Office": 3000,
    "HTML": 5000,
    "Javascript": 8000,
    "Typescript": 12000,
    "Python": 15000
};

console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank Transfer", "Jazzcash", "Easypaisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function(value) {
            if(value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value."
    },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)

if (tutionFees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);

    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ])
    if (ans.select === "View Status") {
        console.log("\n****Status****\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid ${paymentAmount}`)};
        console.log(`Balance: ${myBalance += paymentAmount}`);

    } else {
        console.log("\nExiting Student Management System\n");
    }
 {
    console.log("Invalid amount due to course\n");

}
