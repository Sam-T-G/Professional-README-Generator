// function to create README based off of user inputs within programmed questions
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

[![License](${renderLicenseBadge(data.projectLicense)})](${renderLicenseLink(
    data.projectLicense
  )})

## Description

${data.projectDescription}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.projectInstallation}

## Usage

${data.projectUsage}

## License

${renderLicenseSection(data.projectLicense)}

## Contribution

${data.projectContribution}

## Tests

${data.projectTesting}

## Questions

Access my GitHub profile at [https://github.com/${
    data.gitUsername
  }](https://github.com/${data.gitUsername}) for other projects.

If you have additional questions or comments, please feel free to contact me at [${
    data.userEmail
  }](mailto:${data.userEmail}).

`;
}

// function to render license badge if license is passed
function renderLicenseBadge(license) {
  switch (license) {
    case "Apace License 2.0":
      return "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "Mozilla Public License 2.0":
      return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
    default:
      return "";
  }
}

// returns link to documentation about the chosen license
function renderLicenseLink(license) {
  switch (license) {
    case "Apace License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    default:
      return "";
  }
}

// create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "" || license !== undefined || license !== null) {
    return `
This project is covered under the ${license}.
For more information, please refer to [this link](${renderLicenseLink(
      license
    )}).
`;
  } else {
    return "";
  }
}

// export generateMarkdown to use in other JavaScript files
module.exports = generateMarkdown;
