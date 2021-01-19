// function to generate markdown for README
const generateMarkdown = (answers) => {
  // deconstructed object to DRY code
  const { title, description, installation, usage, license, credits, tests, github, email } = answers
  const badgeLicence = license.replace(/-/g, '--');
  // markdown format
  return `# ${title}

<br>

![License Badge](https://img.shields.io/badge/License-${badgeLicence}-blue)

<br>

## Description

${description}

---

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Credits](#credits)

[Tests](#tests)

[Questions](#questions)

---

## Installation

${installation}

---

## Usage

${usage}

---

## License

This application is covered under the ${license} License.

---

## Credits

${credits}

---

## Tests

${tests}

---

## Questions

For any further questions you can contact me through GitHub or email.

*Github: https://github.com/${github}

*Email: ${email}
`;
}

module.exports = generateMarkdown;
