const inquirer = require("inquirer");
const fs = require("fs");
const emailValidator = require("email-validator");
const markdown = require("./utils/generateMarkdown.js");

// application questions
const questions = [
  {
    message: "What is your project Title?",
    type: "input",
    name: "projectTitle",
  },
  {
    message: "Describe your project",
    type: "input",
    name: "projectDescription",
  },
  {
    message: "Enter installation instructions?",
    type: "input",
    name: "projectInstallation",
  },
  {
    message: "Usage information",
    type: "input",
    name: "projectUsage",
  },
  {
    message: "Contribution guidelines",
    type: "input",
    name: "projectContribution",
  },
  {
    message: "How can I test this program?",
    type: "input",
    name: "projectTesting",
  },
  {
    message: "What license applies to your project?",
    type: "list",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "Mozilla Public License 2.0",
    ],
    name: "projectLicense",
  },
  {
    message: "What is your GitHub username?",
    type: "input",
    name: "gitUsername",
  },
  {
    message: "What is your email?",
    type: "input",
    name: "userEmail",
  },
];

// function to create README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Successfully created file!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    const fileData = markdown(response);
    writeToFile("README.md", fileData);
  });
}

init();
