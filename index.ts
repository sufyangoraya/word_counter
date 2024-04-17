
import inquirer from "inquirer";

// declare a const'answers' and assing it to the result of inquirer.prompt function

const answers:{
    sentence:string
} =await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to coount the words"
    }
])

const words =answers.sentence.trim().split(" ")

// print  the array of words  to the console

console.log(words);

//print the word count of the sentence to the console
console.log(`your sentence word count is ${words.length}`);



