// function to generate markdown for README
const generateMarkdown = (answers) => {
  const { title, description, installation, usage, license, credits, tests, github, email } = answers
  return `# ${title}
          <br>
          ![badge](https://img.shields.io/badge/license-${license}-blue)
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
          This application is covered by the ${license}
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
